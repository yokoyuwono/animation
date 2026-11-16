// ============================================================
//  ENGINE — memutar STORY seperti video.
//
//  Koordinat naskah = "piksel dunia". Tinggi dunia 108, tanah di y = 90.
//  Adegan biasa lebarnya 192. Adegan `split` lebarnya 384:
//    sisi KIRI  = x 0..192   (kamera A)
//    sisi KANAN = x 192..384 (kamera B)
//
//  Format:
//    'h' = 16:9 (960x540)  -> split kiri | kanan
//    'v' = 9:16 (540x960)  -> split atas / bawah
//  Zoom di naskah relatif: zoom 1 = tinggi dunia pas memenuhi layar.
//
//  Kamera:
//    A, B : kamera dunia (zoom, geser, selalu "bernapas" pelan)
//    UI   : diam — narasi, hook, kartu, label sisi
// ============================================================

const W = 192, H = 108, S = 5, GROUND = 90;
const FONT = '"Press Start 2P", monospace';
const INK = 0x1a1c2c;

const SKIES = {
  day:    { bands: ['#5fcde4', '#74d4e8', '#8fdcec', '#a8e4f0', '#c4eef5'], hillFar: '#73c48f', hillNear: '#38b764', grass: '#38b764', dirt: '#8b5a2b', body: 'sun', bodyY: 18, clouds: true },
  sunset: { bands: ['#3b2a5c', '#5d3270', '#9a3f6e', '#d9576b', '#f39a5c', '#f8c86a'], hillFar: '#7a3b6e', hillNear: '#3b2a5c', grass: '#257179', dirt: '#5d3a1a', body: 'sun', bodyY: 58, clouds: true },
  night:  { bands: ['#0b0f2a', '#11163a', '#161d48', '#1d2552', '#29366f'], hillFar: '#1d2552', hillNear: '#141a3d', grass: '#1f4d4f', dirt: '#3a2614', body: 'moon', bodyY: 16, stars: true },
  dawn:   { bands: ['#29366f', '#3b5dc9', '#7a8fd9', '#d9a3c4', '#f8d3a0'], hillFar: '#5a7fa8', hillNear: '#2f6b5c', grass: '#38b764', dirt: '#8b5a2b', body: 'sun', bodyY: 66, clouds: true },
  space:  { bands: ['#05060f', '#070917', '#0a0d20', '#0d1129'], stars: true, noGround: true, camBg: '#05060f' },
  ocean:  { bands: ['#2f6fbf', '#2c69b8', '#2a64b0', '#285fa8'], noGround: true, waves: true, camBg: '#2a64b0' },
  deep:   { bands: ['#14365e', '#102d50', '#0c2442', '#091c35'], grass: '#c2a36b', dirt: '#9c7f4e', noHills: true, bubbles: true, camBg: '#091c35' },
};

const MOVIE_OPTS = { format: 'h', chapter: null };

class Movie extends Phaser.Scene {
  constructor() { super('movie'); }

  create() {
    buildTextures(this);
    buildCityTextures(this);
    if (typeof buildWarTextures === 'function') buildWarTextures(this);
    this.run = (this.run || 0) + 1;
    this.V = MOVIE_OPTS.format === 'v';
    this.GW = this.scale.width;
    this.GH = this.scale.height;
    this.world = [];
    this.actors = {};
    this.bikes = [];
    this.smokers = [];
    this.labels = [];
    this.cards = [];
    this.badges = [[], []];
    this.tags = [];
    this.routes = {};
    this.extras = [];
    this.sceneW = W;
    this.split = false;

    // --- kamera ---
    const camA = this.cameras.main;
    camA.setBackgroundColor('#000000');
    ['B', 'ui'].forEach(n => { const c = this.cameras.getCamera(n); if (c) this.cameras.remove(c); });
    const camB = this.cameras.add(0, 0, this.GW, this.GH, false, 'B');
    camB.setBackgroundColor('#000000');
    this.uiCam = this.cameras.add(0, 0, this.GW, this.GH, false, 'ui');
    this.ctl = [
      { cam: camA, x: W / 2, y: H / 2, z: 1, region: [0, W], vp: { x: 0, y: 0, w: this.GW, h: this.GH }, phase: 0 },
      { cam: camB, x: W * 1.5, y: H / 2, z: 1, region: [W, 2 * W], vp: { x: this.GW, y: 0, w: 0, h: this.GH }, phase: 2 },
    ];

    // garis pemisah layar terbelah + tirai hitam transisi (UI)
    this.divider = this.uobj(this.add.rectangle(0, 0, 1, 1, 0xf4f4f4).setOrigin(0.5).setDepth(105), true);
    this.curtain = this.uobj(this.add.rectangle(0, 0, this.GW, this.GH, 0x000000, 1).setOrigin(0).setDepth(1000), true);

    this.sound.stopAll();
    this.loadVoiceOver().then(() => this.playStory(this.run));
  }

  // ---------- voice over ----------
  // STORY.audioDir berisi <id>.mp3 + manifest.json (durasi). Langkah dengan `vo: '<id>'`
  // memutar audionya, dan lamanya langkah mengikuti durasi suara.
  loadVoiceOver() {
    this.voDur = this.voDur || {};
    const dir = STORY.audioDir;
    const keys = [];
    const walk = st => { if (st.together) st.together.forEach(walk); else if (st.vo) keys.push(st.vo); };
    this.sequence().forEach(sc => (sc.steps || []).forEach(walk));
    if (!dir || !keys.length) return Promise.resolve();
    return fetch(`${dir}/manifest.json`).then(r => r.json()).catch(() => ({})).then(man => {
      Object.assign(this.voDur, man);
      const need = keys.filter(k => man[k] !== undefined && !this.cache.audio.exists(`vo-${k}`));
      if (!need.length) return;
      need.forEach(k => this.load.audio(`vo-${k}`, `${dir}/${k}.mp3`));
      return new Promise(res => { this.load.once('complete', res); this.load.start(); });
    });
  }

  // putar suara; kembalikan durasinya (ms) atau 0 kalau tidak ada
  playVO(st) {
    if (!st.vo || this.voDur[st.vo] === undefined) return 0;
    if (this.cache.audio.exists(`vo-${st.vo}`)) this.sound.play(`vo-${st.vo}`);
    return this.voDur[st.vo] * 1000;
  }

  // ---------- registrasi objek ke kamera ----------
  wobj(obj) { this.world.push(obj); this.uiCam.ignore(obj); return obj; }
  uobj(obj, persist) {
    if (!persist) this.world.push(obj);
    this.ctl[0].cam.ignore(obj); this.ctl[1].cam.ignore(obj);
    return obj;
  }

  // ---------- helper ----------
  alive(run) { return run === this.run; }
  wait(ms) { return new Promise(res => this.time.delayedCall(ms, res)); }
  tween(cfg) { return new Promise(res => this.tweens.add({ ...cfg, onComplete: () => res() })); }
  fade(out, ms = 600) { return this.tween({ targets: this.curtain, alpha: out ? 1 : 0, duration: ms }); }
  sideIdx(side) { return side === 'right' ? 1 : 0; }
  ctlForX(wx) { return (this.split && wx >= W) ? this.ctl[1] : this.ctl[0]; }

  toScreen(c, wx, wy) {
    const cam = c.cam, v = cam.worldView;
    return { x: cam.x + (wx - v.x) * cam.zoom, y: cam.y + (wy - v.y) * cam.zoom };
  }

  // Tata letak teks per format
  layout() {
    const { GW, GH, V, split } = this;
    return {
      capSize: V ? 24 : 20,
      capW: GW - (V ? 48 : 120),
      capY: V ? (split && this.mode === 'both' ? GH / 2 : GH * 0.76) : (this.captionTop ? 70 : GH - 70),
      hookSize: V ? 30 : 28,
      hookY: V ? GH * 0.18 : GH * 0.2,
      tagSize: V ? 14 : 13,
      cardTitle: V ? 20 : 18,
      cardItem: V ? 17 : 16,
    };
  }

  // ---------- urutan adegan ----------
  sequence() {
    if (!STORY.chapters) return STORY.scenes;
    const ch = MOVIE_OPTS.chapter && STORY.chapters.find(c => c.id === MOVIE_OPTS.chapter);
    if (ch) return ch.scenes;
    // long form: adegan pertama tiap bab diberi kartu bab
    const n = STORY.chapters.length;
    const body = STORY.chapters.flatMap((c, i) => c.scenes.map((sc, k) => (k ? sc : { ...sc, _chapter: `BAB ${i + 1}/${n} · ${c.title}` })));
    return [...(STORY.intro || []), ...body, ...(STORY.outro || [])];
  }

  async playStory(run) {
    const scenes = this.sequence();
    for (let i = 0; i < scenes.length; i++) {
      if (!this.alive(run)) return;
      const sc = scenes[i];
      this.game.events.emit('movie-scene', i + 1, scenes.length);
      const quick = sc.transition === 'cut';
      if (i > 0) {
        if (sc.transition === 'zoom') this.ctl.forEach(c => this.tweens.add({ targets: c, z: c.z * 2.5, duration: 600, ease: 'Quad.easeIn' }));
        await this.fade(true, quick ? 120 : 600);
      }
      this.buildScene(sc);
      if (sc.transition === 'zoom') {
        this.ctl.forEach(c => { const z = c.z; c.z = z * 2.5; this.tweens.add({ targets: c, z, duration: 1000, ease: 'Quad.easeOut' }); });
      }
      this.fade(false, i === 0 ? 250 : (quick ? 120 : 600));
      if (sc._chapter) this.chapterCard(sc._chapter);
      await this.wait(i === 0 || quick ? 100 : 300);
      for (const step of sc.steps || []) {
        if (!this.alive(run)) return;
        await this.runStep(step, run);
      }
    }
    if (!this.alive(run)) return;
    await this.fade(true, 700);
    this.game.events.emit('movie-end');
  }

  async runStep(st, run) {
    if (!this.alive(run)) return;
    if ('together' in st) return Promise.all(st.together.map(s => this.runStep(s, run)));
    if ('wait' in st) return this.wait(st.wait);
    if ('hook' in st) return this.hook(st);
    if ('caption' in st) return this.caption(st);
    if ('say' in st) return this.say(st, run);
    if ('title' in st) return this.title(st);
    if ('camera' in st) return this.moveCamera(st);
    if ('focus' in st) return this.focus(st.focus, st.dur ?? 800);
    if ('card' in st) return this.card(st);
    if ('route' in st) return this.showRoute(st);
    if ('block' in st) return this.blockRoute(st);
    if ('ping' in st) return this.ping(st);
    if ('chart' in st) return this.chart(st);
    if ('restoreColor' in st) return this.restoreColor();
    if ('blackout' in st) return this.blackout(st);
    if ('raise' in st) { const a = this.actor(st.raise); return this.tween({ targets: a.spr, y: st.to * S, duration: st.dur ?? 2500, ease: 'Sine.easeInOut' }); }
    if ('swap' in st) { this.actor(st.swap).spr.setTexture(st.to); return this.wait(st.dur ?? 100); }
    if ('badge' in st) return this.badge(st);
    if ('clear' in st || 'clearLabels' in st) return this.clearAll();
    if ('label' in st) return this.label(st);
    if ('haze' in st) return this.tween({ targets: this.hazeRects[this.sideIdx(st.side)], alpha: st.haze, duration: st.dur ?? 2000 });
    if ('alpha' in st) { const a = this.actor(st.alpha); a.spr.setVisible(true); return this.tween({ targets: a.spr, alpha: st.to, duration: st.dur ?? 1500 }); }
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
    if ('shake' in st) { this.ctl.forEach(c => c.cam.shake(st.shake, 0.01)); return this.wait(st.shake); }
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
    this.labels = [];
    this.cards = [];
    this.badges = [[], []];
    this.tags = [];
    this.routes = {};
    this.extras = [];
    this.props = [];
    this.trafficOn = true;
    this.ctl.forEach(c => c.cam.postFX && c.cam.postFX.clear());
    ['bg', 'fg'].forEach(k => this.textures.exists(k) && this.textures.remove(k));
  }

  viewports(mode) {
    const { GW, GH, V } = this;
    if (!this.split || mode === 'left') return [{ x: 0, y: 0, w: GW, h: GH }, V ? { x: 0, y: GH, w: GW, h: 0 } : { x: GW, y: 0, w: 0, h: GH }];
    if (mode === 'right') return [V ? { x: 0, y: 0, w: GW, h: 0 } : { x: 0, y: 0, w: 0, h: GH }, { x: 0, y: 0, w: GW, h: GH }];
    return V
      ? [{ x: 0, y: 0, w: GW, h: GH / 2 }, { x: 0, y: GH / 2, w: GW, h: GH / 2 }]
      : [{ x: 0, y: 0, w: GW / 2, h: GH }, { x: GW / 2, y: 0, w: GW / 2, h: GH }];
  }

  buildScene(sc) {
    this.clearWorld();
    const sky = SKIES[sc.sky || 'day'];
    this.split = !!sc.split;
    const SW = this.sceneW = sc.width || (this.split ? 2 * W : W);
    this.captionTop = !!sc.captionTop;
    this.mode = this.split ? (sc.focus || 'both') : 'left';
    this.fitWidth = sc.fit === 'width';
    this.ctl.forEach(c => c.cam.setBackgroundColor(sky.camBg || '#000000'));

    // kamera & wilayah
    const regions = this.split ? [[0, W], [W, 2 * W]] : [[0, SW], [0, SW]];
    const vps = this.viewports(this.mode);
    this.ctl.forEach((c, i) => {
      c.region = regions[i];
      Object.assign(c.vp, vps[i]);
      const init = (i === 0 ? sc.camera : sc.cameraB) || {};
      c.x = init.x ?? (c.region[0] + c.region[1]) / 2;
      c.y = init.y ?? H / 2;
      c.z = init.zoom ?? 1;
      // peta/bumi (fit width): tanpa batas agar gambar tetap di tengah layar tinggi
      if (this.fitWidth) c.cam.removeBounds();
      else c.cam.setBounds(c.region[0] * S, 0, (c.region[1] - c.region[0]) * S, H * S);
    });

    // langit
    const tex = this.textures.createCanvas('bg', SW, H);
    const ctx = tex.getContext();
    const skyH = sky.noGround ? H : GROUND;
    const bandH = Math.ceil(skyH / sky.bands.length);
    sky.bands.forEach((c, i) => { ctx.fillStyle = c; ctx.fillRect(0, i * bandH, SW, bandH); });
    if (sky.waves) {
      for (let i = 0; i < SW * 1.2; i++) {
        const x = (i * 37) % SW, y = (i * 53) % H;
        ctx.fillStyle = i % 3 ? '#3b7fd0' : '#4a8fe0';
        ctx.fillRect(x, y, 3, 1);
      }
    }
    tex.refresh();
    this.wobj(this.add.image(0, 0, 'bg').setOrigin(0).setScale(S).setDepth(0));
    if (sky.bubbles) {
      for (let i = 0; i < 18; i++) {
        const b = this.wobj(this.add.rectangle(Phaser.Math.Between(0, SW) * S, H * S, S, S, 0x9fd4ff, 0.7).setDepth(1));
        this.tweens.add({ targets: b, y: 0, x: b.x + 6 * S, duration: Phaser.Math.Between(5000, 9000), repeat: -1, delay: Phaser.Math.Between(0, 6000) });
      }
    }

    if (sky.stars) {
      const n = Math.round(40 * SW / W * (sky.noGround ? 1.6 : 1));
      for (let i = 0; i < n; i++) {
        const st = this.wobj(this.add.rectangle(Phaser.Math.Between(0, SW) * S, Phaser.Math.Between(0, sky.noGround ? H : 60) * S, S, S, 0xffffff).setDepth(1));
        this.tweens.add({ targets: st, alpha: 0.2, yoyo: true, repeat: -1, duration: Phaser.Math.Between(600, 1800), delay: Phaser.Math.Between(0, 1500) });
      }
    }

    if (sky.body && !sc.noSun) {
      const xs = [].concat(sc.sunX ?? (this.split ? [150, W + 150] : SW - 42));
      xs.forEach(x => {
        const body = this.wobj(this.add.image(x * S, sky.bodyY * S, sky.body).setScale(S).setDepth(1));
        if (sky.body === 'sun') this.tweens.add({ targets: body, scale: S * 1.06, yoyo: true, repeat: -1, duration: 1500 });
      });
    }

    if (!sky.noGround) {
      const ftex = this.textures.createCanvas('fg', SW, H);
      const f = ftex.getContext();
      const hills = (color, base, amp, f1, f2, seed) => {
        f.fillStyle = color;
        for (let x = 0; x < SW; x++) {
          const xx = x % W; // sisi kiri & kanan identik
          const h = Math.round(base + Math.sin(xx * f1 + seed) * amp + Math.sin(xx * f2 + seed * 2) * amp * 0.5);
          f.fillRect(x, GROUND - h, 1, h);
        }
      };
      if (!sky.noHills && !sc.noHills) {
        hills(sky.hillFar, 24, 6, 0.033, 0.08, 1);
        hills(sky.hillNear, 11, 4, 0.06, 0.15, 4);
      }
      f.fillStyle = sky.grass; f.fillRect(0, GROUND, SW, 3);
      f.fillStyle = sky.dirt; f.fillRect(0, GROUND + 3, SW, H - GROUND - 3);
      f.fillStyle = 'rgba(0,0,0,0.25)';
      for (let x = 0; x < SW; x += 7) f.fillRect(x + ((x / 7) % 3), GROUND + 6 + ((x * 13) % 11), 2, 1);
      f.fillStyle = sky.grass;
      for (let x = 0; x < SW; x += 5) f.fillRect(x, GROUND - 1, 1, 1);
      if (sc.road) {
        f.fillStyle = '#94b0c2'; f.fillRect(0, GROUND, SW, 3);
        f.fillStyle = '#566c86'; f.fillRect(0, GROUND + 3, SW, 1);
        f.fillStyle = '#333c57'; f.fillRect(0, GROUND + 4, SW, H - GROUND - 4);
        f.fillStyle = '#f4f4f4';
        for (let x = 0; x < SW; x += 12) f.fillRect(x, GROUND + 11, 6, 1);
      }
      if (sc.water) {
        const wy = typeof sc.water === 'number' ? sc.water : GROUND - 6;
        f.fillStyle = '#2f6fbf'; f.fillRect(0, wy, SW, H - wy);
        f.fillStyle = '#4a8fe0';
        for (let i = 0; i < SW * 0.6; i++) f.fillRect((i * 29) % SW, wy + 2 + (i * 7) % (H - wy - 2), 3, 1);
        f.fillStyle = '#c4eef5'; f.fillRect(0, wy, SW, 1);
      }
      ftex.refresh();
      this.wobj(this.add.image(0, 0, 'fg').setOrigin(0).setScale(S).setDepth(2));
    }

    if (sky.clouds && !sc.noClouds) {
      const n = Math.ceil(SW / 50);
      for (let i = 0; i < n; i++) {
        const c = this.wobj(this.add.image((i * 50 + 12) * S, (8 + (i % 2) * 14) * S, 'cloud').setScale(S).setDepth(1.5).setAlpha(0.9));
        this.tweens.add({ targets: c, x: c.x + 20 * S, duration: 20000 + i * 3000, yoyo: true, repeat: -1 });
      }
    }

    (sc.props || []).forEach((p, i) => this.spawnProp(p, i));
    if (sc.wires) [].concat(sc.wires[0] && Array.isArray(sc.wires[0][0]) ? sc.wires : [sc.wires]).forEach(w => this.drawWires(w, sc.wireColor));
    (sc.actors || []).forEach(a => this.spawnActor(a));
    (sc.routes || []).forEach(r => this.spawnRoute(r));
    if (sc.sepia) this.ctl.forEach(c => { if (c.cam.postFX) c.cam.postFX.addColorMatrix().sepia(); });
    if (sc.birds) this.spawnBirds(sc.birds);
    [].concat(sc.traffic || []).forEach(t => this.spawnTraffic(t));

    if (sc.sky === 'night') this.wobj(this.add.rectangle(0, 0, SW * S, H * S, 0x0b0f2a, 0.25).setOrigin(0).setDepth(50));

    // kabut polusi per sisi
    const hz = [].concat(sc.haze ?? 0);
    this.hazeRects = this.split
      ? [0, 1].map(i => this.wobj(this.add.rectangle(i * W * S, 0, W * S, H * S, 0x8a7f6a, 1).setOrigin(0).setDepth(40).setAlpha(hz[i] ?? hz[0])))
      : [this.wobj(this.add.rectangle(0, 0, SW * S, H * S, 0x8a7f6a, 1).setOrigin(0).setDepth(40).setAlpha(hz[0]))];

    // label sisi (BENSIN / LISTRIK)
    if (this.split && sc.tags) {
      const colors = sc.tagColors || ['#b13e53', '#38b764'];
      this.tags = sc.tags.map((t, i) => this.uobj(this.add.text(0, 0, t, {
        fontFamily: FONT, fontSize: `${this.layout().tagSize}px`, color: '#ffffff',
        backgroundColor: colors[i], padding: { x: 10, y: 8 },
      }).setDepth(140)));
    }
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
    const img = this.wobj((p.anim ? this.add.sprite(x, y, `${p.anim}_0`) : this.add.image(x, y, p.sprite)).setOrigin(0.5, p.center ? 0.5 : 1).setScale(sc).setDepth((p.depth ?? 5) + i * 0.01));
    if (p.flip) img.setFlipX(true);
    if (p.alpha !== undefined) img.setAlpha(p.alpha);
    if (p.sway) this.tweens.add({ targets: img, angle: 4, yoyo: true, repeat: -1, duration: 900, ease: 'Sine.inOut' });
    if (p.float) this.tweens.add({ targets: img, y: img.y - 3 * S, yoyo: true, repeat: -1, duration: 1600, ease: 'Sine.inOut' });
    if (p.spin) this.tweens.add({ targets: img, angle: 360, duration: p.spin, repeat: -1 });
    if (p.anim) img.play(p.anim);
    if (p.bob) this.tweens.add({ targets: img, angle: { from: -1.5, to: 1.5 }, y: img.y + S, yoyo: true, repeat: -1, duration: 1300 + (i % 3) * 200, ease: 'Sine.inOut' });
    if (p.blink) this.tweens.add({ targets: img, alpha: 0.35, yoyo: true, repeat: -1, duration: p.blink });
    if (p.smoke) this.smokers.push({ obj: img, dx: p.smoke.dx || 0, dy: p.smoke.dy || 0, big: !!p.smoke.big, dark: !!p.smoke.dark, every: p.smoke.every || 220, t: 0, on: p.smoke.on !== false });
    if (p.id) this.actors[p.id] = { spr: img, sprite: p.sprite, name: p.id, prop: true };
    (this.props = this.props || []).push(img);
    return img;
  }

  drawWires(ws, color) {
    const g = this.wobj(this.add.graphics().setDepth(4.5));
    g.lineStyle(S * (color ? 1 : 0.6), color ? Phaser.Display.Color.HexStringToColor(color).color : 0x1a1c2c, 0.95);
    for (let i = 0; i < ws.length - 1; i++) {
      const [x1, y1] = ws[i], [x2, y2] = ws[i + 1];
      new Phaser.Curves.QuadraticBezier(
        new Phaser.Math.Vector2(x1 * S, y1 * S),
        new Phaser.Math.Vector2((x1 + x2) / 2 * S, (Math.max(y1, y2) + 6) * S),
        new Phaser.Math.Vector2(x2 * S, y2 * S)).draw(g, 24);
    }
  }

  spawnTraffic(tr) {
    const kind = tr.kind || 'gas';
    const x0 = tr.x0 ?? 0, x1 = tr.x1 ?? this.sceneW;
    const per = Math.ceil((tr.count || 8) / 2);
    const lanes = [{ y: GROUND + 10, dir: 1 }, { y: GROUND + 17, dir: -1 }];
    lanes.forEach((ln, li) => {
      for (let k = 0; k < per; k++) {
        const v = (k + li) % 3;
        const x = x0 + ((k + 0.5) / per) * (x1 - x0) + Phaser.Math.Between(-6, 6);
        const b = this.wobj(this.add.image(x * S, ln.y * S, `motor_${kind}_${v}`).setOrigin(0.5, 1).setScale(S).setDepth(12 + li));
        b.setFlipX(ln.dir < 0);
        Object.assign(b, { kind, variant: v, dir: ln.dir, baseY: ln.y * S, x0: x0 - 12, x1: x1 + 12, vx: (tr.speed || 40) * (0.8 + Math.random() * 0.4) * ln.dir, puffT: Math.random() * 200 });
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

  // ---------- loop per frame ----------
  update(time, delta) {
    // kamera
    this.ctl.forEach(c => {
      const cam = c.cam, vp = c.vp;
      if (vp.w < 4 || vp.h < 4) { cam.setVisible(false); return; }
      cam.setVisible(true);
      cam.setViewport(Math.round(vp.x), Math.round(vp.y), Math.round(vp.w), Math.round(vp.h));
      const rw = c.region[1] - c.region[0];
      // 'fit width' (peta/bumi): seluruh lebar terlihat, sisa atas-bawah diisi warna latar
      const base = this.fitWidth ? vp.w / (rw * S) : Math.max(vp.h / (H * S), vp.w / (rw * S));
      const breathe = 1 + 0.018 * Math.sin(time / 2200 + c.phase);       // kamera selalu "bernapas"
      const z = this.V ? 1 + (c.z - 1) * 0.55 : c.z;   // 9:16 sudah lebih dekat, zoom naskah diperhalus
      cam.setZoom(base * z * breathe);
      cam.centerOn((c.x + Math.sin(time / 3000 + c.phase) * 0.8) * S, c.y * S);
    });

    // pemisah layar
    const both = this.split && this.ctl[1].vp.w > 4 && this.ctl[1].vp.h > 4 && this.ctl[0].vp.w > 4 && this.ctl[0].vp.h > 4;
    this.divider.setVisible(both);
    if (both) {
      const b = this.ctl[1].vp;
      if (this.V) this.divider.setPosition(this.GW / 2, b.y).setScale(this.GW, 6);
      else this.divider.setPosition(b.x, this.GH / 2).setScale(6, this.GH);
    }

    // label sisi + badge mengikuti viewport
    this.tags.forEach((t, i) => {
      const vp = this.ctl[i].vp;
      const vis = vp.w > 120 && vp.h > 80;
      const top = this.V ? 50 : 14;
      const stackH = t.height + this.badges[i].reduce((s, b) => s + b.height + 6, 0);
      // 9:16 terbelah: label panel bawah ditaruh di bawah agar tidak tertutup narasi di tengah
      let y = (this.V && i === 1 && vp.y > 10) ? vp.y + vp.h - 170 - stackH : vp.y + (i === 0 || vp.y < 10 ? top : 14);
      t.setVisible(vis).setPosition(vp.x + 14, y);
      y += t.height + 8;
      this.badges[i].forEach(b => { b.setVisible(vis).setPosition(vp.x + 14, y); y += b.height + 6; });
    });

    // garis penunjuk kartu
    this.cards.forEach(cd => {
      const p = this.toScreen(cd.ctl, cd.wx, cd.wy);
      const vis = cd.ctl.cam.visible;
      cd.line.clear();
      cd.dot.setVisible(vis).setPosition(p.x, p.y);
      if (!vis) return;
      const ex = p.x < cd.box.x ? cd.box.x : cd.box.x + cd.box.width;
      const ey = Phaser.Math.Clamp(p.y, cd.box.y + 10, cd.box.y + cd.box.height - 10);
      cd.line.lineStyle(4, 0xffcd75, 1).lineBetween(ex, ey, p.x, p.y);
    });

    // jalur kapal
    for (const rt of Object.values(this.routes)) {
      rt.g.clear();
      if (rt.reveal <= 0) { rt.ships.forEach(sp => sp.setVisible(false)); continue; }
      const n = rt.pts.length - 1, upto = Math.floor(rt.reveal * n);
      const off = rt.blocked ? 0 : Math.floor(time / 110);
      rt.g.lineStyle(S * 0.7, rt.blocked ? 0xe43b44 : rt.color, 0.95);
      for (let i = 0; i < upto; i++) {
        if (((i + n * 4 - off) % 4) < 2) rt.g.lineBetween(rt.pts[i].x, rt.pts[i].y, rt.pts[i + 1].x, rt.pts[i + 1].y);
      }
      rt.ships.forEach(sp => {
        if (!rt.blocked) sp.u = (sp.u + rt.speed * S * (delta / 1000) / rt.len) % 1;
        const pt = rt.path.getPoint(sp.u), t = rt.path.getTangent(sp.u);
        sp.setPosition(pt.x, pt.y).setFlipX(t.x < 0).setVisible(sp.u <= rt.reveal);
      });
    }

    // motor & asap
    const dt = delta / 1000;
    for (const b of this.bikes) {
      if (!b.active) continue;
      if (this.trafficOn) {
        b.x += b.vx * dt * S;
        if (b.dir > 0 && b.x > b.x1 * S) b.x = b.x0 * S;
        if (b.dir < 0 && b.x < b.x0 * S) b.x = b.x1 * S;
      }
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
    const spr = this.wobj(this.add.sprite(a.x * S, (a.y ?? GROUND) * S, `${a.sprite}_0`).setOrigin(0.5, 1).setScale(S).setDepth(10));
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

  // kartu bab (hanya di long form)
  async chapterCard(text) {
    const t = this.uobj(this.add.text(this.GW / 2, this.V ? 18 : 12, text.toUpperCase(), {
      fontFamily: FONT, fontSize: `${this.V ? 13 : 12}px`, color: '#1a1c2c', backgroundColor: '#ffcd75', padding: { x: 12, y: 8 },
    }).setOrigin(0.5, 0).setDepth(170).setAlpha(0));
    await this.tween({ targets: t, alpha: 1, y: t.y + 6, duration: 250 });
    await this.wait(2600);
    await this.tween({ targets: t, alpha: 0, duration: 300 });
    t.destroy();
  }

  // ---------- jalur kapal di peta ----------
  spawnRoute(r) {
    const v = r.points.map(([x, y]) => new Phaser.Math.Vector2(x * S, y * S));
    const path = new Phaser.Curves.Path(v[0].x, v[0].y);
    if (r.smooth === false) v.slice(1).forEach(p => path.lineTo(p.x, p.y)); else path.splineTo(v.slice(1));
    const rt = {
      id: r.id, path, len: path.getLength(), pts: path.getSpacedPoints(120),
      g: this.wobj(this.add.graphics().setDepth(r.depth ?? 7)),
      reveal: r.hidden ? 0 : 1, blocked: false, ships: [],
      color: Phaser.Display.Color.HexStringToColor(r.color || '#ffffff').color,
      speed: r.speed || 10, nShips: r.ships ?? 3, ship: r.ship || 'ship_s', shipScale: r.shipScale || 1,
    };
    for (let i = 0; i < rt.nShips; i++) {
      const sp = this.wobj(this.add.image(0, 0, rt.ship).setScale(S * rt.shipScale).setDepth((r.depth ?? 7) + 1));
      sp.u = i / rt.nShips; rt.ships.push(sp);
    }
    this.routes[r.id] = rt;
  }

  async showRoute(st) {
    const rt = this.routes[st.route];
    await this.tween({ targets: rt, reveal: 1, duration: st.dur ?? 1200, ease: 'Sine.easeInOut' });
  }

  async blockRoute(st) {
    const rt = this.routes[st.block];
    rt.blocked = true;
    rt.ships.forEach(sp => sp.setTexture('ship_red'));
    const at = st.at ? { x: st.at[0] * S, y: st.at[1] * S } : rt.path.getPoint(0.5);
    const x = this.wobj(this.add.image(at.x, at.y, 'x_mark').setScale(0).setDepth(20));
    await this.tween({ targets: x, scale: S * (st.scale || 1), duration: 300, ease: 'Back.out' });
    this.ctl.forEach(c => c.cam.shake(200, 0.004));
    await this.wait(st.dur ?? 300);
  }

  // ---------- titik penanda berdenyut ----------
  async ping(st) {
    const [px, py] = st.ping;
    const col = Phaser.Display.Color.HexStringToColor(st.color || '#e43b44').color;
    const r = (st.size || 4) * S;
    const dot = this.wobj(this.add.circle(px * S, py * S, r * 0.35, col).setDepth(19));
    const rings = [0, 1].map(k => {
      const ring = this.wobj(this.add.circle(px * S, py * S, r).setStrokeStyle(S * 0.6, col).setDepth(19).setScale(0.2));
      this.tweens.add({ targets: ring, scale: 2.4, alpha: { from: 1, to: 0 }, duration: 1300, repeat: -1, delay: k * 650 });
      return ring;
    });
    const parts = [dot, ...rings];
    if (st.keep !== false) this.extras.push(...parts);
    else this.time.delayedCall(st.life || 2500, () => parts.forEach(p => p.destroy()));
    await this.wait(st.dur ?? 250);
  }

  // ---------- grafik batang (UI) ----------
  async chart(st) {
    const L = this.layout();
    const c = this.ctl[this.sideIdx(st.side)], vp = c.vp;
    const w = Math.min(vp.w - 48, this.V ? 470 : 400);
    const pad = 16, barH = 24, rowGap = 12;
    const title = this.uobj(this.add.text(0, 0, st.chart, { fontFamily: FONT, fontSize: `${L.cardItem}px`, color: '#ffcd75', wordWrap: { width: w - pad * 2 }, lineSpacing: 6 }).setDepth(131));
    const rowsH = st.bars.length * (14 + 6 + barH + rowGap);
    const h = pad * 2 + title.height + 10 + rowsH;
    const bx = this.V ? vp.x + (vp.w - w) / 2 : (st.place === 'left' ? vp.x + 24 : vp.x + vp.w - w - 24);
    const by = this.V ? Math.max(vp.y + 100, vp.y + vp.h * (st.y ?? 0.12)) : vp.y + (st.y ?? 0.16) * vp.h;
    const box = this.uobj(this.add.rectangle(bx, by, w, h, INK, 0.92).setOrigin(0).setDepth(130).setStrokeStyle(4, 0xffcd75));
    title.setPosition(bx + pad, by + pad);
    const parts = [box, title];
    let y = by + pad + title.height + 10;
    const max = st.max || Math.max(...st.bars.map(b => b[1])) * 1.1;
    const full = w - pad * 2 - 90;
    const anims = [];
    st.bars.forEach(([label, value, color]) => {
      const lt = this.uobj(this.add.text(bx + pad, y, label, { fontFamily: FONT, fontSize: '13px', color: '#ffffff' }).setDepth(131));
      y += 20;
      const bar = this.uobj(this.add.rectangle(bx + pad, y, 1, barH, Phaser.Display.Color.HexStringToColor(color || '#41a6f6').color).setOrigin(0).setDepth(131));
      const vt = this.uobj(this.add.text(bx + pad + 8, y + barH / 2, '0', { fontFamily: FONT, fontSize: '14px', color: '#ffffff' }).setOrigin(0, 0.5).setDepth(132));
      parts.push(lt, bar, vt);
      const target = Math.max(4, (value / max) * full);
      const o = { v: 0 };
      anims.push(this.tween({
        targets: o, v: 1, duration: 900, ease: 'Cubic.easeOut',
        onUpdate: () => { bar.width = target * o.v; vt.setX(bx + pad + target * o.v + 8).setText(`${st.prefix || ''}${Math.round(value * o.v)}${st.suffix || ''}`); },
      }));
      y += barH + rowGap;
    });
    this.extras.push(...parts);
    box.setScale(1, 0);
    await this.tween({ targets: box, scaleY: 1, duration: 160 });
    await Promise.all(anims);
    await this.wait(st.dur ?? 300);
  }

  async restoreColor() {
    const flash = this.uobj(this.add.rectangle(0, 0, this.GW, this.GH, 0xffffff, 1).setOrigin(0).setDepth(900).setAlpha(0));
    await this.tween({ targets: flash, alpha: 0.9, duration: 180 });
    this.ctl.forEach(c => c.cam.postFX && c.cam.postFX.clear());
    await this.tween({ targets: flash, alpha: 0, duration: 450 });
    flash.destroy();
  }

  async blackout(st) {
    const i = this.sideIdx(st.blackout);
    const [x0, x1] = this.split ? (i ? [W, 2 * W] : [0, W]) : [0, this.sceneW];
    const list = this.props.filter(p => p.active && p.x >= x0 * S && p.x < x1 * S && this.textures.exists(`${p.texture.key}_off`));
    for (let k = 0; k < 3; k++) {
      list.forEach(p => p.setTexture(`${p.texture.key.replace(/_off$/, '')}_off`));
      await this.wait(90);
      list.forEach(p => p.setTexture(p.texture.key.replace(/_off$/, '')));
      await this.wait(120);
    }
    list.forEach(p => p.setTexture(`${p.texture.key}_off`));
    const dark = this.wobj(this.add.rectangle(x0 * S, 0, (x1 - x0) * S, H * S, 0x05060f, 1).setOrigin(0).setDepth(45).setAlpha(0));
    await this.tween({ targets: dark, alpha: st.alpha ?? 0.4, duration: 300 });
  }

  // ---------- kamera ----------
  async moveCamera(st) {
    const c = this.ctl[this.sideIdx(st.side)];
    const t = st.camera === 'reset'
      ? { x: (c.region[0] + c.region[1]) / 2, y: H / 2, zoom: 1 }
      : st.camera;
    const target = { x: t.x ?? c.x, y: t.y ?? c.y, z: t.zoom ?? c.z };
    const dur = st.dur ?? 1200;
    if (dur <= 0) { Object.assign(c, target); return; }
    await this.tween({ targets: c, ...target, duration: dur, ease: st.ease || 'Sine.easeInOut' });
  }

  async focus(mode, dur) {
    if (!this.split) return;
    this.mode = mode;
    const vps = this.viewports(mode);
    await Promise.all(this.ctl.map((c, i) => this.tween({ targets: c.vp, ...vps[i], duration: dur, ease: 'Cubic.easeInOut' })));
  }

  // ---------- kartu keterangan (satu topik = satu kartu) ----------
  async card(st) {
    const L = this.layout();
    const c = this.ctl[this.sideIdx(st.side ?? (this.split && st.x >= W ? 'right' : 'left'))];
    const accent = st.color || '#ffcd75';
    const title = this.uobj(this.add.text(0, 0, st.card, { fontFamily: FONT, fontSize: `${L.cardTitle}px`, color: accent }).setDepth(131));
    const items = (st.items || []).map(t => this.uobj(this.add.text(0, 0, t, {
      fontFamily: FONT, fontSize: `${L.cardItem}px`, color: '#ffffff', lineSpacing: 8, wordWrap: { width: this.GW * (this.V ? 0.8 : 0.58) },
    }).setDepth(131).setAlpha(0)));
    const pad = 16, gap = 10;
    const w = Math.max(title.width, ...items.map(t => t.width)) + pad * 2;
    const h = pad * 2 + title.height + items.reduce((s, t) => s + gap + t.height, 0);

    // posisi kartu: di sisi berlawanan dari titik yang ditunjuk
    const p = this.toScreen(c, st.x * S, st.y * S);
    const vp = c.vp;
    let bx = st.place === 'left' || (st.place !== 'right' && p.x > vp.x + vp.w / 2) ? p.x - w - 60 : p.x + 60;
    bx = Phaser.Math.Clamp(bx, vp.x + 12, vp.x + vp.w - w - 12);
    let by = Phaser.Math.Clamp(p.y - h / 2, vp.y + 70, vp.y + vp.h - h - 12);
    if (this.V) {
      bx = Phaser.Math.Clamp(p.x - w / 2, vp.x + 12, vp.x + vp.w - w - 12);
      by = p.y - h - 70 >= vp.y + 110 ? p.y - h - 70 : p.y + 70;
    }

    const box = this.uobj(this.add.rectangle(bx, by, w, h, INK, 0.92).setOrigin(0).setDepth(130).setStrokeStyle(4, Phaser.Display.Color.HexStringToColor(accent).color));
    const line = this.uobj(this.add.graphics().setDepth(129));
    const dot = this.uobj(this.add.circle(p.x, p.y, 9, 0xffcd75).setStrokeStyle(4, INK).setDepth(132));
    this.tweens.add({ targets: dot, scale: 1.35, yoyo: true, repeat: -1, duration: 400 });
    title.setPosition(bx + pad, by + pad);
    let y = by + pad + title.height;
    items.forEach(t => { y += gap; t.setPosition(bx + pad, y); y += t.height; });

    const cd = { ctl: c, wx: st.x * S, wy: st.y * S, box, line, dot, parts: [box, title, ...items, line, dot] };
    this.cards.push(cd);
    box.setScale(1, 0); title.setAlpha(0);
    await this.tween({ targets: box, scaleY: 1, duration: 160, ease: 'Back.out' });
    title.setAlpha(1);
    for (const t of items) {
      t.x -= 12;
      await this.tween({ targets: t, alpha: 1, x: t.x + 12, duration: 140 });
      await this.wait(st.stagger ?? 220);
    }
    await this.wait(st.dur ?? 300);
  }

  async badge(st) {
    const i = this.sideIdx(st.side);
    const b = this.uobj(this.add.text(0, 0, st.badge, {
      fontFamily: FONT, fontSize: `${this.layout().tagSize + 2}px`, color: '#1a1c2c',
      backgroundColor: st.color || (i ? '#a7f070' : '#ffcd75'), padding: { x: 10, y: 8 },
    }).setDepth(140).setScale(0));
    this.badges[i].push(b);
    await this.tween({ targets: b, scale: 1, duration: 200, ease: 'Back.out' });
    await this.wait(st.dur ?? 200);
  }

  async clearAll() {
    const parts = [...this.labels, ...this.cards.flatMap(c => c.parts), ...this.badges.flat(), ...this.extras];
    this.labels = []; this.cards = []; this.badges = [[], []]; this.extras = [];
    if (!parts.length) return;
    await this.tween({ targets: parts, alpha: 0, duration: 180 });
    parts.forEach(p => p.destroy());
  }

  // label kecil yang menempel di dunia (ikut zoom)
  async label(st) {
    const z = this.ctl[0].cam.zoom;
    const t = this.wobj(this.add.text(st.x * S, st.y * S, st.label, {
      fontFamily: FONT, fontSize: `${st.size || 14}px`, color: st.color || '#ffffff',
      backgroundColor: st.bg || '#b13e53', padding: { x: 7, y: 6 }, resolution: Math.max(1, z),
    }).setOrigin(0.5).setDepth(95).setScale(0));
    this.labels.push(t);
    await this.tween({ targets: t, scale: 1 / z, duration: 300, ease: 'Back.out' });
    await this.wait(st.dur ?? 300);
  }

  async convert(st) {
    const kind = st.convert;
    const i = st.side ? this.sideIdx(st.side) : null;
    const list = this.bikes.filter(b => b.active && (i === null || (i === 1) === (b.x >= W * S))).sort((a, b) => a.x - b.x);
    for (const b of list) {
      b.setTintFill(0xffffff);
      const sp = this.wobj(this.add.image(b.x, b.y - 8 * S, 'spark').setScale(0).setDepth(30));
      this.tweens.add({ targets: sp, scale: S, alpha: { from: 1, to: 0 }, duration: 450, onComplete: () => sp.destroy() });
      this.time.delayedCall(140, () => { if (b.active) { b.clearTint(); b.kind = kind; b.setTexture(`motor_${kind}_${b.variant}`); } });
      await this.wait(st.stagger ?? 90);
    }
    await this.wait(200);
  }

  async glow(st) {
    const a = this.actor(st.glow);
    for (let i = 0; i < (st.times || 2); i++) {
      a.spr.setTintFill(0xffffff); await this.wait(90);
      a.spr.clearTint(); await this.wait(120);
    }
  }

  // ---------- aksi tokoh ----------
  async move(st) {
    const a = this.actor(st.move);
    const tx = st.to * S;
    if (Math.abs(tx - a.spr.x) < 1) return;
    a.spr.setVisible(true);
    a.spr.setFlipX(tx < a.spr.x);
    const dur = st.dur ?? (Math.abs(tx - a.spr.x) / S / (st.speed || 30)) * 1000;
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
  // Lama tampil ≈ kecepatan voice over (±16 huruf/detik)
  holdTime(text, st) { return st.dur ?? Math.max(1300, text.length * 62); }

  async hook(st) {
    const L = this.layout();
    const t = this.uobj(this.add.text(this.GW / 2, L.hookY, st.hook, {
      fontFamily: FONT, fontSize: `${L.hookSize}px`, color: '#ffcd75', align: 'center',
      stroke: '#1a1c2c', strokeThickness: 10, lineSpacing: 14, wordWrap: { width: this.GW - 60 },
    }).setOrigin(0.5).setDepth(160).setScale(0.6).setAlpha(0));
    const vo = this.playVO(st);
    await this.tween({ targets: t, scale: 1, alpha: 1, duration: 260, ease: 'Back.out' });
    await this.wait(vo ? Math.max(0, vo - 260) + 350 : (st.dur ?? Math.max(1800, st.hook.length * 60)));
    await this.tween({ targets: t, alpha: 0, y: t.y - 20, duration: 200 });
    t.destroy();
  }

  async caption(st) {
    const L = this.layout();
    const size = st.punch ? L.capSize + 4 : L.capSize;
    const txt = this.uobj(this.add.text(this.GW / 2, 0, st.caption, {
      fontFamily: FONT, fontSize: `${size}px`, color: st.punch ? '#ffcd75' : '#ffffff', align: 'center',
      lineSpacing: 12, wordWrap: { width: L.capW - 40 },
    }).setOrigin(0.5).setDepth(111));
    const bw = Math.min(L.capW, txt.width + 40), bh = txt.height + 30;
    const cy = st.top ? (this.V ? this.GH * 0.14 : 70) : L.capY;
    txt.setY(cy);
    const box = this.uobj(this.add.rectangle(this.GW / 2, cy, bw, bh, INK, 0.88).setOrigin(0.5).setDepth(110)
      .setStrokeStyle(4, st.punch ? 0xffcd75 : 0xf4f4f4));
    const parts = [box, txt];
    parts.forEach(p => p.setAlpha(0));
    box.setScale(0.92);
    const vo = this.playVO(st);
    const hold = vo ? Math.max(0, vo - 140) + 250 : this.holdTime(st.caption, st);
    await this.tween({ targets: parts, alpha: 1, scale: 1, duration: 140, ease: 'Quad.out' });
    // kalimat penutup: kamera maju pelan untuk penekanan
    if (st.punch) this.ctl.forEach(c => !this.tweens.isTweening(c) && this.tweens.add({ targets: c, z: c.z * 1.12, duration: hold + 300, ease: 'Sine.easeInOut' }));
    await this.wait(hold);
    await this.tween({ targets: parts, alpha: 0, duration: 140 });
    parts.forEach(p => p.destroy());
  }

  async typewrite(txt, full, run, speed = 32) {
    for (let i = 1; i <= full.length; i++) {
      if (!this.alive(run)) return;
      txt.setText(full.slice(0, i));
      if (full[i - 1] !== ' ') await this.wait(speed);
    }
  }

  // balon kata (untuk cerita bertokoh)
  async say(st, run) {
    const a = this.actor(st.say);
    const c = this.ctlForX(a.spr.x / S);
    const style = { fontFamily: FONT, fontSize: '16px', color: '#1a1c2c', lineSpacing: 10, wordWrap: { width: Math.min(420, this.GW - 80) } };
    const txt = this.uobj(this.add.text(0, 0, '', style).setDepth(102));
    const wrapped = txt.getWrappedText(st.text).join('\n');
    txt.setWordWrapWidth(null).setText(wrapped);
    const pad = 12;
    const bw = txt.width + pad * 2, bh = txt.height + pad * 2;
    const head = this.toScreen(c, a.spr.x, a.spr.y - a.spr.displayHeight);
    const bx = Phaser.Math.Clamp(head.x - bw / 2, 8, this.GW - bw - 8);
    const by = Math.max(30, head.y - bh - 22);
    txt.setPosition(bx + pad, by + pad).setText('');
    const g = this.uobj(this.add.graphics().setDepth(101));
    g.fillStyle(0xffffff).fillRect(bx, by, bw, bh);
    g.lineStyle(S, INK).strokeRect(bx, by, bw, bh);
    const tipX = Phaser.Math.Clamp(head.x, bx + 14, bx + bw - 14);
    g.fillStyle(0xffffff).fillTriangle(tipX - 8, by + bh - 2, tipX + 8, by + bh - 2, tipX, by + bh + 14);
    g.lineStyle(S, INK).lineBetween(tipX - 8, by + bh, tipX, by + bh + 14).lineBetween(tipX + 8, by + bh, tipX, by + bh + 14);
    const tag = this.uobj(this.add.text(bx + 6, by - 10, ` ${a.name} `, { fontFamily: FONT, fontSize: '10px', color: '#ffffff', backgroundColor: '#1a1c2c', padding: { y: 3 } }).setDepth(103));
    if (st.shout) this.ctl.forEach(k => k.cam.shake(200, 0.006));
    await this.typewrite(txt, wrapped, run);
    await this.wait(st.dur ?? Math.max(1400, st.text.length * 45 + 900));
    [g, txt, tag].forEach(p => p.destroy());
    await this.wait(150);
  }

  async title(st) {
    const { GW, GH } = this;
    const overlay = this.uobj(this.add.rectangle(0, 0, GW, GH, 0x000000, st.dark === false ? 0.5 : 1).setOrigin(0).setDepth(200).setAlpha(0));
    const t = this.uobj(this.add.text(GW / 2, GH / 2 - (st.sub ? 24 : 0), st.title, { fontFamily: FONT, fontSize: `${st.size || 32}px`, color: '#ffcd75', align: 'center', stroke: '#1a1c2c', strokeThickness: 8, lineSpacing: 14, wordWrap: { width: GW - 80 } }).setOrigin(0.5).setDepth(201).setAlpha(0));
    const s = st.sub ? this.uobj(this.add.text(GW / 2, t.y + t.height / 2 + 30, st.sub, { fontFamily: FONT, fontSize: '16px', color: '#f4f4f4', align: 'center', lineSpacing: 8, wordWrap: { width: GW - 100 } }).setOrigin(0.5).setDepth(201).setAlpha(0)) : null;
    const items = [overlay, t, s].filter(Boolean);
    await this.tween({ targets: items, alpha: { from: 0, to: 1 }, duration: 400 });
    await this.wait(st.dur || 2200);
    if (st.keep) return;
    await this.tween({ targets: items, alpha: 0, duration: 400 });
    items.forEach(o => o.destroy());
  }
}

// ---------- konfigurasi Phaser ----------
function startMovie(opts = {}) {
  Object.assign(MOVIE_OPTS, opts);
  const v = MOVIE_OPTS.format === 'v';
  const game = new Phaser.Game({
    type: Phaser.AUTO,
    parent: 'stage',
    width: v ? 540 : 960,
    height: v ? 960 : 540,
    pixelArt: true,
    backgroundColor: '#000000',
    scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH },
    scene: [Movie],
    render: { preserveDrawingBuffer: true },
  });
  window.game = game;
  return game;
}
