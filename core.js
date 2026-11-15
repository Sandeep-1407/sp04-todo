/* SP04 core: language, storage (encrypted), PIN lock, menu, router, helpers */
'use strict';
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
const pad = (n) => String(n).padStart(2, '0');
const ymd = (d = new Date()) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const today = () => ymd();
const parseYmd = (s) => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
const NATIVE = !!window.Capacitor?.isNativePlatform?.();
const Plug = (n) => (NATIVE ? (window.Capacitor.Plugins?.[n] || window.Capacitor.registerPlugin?.(n)) : null);

/* ---------- language ---------- */
const LS = { get: (k, d) => { try { const v = localStorage.getItem('sp04.' + k); return v == null ? d : JSON.parse(v); } catch { return d; } }, set: (k, v) => { try { localStorage.setItem('sp04.' + k, JSON.stringify(v)); } catch {} } };
let lang = LS.get('lang', 'hi');
const DICT = { en: {}, hi: {} };
const T = { add(o) { Object.assign(DICT.en, o.en); Object.assign(DICT.hi, o.hi); } };
const t = (k, vars) => { let s = DICT[lang]?.[k] ?? DICT.en[k] ?? k; if (vars) for (const [a, b] of Object.entries(vars)) s = s.replaceAll('{' + a + '}', b); return s; };
T.add({
  en: { home: 'Home', exp: 'Daily expenses', cal: 'Calendar & To-do', notes: 'Notes', diary: 'Diary', sheets: 'Sheets (Excel)', pass: 'Passwords', locker: 'Photo Locker', settings: 'Settings',
    save: 'Save', cancel: 'Cancel', del: 'Delete', edit: 'Edit', close: 'Close', add: 'Add', yes: 'Yes', no: 'No', search: 'Search…', done: 'Done', back: 'Back', all: 'All', share: 'Share',
    sure: 'Are you sure?', delSure: 'Delete this? It cannot be undone.', saved: 'Saved', deleted: 'Deleted', copied: 'Copied',
    newPin: 'Create your PIN', newPinP: 'Choose a 4–6 digit PIN. It locks SP04 and encrypts your passwords, notes and photos.',
    againPin: 'Enter the same PIN again', pinWarn: '⚠ If you forget this PIN, your data cannot be recovered — not even by us. Write it somewhere safe.',
    enterPin: 'Enter PIN', wrongPin: 'Wrong PIN', pinMismatch: 'PINs did not match. Try again.', waitSec: 'Too many tries. Wait {s} seconds.', unlocking: 'Opening…', setPinOk: 'OK, create PIN',
    sub: 'Daily Organizer', footer: 'Your data stays only on this phone, locked with your PIN.',
    today: 'Today', yesterday: 'Yesterday', tomorrow: 'Tomorrow', backupFile: 'Backup file', fileSaved: 'Saved to {p}', needNet: 'Needs internet the first time.' },
  hi: { home: 'होम', exp: 'रोज़ का ख़र्चा', cal: 'कैलेंडर और काम', notes: 'नोट्स', diary: 'डायरी', sheets: 'शीट (Excel)', pass: 'पासवर्ड', locker: 'फ़ोटो लॉकर', settings: 'सेटिंग',
    save: 'सेव करें', cancel: 'रद्द करें', del: 'हटाएँ', edit: 'बदलें', close: 'बंद करें', add: 'जोड़ें', yes: 'हाँ', no: 'नहीं', search: 'खोजें…', done: 'हो गया', back: 'वापस', all: 'सब', share: 'शेयर',
    sure: 'पक्का?', delSure: 'इसे हटाना है? वापस नहीं आएगा।', saved: 'सेव हो गया', deleted: 'हटा दिया', copied: 'कॉपी हो गया',
    newPin: 'अपना PIN बनाएँ', newPinP: '4 से 6 अंकों का PIN चुनें। इससे SP04 लॉक होगा और आपके पासवर्ड, नोट्स और फ़ोटो सुरक्षित (encrypt) रहेंगे।',
    againPin: 'वही PIN फिर से डालें', pinWarn: '⚠ PIN भूल गए तो आपका डेटा वापस नहीं मिलेगा — हम भी नहीं निकाल सकते। PIN कहीं सुरक्षित लिख लें।',
    enterPin: 'PIN डालें', wrongPin: 'गलत PIN', pinMismatch: 'दोनों PIN अलग थे। फिर से डालें।', waitSec: 'बहुत बार गलत हुआ। {s} सेकंड रुकें।', unlocking: 'खुल रहा है…', setPinOk: 'ठीक है, PIN बनाएँ',
    sub: 'रोज़ का साथी', footer: 'आपका डेटा सिर्फ़ इसी फ़ोन में है, आपके PIN से लॉक।',
    today: 'आज', yesterday: 'कल (बीता)', tomorrow: 'कल (आने वाला)', backupFile: 'बैकअप फ़ाइल', fileSaved: '{p} में सेव हुआ', needNet: 'पहली बार इंटरनेट चाहिए।' },
});
const LOCALE = () => (lang === 'hi' ? 'hi-IN' : 'en-IN');
const money = (n) => '₹' + (Math.round((+n || 0) * 100) / 100).toLocaleString('en-IN', { maximumFractionDigits: 2 });
const fmtDate = (s, opt = { day: 'numeric', month: 'short', year: 'numeric' }) => { if (!s) return ''; const d = typeof s === 'string' ? parseYmd(s) : new Date(s); return d.toLocaleDateString(LOCALE(), opt); };
const dayLabel = (s) => { const d = today(); if (s === d) return t('today'); const x = new Date(); x.setDate(x.getDate() - 1); if (s === ymd(x)) return t('yesterday'); x.setDate(x.getDate() + 2); if (s === ymd(x)) return t('tomorrow'); return fmtDate(s, { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }); };

/* ---------- small UI helpers ---------- */
let toastT;
function toast(msg, ms = 2200) { const el = $('#toast'); el.textContent = msg; el.classList.remove('hidden'); clearTimeout(toastT); toastT = setTimeout(() => el.classList.add('hidden'), ms); }
let modalClose = null;
function openModal(title, html, onMount, onClose) {
  const m = $('#modal'), box = $('.box', m);
  box.innerHTML = `<div class="mh"><b>${esc(title)}</b><button class="iconbtn" data-x>✕</button></div><div class="mb">${html}</div>`;
  m.classList.remove('hidden');
  modalClose = onClose || null;
  $('[data-x]', box).onclick = closeModal;
  m.onclick = (e) => { if (e.target === m) closeModal(); };
  if (!history.state?.modal) history.pushState({ ...(history.state || {}), modal: 1 }, '');
  onMount && onMount(box);
  return box;
}
function closeModal(fromPop) {
  const m = $('#modal'); if (m.classList.contains('hidden')) return;
  m.classList.add('hidden'); $('.box', m).innerHTML = '';
  const c = modalClose; modalClose = null; c && c();
  if (fromPop !== true && history.state?.modal) {
    return new Promise((res) => { const done = () => { clearTimeout(tm); window.removeEventListener('popstate', done); res(); }; const tm = setTimeout(done, 400); window.addEventListener('popstate', done); history.back(); });
  }
  return Promise.resolve();
}
function ask(msg, okLabel = t('yes'), danger = true) {
  return new Promise((res) => {
    let r = false;
    openModal(t('sure'), `<p>${esc(msg)}</p><div class="row" style="justify-content:flex-end;margin-top:14px"><button class="btn ghost" data-n>${esc(t('no'))}</button><button class="btn ${danger ? 'red' : 'gold'}" data-y>${esc(okLabel)}</button></div>`,
      (b) => { $('[data-n]', b).onclick = () => closeModal(); $('[data-y]', b).onclick = () => { r = true; closeModal(); }; }, () => res(r));
  });
}
function pickFile(accept, multiple = false) {
  return new Promise((res) => {
    const inp = $('#filePick'); inp.value = ''; inp.accept = accept || ''; inp.multiple = multiple;
    inp.onchange = () => res(multiple ? [...inp.files] : inp.files[0] || null);
    inp.click();
  });
}
const blobToB64 = (blob) => new Promise((r) => { const fr = new FileReader(); fr.onload = () => r(String(fr.result).split(',')[1]); fr.readAsDataURL(blob); });
const b64ToBytes = (b) => Uint8Array.from(atob(b), (c) => c.charCodeAt(0));
const bytesToB64 = (u8) => { let s = ''; const n = 0x8000; for (let i = 0; i < u8.length; i += n) s += String.fromCharCode.apply(null, u8.subarray(i, i + n)); return btoa(s); };

/** Save / download a file. Native app: writes to Documents/SP04. Browser: normal download. */
async function saveFile(name, blob) {
  if (NATIVE) {
    const FS = Plug('Filesystem');
    try { await FS.requestPermissions?.(); } catch {}
    const data = await blobToB64(blob);
    await FS.writeFile({ path: 'SP04/' + name, data, directory: 'DOCUMENTS', recursive: true });
    toast(t('fileSaved', { p: 'Documents/SP04/' + name }), 4000);
    return;
  }
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name;
  document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 4000);
}
let xlsxP;
function loadXLSX() {
  if (window.XLSX) return Promise.resolve(window.XLSX);
  return xlsxP || (xlsxP = new Promise((res, rej) => {
    const s = document.createElement('script'); s.src = 'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js';
    s.onload = () => res(window.XLSX); s.onerror = () => { xlsxP = null; rej(new Error(t('needNet'))); }; document.head.appendChild(s);
  }));
}
/** Shrink an image file to a JPEG data URL (for notes/thumbnails). */
function imageToDataURL(file, max = 1280, q = 0.78) {
  return new Promise((res, rej) => {
    const url = URL.createObjectURL(file), img = new Image();
    img.onload = () => {
      const r = Math.min(1, max / Math.max(img.naturalWidth, img.naturalHeight));
      const c = document.createElement('canvas'); c.width = Math.round(img.naturalWidth * r); c.height = Math.round(img.naturalHeight * r);
      c.getContext('2d').drawImage(img, 0, 0, c.width, c.height); URL.revokeObjectURL(url);
      res({ url: c.toDataURL('image/jpeg', q), w: img.naturalWidth, h: img.naturalHeight });
    };
    img.onerror = () => { URL.revokeObjectURL(url); rej(new Error('image')); };
    img.src = url;
  });
}

/* ---------- IndexedDB ---------- */
const IDB = (() => {
  let p;
  const open = () => p || (p = new Promise((res, rej) => {
    const r = indexedDB.open('sp04', 1);
    r.onupgradeneeded = () => { const d = r.result; d.createObjectStore('meta'); d.createObjectStore('rec', { keyPath: 'id' }); d.createObjectStore('blob'); };
    r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error);
  }));
  const tx = async (st, mode, fn) => { const d = await open(); return new Promise((res, rej) => { const x = d.transaction(st, mode); let out; const q = fn(x.objectStore(st)); if (q) q.onsuccess = () => { out = q.result; }; x.oncomplete = () => res(out); x.onerror = () => rej(x.error); x.onabort = () => rej(x.error); }); };
  return {
    get: (st, k) => tx(st, 'readonly', (s) => s.get(k)),
    put: (st, v, k) => tx(st, 'readwrite', (s) => (k === undefined ? s.put(v) : s.put(v, k))),
    del: (st, k) => tx(st, 'readwrite', (s) => s.delete(k)),
    all: (st) => tx(st, 'readonly', (s) => s.getAll()),
    keys: (st) => tx(st, 'readonly', (s) => s.getAllKeys()),
    clear: (st) => tx(st, 'readwrite', (s) => s.clear()),
  };
})();

/* ---------- Crypto: PIN -> key-encryption key -> random data key ---------- */
const CR = (() => {
  const enc = new TextEncoder(), dec = new TextDecoder();
  let key = null;
  const ITER = 210000;
  async function kek(pin, salt, iter) {
    const base = await crypto.subtle.importKey('raw', enc.encode(pin), 'PBKDF2', false, ['deriveKey']);
    return crypto.subtle.deriveKey({ name: 'PBKDF2', salt, iterations: iter, hash: 'SHA-256' }, base, { name: 'AES-GCM', length: 256 }, false, ['wrapKey', 'unwrapKey']);
  }
  async function wrap(pin, dataKey) {
    const salt = crypto.getRandomValues(new Uint8Array(16)), iv = crypto.getRandomValues(new Uint8Array(12));
    const k = await kek(pin, salt, ITER);
    const wrapped = new Uint8Array(await crypto.subtle.wrapKey('raw', dataKey, k, { name: 'AES-GCM', iv }));
    return { salt, iv, wrapped, iter: ITER, v: 1 };
  }
  return {
    get ready() { return !!key; },
    async setup(pin) {
      const dk = await crypto.subtle.generateKey({ name: 'AES-GCM', length: 256 }, true, ['encrypt', 'decrypt']);
      await IDB.put('meta', await wrap(pin, dk), 'keybox'); key = dk;
    },
    async unlock(pin, box) {
      box = box || (await IDB.get('meta', 'keybox'));
      const k = await kek(pin, box.salt, box.iter);
      try { key = await crypto.subtle.unwrapKey('raw', box.wrapped, k, { name: 'AES-GCM', iv: box.iv }, { name: 'AES-GCM', length: 256 }, true, ['encrypt', 'decrypt']); return true; } catch { return false; }
    },
    async changePin(oldPin, newPin) {
      const box = await IDB.get('meta', 'keybox'); const k = await kek(oldPin, box.salt, box.iter);
      let dk; try { dk = await crypto.subtle.unwrapKey('raw', box.wrapped, k, { name: 'AES-GCM', iv: box.iv }, { name: 'AES-GCM', length: 256 }, true, ['encrypt', 'decrypt']); } catch { return false; }
      await IDB.put('meta', await wrap(newPin, dk), 'keybox'); return true;
    },
    async encBytes(u8) { const iv = crypto.getRandomValues(new Uint8Array(12)); return { iv, ct: new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, u8)) }; },
    async decBytes(o) { return new Uint8Array(await crypto.subtle.decrypt({ name: 'AES-GCM', iv: o.iv }, key, o.ct)); },
    async encJSON(obj) { return this.encBytes(enc.encode(JSON.stringify(obj))); },
    async decJSON(o) { return JSON.parse(dec.decode(await this.decBytes(o))); },
    forget() { key = null; },
  };
})();

/* ---------- Encrypted record store (all kinds kept in memory after unlock) ---------- */
const DB = (() => {
  const mem = new Map();
  const subs = new Set();
  return {
    async load() {
      mem.clear();
      for (const r of await IDB.all('rec')) { try { mem.set(r.id, await CR.decJSON(r)); } catch (e) { console.warn('bad record', r.id, e); } }
    },
    all: (kind) => [...mem.values()].filter((r) => r.kind === kind),
    get: (id) => mem.get(id),
    async save(rec) {
      rec.id = rec.id || uid(); rec.upd = Date.now(); rec.ts = rec.ts || rec.upd;
      mem.set(rec.id, rec);
      const e = await CR.encJSON(rec); await IDB.put('rec', { id: rec.id, iv: e.iv, ct: e.ct });
      subs.forEach((f) => f(rec)); return rec;
    },
    async del(id) { const r = mem.get(id); mem.delete(id); await IDB.del('rec', id); if (r?.blobs) for (const b of r.blobs) await IDB.del('blob', b); subs.forEach((f) => f(r)); },
    onChange: (f) => subs.add(f),
    async putBlob(u8) { const id = 'b' + uid(); const e = await CR.encBytes(u8); await IDB.put('blob', { iv: e.iv, ct: e.ct }, id); return id; },
    async getBlob(id) { const o = await IDB.get('blob', id); return o ? CR.decBytes(o) : null; },
    delBlob: (id) => IDB.del('blob', id),
  };
})();

/* ---------- Lock screen ---------- */
const Lock = (() => {
  let entered = '', stage = 'unlock', firstPin = '', fails = LS.get('fails', 0), busy = false;
  const L = $('#lock');
  function view(title, sub, extra = '') {
    L.innerHTML = `<img src="icon-192.png" alt=""><h2>${esc(title)}</h2><p>${esc(sub)}</p>${extra}
      <div class="dots">${'<i></i>'.repeat(6)}</div>
      <div class="keypad">${[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => `<button data-k="${n}">${n}</button>`).join('')}<button data-k="del">⌫</button><button data-k="0">0</button><button data-k="ok" style="color:var(--gold2)">✔</button></div>
      <div class="lockmsg" id="lockMsg"></div>
      <button class="btn ghost sm" id="langL" style="margin-top:14px">${lang === 'hi' ? 'English' : 'हिंदी'}</button>`;
    $('#langL').onclick = () => { lang = lang === 'hi' ? 'en' : 'hi'; LS.set('lang', lang); show(); };
    L.querySelector('.keypad').onclick = (e) => { const k = e.target.closest('[data-k]')?.dataset.k; if (k) press(k); };
    dots();
  }
  function dots() { $$('.dots i', L).forEach((d, i) => { d.classList.toggle('f', i < entered.length); d.style.display = i < Math.max(4, entered.length) ? '' : 'none'; }); }
  const msg = (m) => { const el = $('#lockMsg'); if (el) el.textContent = m || ''; };
  async function press(k) {
    if (busy) return;
    if (k === 'del') { entered = entered.slice(0, -1); dots(); return; }
    if (k !== 'ok') { if (entered.length < 6) entered += k; dots(); if (stage === 'unlock' && entered.length === 6) press('ok'); return; }
    if (entered.length < 4) { msg('4–6'); return; }
    if (stage === 'new') { firstPin = entered; entered = ''; stage = 'again'; view(t('againPin'), t('newPinP')); return; }
    if (stage === 'again') {
      if (entered !== firstPin) { stage = 'new'; entered = ''; view(t('newPin'), t('newPinP'), `<div class="warnbox">${esc(t('pinWarn'))}</div>`); msg(t('pinMismatch')); return; }
      busy = true; msg(''); $('#lockMsg').style.color = 'var(--gold2)'; msg(t('unlocking'));
      await CR.setup(entered); entered = ''; busy = false; return opened();
    }
    const wait = LS.get('waitUntil', 0) - Date.now();
    if (wait > 0) { msg(t('waitSec', { s: Math.ceil(wait / 1000) })); entered = ''; dots(); return; }
    busy = true; $('#lockMsg').style.color = 'var(--gold2)'; msg(t('unlocking'));
    const ok = await CR.unlock(entered); busy = false; $('#lockMsg').style.color = '';
    if (!ok) {
      fails++; LS.set('fails', fails); entered = ''; dots();
      if (fails >= 5) { LS.set('waitUntil', Date.now() + 30000 * Math.min(8, fails - 4)); msg(t('waitSec', { s: 30 * Math.min(8, fails - 4) })); } else msg(t('wrongPin'));
      L.querySelector('.dots').animate([{ transform: 'translateX(-8px)' }, { transform: 'translateX(8px)' }, { transform: 'none' }], { duration: 250 });
      return;
    }
    fails = 0; LS.set('fails', 0); entered = ''; opened();
  }
  async function opened() { await DB.load(); L.classList.add('hidden'); L.innerHTML = ''; $('#app').classList.remove('hidden'); App.start(); }
  async function show() {
    entered = '';
    const box = await IDB.get('meta', 'keybox');
    if (!box) { stage = stage === 'again' ? 'again' : 'new'; if (stage === 'new') view(t('newPin'), t('newPinP'), `<div class="warnbox">${esc(t('pinWarn'))}</div>`); else view(t('againPin'), t('newPinP')); }
    else { stage = 'unlock'; view(t('enterPin'), 'SP04 · ' + t('sub')); }
  }
  document.addEventListener('keydown', (e) => { if (L.classList.contains('hidden')) return; if (/^\d$/.test(e.key)) press(e.key); else if (e.key === 'Backspace') press('del'); else if (e.key === 'Enter') press('ok'); });
  return { show, async lockNow() { try { await App.flush?.(); } catch {} CR.forget(); location.reload(); } };
})();

/* auto-lock when the app is hidden for a while */
let hiddenAt = 0, keepOpen = false;
document.addEventListener('visibilitychange', () => {
  if (document.hidden) { hiddenAt = Date.now(); try { App.flush?.(); } catch {} }
  else if (CR.ready && !keepOpen && hiddenAt) { const lim = LS.get('autolock', 60) * 1000; if (lim >= 0 && Date.now() - hiddenAt > lim) Lock.lockNow(); }
});
/** Use around file pickers / camera so the app does not auto-lock while the picker is open. */
async function keepUnlocked(fn) { keepOpen = true; try { return await fn(); } finally { setTimeout(() => { keepOpen = false; }, 1500); } }

/* ---------- Router + menu ---------- */
const PAGES = {};      // name -> { icon, title(), render(el, arg), actions? }
const MENU = ['home', 'exp', 'cal', 'notes', 'diary', 'sheets', 'pass', 'locker', 'settings'];
const App = {
  started: false,
  start() {
    if (this.started) return; this.started = true;
    $('#menuBtn').onclick = () => this.drawer(true);
    $('#scrim').onclick = () => this.drawer(false);
    $('#lockBtn').onclick = () => Lock.lockNow();
    window.addEventListener('hashchange', () => this.route());
    window.addEventListener('popstate', () => { if (!$('#modal').classList.contains('hidden')) closeModal(true); });
    this.menu(); this.route();
    PAGES.cal?.boot?.();
  },
  menu() {
    $('#menu').innerHTML = MENU.map((k) => `<a href="#/${k}" data-k="${k}"><span>${PAGES[k]?.icon || ''}</span><span>${esc(t(k))}</span></a>`).join('');
    $('#menu').onclick = (e) => { if (e.target.closest('a')) this.drawer(false); };
    $('#brandSub').textContent = t('sub'); $('#drawerFoot').textContent = '🔒 ' + t('footer');
    document.documentElement.lang = lang;
  },
  drawer(open) { $('#drawer').classList.toggle('open', open); $('#scrim').classList.toggle('hidden', !open); },
  route() {
    const [name, ...rest] = (location.hash.replace(/^#\/?/, '') || 'home').split('/');
    this.flush = null;
    if (this.leave) { const f = this.leave; this.leave = null; try { f(); } catch (e) { console.warn(e); } }
    const pg = PAGES[name] || PAGES.home;
    const key = PAGES[name] ? name : 'home';
    $$('#menu a').forEach((a) => a.classList.toggle('on', a.dataset.k === (pg.menuKey || key)));
    $('#pageTitle').textContent = pg.title ? pg.title(rest) : t(key);
    $('#topActions').innerHTML = '';
    if (!$('#modal').classList.contains('hidden')) closeModal(true);
    const el = $('#page'); el.innerHTML = ''; scrollTo(0, 0);
    this.current = { name: key, rest };
    pg.render(el, rest.map(decodeURIComponent));
  },
  refresh() { if (this.current?.name === 'note') return; if (this.current) { const y = scrollY; const pg = PAGES[this.current.name]; $('#page').innerHTML = ''; $('#topActions').innerHTML = ''; pg.render($('#page'), this.current.rest.map(decodeURIComponent)); scrollTo(0, y); } },
  setLang(l) { lang = l; LS.set('lang', l); this.menu(); this.route(); },
};
const go = (h) => { location.hash = h; };
function topAction(icon, label, fn) { const b = document.createElement('button'); b.className = 'iconbtn'; b.textContent = icon; b.title = label; b.setAttribute('aria-label', label); b.onclick = fn; $('#topActions').appendChild(b); return b; }
function fab(fn, icon = '+') { const b = document.createElement('button'); b.className = 'fab'; b.textContent = icon; b.onclick = fn; $('#page').appendChild(b); return b; }

/* ---------- Backup ---------- */
const Backup = {
  async export() {
    const recs = await IDB.all('rec'), keys = await IDB.keys('blob'), box = await IDB.get('meta', 'keybox');
    const blobs = [];
    for (const k of keys) { const o = await IDB.get('blob', k); blobs.push({ id: k, iv: bytesToB64(o.iv), ct: bytesToB64(o.ct) }); }
    const out = { app: 'SP04', v: 1, date: new Date().toISOString(), keybox: { salt: bytesToB64(box.salt), iv: bytesToB64(box.iv), wrapped: bytesToB64(box.wrapped), iter: box.iter },
      recs: recs.map((r) => ({ id: r.id, iv: bytesToB64(r.iv), ct: bytesToB64(r.ct) })), blobs };
    await saveFile(`SP04-backup-${today()}.sp04`, new Blob([JSON.stringify(out)], { type: 'application/json' }));
  },
  async import(file, pin) {
    const data = JSON.parse(await file.text());
    if (data.app !== 'SP04') throw new Error('Not an SP04 backup');
    const kb = { salt: b64ToBytes(data.keybox.salt), iv: b64ToBytes(data.keybox.iv), wrapped: b64ToBytes(data.keybox.wrapped), iter: data.keybox.iter, v: 1 };
    if (!(await CR.unlock(pin, kb))) return false;
    await IDB.clear('rec'); await IDB.clear('blob');
    for (const r of data.recs) await IDB.put('rec', { id: r.id, iv: b64ToBytes(r.iv), ct: b64ToBytes(r.ct) });
    for (const b of data.blobs) await IDB.put('blob', { iv: b64ToBytes(b.iv), ct: b64ToBytes(b.ct) }, b.id);
    await IDB.put('meta', kb, 'keybox');
    return true;
  },
};

/* ---------- start ---------- */
window.addEventListener('DOMContentLoaded', () => {
  Lock.show();
  if ('serviceWorker' in navigator && !NATIVE) navigator.serviceWorker.register('./sw.js').catch(() => {});
});
// test hook (no secrets)
window.__sp04 = { get unlocked() { return CR.ready; }, count: (k) => DB.all(k).length };
