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
  indoor: { bands: ['#2b2f45'], noGround: true, camBg: '#2b2f45', tiles: true },
  ocean:  { bands: ['#2f6fbf', '#2c69b8', '#2a64b0', '#285fa8'], noGround: true, waves: true, camBg: '#2a64b0' },
  map:    { bands: ['#3fae5f'], noGround: true, camBg: '#2f9150' },
  beach:  { bands: ['#5fcde4', '#74d4e8', '#8fdcec', '#a8e4f0', '#c4eef5'], sea: true, grass: '#e4d3a8', dirt: '#d9c08c', body: 'sun', bodyY: 18, clouds: true },
  deep:   { bands: ['#14365e', '#102d50', '#0c2442', '#091c35'], grass: '#c2a36b', dirt: '#9c7f4e', noHills: true, bubbles: true, camBg: '#091c35' },
};

const MOVIE_OPTS = { format: 'h', chapter: null };
const SFX_NAMES = ['pop', 'tick', 'notif', 'kaching', 'stamp', 'coin', 'buzz', 'scratch', 'success', 'gunting', 'tetes', 'jangkrik', 'ombak'];
const MUSIC_VOL = 0.22, SFX_VOL = 0.55;

class Movie extends Phaser.Scene {
  constructor() { super('movie'); }

  create() {
    buildTextures(this);
    buildCityTextures(this);
    if (typeof buildWarTextures === 'function') buildWarTextures(this);
    if (typeof buildMoneyTextures === 'function') buildMoneyTextures(this);
    if (typeof buildPolitikTextures === 'function') buildPolitikTextures(this);
    if (typeof buildMapTextures === 'function') buildMapTextures(this);
    this.run = (this.run || 0) + 1;
    this.V = MOVIE_OPTS.format === 'v';
    this.GW = this.scale.width;
    this.GH = this.scale.height;
    this.world = [];
    this.actors = {}; this.critters = [];
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
      need.forEach(k => this.load.audio(`vo-${k}`, `${dir}/${k}.mp3`));
      // musik & efek suara (opsional): STORY.sfx = true -> audio/<cerita>/sfx/*.mp3
      if (STORY.sfx) SFX_NAMES.concat('music').forEach(n => { if (!this.cache.audio.exists(`sfx-${n}`)) this.load.audio(`sfx-${n}`, `${STORY.sfxDir || 'audio/_shared/sfx'}/${n}.mp3`); });
      if (!this.load.list.size) return;
      return new Promise(res => { this.load.once('complete', res); this.load.start(); });
    });
  }

  // putar suara; kembalikan durasinya (ms) atau 0 kalau tidak ada
  playVO(st) {
    if (!st.vo || this.voDur[st.vo] === undefined) return 0;
    if (this.cache.audio.exists(`vo-${st.vo}`)) this.sound.play(`vo-${st.vo}`);
    const ms = this.voDur[st.vo] * 1000;
    if (this.music) {   // musik mengecil saat narasi
      this.tweens.killTweensOf(this.music);
      this.tweens.add({ targets: this.music, volume: MUSIC_VOL * 0.45, duration: 150 });
      this.time.delayedCall(ms, () => this.music && this.tweens.add({ targets: this.music, volume: MUSIC_VOL, duration: 500 }));
    }
    return ms;
  }

  sfx(name, vol = 1) {
    if (STORY.sfx && this.cache.audio.exists(`sfx-${name}`)) this.sound.play(`sfx-${name}`, { volume: SFX_VOL * vol });
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
    this.music = null;
    if (STORY.sfx && this.cache.audio.exists('sfx-music')) {
      this.music = this.sound.add('sfx-music', { loop: true, volume: 0 });
      this.music.play();
      this.tweens.add({ targets: this.music, volume: MUSIC_VOL, duration: 1200 });
    }
    for (let i = 0; i < scenes.length; i++) {
      if (!this.alive(run)) return;
      const sc = scenes[i];
      this.game.events.emit('movie-scene', i + 1, scenes.length);
      // awan berdekatan terasa berulang: jika < STORY.cloudGap (10 dtk) dari awan terakhir -> transisi 'zoom' (menyelam)
      let tr = sc.transition;
      if (tr === 'clouds' && i > 0 && this.lastCloudAt !== undefined && this.time.now - this.lastCloudAt < (STORY.cloudGap ?? 10000)) tr = 'zoom';
      const quick = tr === 'cut';
      if (i > 0) {
        if (tr === 'zoom' || tr === 'clouds') this.ctl.forEach(c => this.tweens.add({ targets: c, z: c.z * 2.5, duration: 600, ease: 'Quad.easeIn' }));
        if (tr === 'clouds') await this.cloudCover(true);
        else await this.fade(true, quick ? 250 : (tr === 'zoom' ? 450 : 600));
      }
      this.buildScene(sc);
      if (tr === 'zoom') {
        this.ctl.forEach(c => { const z = c.z; c.z = z * 2.5; this.tweens.add({ targets: c, z, duration: 1000, ease: 'Quad.easeOut' }); });
      }
      if (tr === 'clouds' && i > 0) { this.cloudCover(false); this.lastCloudAt = this.time.now; }
      else this.fade(false, i === 0 ? 250 : (quick ? 250 : 600));
      if (sc._chapter && STORY.chapters.length > 1) this.chapterCard(sc._chapter);
      await this.wait(i === 0 || quick ? 100 : 300);
      for (const step of sc.steps || []) {
        if (!this.alive(run)) return;
        await this.runStep(step, run);
      }
      // jeda "napas" sebelum pindah adegan, supaya kata terakhir tidak terpotong
      await this.wait(sc.endPause ?? STORY.endPause ?? 500);
    }
    if (!this.alive(run)) return;
    if (this.music) this.tweens.add({ targets: this.music, volume: 0, duration: 700 });
    await this.fade(true, 700);
    if (this.music) this.music.stop();
    this.game.events.emit('movie-end');
  }

  async runStep(st, run) {
    if (!this.alive(run)) return;
    // only: 'long' (kompilasi) | 'short' (satu bab saja, mis. #cerita--v--bab-3)
    if (st.only && st.only !== (MOVIE_OPTS.chapter ? 'short' : 'long')) return;
    if ('quote' in st) return this.quoteCard(st);
    // { spin: id, dur } -> benda berputar terus (kincir); { spin: id, stop: true }
    if ('spin' in st) { const a = this.actor(st.spin); this.tweens.killTweensOf(a.spr); if (!a._spinOrigin) { a._spinOrigin = true; a.spr.y -= a.spr.displayHeight * (a.spr.originY - 0.5); a.spr.setOrigin(0.5, 0.5); } if (!st.stop) this.tweens.add({ targets: a.spr, angle: 360, duration: st.dur || 1400, repeat: -1 }); return this.wait(0); }
    // { rain: true|false, side? } -> hujan (garis biru jatuh di layar)
    if ('rain' in st) {
      if (this.rainEv) { this.rainEv.remove(); this.rainEv = null; }
      if (st.rain) this.rainEv = this.time.addEvent({ delay: 30, loop: true, callback: () => {
        for (let k = 0; k < 3; k++) {
          const x = Phaser.Math.Between(0, this.GW), d = this.uobj(this.add.rectangle(x, -20, 2, 14, 0x9fd4ff, 0.7).setDepth(160).setAngle(12));
          this.tweens.add({ targets: d, y: this.GH + 20, x: x - 60, duration: Phaser.Math.Between(450, 700), onComplete: () => d.destroy() });
        }
      } });
      return this.wait(st.dur ?? 0);
    }
    // { encok: id } -> tokoh memegangi pinggang (membungkuk sebentar, gemetar)
    if ('encok' in st) {
      const a = this.actor(st.encok); this.calm(a); a.busy = true;
      const ang = a.spr.flipX ? -14 : 14;
      this.tweens.add({ targets: a.spr, angle: ang, duration: 260, yoyo: true, hold: st.dur ?? 1100, onComplete: () => { a.busy = false; } });
      this.tweens.add({ targets: a.spr, x: a.spr.x + S, duration: 60, yoyo: true, repeat: 6, delay: 260 });
      return this.wait(0);
    }
    if ('together' in st) return Promise.all(st.together.map(s => this.runStep(s, run)));
    if ('wait' in st) return this.wait(st.wait);
    if ('hook' in st) return this.hook(st);
    if ('caption' in st) return this.caption(st, run);
    if ('say' in st) return this.say(st, run);
    if ('title' in st) return this.title(st);
    if ('camera' in st) return this.moveCamera(st);
    if ('focus' in st) return this.focus(st.focus, st.dur ?? 800);
    if ('card' in st) return this.card(st);
    if ('route' in st) return this.showRoute(st);
    if ('clock' in st) return this.clock(st);
    if ('stamp' in st) return this.stamp(st);
    if ('receipt' in st) return this.receipt(st);
    if ('smoke' in st) { const sm = this.smokers.find(x => x.obj === this.actor(st.smoke).spr); if (sm) sm.on = st.on !== false; return this.wait(0); }
    if ('tag' in st) return this.setTag(st);
    if ('sticker' in st) return this.sticker(st);
    if ('sfx' in st) { this.sfx(st.sfx, st.vol ?? 1); return this.wait(st.dur ?? 0); }
    if ('mono' in st && st.mono) this.sfx('scratch', 0.8);
    if ('swap' in st && /^jar_/.test(st.to || '')) this.sfx('coin', 0.7);
    if ('label' in st && /!/.test(st.label)) this.sfx('notif', 0.7);
    if ('mono' in st) { this.ctl.forEach(c => { if (!c.cam.postFX) return; c.cam.postFX.clear(); if (st.mono) c.cam.postFX.addColorMatrix().grayscale(); }); return this.wait(st.dur ?? 50); }
    if ('pop' in st) return this.popProp(st);
    if ('kw' in st) { this.showKw(st.kw); return this.wait(st.dur ?? 0); }
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
    if ('work' in st) return this.work(st);
    if ('score' in st) return st.corner ? this.scoreCorner(st) : this.scoreboard(st);
    if ('dialog' in st) return this.dialog(st, run);
    if ('crowd' in st) return this.crowd(st);
    if ('swapAll' in st) return this.swapAll(st);
    if ('tint' in st) { const rs = st.side ? [this.hazeRects[this.sideIdx(st.side)]] : this.hazeRects; rs.forEach(r => r && r.setFillStyle(Phaser.Display.Color.HexStringToColor(st.color || '#8a7f6a').color, 1)); return this.tween({ targets: rs, alpha: st.tint, duration: st.dur ?? 1200 }); }
    if ('jump' in st) return this.jump(st);
    if ('emote' in st) return this.emote(st);
    if ('face' in st) { const a = this.actor(st.face); this.calm(a); a.spr.setFlipX(st.dir === 'left'); return this.wait(150); }
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
    this.actors = {}; this.critters = [];
    this.bikes = [];
    this.smokers = [];
    this.labels = [];
    this.cards = [];
    this.badges = [[], []];
    this.tags = [];
    this.routes = {};
    this.extras = [];
    if (this.rainEv) { this.rainEv.remove(); this.rainEv = null; }
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
    this.life = STORY.alive !== false && sc.alive !== false;   // gerak "hidup" otomatis
    this.lifeBirds = this.life && !!SKIES[sc.sky || 'day'].clouds && !sc.noClouds && !sc.indoor && !sc.map;
    this.nextBird = this.time.now + Phaser.Math.Between(2500, 6000);
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
    this.mapMode = !!sc.map;
    this.mapSpec = sc.map || null; this.mapB = sc.mapB || null;
    if (sc.map) (this.split ? [0, 1] : [0]).forEach(si => this.drawMap(ctx, (si && sc.mapB) || sc.map, si * W, this.split ? W : SW));
    if (sky.tiles) {
      ctx.fillStyle = '#33384f';
      for (let y = 0; y < H; y += 8) for (let x = (y / 8) % 2 ? 0 : 8; x < SW; x += 16) ctx.fillRect(x, y, 8, 8);
    }
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
      if (sky.sea) {   // laut di cakrawala + ombak kecil (adegan pantai/pulau)
        f.fillStyle = '#2f6fbf'; f.fillRect(0, GROUND - 18, SW, 18);
        f.fillStyle = '#41a6f6'; f.fillRect(0, GROUND - 18, SW, 2);
        f.fillStyle = '#9fd4ff'; for (let x = 0; x < SW; x += 9) f.fillRect(x + ((x / 9) % 4), GROUND - 14 + ((x * 7) % 10), 3, 1);
        f.fillStyle = '#5a8f5f'; for (let x = 0; x < SW; x++) { const xx = x % W; const h = Math.max(0, Math.round(5 - Math.abs(xx - 60) / 8)); if (h) f.fillRect(x, GROUND - 18 - h, 1, h); }  // pulau jauh
      } else if (!sky.noHills && !sc.noHills) {
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
    this.walkers = [];
    this.stayers = [];
    if (sc.walkers) this.spawnWalkers(sc.walkers);
    if (sc.map && !sc.noClouds) for (let i = 0; i < Math.ceil(SW / 90); i++) {
      const c = this.wobj(this.add.image((i * 90 + 30) * S, (14 + (i % 2) * 50) * S, 'cloud').setScale(S * 1.3).setDepth(30).setAlpha(0.85));
      this.tweens.add({ targets: c, x: c.x + 60 * S, duration: 40000 + i * 5000, yoyo: true, repeat: -1 });
    }
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

    this.clockText = null; this.kwObj = null;
    if (sc.clock) this.clock({ clock: sc.clock, instant: true });
    if (sc.note) this.uobj(this.add.text(12, this.V ? 118 : this.GH - 22, sc.note, { fontFamily: FONT, fontSize: '9px', color: '#c2c3c7' }).setDepth(150).setAlpha(0.85));

    // label sisi (BENSIN / LISTRIK)
    if (this.split && sc.tags) {
      const colors = sc.tagColors || ['#b13e53', '#38b764'];
      this.lastTags = { names: sc.tags, colors };
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
    const dep = p.depth ?? (this.mapMode ? 4 + (p.y ?? GROUND) / 200 : 5);
    const img = this.wobj((p.anim ? this.add.sprite(x, y, `${p.anim}_0`) : this.add.image(x, y, p.sprite)).setOrigin(0.5, p.center ? 0.5 : 1).setScale(sc).setDepth(dep + i * 0.0001));
    if (p.flip) img.setFlipX(true);
    if (p.alpha !== undefined) img.setAlpha(p.alpha);
    if (p.sway) this.tweens.add({ targets: img, angle: 4, yoyo: true, repeat: -1, duration: 900, ease: 'Sine.inOut' });
    else if (this.life && p.still !== true && !p.bob && !p.spin && /^(tree|palm|bush|padi|sprout|kopi|flag|spanduk|grass|bamboo)/.test(p.sprite || ''))
      this.tweens.add({ targets: img, angle: { from: -1.6, to: 1.6 }, yoyo: true, repeat: -1, duration: Phaser.Math.Between(1700, 2600), delay: Phaser.Math.Between(0, 1500), ease: 'Sine.inOut' });
    if (p.float) this.tweens.add({ targets: img, y: img.y - 3 * S, yoyo: true, repeat: -1, duration: 1600, ease: 'Sine.inOut' });
    if (p.spin) this.tweens.add({ targets: img, angle: 360, duration: p.spin, repeat: -1 });
    if (p.anim) img.play(p.anim);
    img.baseScale = sc;
    if (p.hidden) img.setVisible(false);
    if (p.bob) this.tweens.add({ targets: img, angle: { from: -1.5, to: 1.5 }, y: img.y + S, yoyo: true, repeat: -1, duration: 1300 + (i % 3) * 200, ease: 'Sine.inOut' });
    if (p.blink) this.tweens.add({ targets: img, alpha: 0.35, yoyo: true, repeat: -1, duration: p.blink });
    if (p.smoke) this.smokers.push({ obj: img, dx: p.smoke.dx || 0, dy: p.smoke.dy || 0, big: !!p.smoke.big, dark: !!p.smoke.dark, every: p.smoke.every || 220, t: 0, on: p.smoke.on !== false });
    if (p.id) this.actors[p.id] = { spr: img, sprite: p.sprite, name: p.id, prop: true };
    if (this.life && /^(ayam|cat|chicken|kucing|bird)/.test(p.sprite || '')) {
      const c = p.id ? this.actors[p.id] : { spr: img, sprite: p.sprite, prop: true };
      c.critter = true; c.homeX = img.x; c.nextFidget = this.time.now + Phaser.Math.Between(800, 3000);
      (this.critters = this.critters || []).push(c);
    }
    if (p.id && p.tag) this.makeTag(this.actors[p.id], p.tag, p.tagColor);
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

  // ---------- PETA tampak atas ----------
  drawMap(ctx, m, ox, w) {
    const rnd = mapRand(17 + ox);
    // pulau: { island: [cx, cy, rx, ry], bumps: [[x, y, rx, ry], ...] } -> laut di sekeliling, pantai pasir, daratan rumput
    const isl = m.island ? [m.island, ...(m.bumps || [])] : null;
    const inside = (x, y) => !isl || isl.some(([cx, cy, rx, ry]) => ((x - cx) / rx) ** 2 + ((y - cy) / ry) ** 2 < 1);
    if (isl) {
      ctx.fillStyle = m.sea || '#2f6fbf'; ctx.fillRect(ox, 0, w, H);
      for (let i = 0; i < w * 2; i++) { ctx.fillStyle = i % 3 ? '#3b7fd0' : '#9fd4ff'; ctx.fillRect(ox + Math.floor(rnd() * w), Math.floor(rnd() * H), 2 + (i % 3), 1); }
      const ell = (cx, cy, rx, ry, c) => { ctx.fillStyle = c; for (let y = -ry; y <= ry; y++) { const half = Math.floor(rx * Math.sqrt(Math.max(0, 1 - (y * y) / (ry * ry)))); ctx.fillRect(ox + cx - half, cy + y, half * 2 + 1, 1); } };
      isl.forEach(([cx, cy, rx, ry]) => ell(cx, cy, rx + 7, ry + 7, '#9fd4ff'));
      isl.forEach(([cx, cy, rx, ry]) => ell(cx, cy, rx + 5, ry + 5, '#e4d3a8'));
      isl.forEach(([cx, cy, rx, ry]) => ell(cx, cy, rx, ry, m.grass || '#3fae5f'));
    } else { ctx.fillStyle = m.grass || '#3fae5f'; ctx.fillRect(ox, 0, w, H); }
    for (let i = 0; i < w * 3; i++) { const x = Math.floor(rnd() * w), y = Math.floor(rnd() * H); if (!inside(x, y)) continue; ctx.fillStyle = ['#38a35a', '#4cbd6c', '#349a52'][i % 3]; ctx.fillRect(ox + x, y, 1 + (i % 2), 1); }
    (m.dirt || []).forEach(([x, y, ww, hh, c]) => { ctx.fillStyle = c || '#b89a62'; ctx.fillRect(ox + x, y, ww, hh); });
    const stamp = (pts, r, c) => {
      ctx.fillStyle = c;
      for (let k = 0; k < pts.length - 1; k++) {
        const [x1, y1] = pts[k], [x2, y2] = pts[k + 1], n = Math.ceil(Math.hypot(x2 - x1, y2 - y1));
        for (let t = 0; t <= n; t++) ctx.fillRect(Math.round(ox + x1 + (x2 - x1) * t / n - r), Math.round(y1 + (y2 - y1) * t / n - r), r * 2 + 1, r * 2 + 1);
      }
    };
    if (m.river) { stamp(m.river, 4, '#d9c08c'); stamp(m.river, 3, '#2f6fbf'); stamp(m.river, 1, '#41a6f6'); }
    if (m.plaza) { const [x, y, ww, hh] = m.plaza; ctx.fillStyle = '#c9b98a'; ctx.fillRect(ox + x - 2, y - 2, ww + 4, hh + 4); ctx.fillStyle = '#5ccf7a'; ctx.fillRect(ox + x, y, ww, hh); }
    (m.roads || []).forEach(([x1, y1, x2, y2]) => {
      const x = ox + Math.min(x1, x2), y = Math.min(y1, y2), ww = Math.abs(x2 - x1), hh = Math.abs(y2 - y1);
      ctx.fillStyle = '#a8986a'; ctx.fillRect(x - 2, y - 2, ww + 5, hh + 5);
      ctx.fillStyle = '#d6c79a'; ctx.fillRect(x - 1, y - 1, ww + 3, hh + 3);
    });
  }

  spawnWalkers(cfg) {
    const pools = [cfg.sprites || ['warga', 'warga2', 'boy', 'girl', 'grandpa', 'kid'], cfg.spritesB || cfg.sprites || ['warga', 'warga2', 'boy', 'girl', 'grandpa', 'kid']].map(l => l.filter(k => this.textures.exists(`${k}_0`)));
    (this.split ? [0, 1] : [0]).forEach(si => {
      const m = (si && this.mapB) || this.mapSpec || {}, off = si * W;
      const segs = [...(m.roads || []), ...(m.paths || [])].map(r => [r[0] + off, r[1], r[2] + off, r[3]]);  // paths = jalur jalan kaki tak tergambar
      if (!segs.length) return;
      const n = Array.isArray(cfg.n) ? cfg.n[si] : (cfg.n ?? 12);
      for (let k = 0; k < n; k++) {
        const seg = Math.floor(Math.random() * segs.length), t = Math.random(), [x1, y1, x2, y2] = segs[seg];
        const pool = pools[si]; const sp = pool[(k + si * 3) % pool.length];
        const x = x1 + (x2 - x1) * t, y = y1 + (y2 - y1) * t + 1;
        const spr = this.wobj(this.add.sprite(x * S, y * S, `${sp}_0`).setOrigin(0.5, 1).setScale(S * (cfg.scale || 0.5)).setDepth(4 + y / 200));
        this.walkers.push({ spr, sprite: sp, segs, seg, t, dir: Math.random() < 0.5 ? 1 : -1, speed: Phaser.Math.FloatBetween(5, 9), pause: Math.random() * 2, side: si, mode: 'road', walking: false });
      }
    });
    // pekerja: { jobs: [[{ n, from: [x,y], to: [x,y], carry: 'kayu' }], [...]], stay: [[{ n, x, y, spread }], [...]] } (per sisi)
    (this.split ? [0, 1] : [0]).forEach(si => {
      const off = si * W, pool = pools[si], sc = S * (cfg.scale || 0.5);
      ((cfg.jobs || [])[si] || []).forEach((j, ji) => {
        for (let k = 0; k < j.n; k++) {
          const sp = pool[(k + ji + si) % pool.length], t = Math.random();
          const g = [j.from[0] + off, j.from[1], j.to[0] + off, j.to[1]];
          const spr = this.wobj(this.add.sprite((g[0] + (g[2] - g[0]) * t) * S, (g[1] + (g[3] - g[1]) * t) * S, `${sp}_0`).setOrigin(0.5, 1).setScale(sc));
          const carry = j.carry && this.textures.exists(j.carry) ? this.wobj(this.add.image(spr.x, spr.y, j.carry).setOrigin(0.5, 1).setScale(sc * (j.carryScale || 0.8))) : null;
          this.walkers.push({ spr, sprite: sp, segs: [g], seg: 0, t, dir: Math.random() < 0.5 ? 1 : -1, speed: Phaser.Math.FloatBetween(4, 7), pause: Math.random(), side: si, mode: 'road', walking: false, job: true, carry });
        }
      });
      ((cfg.stay || [])[si] || []).forEach((st, ji) => {
        for (let k = 0; k < st.n; k++) {
          const sp = pool[(k + ji * 2 + si) % pool.length]; makeToolFrames(this, sp, 'cangkul');
          const x = st.x + off + Phaser.Math.FloatBetween(-1, 1) * (st.spread ?? 6), y = st.y + Phaser.Math.FloatBetween(-1, 1) * (st.spread ?? 6) * 0.5;
          const idle = st.act === 'idle';   // idle = berkumpul/istirahat (menoleh sesekali), selain itu bekerja (mencangkul)
          const spr = this.wobj(this.add.sprite(x * S, y * S, idle ? `${sp}_0` : `${sp}_cangkul_0`).setOrigin(0.5, 1).setScale(sc).setDepth(4 + y / 200).setFlipX(idle ? x > (st.x + off) : Math.random() < 0.5));
          this.stayers.push({ spr, sprite: sp, f: 0, idle, t: Math.random() * 2, every: idle ? Phaser.Math.FloatBetween(2, 4.5) : Phaser.Math.FloatBetween(0.35, 0.55) });
        }
      });
    });
  }

  tickWalkers(dt) {
    for (const p of this.stayers || []) {
      if (!p.spr.active) continue;
      p.t += dt; if (p.t < p.every) continue;
      p.t = 0; p.f = 1 - p.f;
      if (p.idle) p.spr.setFlipX(!p.spr.flipX); else p.spr.setTexture(`${p.sprite}_cangkul_${p.f}`);
    }
    for (const w of this.walkers || []) {
      const s = w.spr;
      if (!s.active || w.mode === 'gone' || w.mode === 'stay') continue;
      const setWalk = on => { if (on && !w.walking) s.play(`${w.sprite}_walk`); if (!on && w.walking) { s.stop(); s.setTexture(`${w.sprite}_0`); } w.walking = on; };
      if (w.pause > 0) { w.pause -= dt; setWalk(false); continue; }
      let nx, ny;
      if (w.mode !== 'road') {
        const dx = w.tx - s.x / S, dy = w.ty - s.y / S, d = Math.hypot(dx, dy);
        if (d < 0.8) {
          setWalk(false);
          if (w.mode === 'leave') { s.setVisible(false); w.mode = 'gone'; }
          else if (w.mode === 'goto') w.mode = 'stay';
          else w.mode = 'road';
          continue;
        }
        const st = Math.min(d, w.speed * (w.rush || 1) * dt);
        nx = s.x / S + dx / d * st; ny = s.y / S + dy / d * st;
      } else {
        const [x1, y1, x2, y2] = w.segs[w.seg], len = Math.max(1, Math.hypot(x2 - x1, y2 - y1));
        w.t += w.dir * w.speed * dt / len;
        if (w.t > 1 || w.t < 0) {
          w.t = Phaser.Math.Clamp(w.t, 0, 1);
          const px = w.t ? x2 : x1, py = w.t ? y2 : y1;
          const near = (ax, ay) => Math.abs(ax - px) < 2 && Math.abs(ay - py) < 2;
          const opts = [];
          w.segs.forEach((g, i) => { if (i === w.seg) return; if (near(g[0], g[1])) opts.push([i, 0, 1]); else if (near(g[2], g[3])) opts.push([i, 1, -1]); });
          if (opts.length && Math.random() < 0.85) { const o = opts[Math.floor(Math.random() * opts.length)]; w.seg = o[0]; w.t = o[1]; w.dir = o[2]; }
          else w.dir = -w.dir;
          if (w.job) w.pause = Phaser.Math.FloatBetween(0.6, 1.6);   // mengambil / menaruh barang
          else if (Math.random() < 0.25) w.pause = Phaser.Math.FloatBetween(0.5, 2);
        }
        const g = w.segs[w.seg];
        nx = g[0] + (g[2] - g[0]) * w.t; ny = g[1] + (g[3] - g[1]) * w.t + 1;
      }
      if (Math.abs(nx * S - s.x) > 0.01) s.setFlipX(nx * S < s.x);
      s.setPosition(nx * S, ny * S).setDepth(4 + ny / 200);
      if (w.carry) w.carry.setPosition(s.x, s.y - s.displayHeight + S * 0.5).setDepth(s.depth + 0.001).setVisible(w.dir === 1 && s.visible);
      setWalk(true);
    }
  }

  // { crowd: 'goto'|'leave'|'roam', side, x, y, frac, spread, rush }
  crowd(st) {
    const sides = st.side === 'right' ? [1] : st.side === 'left' ? [0] : [0, 1];
    let ws = (this.walkers || []).filter(w => sides.includes(w.side));
    if (st.crowd !== 'roam') ws = ws.filter(w => w.mode !== 'gone');
    ws = Phaser.Utils.Array.Shuffle(ws.slice()).slice(0, Math.ceil(ws.length * (st.frac ?? 1)));
    ws.forEach(w => {
      w.pause = Math.random() * 0.4; w.rush = st.rush || 1;
      if (st.crowd === 'goto') { w.mode = 'goto'; w.tx = st.x + Phaser.Math.FloatBetween(-1, 1) * (st.spread ?? 10); w.ty = st.y + Phaser.Math.FloatBetween(-1, 1) * (st.spread ?? 10) * 0.6; }
      else if (st.crowd === 'leave') { const mid = w.side * W + W / 2; w.mode = 'leave'; w.tx = w.spr.x / S < mid ? w.side * W - 8 : w.side * W + W + 8; w.ty = w.spr.y / S; }
      else {
        if (w.mode === 'gone') { w.spr.setVisible(true); w.spr.x = (w.side * W + (Math.random() < 0.5 ? -6 : W + 6)) * S; }
        const g = w.segs[w.seg]; w.mode = 'return'; w.rush = 1;
        w.tx = g[0] + (g[2] - g[0]) * w.t; w.ty = g[1] + (g[3] - g[1]) * w.t + 1;
      }
    });
    return this.wait(st.dur ?? 0);
  }

  // ganti tekstur banyak prop (id berawalan sama) satu per satu — mis. sawah mengering
  swapAll(st) {
    const list = Phaser.Utils.Array.Shuffle(Object.entries(this.actors).filter(([id]) => id.startsWith(st.swapAll)).map(([, a]) => a));
    const gap = st.stagger ?? 90;
    list.forEach((a, i) => this.time.delayedCall(i * gap, () => {
      if (!a.spr.active) return;
      a.spr.setTexture(st.to);
      const b = a.spr.scaleX;
      this.tweens.add({ targets: a.spr, scaleX: b * 1.15, scaleY: b * 1.15, duration: 110, yoyo: true });
    }));
    return this.wait(st.dur ?? 0);
  }

  // ---------- tokoh bekerja (mencangkul) ----------
  work(st) {
    const a = this.actor(st.work);
    if (st.stop) { a.work = null; a.busy = false; a.spr.setTexture(`${a.sprite}_0`); return this.wait(st.dur ?? 50); }
    makeToolFrames(this, a.sprite);
    this.calm(a);
    a.busy = true; a.spr.stop(); a.spr.angle = 0;
    a.work = { f: 0, t: 0, every: st.speed || 420, ground: st.ground || 'wet' };
    a.spr.setTexture(`${a.sprite}_hoe_0`);
    return this.wait(st.dur ?? 0);
  }

  tickWork(delta) {
    Object.values(this.actors).forEach(a => {
      const w = a.work;
      if (!w || !a.spr.active) return;
      w.t += delta;
      if (w.t < (w.f ? w.every * 0.8 : w.every)) return;
      w.t = 0; w.f = 1 - w.f;
      a.spr.setTexture(`${a.sprite}_hoe_${w.f}`);
      if (!w.f || !a.spr.visible) return;
      const dir = a.spr.flipX ? -1 : 1, gx = a.spr.x + dir * 8 * S, gy = a.spr.y;
      const cols = w.ground === 'dry' ? [0xc9a85a, 0xa0703c] : [0x5d3a1a, 0x3b7fd0];
      for (let k = 0; k < 4; k++) {
        const d = this.wobj(this.add.rectangle(gx, gy - S, S, S, cols[k % 2]).setDepth(a.spr.depth + 0.1));
        this.tweens.add({ targets: d, x: gx + Phaser.Math.Between(-4, 4) * S, y: gy - Phaser.Math.Between(3, 6) * S, duration: 180, yoyo: true, ease: 'Quad.out', onComplete: () => d.destroy() });
      }
      if (w.ground === 'dry') this.puff(gx, gy - S, { dir: -dir, depth: a.spr.depth + 0.2 });
    });
  }

  // ---------- PAPAN SKOR gaya pertandingan ----------
  // { score: [['Kategori','A'], ...], sides?, names?, colors?, dur }  -> baris terakhir = poin baru
  // tim kiri = sisi kiri layar, tim kanan = sisi kanan; { head: 'SKOR AKHIR' } -> papan akhir besar
  teamInfo(st) {
    const sd = st.sides || ['A', 'B'];
    const lr = st.lr || (sd.includes('A') && sd.includes('B') ? ['A', 'B'] : sd);
    let lt = this.lastTags;
    if (!lt) { for (const ch of STORY.chapters || []) { const sc = (ch.scenes || []).find(x => x.tags); if (sc) { lt = { names: sc.tags, colors: sc.tagColors || ['#b13e53', '#38b764'] }; break; } } }
    const names = st.names || (lt && lt.names) || lr.map(l => `TIM ${l}`);
    const colors = st.colors || (lt && lt.colors) || ['#b13e53', '#38b764'];
    return { lr, names, colors };
  }
  scoreTotal() {
    if (this._scoreTotal) return this._scoreTotal;
    let m = 0;
    const walk = o => { if (!o || typeof o !== 'object') return; if (Array.isArray(o.score)) m = Math.max(m, o.score.length); Object.values(o).forEach(walk); };
    walk(STORY.chapters);
    return (this._scoreTotal = m || 5);
  }
  async scoreboard(st) {
    if (st.head) return this.scoreFinal(st);
    const GW = this.GW, GH = this.GH, V = this.V, rows = st.score;
    const { lr, names, colors } = this.teamInfo(st);
    const col = c => Phaser.Display.Color.HexStringToColor(c).color;
    const cnt = rs => lr.map(l => rs.filter(r => r[1] === l).length);
    const before = cnt(rows.slice(0, -1)), after = cnt(rows);
    const [cat, winL] = rows[rows.length - 1], wi = Math.max(0, lr.indexOf(winL));
    const w = V ? GW - 60 : 540, bw = (w - 64) / 2, bh = V ? 96 : 86;
    const x0 = (GW - w) / 2, y0 = V ? GH * 0.1 : 40;
    const parts = [], add = o => { parts.push(this.uobj(o)); return o; };
    add(this.add.rectangle(x0 - 6, y0 - 6, w + 12, bh + 12, INK, 0.95).setOrigin(0).setDepth(175).setStrokeStyle(4, 0xf4f4f4));
    const digits = [];
    [0, 1].forEach(i => {
      const bx = i ? x0 + w - bw : x0;
      add(this.add.rectangle(bx, y0, bw, bh, col(colors[i]), 1).setOrigin(0).setDepth(176));
      add(this.add.text(bx + bw / 2, y0 + 16, names[i], { fontFamily: FONT, fontSize: `${V ? 14 : 14}px`, color: '#ffffff' }).setOrigin(0.5).setDepth(177));
      digits.push(add(this.add.text(bx + bw / 2, y0 + bh / 2 + 12, String(before[i]), { fontFamily: FONT, fontSize: `${V ? 44 : 40}px`, color: '#ffffff', stroke: '#1a1c2c', strokeThickness: 6 }).setOrigin(0.5).setDepth(178)));
    });
    const vx = x0 + w / 2, vy = y0 + bh / 2;
    add(this.add.rectangle(vx, vy, 40, 40, 0xef7d57).setAngle(45).setDepth(179).setStrokeStyle(3, 0x1a1c2c));
    add(this.add.text(vx, vy, 'VS', { fontFamily: FONT, fontSize: '13px', color: '#ffffff' }).setOrigin(0.5).setDepth(180));
    const total = Math.max(this.scoreTotal(), rows.length), dr = 7, gap = 22;
    const dy = y0 + bh + 20, dx0 = vx - (total - 1) * gap / 2;
    const dots = [];
    for (let k = 0; k < total; k++) {
      const r = rows[k], c = r ? col(colors[Math.max(0, lr.indexOf(r[1]))]) : 0x333c57;
      dots.push(add(this.add.circle(dx0 + k * gap, dy, dr, c).setDepth(177).setStrokeStyle(2, 0xf4f4f4)));
    }
    const ribbon = add(this.add.text(vx, dy + 34, `+1 ${names[wi]}  ·  ${cat.toUpperCase()}`, { fontFamily: FONT, fontSize: `${V ? 16 : 16}px`, color: '#1a1c2c', backgroundColor: '#ffcd75', padding: { x: 12, y: 8 } }).setOrigin(0.5).setDepth(178));
    this.extras.push(...parts);
    const off = -(y0 + bh + 120);
    parts.forEach(o => { o._y = o.y; o.y += off; });
    ribbon.setAlpha(0); dots[rows.length - 1].setScale(0);
    await this.tween({ targets: parts, y: { getEnd: t => t._y }, duration: 380, ease: 'Back.out' });
    const d = digits[wi];
    this.sfx('success', 0.7);
    await this.tween({ targets: d, scaleY: 0, duration: 90 });
    d.setText(String(after[wi]));
    this.tween({ targets: d, scaleY: 1, scaleX: { from: 1.6, to: 1 }, duration: 260, ease: 'Back.out' });
    const fl = add(this.add.rectangle(wi ? x0 + w - bw : x0, y0, bw, bh, 0xffffff, 0.85).setOrigin(0).setDepth(177.5));
    this.extras.push(fl);
    this.tweens.add({ targets: fl, alpha: 0, duration: 380 });
    for (let k = 0; k < 14; k++) {
      const c = [0xffcd75, 0xf4f4f4, col(colors[wi]), 0x41a6f6][k % 4];
      const px = add(this.add.rectangle(d.x, d.y, 6, 6, c).setDepth(181));
      this.extras.push(px);
      const ang = (k / 14) * Math.PI * 2, dist = Phaser.Math.Between(40, 90);
      this.tweens.add({ targets: px, x: d.x + Math.cos(ang) * dist, y: d.y + Math.sin(ang) * dist + 30, alpha: 0, angle: 180, duration: 650, ease: 'Quad.out' });
    }
    this.tweens.add({ targets: dots[rows.length - 1], scale: 1, duration: 300, ease: 'Back.out' });
    this.tweens.add({ targets: ribbon, alpha: 1, scale: { from: 0.6, to: 1 }, duration: 260, ease: 'Back.out' });
    await this.wait(st.dur ?? 1600);
    const live = parts.filter(o => o.active);
    await this.tween({ targets: live, y: `-=${y0 + bh + 140}`, duration: 300, ease: 'Quad.in' });
    live.forEach(o => o.active && o.destroy());
  }
  // versi tidak menahan narasi (corner: true)
  scoreCorner(st) { this.scoreboard(st); return this.wait(0); }

  // papan SKOR AKHIR: dua kolom tim + daftar kemenangan per tim + pita MENANG
  async scoreFinal(st) {
    const GW = this.GW, GH = this.GH, V = this.V, rows = st.score;
    const { lr, names, colors } = this.teamInfo(st);
    const col = c => Phaser.Display.Color.HexStringToColor(c).color;
    const sc = lr.map(l => rows.filter(r => r[1] === l).length);
    const lh = V ? 34 : 28;
    const w = V ? GW - 40 : 640, bw = (w - 70) / 2, x0 = (GW - w) / 2, y0 = V ? GH * 0.16 : 64;
    const bh = (V ? 130 : 116) + Math.max(...sc) * lh;
    const parts = [], add = o => { parts.push(this.uobj(o)); return o; };
    add(this.add.rectangle(0, 0, GW, GH, INK, 0.55).setOrigin(0).setDepth(174));
    const blocks = [];
    [0, 1].forEach(i => {
      const bx = i ? x0 + w - bw : x0;
      blocks.push(add(this.add.rectangle(bx, y0, bw, bh, col(colors[i]), 1).setOrigin(0).setDepth(176).setStrokeStyle(4, 0xf4f4f4)));
      add(this.add.text(bx + bw / 2, y0 + 22, names[i], { fontFamily: FONT, fontSize: '14px', color: '#ffffff' }).setOrigin(0.5).setDepth(177));
      add(this.add.text(bx + bw / 2, y0 + 72, String(sc[i]), { fontFamily: FONT, fontSize: `${V ? 54 : 50}px`, color: '#ffffff', stroke: '#1a1c2c', strokeThickness: 7 }).setOrigin(0.5).setDepth(178));
      rows.filter(r => r[1] === lr[i]).forEach((r, k) => add(this.add.text(bx + bw / 2, y0 + (V ? 130 : 118) + k * lh, `+ ${r[0].toUpperCase()}`, { fontFamily: FONT, fontSize: `${V ? 11 : 10}px`, color: '#1a1c2c', backgroundColor: '#f4f4f4', padding: { x: 8, y: 6 } }).setOrigin(0.5).setDepth(178)));
    });
    add(this.add.text(GW / 2, y0 - 8, st.head, { fontFamily: FONT, fontSize: `${V ? 20 : 18}px`, color: '#1a1c2c', backgroundColor: '#ffcd75', padding: { x: 14, y: 8 } }).setOrigin(0.5).setDepth(183));
    const vx = x0 + w / 2, vy = y0 + 72;
    add(this.add.rectangle(vx, vy, 48, 48, 0xef7d57).setAngle(45).setDepth(179).setStrokeStyle(3, 0x1a1c2c));
    add(this.add.text(vx, vy, 'VS', { fontFamily: FONT, fontSize: '15px', color: '#ffffff' }).setOrigin(0.5).setDepth(180));
    this.extras.push(...parts);
    parts.forEach(o => o.setAlpha(0));
    await this.tween({ targets: parts, alpha: 1, duration: 260 });
    const wi = sc[0] === sc[1] ? -1 : (sc[0] > sc[1] ? 0 : 1);
    await this.wait(250);
    const bx = wi < 0 ? GW / 2 : (wi ? x0 + w - bw : x0) + bw / 2;
    const win = add(this.add.text(bx, y0 + bh + 6, wi < 0 ? 'SERI!' : 'MENANG!', { fontFamily: FONT, fontSize: `${V ? 18 : 16}px`, color: '#ffffff', backgroundColor: '#e43b44', padding: { x: 10, y: 7 } }).setOrigin(0.5).setDepth(182).setAngle(-5));
    this.extras.push(win);
    this.sfx('stamp'); this.time.delayedCall(160, () => this.sfx('success', 0.7));
    this.tween({ targets: win, scale: { from: 2.4, to: 1 }, duration: 260, ease: 'Back.out' });
    if (wi >= 0) this.tweens.add({ targets: blocks[1 - wi], alpha: 0.55, duration: 300 });
    await this.wait(st.dur ?? 1600);
    if (st.keep) return;
    await this.tween({ targets: parts, alpha: 0, duration: 220 });
    parts.forEach(o => o.destroy());
  }

  // ---------- kartu kutipan: 1 frame bersih (punchline + status skor) untuk di-screenshot ----------
  // { quote: 'Teks punchline', sub: 'Infrastruktur: B ✓', dur }
  async quoteCard(st) {
    const GW = this.GW, GH = this.GH, V = this.V;
    const bg = this.uobj(this.add.rectangle(0, 0, GW, GH, 0x29366f, 1).setOrigin(0).setDepth(185));
    const fs = V ? 22 : 22;
    const q = this.uobj(this.add.text(GW / 2, GH * (V ? 0.42 : 0.4), `"${st.quote}"`, { fontFamily: FONT, fontSize: `${fs}px`, color: '#ffffff', align: 'center', lineSpacing: 10, wordWrap: { width: GW * (V ? 0.84 : 0.72) } }).setOrigin(0.5).setDepth(186));
    const parts = [bg, q];
    if (st.sub) parts.push(this.uobj(this.add.text(GW / 2, q.y + q.height / 2 + 48, st.sub, { fontFamily: FONT, fontSize: `${V ? 18 : 16}px`, color: '#1a1c2c', backgroundColor: '#ffcd75', padding: { x: 12, y: 8 } }).setOrigin(0.5).setDepth(186)));
    parts.push(this.uobj(this.add.text(GW / 2, GH - (V ? 120 : 40), STORY.title || '', { fontFamily: FONT, fontSize: '11px', color: '#94b0c2' }).setOrigin(0.5).setDepth(186)));
    this.extras.push(...parts);
    parts.forEach(o => o.setAlpha(0));
    await this.tween({ targets: parts, alpha: 1, duration: 220 });
    await this.wait(st.dur ?? 1600);
    await this.tween({ targets: parts, alpha: 0, duration: 220 });
    parts.forEach(o => o.destroy());
  }

  // ---------- kotak dialog berfoto (tokoh "berbicara", teks saja) ----------
  async dialog(st, run) {
    const a = this.actor(st.dialog);
    const GW = this.GW, V = this.V;
    const bw = Math.min(V ? GW - 40 : 820, GW - 40), ps = V ? 104 : 92, bh = ps + 24;
    const bx = (GW - bw) / 2, by = st.top ?? (V ? this.GH * 0.14 : 58);
    const parts = [];
    parts.push(this.uobj(this.add.rectangle(bx, by, bw, bh, 0xf4e4c1, 0.97).setOrigin(0).setDepth(170).setStrokeStyle(5, 0x8b5a2b)));
    const fx = bx + bw - ps - 12, fy = by + 12;
    parts.push(this.uobj(this.add.rectangle(fx, fy, ps, ps, 0x5fcde4).setOrigin(0).setDepth(171).setStrokeStyle(4, INK)));
    const key = st.face || `${a.sprite}_0`;
    const src = this.textures.get(key).getSourceImage();
    const face = this.uobj(this.add.image(fx + ps / 2, fy + 6, key).setOrigin(0.5, 0).setDepth(172));
    face.setScale((ps - 16) / src.width).setCrop(0, 0, src.width, Math.min(src.height, src.width * 0.95));
    parts.push(face);
    const nm = st.name || (a.tagText && a.tagText.text) || a.name;
    parts.push(this.uobj(this.add.text(fx + ps / 2, fy + ps + 2, nm, { fontFamily: FONT, fontSize: '10px', color: '#ffffff', backgroundColor: '#1a1c2c', padding: { x: 4, y: 3 } }).setOrigin(0.5, 0.5).setDepth(173)));
    const txt = this.uobj(this.add.text(bx + 18, by + 18, '', { fontFamily: FONT, fontSize: V ? '17px' : '16px', color: '#1a1c2c', lineSpacing: 10, wordWrap: { width: bw - ps - 54 } }).setDepth(172));
    parts.push(txt);
    const wrapped = txt.getWrappedText(st.dialog_text || st.text).join('\n');
    parts.forEach(o => o.setAlpha(0));
    this.extras.push(...parts);
    await this.tween({ targets: parts, alpha: 1, duration: 160 });
    await this.typewrite(txt, wrapped, run, 28);
    await this.wait(st.dur ?? Math.max(1200, wrapped.length * 35));
    if (st.keep) return;
    await this.tween({ targets: parts, alpha: 0, duration: 200 });
    parts.forEach(o => o.destroy());
  }

  // ---------- transisi awan (masuk dari ketinggian) ----------
  async cloudCover(cover) {
    const GW = this.GW, GH = this.GH;
    if (cover) {
      this.cloudObjs = [];
      const sc = Math.max(GW, GH) / 64 * 0.62;
      const white = this.uobj(this.add.rectangle(0, 0, GW, GH, 0xf4f4f4).setOrigin(0).setDepth(940).setAlpha(0), true);
      this.cloudObjs.push(white);
      const tw = [];
      for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) {
        const img = this.uobj(this.add.image(GW * 1.3 + c * GW * 0.35, (r + 0.3) * GH / 3.4 + Phaser.Math.Between(-20, 20), 'awan_besar').setScale(sc).setDepth(950), true);
        this.cloudObjs.push(img);
        tw.push(this.tween({ targets: img, x: c * GW * 0.33 + Phaser.Math.Between(-30, 30), duration: 650 + r * 60, ease: 'Cubic.easeOut' }));
      }
      tw.push(this.tween({ targets: white, alpha: 1, duration: 600, delay: 250 }));
      await Promise.all(tw);
    } else {
      const objs = this.cloudObjs || [];
      this.cloudObjs = null;
      await Promise.all(objs.map(o => this.tween(o.type === 'Rectangle' ? { targets: o, alpha: 0, duration: 450 } : { targets: o, x: o.x - GW * 1.6, duration: 900, ease: 'Cubic.easeIn' })));
      objs.forEach(o => o.destroy());
    }
  }

  // ---------- gerak "hidup" (napas, menoleh, melangkah kecil, burung lewat) ----------
  calm(a) {
    if (!a || a.prop) return;
    a.look++;
    if (a.fid) { a.fid.forEach(t => t.remove()); a.fid = null; }
    if (a.ftw) {
      if (a.ftw.some(t => t.isPlaying())) { a.spr.y = a.restY; a.spr.angle = 0; }
      a.ftw.forEach(t => t.stop()); a.ftw = null;
    }
    if (a.spr.anims && a.spr.anims.isPlaying && a.spr.texture.key.startsWith(a.sprite + '_')) { a.spr.stop(); a.spr.setTexture(`${a.sprite}_0`); }
  }

  ftween(a, cfg) {
    a.ftw = (a.ftw || []).filter(t => t.isPlaying());
    const t = this.tweens.add(cfg); a.ftw.push(t); return t;
  }

  canFidget(a) {
    const s = a.spr;
    return s.active && s.visible && s.alpha > 0.95 && !a.busy && !this.tweens.isTweening(s);
  }

  fidget(a, now) {
    const s = a.spr, S1 = S;
    a.nextFidget = now + Phaser.Math.Between(1800, 4200);
    if (!this.canFidget(a)) return;
    a.restY = s.y;
    if (a.critter) {   // ayam/kucing: mematuk atau melompat kecil, kadang pindah sedikit
      const r = Math.random();
      if (r < 0.45) this.ftween(a, { targets: s, angle: s.flipX ? -18 : 18, duration: 120, yoyo: true, repeat: 1 });
      else if (r < 0.7) this.ftween(a, { targets: s, y: s.y - 2 * S1, duration: 130, yoyo: true });
      else { const away = s.x - a.homeX; const dx = Math.abs(away) > 2 * S1 ? -away : Phaser.Math.Between(-5, 5) * S1; s.setFlipX(dx < 0); this.ftween(a, { targets: s, x: s.x + dx, duration: 400 }); }
      return;
    }
    const idle = s.texture.key === `${a.sprite}_0`;
    const r = Math.random();
    if (r < 0.32 && idle) {          // melangkah kecil lalu kembali menghadap semula
      const away = s.x - a.homeX;
      const dx = Math.abs(away) > 2 * S1 ? -away : (Math.random() < 0.5 ? -1 : 1) * Phaser.Math.Between(3, 6) * S1;
      const face = s.flipX, tok = ++a.look;
      s.setFlipX(dx < 0); s.play(`${a.sprite}_walk`);
      this.ftween(a, { targets: s, x: s.x + dx, duration: Math.abs(dx / S1) * 90, onComplete: () => {
        if (a.look !== tok) return;
        s.stop(); s.setTexture(`${a.sprite}_0`);
        this.time.delayedCall(500, () => { if (a.look === tok) s.setFlipX(face); });
      } });
    } else if (r < 0.58) {           // menoleh sebentar
      const face = s.flipX, tok = ++a.look;
      s.setFlipX(!face);
      this.time.delayedCall(Phaser.Math.Between(900, 1600), () => { if (a.look === tok && s.active) s.setFlipX(face); });
    } else if (r < 0.82) {           // mengangguk / melompat kecil
      this.ftween(a, { targets: s, y: s.y - 1.5 * S1, duration: 140, yoyo: true, repeat: Math.random() < 0.4 ? 1 : 0, ease: 'Quad.out' });
    } else {                         // condong (seperti berbicara/berpikir)
      this.ftween(a, { targets: s, angle: s.flipX ? -5 : 5, duration: 260, yoyo: true, hold: 500, ease: 'Sine.inOut' });
    }
  }

  // tokoh yang namanya disebut narator melompat kecil
  reactToName(st, ms) {
    if (!this.life) return;
    const spoken = (st.speak || st.caption || '').toLowerCase();
    Object.values(this.actors).forEach(a => {
      if (a.prop || !a.call || !this.canFidget(a)) return;
      const i = spoken.indexOf(a.call);
      if (i < 0) return;
      const t = this.time.delayedCall(Math.min(ms * i / Math.max(1, spoken.length), ms - 400), () => {
        if (!this.canFidget(a)) return;
        a.restY = a.spr.y;
        this.ftween(a, { targets: a.spr, y: a.spr.y - 3 * S, duration: 150, yoyo: true, repeat: 1, ease: 'Quad.out' });
        a.nextFidget = this.time.now + 2500;
      });
      (a.fid = a.fid || []).push(t);
    });
  }

  lifeTick(time) {
    if (!this.life) return;
    Object.values(this.actors).forEach(a => {
      if (a.prop) return;
      const s = a.spr;
      if (s.active && s.visible && !a.busy && !this.tweens.isTweening(s)) {
        s.scaleY = Math.abs(s.scaleX) * (1 + 0.035 * Math.sin(time / 520 + a.phase));   // bernapas
        if (time >= a.nextFidget) this.fidget(a, time);
      }
    });
    (this.critters || []).forEach(c => { if (c.spr.active && time >= c.nextFidget) this.fidget(c, time); });
    if (this.lifeBirds && time >= this.nextBird) {
      this.nextBird = time + Phaser.Math.Between(7000, 12000);
      const n = Phaser.Math.Between(1, 3), y0 = Phaser.Math.Between(10, 34), rtl = Math.random() < 0.5;
      for (let i = 0; i < n; i++) {
        const sx = rtl ? (this.sceneW + 20 + i * 14) * S : (-20 - i * 14) * S;
        const b = this.wobj(this.add.sprite(sx, (y0 + i * 5) * S, 'bird_0').setScale(S * 0.8).setDepth(3).setFlipX(rtl));
        b.play('bird_fly');
        this.tweens.add({ targets: b, x: rtl ? -30 * S : (this.sceneW + 30) * S, duration: 9000 + i * 500, delay: i * 250, onComplete: () => b.destroy() });
        this.tweens.add({ targets: b, y: b.y - 4 * S, yoyo: true, repeat: -1, duration: 700, ease: 'Sine.inOut' });
      }
    }
  }

  // ---------- loop per frame ----------
  update(time, delta) {
    this.lifeTick(time);
    this.tickWalkers(delta / 1000);
    this.tickWork(delta);
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
      // jam (pojok kiri atas) tidak boleh menutupi label sisi: label turun ke bawah jam
      const ck = this.clockText && this.clockText.active && this.clockText.visible ? this.clockText : null;
      if (ck && vp.x < ck.x + ck.width && Math.abs(y - ck.y) < ck.height) y = ck.y + ck.height + 6;
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

    // label di atas kepala (saldo / nama)
    Object.values(this.actors).forEach(a => { if (a.tagText && a.tagText.active) a.tagText.setPosition(a.spr.x, a.spr.y - a.spr.height * Math.abs(a.spr.scaleX) - 2 * S).setVisible(a.spr.visible); });

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
    const spr = this.wobj(this.add.sprite(a.x * S, (a.y ?? GROUND) * S, `${a.sprite}_0`).setOrigin(0.5, 1).setScale(S * (a.scale || 1)).setDepth(a.depth ?? 10));
    spr.setFlipX(a.face === 'left');
    if (a.hidden) spr.setVisible(false);
    this.actors[a.id] = { spr, sprite: a.sprite, name: a.name || a.id, homeX: spr.x, phase: Math.random() * 6.28,
      nextFidget: this.time.now + Phaser.Math.Between(1200, 3500), look: 0, call: a.call || (a.tag ? a.tag.toLowerCase().split(' ').pop() : null) };
    if (a.tag) this.makeTag(this.actors[a.id], a.tag, a.tagColor);
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

  // ---------- gaya "simulasi" ----------
  // jam simulasi di pojok kiri atas; { clock: 'BULAN', from: 1, to: 6, dur } menghitung maju
  async clock(st) {
    if (!this.clockText || !this.clockText.active) {
      this.clockText = this.uobj(this.add.text(14, this.V ? 52 : 14, '', {
        fontFamily: FONT, fontSize: `${this.V ? 16 : 15}px`, color: '#ffffff', backgroundColor: '#1a1c2c', padding: { x: 10, y: 8 },
      }).setDepth(165));
    }
    const set = t => this.clockText.setText(`>> ${t}`);
    if (st.from === undefined) {
      set(st.clock);
      if (!st.instant) { this.clockText.setScale(1.25); await this.tween({ targets: this.clockText, scale: 1, duration: 200 }); }
      return;
    }
    const n = st.to - st.from, step = (st.dur ?? 1500) / Math.max(1, n);
    this.sfx('tick', 0.6);
    for (let i = st.from; i <= st.to; i++) {
      set(`${st.clock} ${i}`);
      this.clockText.setColor(i === st.to ? '#ffffff' : '#ffcd75');
      if (i < st.to) await this.wait(step);
    }
    this.clockText.setScale(1.25);
    await this.tween({ targets: this.clockText, scale: 1, duration: 200 });
  }

  // stempel besar: { stamp: 'DITOLAK', color: '#e43b44' }
  async stamp(st) {
    const col = st.color || '#e43b44';
    const [fx, fy] = st.at || [0.5, 0.42];
    const t = this.uobj(this.add.text(this.GW * fx, this.GH * fy, st.stamp, {
      fontFamily: FONT, fontSize: `${this.V ? 44 : 52}px`, color: col, stroke: '#f4f4f4', strokeThickness: 8,
      backgroundColor: '#f4f4f4', padding: { x: 18, y: 14 },
    }).setOrigin(0.5).setDepth(190).setAngle(st.angle ?? -10).setScale(2.6).setAlpha(0));
    const border = this.uobj(this.add.rectangle(t.x, t.y, t.width + 10, t.height + 10).setStrokeStyle(8, Phaser.Display.Color.HexStringToColor(col).color).setDepth(191).setAngle(t.angle).setScale(2.6).setAlpha(0));
    await this.tween({ targets: [t, border], scale: 1, alpha: 1, duration: 140, ease: 'Quad.easeIn' });
    this.sfx('stamp');
    this.time.delayedCall(180, () => this.sfx(st.color && st.color !== '#e43b44' ? 'success' : 'buzz', 0.7));
    this.ctl.forEach(c => c.cam.shake(220, 0.012));
    this.time.delayedCall(st.life ?? 1600, () => {
      if (t.active) this.tweens.add({ targets: [t, border], alpha: 0, duration: 200, onComplete: () => { t.destroy(); border.destroy(); } });
    });
    await this.wait(st.dur ?? 200);
  }

  // struk tagihan ala kasir: { receipt: 'STRUK TAGIHAN DIMAS', lines: [['HP', 'Rp4.000.000'], ...], total: [...], note }
  async receipt(st) {
    const w = this.V ? 500 : 560, pad = 20;
    const style = (size, color = '#1a1c2c') => ({ fontFamily: FONT, fontSize: `${size}px`, color });
    const x0 = this.GW / 2 - w / 2, y0 = this.V ? 150 : 30;
    const dim = this.uobj(this.add.rectangle(0, 0, this.GW, this.GH, 0x05060f, 0.6).setOrigin(0).setDepth(184).setAlpha(0));
    this.tweens.add({ targets: dim, alpha: 1, duration: 250 });
    this.extras.push(dim);
    const box = this.uobj(this.add.container(0, 0).setDepth(185));
    const paper = this.add.rectangle(x0, y0, w, 10, 0xf4f4f4).setOrigin(0);
    box.add(paper);
    let y = y0 + pad;
    const addRow = (left, right, size = 17, color) => {
      const l = this.add.text(x0 + pad, y, left, style(size, color));
      const r = right ? this.add.text(x0 + w - pad, y, right, style(size, color)).setOrigin(1, 0) : null;
      box.add(l); if (r) box.add(r);
      y += l.height + 10;
      return [l, r].filter(Boolean);
    };
    const dash = () => { const d = this.add.text(x0 + pad, y, '- '.repeat(Math.floor((w - pad * 2) / 22)), style(12, '#94b0c2')); box.add(d); y += d.height + 8; return [d]; };
    const rows = [];
    rows.push(addRow(st.receipt, null, 20));
    rows.push(dash());
    st.lines.forEach(([a, b]) => rows.push(addRow(a, b)));
    rows.push(dash());
    if (st.total) rows.push(addRow(st.total[0], st.total[1], 20, '#e43b44'));
    if (st.note) rows.push(addRow(st.note, null, 13, '#b13e53'));
    paper.height = y - y0 + pad / 2;
    paper.setSize(w, y - y0 + pad / 2);
    // gerigi bawah
    const g = this.add.graphics();
    g.fillStyle(0xf4f4f4);
    for (let x = x0; x < x0 + w; x += 16) g.fillTriangle(x, y0 + paper.height, x + 16, y0 + paper.height, x + 8, y0 + paper.height + 10);
    box.add(g);
    rows.flat().forEach(o => o.setAlpha(0));
    this.extras.push(box);
    box.y = -20; box.alpha = 0;
    await this.tween({ targets: box, y: 0, alpha: 1, duration: 250, ease: 'Quad.out' });
    for (const r of rows) { r.forEach(o => o.setAlpha(1)); await this.wait(st.stagger ?? 380); }
    this.sfx('kaching');
    await this.wait(st.dur ?? 300);
  }

  // label saldo/nama di atas kepala tokoh (ikut zoom dunia)
  makeTag(a, text, color) {
    a.tagText = this.wobj(this.add.text(a.spr.x, a.spr.y, text, {
      fontFamily: FONT, fontSize: '7px', color: '#ffffff', backgroundColor: color || '#1a1c2c', padding: { x: 3, y: 2 }, resolution: 4,
    }).setOrigin(0.5, 1).setDepth(60).setScale(S / 2.5));
  }
  async setTag(st) {
    const a = this.actor(st.tag);
    if (!a.tagText) this.makeTag(a, st.text, st.color);
    a.tagText.setText(st.text);
    if (st.color) a.tagText.setBackgroundColor(st.color);
    const base = S / 2.5;
    a.tagText.setScale(base * 1.5);
    await this.tween({ targets: a.tagText, scale: base, duration: 250, ease: 'Back.out' });
    await this.wait(st.dur ?? 0);
  }

  // stiker reaksi: { sticker: 'cool', at: [0.75, 0.3] } (posisi relatif layar)
  async sticker(st) {
    const [fx, fy] = st.at || [0.78, 0.32];
    const img = this.uobj(this.add.image(this.GW * fx, this.GH * fy, `stk_${st.sticker}`).setDepth(175).setScale(0)
      .setAngle(Phaser.Math.Between(-12, 12)));
    const sc = (st.size || 1) * (this.V ? 7 : 6);
    this.tweens.add({ targets: img, scale: sc, duration: 260, ease: 'Back.out' });
    this.tweens.add({ targets: img, angle: img.angle + 6, yoyo: true, repeat: -1, duration: 260, delay: 260 });
    this.time.delayedCall(st.life ?? 1700, () => {
      if (img.active) this.tweens.add({ targets: img, scale: 0, duration: 180, onComplete: () => img.destroy() });
    });
    await this.wait(st.dur ?? 150);
  }

  async popProp(st) {
    const a = this.actor(st.pop);
    this.sfx('pop', 0.55);
    const target = a.spr.baseScale || S;
    a.spr.setVisible(true).setAlpha(1).setScale(0);
    const sp = this.wobj(this.add.image(a.spr.x, a.spr.y - a.spr.height * target / 2, 'spark').setScale(0).setDepth(30));
    this.tweens.add({ targets: sp, scale: S * 1.4, alpha: { from: 1, to: 0 }, duration: 380, onComplete: () => sp.destroy() });
    await this.tween({ targets: a.spr, scale: target, duration: 240, ease: 'Back.out' });
    await this.wait(st.dur ?? 0);
  }

  // teks kata kunci besar (gaya referensi). *kata* = sorotan kuning
  showKw(text) {
    if (this.kwObj && this.kwObj.active) this.kwObj.destroy();
    if (!text) { this.kwObj = null; return; }
    const size = this.V ? 36 : 32;
    const parts = text.split('*');
    const box = this.uobj(this.add.container(this.GW / 2, this.V ? this.GH * 0.66 : this.GH * 0.84).setDepth(160));
    let x = 0;
    const texts = parts.map((p, i) => [p, i % 2 === 1]).filter(([p]) => p !== '').map(([p, hi]) => {
      const t = this.add.text(x, 0, p, { fontFamily: FONT, fontSize: `${size}px`, color: hi ? '#ffcd75' : '#ffffff', stroke: '#1a1c2c', strokeThickness: 10 }).setOrigin(0, 0.5);
      x += t.width;
      return t;
    });
    texts.forEach(t => { t.x -= x / 2; box.add(t); });
    const fit = Math.min(1, (this.GW - 40) / x);
    box.setScale(fit * 0.6);
    this.tweens.add({ targets: box, scale: fit, duration: 170, ease: 'Back.out' });
    this.kwObj = box;
  }

  // jalankan "cue" di kata tertentu dalam kalimat narasi
  scheduleCues(st, totalMs, run) {
    const spoken = (st.speak || st.caption || st.hook || '').toLowerCase();
    (st.cues || []).forEach(cue => {
      const { at, at_, ...rest } = cue;
      if (at_) rest.at = at_;   // posisi stiker (at dipakai untuk waktu)
      let f = 0;
      if (typeof at === 'number') f = at;
      else if (at) { const i = spoken.indexOf(at.toLowerCase()); f = i < 0 ? 0 : i / Math.max(1, spoken.length); }
      this.time.delayedCall(f * totalMs, () => { if (this.alive(run)) this.runStep(rest, run); });
    });
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
    // angka desimal tetap tampil (0,1 / 7,1), bilangan bulat tanpa koma
    const fmt = v => st.bars.some(b => !Number.isInteger(b[1])) && Math.abs(v) < 100 ? v.toFixed(1).replace('.', ',') : String(Math.round(v));
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
        onUpdate: () => { bar.width = target * o.v; vt.setX(bx + pad + target * o.v + 8).setText(`${st.prefix || ''}${fmt(value * o.v)}${st.suffix || ''}`); },
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
    const z = this.ctl[this.split && st.x >= W ? 1 : 0].cam.zoom;
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
    this.calm(a);
    a.work = null;
    a.busy = true;
    a.spr.setVisible(true);
    a.spr.setFlipX(tx < a.spr.x);
    const dur = st.dur ?? (Math.abs(tx - a.spr.x) / S / (st.speed || 30)) * 1000;
    if (!a.prop) a.spr.play(`${a.sprite}_walk`);
    await this.tween({ targets: a.spr, x: tx, duration: dur });
    if (!a.prop) { a.spr.stop(); a.spr.setTexture(`${a.sprite}_0`); }
    a.busy = false; a.homeX = a.spr.x; a.nextFidget = this.time.now + 1500;
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
    this.calm(a);
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
  // tanpa VO: perkiraan tempo Fikri (1,2x) ±60 ms per huruf teks ucapan (+320 ms seperti jeda VO)
  holdTime(text, st) { return st.dur ?? Math.max(1300, (st.speak || text).length * 60 + 320); }

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

  async caption(st, run) {
    if (STORY.captionStyle === 'keyword' || st.style === 'keyword') {
      const vo = this.playVO(st);
      const hold = vo ? vo + 320 : this.holdTime(st.caption, st);
      // kalimat yang belum punya suara: tampilkan teks draf di bawah (untuk review sebelum membuat VO)
      if (!vo && st.vo && STORY.audioDir && STORY.draftSubs !== false) {
        const L = this.layout();
        const t = this.uobj(this.add.text(this.GW / 2, this.GH - (this.V ? 150 : 34), `[draf] ${st.caption}`, { fontFamily: FONT, fontSize: `${this.V ? 13 : 11}px`, color: '#ffcd75', backgroundColor: '#1a1c2ccc', padding: { x: 8, y: 6 }, align: 'center', wordWrap: { width: L.capW } }).setOrigin(0.5, 1).setDepth(190));
        this.time.delayedCall(hold, () => t.destroy());
      }
      this.scheduleCues(st, vo || hold, run ?? this.run);
      this.reactToName(st, vo || hold);
      if (st.punch) this.ctl.forEach(c => !this.tweens.isTweening(c) && this.tweens.add({ targets: c, z: c.z * 1.1, duration: hold + 300, ease: 'Sine.easeInOut' }));
      await this.wait(hold);
      if (!st.keepKw) this.showKw(null);
      return;
    }
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
