// ============================================================
//  ENGINE — memutar STORY (dari story.js) seperti film.
//  Koordinat di naskah memakai "piksel dunia" 192 x 108.
//  Tanah ada di y = 90.
// ============================================================

const W = 192, H = 108, S = 5, GROUND = 90;
const FONT = '"Press Start 2P", monospace';
const INK = 0x1a1c2c;

const SKIES = {
  day:    { bands: ['#5fcde4', '#74d4e8', '#8fdcec', '#a8e4f0', '#c4eef5'], hillFar: '#73c48f', hillNear: '#38b764', grass: '#38b764', dirt: '#8b5a2b', body: 'sun', bodyY: 18, clouds: true },
  sunset: { bands: ['#3b2a5c', '#5d3270', '#9a3f6e', '#d9576b', '#f39a5c', '#f8c86a'], hillFar: '#7a3b6e', hillNear: '#3b2a5c', grass: '#257179', dirt: '#5d3a1a', body: 'sun', bodyY: 58, clouds: true },
  night:  { bands: ['#0b0f2a', '#11163a', '#161d48', '#1d2552', '#29366f'], hillFar: '#1d2552', hillNear: '#141a3d', grass: '#1f4d4f', dirt: '#3a2614', body: 'moon', bodyY: 16, stars: true },
  dawn:   { bands: ['#29366f', '#3b5dc9', '#7a8fd9', '#d9a3c4', '#f8d3a0'], hillFar: '#5a7fa8', hillNear: '#2f6b5c', grass: '#38b764', dirt: '#8b5a2b', body: 'sun', bodyY: 66, clouds: true },
};

class Movie extends Phaser.Scene {
  constructor() { super('movie'); }

  create() {
    buildTextures(this);
    this.run = (this.run || 0) + 1;
    this.world = [];
    this.actors = {};
    this.cameras.main.setBackgroundColor('#000000');
    this.playStory(this.run);
  }

  // ---------- helper waktu ----------
  alive(run) { return run === this.run; }
  wait(ms) { return new Promise(res => this.time.delayedCall(ms, res)); }
  tween(cfg) { return new Promise(res => this.tweens.add({ ...cfg, onComplete: () => res() })); }
  fade(out, ms = 600) {
    return new Promise(res => {
      const cam = this.cameras.main;
      if (out) { cam.once('camerafadeoutcomplete', res); cam.fadeOut(ms, 0, 0, 0); }
      else { cam.once('camerafadeincomplete', res); cam.fadeIn(ms, 0, 0, 0); }
    });
  }

  // ---------- alur utama ----------
  async playStory(run) {
    const scenes = STORY.scenes;
    for (let i = 0; i < scenes.length; i++) {
      if (!this.alive(run)) return;
      this.game.events.emit('movie-scene', i + 1, scenes.length);
      if (i > 0) await this.fade(true, 700);
      this.buildScene(scenes[i]);
      this.fade(false, 700);
      await this.wait(400);
      for (const step of scenes[i].steps || []) {
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
    if ('move' in st) return this.move(st);
    if ('jump' in st) return this.jump(st);
    if ('emote' in st) return this.emote(st);
    if ('face' in st) { this.actor(st.face).spr.setFlipX(st.dir === 'left'); return this.wait(150); }
    if ('show' in st) { const a = this.actor(st.show); a.spr.setVisible(true).setAlpha(0); return this.tween({ targets: a.spr, alpha: 1, duration: 400 }); }
    if ('hide' in st) { const a = this.actor(st.hide); await this.tween({ targets: a.spr, alpha: 0, duration: 400 }); a.spr.setVisible(false).setAlpha(1); return; }
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
    ['bg', 'fg'].forEach(k => this.textures.exists(k) && this.textures.remove(k));
  }

  add2(obj) { this.world.push(obj); return obj; }

  buildScene(sc) {
    this.clearWorld();
    const sky = SKIES[sc.sky || 'day'];

    // Langit + bukit + tanah digambar di satu kanvas 320x180
    const tex = this.textures.createCanvas('bg', W, H);
    const ctx = tex.getContext();
    const bandH = Math.ceil(GROUND / sky.bands.length);
    sky.bands.forEach((c, i) => { ctx.fillStyle = c; ctx.fillRect(0, i * bandH, W, bandH); });
    tex.refresh();
    this.add2(this.add.image(0, 0, 'bg').setOrigin(0).setScale(S).setDepth(0));

    // Matahari / bulan (di belakang bukit)
    const body = this.add2(this.add.image((sc.sunX ?? 150) * S, sky.bodyY * S, sky.body).setScale(S).setDepth(1));
    if (sky.body === 'sun') this.tweens.add({ targets: body, scale: S * 1.06, yoyo: true, repeat: -1, duration: 1500 });

    if (sky.stars) {
      for (let i = 0; i < 40; i++) {
        const st = this.add2(this.add.rectangle(Phaser.Math.Between(0, W) * S, Phaser.Math.Between(0, 60) * S, S, S, 0xffffff).setDepth(1));
        this.tweens.add({ targets: st, alpha: 0.2, yoyo: true, repeat: -1, duration: Phaser.Math.Between(600, 1800), delay: Phaser.Math.Between(0, 1500) });
      }
    }

    // Bukit + tanah di kanvas kedua (di depan matahari)
    const ftex = this.textures.createCanvas('fg', W, H);
    const fctx = ftex.getContext();
    const hills = (color, base, amp, f1, f2, seed) => {
      fctx.fillStyle = color;
      for (let x = 0; x < W; x++) {
        const h = Math.round(base + Math.sin(x * f1 + seed) * amp + Math.sin(x * f2 + seed * 2) * amp * 0.5);
        fctx.fillRect(x, GROUND - h, 1, h);
      }
    };
    hills(sky.hillFar, 24, 6, 0.033, 0.08, 1);
    hills(sky.hillNear, 11, 4, 0.06, 0.15, 4);
    fctx.fillStyle = sky.grass; fctx.fillRect(0, GROUND, W, 3);
    fctx.fillStyle = sky.dirt; fctx.fillRect(0, GROUND + 3, W, H - GROUND - 3);
    fctx.fillStyle = 'rgba(0,0,0,0.25)';
    for (let x = 0; x < W; x += 7) fctx.fillRect(x + ((x / 7) % 3), GROUND + 6 + ((x * 13) % 11), 2, 1);
    fctx.fillStyle = sky.grass;
    for (let x = 0; x < W; x += 5) fctx.fillRect(x, GROUND - 1, 1, 1);
    ftex.refresh();
    this.add2(this.add.image(0, 0, 'fg').setOrigin(0).setScale(S).setDepth(2));

    if (sky.clouds) {
      for (let i = 0; i < 4; i++) {
        const c = this.add2(this.add.image((i * 55 + 12) * S, (8 + (i % 2) * 14) * S, 'cloud').setScale(S).setDepth(1.5).setAlpha(0.9));
        this.tweens.add({ targets: c, x: c.x + 35 * S, duration: 30000 + i * 5000, yoyo: true, repeat: -1 });
      }
    }

    (sc.props || []).forEach((p, i) => {
      const img = this.add2(this.add.image(p.x * S, (p.y ?? GROUND) * S, p.sprite).setOrigin(0.5, 1).setScale(S * (p.scale || 1)).setDepth(5 + i * 0.01));
      if (p.flip) img.setFlipX(true);
      if (p.sway) this.tweens.add({ targets: img, angle: 4, yoyo: true, repeat: -1, duration: 900, ease: 'Sine.inOut' });
      if (p.float) this.tweens.add({ targets: img, y: img.y - 5 * S, x: img.x + 3 * S, yoyo: true, repeat: -1, duration: 1400, ease: 'Sine.inOut' });
    });

    (sc.actors || []).forEach(a => this.spawnActor(a));
    if (sc.birds) this.spawnBirds(sc.birds);

    if (sc.sky === 'night') {
      this.add2(this.add.rectangle(0, 0, W * S, H * S, 0x0b0f2a, 0.25).setOrigin(0).setDepth(50));
    }
  }

  spawnActor(a) {
    const spr = this.add2(
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
    if (!a) throw new Error(`Aktor "${id}" tidak ada di adegan ini`);
    return a;
  }

  spawnBirds(n) {
    for (let i = 0; i < n; i++) {
      const b = this.add2(this.add.sprite(-20 * S - i * 18 * S, (14 + i * 6) * S, 'bird_0').setScale(S).setDepth(3));
      b.play('bird_fly');
      this.tweens.add({ targets: b, x: (W + 30) * S, duration: 9000 + i * 600, delay: i * 300 });
      this.tweens.add({ targets: b, y: b.y - 4 * S, yoyo: true, repeat: -1, duration: 700, ease: 'Sine.inOut' });
    }
  }

  // ---------- aksi ----------
  async move(st) {
    const a = this.actor(st.move);
    const tx = st.to * S;
    if (Math.abs(tx - a.spr.x) < 1) return;
    a.spr.setVisible(true);
    a.spr.setFlipX(tx < a.spr.x);
    const speed = st.speed || 30; // piksel dunia per detik
    const dur = st.dur ?? (Math.abs(tx - a.spr.x) / S / speed) * 1000;
    a.spr.play(`${a.sprite}_walk`);
    await this.tween({ targets: a.spr, x: tx, duration: dur });
    a.spr.stop();
    a.spr.setTexture(`${a.sprite}_0`);
  }

  async enter(st) {
    const a = this.actor(st.enter);
    const fromLeft = st.from !== 'right';
    a.spr.x = (fromLeft ? -15 : W + 15) * S;
    a.spr.setVisible(true);
    await this.move({ move: st.enter, to: st.to, speed: st.speed, dur: st.dur });
  }

  async exit(st) {
    const a = this.actor(st.exit);
    await this.move({ move: st.exit, to: st.to === 'left' ? -20 : W + 20, speed: st.speed });
    a.spr.setVisible(false);
  }

  async jump(st) {
    const a = this.actor(st.jump);
    const times = st.times || 1;
    for (let i = 0; i < times; i++) {
      await this.tween({ targets: a.spr, y: a.spr.y - (st.height || 10) * S, duration: 180, yoyo: true, ease: 'Quad.out' });
    }
  }

  async emote(st) {
    const a = this.actor(st.emote);
    const top = a.spr.y - a.spr.displayHeight - 3 * S;
    const icon = this.add2(this.add.image(a.spr.x, top, `emo_${st.icon || 'exclaim'}`).setOrigin(0.5, 1).setScale(0).setDepth(90));
    await this.tween({ targets: icon, scale: S, duration: 250, ease: 'Back.out' });
    this.tweens.add({ targets: icon, y: top - 2 * S, yoyo: true, repeat: -1, duration: 300 });
    await this.wait(st.dur || 1100);
    await this.tween({ targets: icon, alpha: 0, duration: 200 });
    icon.destroy();
  }

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
    const txt = this.add.text(0, 0, '', style).setDepth(102);
    const wrapped = txt.getWrappedText(st.text).join('\n');
    txt.setWordWrapWidth(null).setText(wrapped);
    const pad = 12;
    const bw = txt.width + pad * 2, bh = txt.height + pad * 2;
    const headY = a.spr.y - a.spr.displayHeight;
    const bx = Phaser.Math.Clamp(a.spr.x - bw / 2, 8, W * S - bw - 8);
    const by = Math.max(30, headY - bh - 22);
    txt.setPosition(bx + pad, by + pad).setText('');

    const g = this.add.graphics().setDepth(101);
    g.fillStyle(0xffffff).fillRect(bx, by, bw, bh);
    g.lineStyle(S, INK).strokeRect(bx, by, bw, bh);
    const tipX = Phaser.Math.Clamp(a.spr.x, bx + 14, bx + bw - 14);
    g.fillStyle(0xffffff).fillTriangle(tipX - 8, by + bh - 2, tipX + 8, by + bh - 2, tipX, by + bh + 14);
    g.lineStyle(S, INK).lineBetween(tipX - 8, by + bh, tipX, by + bh + 14).lineBetween(tipX + 8, by + bh, tipX, by + bh + 14);

    const tag = this.add.text(bx + 6, by - 10, ` ${a.name} `, { fontFamily: FONT, fontSize: '10px', color: '#ffffff', backgroundColor: '#1a1c2c', padding: { y: 3 } }).setDepth(103);

    const parts = [g, txt, tag];
    parts.forEach(p => this.world.push(p));
    if (st.shout) this.cameras.main.shake(200, 0.006);
    await this.typewrite(txt, wrapped, run);
    await this.wait(this.holdTime(st.text, st));
    parts.forEach(p => p.destroy());
    await this.wait(150);
  }

  async caption(st, run) {
    const style = { fontFamily: FONT, fontSize: '14px', color: '#ffffff', lineSpacing: 8, wordWrap: { width: W * S - 80 }, align: 'center' };
    const txt = this.add.text(W * S / 2, 0, '', style).setOrigin(0.5, 0).setDepth(111);
    const wrapped = txt.getWrappedText(st.caption).join('\n');
    txt.setWordWrapWidth(null).setText(wrapped);
    const bh = txt.height + 28;
    const top = st.top ? 14 : H * S - bh - 14;
    const box = this.add.rectangle(20, top, W * S - 40, bh, INK, 0.85).setOrigin(0).setDepth(110).setStrokeStyle(S, 0xf4f4f4);
    txt.setY(top + 14).setText('');
    this.world.push(box, txt);
    await this.typewrite(txt, wrapped, run, 28);
    await this.wait(this.holdTime(st.caption, st));
    await this.tween({ targets: [box, txt], alpha: 0, duration: 250 });
    box.destroy(); txt.destroy();
  }

  async title(st) {
    const overlay = this.add.rectangle(0, 0, W * S, H * S, 0x000000, st.dark === false ? 0.45 : 1).setOrigin(0).setDepth(200).setAlpha(0);
    const t = this.add.text(W * S / 2, H * S / 2 - (st.sub ? 20 : 0), st.title, { fontFamily: FONT, fontSize: '36px', color: '#ffcd75', align: 'center', stroke: '#1a1c2c', strokeThickness: 8 }).setOrigin(0.5).setDepth(201).setAlpha(0);
    const s = st.sub ? this.add.text(W * S / 2, H * S / 2 + 36, st.sub, { fontFamily: FONT, fontSize: '14px', color: '#f4f4f4', align: 'center' }).setOrigin(0.5).setDepth(201).setAlpha(0) : null;
    const items = [overlay, t, s].filter(Boolean);
    items.forEach(o => this.world.push(o));
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
