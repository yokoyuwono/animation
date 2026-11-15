// ============================================================
//  ENGINE — memutar STORY (dari story.js) seperti film.
//  Koordinat di naskah memakai "piksel dunia": layar = 192 x 108.
//  Tanah ada di y = 90. Adegan boleh lebih lebar dari layar
//  (pakai `width`) lalu kamera digeser dengan aksi `camera`.
//
//  Ada 2 kamera:
//   - kamera dunia  : bisa zoom & geser (gambar pixel art)
//   - kamera UI     : diam (narasi, balon kata, judul)
// ============================================================

const W = 192, H = 108, S = 5, GROUND = 90;
const FONT = '"Press Start 2P", monospace';
const INK = 0x1a1c2c;

const SKIES = {
  day:    { bands: ['#5fcde4', '#74d4e8', '#8fdcec', '#a8e4f0', '#c4eef5'], hillFar: '#73c48f', hillNear: '#38b764', grass: '#38b764', dirt: '#8b5a2b', body: 'sun', bodyY: 18, clouds: true },
  sunset: { bands: ['#3b2a5c', '#5d3270', '#9a3f6e', '#d9576b', '#f39a5c', '#f8c86a'], hillFar: '#7a3b6e', hillNear: '#3b2a5c', grass: '#257179', dirt: '#5d3a1a', body: 'sun', bodyY: 58, clouds: true },
  night:  { bands: ['#0b0f2a', '#11163a', '#161d48', '#1d2552', '#29366f'], hillFar: '#1d2552', hillNear: '#141a3d', grass: '#1f4d4f', dirt: '#3a2614', body: 'moon', bodyY: 16, stars: true },
  dawn:   { bands: ['#29366f', '#3b5dc9', '#7a8fd9', '#d9a3c4', '#f8d3a0'], hillFar: '#5a7fa8', hillNear: '#2f6b5c', grass: '#38b764', dirt: '#8b5a2b', body: 'sun', bodyY: 66, clouds: true },
  space:  { bands: ['#05060f', '#070917', '#0a0d20', '#0d1129'], stars: true, noGround: true },
};

class Movie extends Phaser.Scene {
  constructor() { super('movie'); }

  create() {
    buildTextures(this);
    buildCityTextures(this);
    this.run = (this.run || 0) + 1;
    this.world = [];
    this.actors = {};
    this.bikes = [];
    this.smokers = [];
    this.spinners = [];
    this.labels = [];
    this.sceneW = W;
    this.trafficOn = true;

    const main = this.cameras.main;
    main.setBackgroundColor('#000000');
    const old = this.cameras.getCamera('ui');
    if (old) this.cameras.remove(old);
    this.uiCam = this.cameras.add(0, 0, W * S, H * S, false, 'ui');

    // Tirai hitam untuk transisi fade (hanya di kamera UI)
    this.curtain = this.add.rectangle(0, 0, W * S, H * S, 0x000000, 1).setOrigin(0).setDepth(1000);
    main.ignore(this.curtain);

    this.playStory(this.run);
  }

  // ---------- registrasi objek ke kamera ----------
  wobj(obj) { this.world.push(obj); this.uiCam.ignore(obj); return obj; }   // objek dunia
  uobj(obj) { this.world.push(obj); this.cameras.main.ignore(obj); return obj; } // objek UI

  // ---------- helper waktu ----------
  alive(run) { return run === this.run; }
  wait(ms) { return new Promise(res => this.time.delayedCall(ms, res)); }
  tween(cfg) { return new Promise(res => this.tweens.add({ ...cfg, onComplete: () => res() })); }
  fade(out, ms = 600) { return this.tween({ targets: this.curtain, alpha: out ? 1 : 0, duration: ms }); }

  toScreen(wx, wy) {
    const cam = this.cameras.main, v = cam.worldView;
    return { x: (wx - v.x) * cam.zoom, y: (wy - v.y) * cam.zoom };
  }

  // ---------- alur utama ----------
  async playStory(run) {
    const scenes = STORY.scenes;
    for (let i = 0; i < scenes.length; i++) {
      if (!this.alive(run)) return;
      const sc = scenes[i];
      this.game.events.emit('movie-scene', i + 1, scenes.length);
      if (i > 0) {
        // transisi keluar: zoom masuk sambil gelap
        if (sc.transition === 'zoom') this.cameras.main.zoomTo(this.cameras.main.zoom * 2.5, 700, 'Quad.easeIn', true);
        await this.fade(true, sc.transition === 'cut' ? 150 : 700);
      }
      this.buildScene(sc);
      const cam = this.cameras.main;
      if (sc.transition === 'zoom') {
        // transisi masuk: mulai dekat lalu zoom keluar
        const z = cam.zoom;
        cam.setZoom(z * 2.5);
        cam.zoomTo(z, 1200, 'Quad.easeOut', true);
      }
      this.fade(false, sc.transition === 'cut' ? 150 : 700);
      await this.wait(400);
      for (const step of sc.steps || []) {
        if (!this.alive(run)) return;
        await this.runStep(step, run);
      }
    }
    if (!this.alive(run)) return;
    await this.fade(true, 1200);
    this.game.events.emit('movie-end');
  }

  async runStep(st, run) {
    if (!this.alive(run)) return;
    if ('together' in st) return Promise.all(st.together.map(s => this.runStep(s, run)));
    if ('wait' in st) return this.wait(st.wait);
    if ('say' in st) return this.say(st, run);
    if ('caption' in st) return this.caption(st, run);
    if ('title' in st) return this.title(st);
    if ('camera' in st) return this.moveCamera(st);
    if ('label' in st) return this.label(st);
    if ('clearLabels' in st) return this.clearLabels();
    if ('haze' in st) return this.tween({ targets: this.hazeRect, alpha: st.haze, duration: st.dur ?? 2000 });
    if ('convert' in st) return this.convert(st);
    if ('traffic' in st) { this.trafficOn = st.traffic !== 'stop'; return this.wait(50); }
    if ('glow' in st) return this.glow(st);
    if ('move' in st) return this.move(st);
    if ('jump' in st) return this.jump(st);
    if ('emote' in st) return this.emote(st);
    if ('face' in st) { this.actor(st.face).spr.setFlipX(st.dir === 'left'); return this.wait(150); }
    if ('show' in st) { const a = this.actor(st.show); a.spr.setVisible(true).setAlpha(0); return this.tween({ targets: a.spr, alpha: 1, duration: st.dur || 400 }); }
    if ('hide' in st) { const a = this.actor(st.hide); await this.tween({ targets: a.spr, alpha: 0, duration: st.dur || 400 }); a.spr.setVisible(false).setAlpha(1); return; }
    if ('enter' in st) return this.enter(st);
    if ('exit' in st) return this.exit(st);
    if ('shake' in st) { this.cameras.main.shake(st.shake, 0.01); return this.wait(st.shake); }
    if ('birds' in st) { this.spawnBirds(st.birds); return this.wait(st.dur || 0); }
    console.warn('Langkah tidak dikenal:', st);
  }

  // ---------- membangun adegan ----------
  clearWorld() {
    this.tweens.killAll();
    this.world.forEach(o => o.destroy());
    this.world = [];
    this.actors = {};
    this.bikes = [];
    this.smokers = [];
    this.spinners = [];
    this.labels = [];
    this.trafficOn = true;
    ['bg', 'fg'].forEach(k => this.textures.exists(k) && this.textures.remove(k));
  }

  buildScene(sc) {
    this.clearWorld();
    const sky = SKIES[sc.sky || 'day'];
    const SW = this.sceneW = sc.width || W;
    this.captionTop = !!sc.captionTop;

    // Kamera dunia
    const cam = this.cameras.main;
    cam.setBounds(0, 0, SW * S, H * S);
    const c0 = sc.camera || {};
    cam.setZoom(c0.zoom || 1);
    cam.centerOn((c0.x ?? SW / 2) * S, (c0.y ?? H / 2) * S);

    // Langit
    const tex = this.textures.createCanvas('bg', SW, H);
    const ctx = tex.getContext();
    const skyH = sky.noGround ? H : GROUND;
    const bandH = Math.ceil(skyH / sky.bands.length);
    sky.bands.forEach((c, i) => { ctx.fillStyle = c; ctx.fillRect(0, i * bandH, SW, bandH); });
    tex.refresh();
    this.wobj(this.add.image(0, 0, 'bg').setOrigin(0).setScale(S).setDepth(0));

    if (sky.stars) {
      const n = Math.round(40 * SW / W * (sky.noGround ? 1.6 : 1));
      for (let i = 0; i < n; i++) {
        const st = this.wobj(this.add.rectangle(Phaser.Math.Between(0, SW) * S, Phaser.Math.Between(0, sky.noGround ? H : 60) * S, S, S, 0xffffff).setDepth(1));
        this.tweens.add({ targets: st, alpha: 0.2, yoyo: true, repeat: -1, duration: Phaser.Math.Between(600, 1800), delay: Phaser.Math.Between(0, 1500) });
      }
    }

    if (sky.body && !sc.noSun) {
      const body = this.wobj(this.add.image((sc.sunX ?? SW - 42) * S, sky.bodyY * S, sky.body).setScale(S).setDepth(1));
      if (sky.body === 'sun') this.tweens.add({ targets: body, scale: S * 1.06, yoyo: true, repeat: -1, duration: 1500 });
    }

    // Bukit + tanah / jalan
    if (!sky.noGround) {
      const ftex = this.textures.createCanvas('fg', SW, H);
      const f = ftex.getContext();
      const hills = (color, base, amp, f1, f2, seed) => {
        f.fillStyle = color;
        for (let x = 0; x < SW; x++) {
          const h = Math.round(base + Math.sin(x * f1 + seed) * amp + Math.sin(x * f2 + seed * 2) * amp * 0.5);
          f.fillRect(x, GROUND - h, 1, h);
        }
      };
      hills(sky.hillFar, 24, 6, 0.033, 0.08, 1);
      hills(sky.hillNear, 11, 4, 0.06, 0.15, 4);
      const road = sc.road; // true = seluruh lebar, atau [x1, x2]
      const [r1, r2] = road === true ? [0, SW] : (road || [0, 0]);
      f.fillStyle = sky.grass; f.fillRect(0, GROUND, SW, 3);
      f.fillStyle = sky.dirt; f.fillRect(0, GROUND + 3, SW, H - GROUND - 3);
      f.fillStyle = 'rgba(0,0,0,0.25)';
      for (let x = 0; x < SW; x += 7) f.fillRect(x + ((x / 7) % 3), GROUND + 6 + ((x * 13) % 11), 2, 1);
      f.fillStyle = sky.grass;
      for (let x = 0; x < SW; x += 5) f.fillRect(x, GROUND - 1, 1, 1);
      if (r2 > r1) {
        f.fillStyle = '#94b0c2'; f.fillRect(r1, GROUND, r2 - r1, 3);        // trotoar
        f.fillStyle = '#566c86'; f.fillRect(r1, GROUND + 3, r2 - r1, 1);
        f.fillStyle = '#333c57'; f.fillRect(r1, GROUND + 4, r2 - r1, H - GROUND - 4); // aspal
        f.fillStyle = '#f4f4f4';
        for (let x = r1; x < r2; x += 12) f.fillRect(x, GROUND + 11, 6, 1);   // marka
      }
      ftex.refresh();
      this.wobj(this.add.image(0, 0, 'fg').setOrigin(0).setScale(S).setDepth(2));
    }

    if (sky.clouds && !sc.noClouds) {
      const n = Math.ceil(SW / 50);
      for (let i = 0; i < n; i++) {
        const c = this.wobj(this.add.image((i * 50 + 12) * S, (8 + (i % 2) * 14) * S, 'cloud').setScale(S).setDepth(1.5).setAlpha(0.9));
        this.tweens.add({ targets: c, x: c.x + 30 * S, duration: 30000 + i * 5000, yoyo: true, repeat: -1 });
      }
    }

    (sc.props || []).forEach((p, i) => this.spawnProp(p, i));
    if (sc.wires) this.drawWires(sc.wires);
    (sc.actors || []).forEach(a => this.spawnActor(a));
    if (sc.birds) this.spawnBirds(sc.birds);
    if (sc.traffic) this.spawnTraffic(sc.traffic);

    if (sc.sky === 'night') this.wobj(this.add.rectangle(0, 0, SW * S, H * S, 0x0b0f2a, 0.25).setOrigin(0).setDepth(50));

    // Kabut polusi (diatur dengan aksi `haze`)
    this.hazeRect = this.wobj(this.add.rectangle(0, 0, SW * S, H * S, 0x8a7f6a, 1).setOrigin(0).setDepth(40).setAlpha(sc.haze || 0));
  }

  spawnProp(p, i) {
    const x = p.x * S, y = (p.y ?? GROUND) * S, sc = S * (p.scale || 1);
    if (p.sprite === 'turbine') {
      const pole = this.wobj(this.add.image(x, y, 'turbine').setOrigin(0.5, 1).setScale(sc).setDepth(5 + i * 0.01));
      const bl = this.wobj(this.add.image(x, y - (pole.displayHeight - 2 * sc), 'blades').setScale(sc).setDepth(5.5 + i * 0.01));
      this.tweens.add({ targets: bl, angle: 360, duration: p.speed || 2500, repeat: -1 });
      if (p.id) this.actors[p.id] = { spr: pole, sprite: 'turbine', name: p.id, prop: true };
      return pole;
    }
    const img = this.wobj(this.add.image(x, y, p.sprite).setOrigin(0.5, p.center ? 0.5 : 1).setScale(sc).setDepth((p.depth ?? 5) + i * 0.01));
    if (p.flip) img.setFlipX(true);
    if (p.alpha !== undefined) img.setAlpha(p.alpha);
    if (p.sway) this.tweens.add({ targets: img, angle: 4, yoyo: true, repeat: -1, duration: 900, ease: 'Sine.inOut' });
    if (p.float) this.tweens.add({ targets: img, y: img.y - 4 * S, yoyo: true, repeat: -1, duration: 1600, ease: 'Sine.inOut' });
    if (p.smoke) this.smokers.push({ obj: img, dx: p.smoke.dx || 0, dy: p.smoke.dy || 0, big: !!p.smoke.big, dark: !!p.smoke.dark, every: p.smoke.every || 220, t: 0, on: p.smoke.on !== false });
    if (p.id) this.actors[p.id] = { spr: img, sprite: p.sprite, name: p.id, prop: true, smoker: this.smokers[this.smokers.length - 1] };
    return img;
  }

  drawWires(ws) {
    const g = this.wobj(this.add.graphics().setDepth(4.5));
    g.lineStyle(S * 0.6, 0x1a1c2c, 0.9);
    for (let i = 0; i < ws.length - 1; i++) {
      const [x1, y1] = ws[i], [x2, y2] = ws[i + 1];
      const curve = new Phaser.Curves.QuadraticBezier(
        new Phaser.Math.Vector2(x1 * S, y1 * S),
        new Phaser.Math.Vector2((x1 + x2) / 2 * S, (Math.max(y1, y2) + 6) * S),
        new Phaser.Math.Vector2(x2 * S, y2 * S));
      curve.draw(g, 24);
    }
  }

  spawnTraffic(tr) {
    const kind = tr.kind || 'gas';
    const per = Math.ceil((tr.count || 8) / 2);
    const lanes = [{ y: GROUND + 10, dir: 1 }, { y: GROUND + 17, dir: -1 }];
    lanes.forEach((ln, li) => {
      for (let k = 0; k < per; k++) {
        const v = (k + li) % 3;
        const x = ((k + 0.5) / per) * (this.sceneW + 40) - 20 + Phaser.Math.Between(-8, 8);
        const b = this.wobj(this.add.image(x * S, ln.y * S, `motor_${kind}_${v}`).setOrigin(0.5, 1).setScale(S).setDepth(12 + li));
        b.setFlipX(ln.dir < 0);
        Object.assign(b, { kind, variant: v, dir: ln.dir, baseY: ln.y * S, vx: (tr.speed || 40) * (0.8 + Math.random() * 0.4) * ln.dir, puffT: Math.random() * 200 });
        this.bikes.push(b);
      }
    });
  }

  puff(x, y, { big = false, dark = false, dir = 1, depth = 11 } = {}) {
    const p = this.wobj(this.add.image(x, y, dark ? 'puffdark' : 'puff').setScale(S * (big ? 1.5 : 0.8)).setDepth(depth).setAlpha(0.85));
    this.tweens.add({
      targets: p,
      x: x - dir * Phaser.Math.Between(4, 9) * S,
      y: y - (big ? Phaser.Math.Between(18, 28) : Phaser.Math.Between(3, 7)) * S,
      scale: p.scale * (big ? 3 : 2.2),
      alpha: 0,
      duration: big ? 2600 : 1100,
      onComplete: () => p.destroy(),
    });
  }

  update(time, delta) {
    const dt = delta / 1000;
    for (const b of this.bikes) {
      if (!b.active) continue;
      if (this.trafficOn) {
        b.x += b.vx * dt * S;
        const SWpx = this.sceneW * S;
        if (b.dir > 0 && b.x > SWpx + 20 * S) b.x = -20 * S;
        if (b.dir < 0 && b.x < -20 * S) b.x = SWpx + 20 * S;
      }
      // motor bensin bergetar & berasap
      if (b.kind === 'gas') {
        b.y = b.baseY - ((Math.floor(time / 90 + b.variant) % 2) ? S * 0.5 : 0);
        b.puffT -= delta;
        if (b.puffT <= 0) {
          b.puffT = this.trafficOn ? 140 : 260;
          this.puff(b.x - b.dir * 9 * S, b.y - 5 * S, { dir: b.dir, depth: b.depth - 0.5 });
        }
      } else b.y = b.baseY;
    }
    for (const s of this.smokers) {
      if (!s.on || !s.obj.active) continue;
      s.t -= delta;
      if (s.t <= 0) {
        s.t = s.every;
        this.puff(s.obj.x + s.dx * S, s.obj.y + s.dy * S, { big: s.big, dark: s.dark, dir: -1, depth: s.obj.depth + 0.1 });
      }
    }
  }

  spawnActor(a) {
    const spr = this.wobj(
      this.add.sprite(a.x * S, (a.y ?? GROUND) * S, `${a.sprite}_0`)
        .setOrigin(0.5, 1).setScale(S).setDepth(10)
    );
    spr.setFlipX(a.face === 'left');
    if (a.hidden) spr.setVisible(false);
    this.actors[a.id] = { spr, sprite: a.sprite, name: a.name || a.id };
    return this.actors[a.id];
  }

  actor(id) {
    const a = this.actors[id];
    if (!a) throw new Error(`Aktor/prop "${id}" tidak ada di adegan ini`);
    return a;
  }

  spawnBirds(n) {
    for (let i = 0; i < n; i++) {
      const b = this.wobj(this.add.sprite(-20 * S - i * 18 * S, (14 + i * 6) * S, 'bird_0').setScale(S).setDepth(3));
      b.play('bird_fly');
      this.tweens.add({ targets: b, x: (this.sceneW + 30) * S, duration: 9000 + i * 600, delay: i * 300 });
      this.tweens.add({ targets: b, y: b.y - 4 * S, yoyo: true, repeat: -1, duration: 700, ease: 'Sine.inOut' });
    }
  }

  // ---------- kamera ----------
  async moveCamera(st) {
    const cam = this.cameras.main;
    const c = st.camera === 'reset' ? { x: this.sceneW / 2, y: H / 2, zoom: 1 } : st.camera;
    const dur = st.dur ?? 1500;
    const ease = st.ease || 'Sine.easeInOut';
    const x = (c.x ?? cam.midPoint.x / S) * S;
    const y = (c.y ?? cam.midPoint.y / S) * S;
    const zoom = c.zoom ?? cam.zoom;
    if (dur <= 0) { cam.setZoom(zoom); cam.centerOn(x, y); return; }
    cam.pan(x, y, dur, ease, true);
    cam.zoomTo(zoom, dur, ease, true);
    await this.wait(dur + 30);
  }

  // ---------- label penunjuk (ikut zoom dunia) ----------
  async label(st) {
    const z = this.cameras.main.zoom;
    const size = st.size || 12;
    const t = this.wobj(this.add.text(st.x * S, st.y * S, st.label, {
      fontFamily: FONT, fontSize: `${size}px`, color: st.color || '#ffffff',
      backgroundColor: st.bg || '#b13e53', padding: { x: 7, y: 6 }, resolution: Math.max(1, z),
    }).setOrigin(0.5).setDepth(95).setScale(0));
    this.labels.push(t);
    await this.tween({ targets: t, scale: 1 / z, duration: 300, ease: 'Back.out' });
    await this.wait(st.dur ?? 500);
  }

  async clearLabels() {
    if (!this.labels.length) return;
    const ls = this.labels; this.labels = [];
    await this.tween({ targets: ls, alpha: 0, duration: 250 });
    ls.forEach(l => l.destroy());
  }

  // ---------- ganti semua motor ----------
  async convert(st) {
    const kind = st.convert;
    const list = [...this.bikes].filter(b => b.active).sort((a, b) => a.x - b.x);
    for (const b of list) {
      b.setTintFill(0xffffff);
      const sp = this.wobj(this.add.image(b.x, b.y - 8 * S, 'spark').setScale(0).setDepth(30));
      this.tweens.add({ targets: sp, scale: S, alpha: { from: 1, to: 0 }, duration: 450, onComplete: () => sp.destroy() });
      this.time.delayedCall(140, () => {
        if (!b.active) return;
        b.clearTint();
        b.kind = kind;
        b.setTexture(`motor_${kind}_${b.variant}`);
      });
      await this.wait(st.stagger ?? 110);
    }
    // asap dari prop motor juga berhenti
    if (kind === 'ev') this.smokers.forEach(s => { if (s.obj.texture.key.startsWith('motor_gas')) s.on = false; });
    await this.wait(300);
  }

  // Sorotan berkedip pada prop / aktor (untuk menegaskan)
  async glow(st) {
    const a = this.actor(st.glow);
    for (let i = 0; i < (st.times || 2); i++) {
      a.spr.setTintFill(0xffffff);
      await this.wait(90);
      a.spr.clearTint();
      await this.wait(120);
    }
  }

  // ---------- aksi tokoh ----------
  async move(st) {
    const a = this.actor(st.move);
    const tx = st.to * S;
    if (Math.abs(tx - a.spr.x) < 1) return;
    a.spr.setVisible(true);
    a.spr.setFlipX(tx < a.spr.x);
    const speed = st.speed || 30;
    const dur = st.dur ?? (Math.abs(tx - a.spr.x) / S / speed) * 1000;
    if (!a.prop) a.spr.play(`${a.sprite}_walk`);
    await this.tween({ targets: a.spr, x: tx, duration: dur });
    if (!a.prop) { a.spr.stop(); a.spr.setTexture(`${a.sprite}_0`); }
  }

  async enter(st) {
    const a = this.actor(st.enter);
    a.spr.x = (st.from !== 'right' ? -15 : this.sceneW + 15) * S;
    a.spr.setVisible(true);
    await this.move({ move: st.enter, to: st.to, speed: st.speed, dur: st.dur });
  }

  async exit(st) {
    const a = this.actor(st.exit);
    await this.move({ move: st.exit, to: st.to === 'left' ? -20 : this.sceneW + 20, speed: st.speed });
    a.spr.setVisible(false);
  }

  async jump(st) {
    const a = this.actor(st.jump);
    for (let i = 0; i < (st.times || 1); i++) {
      await this.tween({ targets: a.spr, y: a.spr.y - (st.height || 10) * S, duration: 180, yoyo: true, ease: 'Quad.out' });
    }
  }

  async emote(st) {
    const a = this.actor(st.emote);
    const top = a.spr.y - a.spr.displayHeight - 3 * S;
    const icon = this.wobj(this.add.image(a.spr.x, top, `emo_${st.icon || 'exclaim'}`).setOrigin(0.5, 1).setScale(0).setDepth(90));
    await this.tween({ targets: icon, scale: S, duration: 250, ease: 'Back.out' });
    this.tweens.add({ targets: icon, y: top - 2 * S, yoyo: true, repeat: -1, duration: 300 });
    await this.wait(st.dur || 1100);
    await this.tween({ targets: icon, alpha: 0, duration: 200 });
    icon.destroy();
  }

  // ---------- teks (kamera UI) ----------
  async typewrite(txt, full, run, speed = 32) {
    for (let i = 1; i <= full.length; i++) {
      if (!this.alive(run)) return;
      txt.setText(full.slice(0, i));
      if (full[i - 1] !== ' ') await this.wait(speed);
    }
  }

  holdTime(text, st) { return st.dur ?? Math.max(1400, text.length * 45 + 900); }

  async say(st, run) {
    const a = this.actor(st.say);
    const style = { fontFamily: FONT, fontSize: '14px', color: '#1a1c2c', lineSpacing: 8, wordWrap: { width: 380 } };
    const txt = this.uobj(this.add.text(0, 0, '', style).setDepth(102));
    const wrapped = txt.getWrappedText(st.text).join('\n');
    txt.setWordWrapWidth(null).setText(wrapped);
    const pad = 12;
    const bw = txt.width + pad * 2, bh = txt.height + pad * 2;
    const head = this.toScreen(a.spr.x, a.spr.y - a.spr.displayHeight);
    const bx = Phaser.Math.Clamp(head.x - bw / 2, 8, W * S - bw - 8);
    const by = Math.max(30, head.y - bh - 22);
    txt.setPosition(bx + pad, by + pad).setText('');

    const g = this.uobj(this.add.graphics().setDepth(101));
    g.fillStyle(0xffffff).fillRect(bx, by, bw, bh);
    g.lineStyle(S, INK).strokeRect(bx, by, bw, bh);
    const tipX = Phaser.Math.Clamp(head.x, bx + 14, bx + bw - 14);
    g.fillStyle(0xffffff).fillTriangle(tipX - 8, by + bh - 2, tipX + 8, by + bh - 2, tipX, by + bh + 14);
    g.lineStyle(S, INK).lineBetween(tipX - 8, by + bh, tipX, by + bh + 14).lineBetween(tipX + 8, by + bh, tipX, by + bh + 14);
    const tag = this.uobj(this.add.text(bx + 6, by - 10, ` ${a.name} `, { fontFamily: FONT, fontSize: '10px', color: '#ffffff', backgroundColor: '#1a1c2c', padding: { y: 3 } }).setDepth(103));

    if (st.shout) this.cameras.main.shake(200, 0.006);
    await this.typewrite(txt, wrapped, run);
    await this.wait(this.holdTime(st.text, st));
    [g, txt, tag].forEach(p => p.destroy());
    await this.wait(150);
  }

  async caption(st, run) {
    const style = { fontFamily: FONT, fontSize: '14px', color: '#ffffff', lineSpacing: 8, wordWrap: { width: W * S - 80 }, align: 'center' };
    const txt = this.uobj(this.add.text(W * S / 2, 0, '', style).setOrigin(0.5, 0).setDepth(111));
    const wrapped = txt.getWrappedText(st.caption).join('\n');
    txt.setWordWrapWidth(null).setText(wrapped);
    const bh = txt.height + 28;
    const top = (st.top ?? this.captionTop) ? 14 : H * S - bh - 14;
    const box = this.uobj(this.add.rectangle(20, top, W * S - 40, bh, INK, 0.85).setOrigin(0).setDepth(110).setStrokeStyle(S, 0xf4f4f4));
    txt.setY(top + 14).setText('');
    await this.typewrite(txt, wrapped, run, 28);
    await this.wait(this.holdTime(st.caption, st));
    await this.tween({ targets: [box, txt], alpha: 0, duration: 250 });
    box.destroy(); txt.destroy();
  }

  async title(st) {
    const overlay = this.uobj(this.add.rectangle(0, 0, W * S, H * S, 0x000000, st.dark === false ? 0.5 : 1).setOrigin(0).setDepth(200).setAlpha(0));
    const t = this.uobj(this.add.text(W * S / 2, H * S / 2 - (st.sub ? 24 : 0), st.title, { fontFamily: FONT, fontSize: `${st.size || 32}px`, color: '#ffcd75', align: 'center', stroke: '#1a1c2c', strokeThickness: 8, lineSpacing: 14, wordWrap: { width: W * S - 80 } }).setOrigin(0.5).setDepth(201).setAlpha(0));
    const s = st.sub ? this.uobj(this.add.text(W * S / 2, t.y + t.height / 2 + 30, st.sub, { fontFamily: FONT, fontSize: '14px', color: '#f4f4f4', align: 'center', lineSpacing: 8, wordWrap: { width: W * S - 100 } }).setOrigin(0.5).setDepth(201).setAlpha(0)) : null;
    const items = [overlay, t, s].filter(Boolean);
    await this.tween({ targets: items, alpha: { from: 0, to: 1 }, duration: 600 });
    await this.wait(st.dur || 2200);
    if (st.keep) return;
    await this.tween({ targets: items, alpha: 0, duration: 600 });
    items.forEach(o => o.destroy());
  }
}

// ---------- konfigurasi Phaser ----------
function startMovie() {
  const game = new Phaser.Game({
    type: Phaser.AUTO,
    parent: 'stage',
    width: W * S,
    height: H * S,
    pixelArt: true,
    backgroundColor: '#000000',
    scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH },
    scene: [Movie],
    render: { preserveDrawingBuffer: true },
  });
  window.game = game;
  return game;
}
