/* SP04 v2 UI layer: line icons, light/dark theme, text size, button style, floating button, bottom tab bar */
'use strict';
const ICONS = {
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  home: '<path d="M4 11l8-6.5 8 6.5"/><path d="M6 10v9h12v-9"/><path d="M10 19v-5h4v5"/>',
  lock: '<rect x="5" y="11" width="14" height="9" rx="2.5"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  shield: '<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/><path d="M9.5 12l2 2 3.5-4"/>',
  key: '<circle cx="8" cy="15" r="4"/><path d="M11 12l8-8M16 7l2.5 2.5M14 9l2 2"/>',
  trash: '<path d="M4 7h16M10 11v6M14 11v6"/><path d="M6 7l1 12.5a1.5 1.5 0 0 0 1.5 1.5h7a1.5 1.5 0 0 0 1.5-1.5L18 7"/><path d="M9 7V4.5h6V7"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  checkc: '<circle cx="12" cy="12" r="9"/><path d="M8 12.5l3 3 5-6"/>',
  checkbox: '<rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8 12.5l3 3 5-6"/>',
  x: '<path d="M6 6l12 12M18 6L6 18"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  minus: '<path d="M5 12h14"/>',
  book: '<path d="M5 4.5h10a3 3 0 0 1 3 3V20H8a3 3 0 0 1-3-3z"/><path d="M5 17a3 3 0 0 1 3-3h10"/><path d="M9 8h5"/>',
  clip: '<rect x="5" y="4.5" width="14" height="16" rx="2.5"/><path d="M9 4.5V3.5h6v1M9 10h6M9 14h6M9 18h3"/>',
  alert: '<path d="M12 4l9 16H3z"/><path d="M12 10v4M12 17.2v.1"/>',
  upload: '<path d="M12 15V4M7.5 8.5L12 4l4.5 4.5"/><path d="M5 14v4.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V14"/>',
  download: '<path d="M12 4v11M7.5 10.5L12 15l4.5-4.5"/><path d="M5 14v4.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V14"/>',
  chart: '<path d="M4 20h16"/><rect x="6" y="11" width="3" height="7" rx="1"/><rect x="11" y="6" width="3" height="12" rx="1"/><rect x="16" y="13" width="3" height="5" rx="1"/>',
  note: '<path d="M6 3.5h8l4 4V19a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 5 19V5a1.5 1.5 0 0 1 1-1.5z"/><path d="M14 3.5V8h4M8.5 12h7M8.5 16h5"/>',
  wallet: '<path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H18v3"/><rect x="4" y="8" width="16" height="11" rx="2.5"/><path d="M16 13.5h1.5"/>',
  alarm: '<circle cx="12" cy="13" r="7"/><path d="M12 9.5V13l2.5 2M4.5 5.5l2.5-2M19.5 5.5l-2.5-2"/>',
  bell: '<path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 20a2 2 0 0 0 4 0"/>',
  pin: '<path d="M9 4h6l-1 5 3 3H7l3-3z"/><path d="M12 12v8"/>',
  mappin: '<path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/>',
  image: '<rect x="4" y="5" width="16" height="14" rx="2.5"/><circle cx="9" cy="10" r="1.6"/><path d="M5 17l4.5-4.5 3.5 3.5 2.5-2.5L20 17.5"/>',
  camera: '<path d="M4 8.5A1.5 1.5 0 0 1 5.5 7h2.5l1.5-2h5L16 7h2.5A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z"/><circle cx="12" cy="12.5" r="3.5"/>',
  save: '<path d="M5 4.5h11l3 3V18a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 18z"/><path d="M8 4.5V9h7V4.5M8 19.5v-5h8v5"/>',
  sparkle: '<path d="M12 3.5l1.8 5.2 5.2 1.8-5.2 1.8L12 17.5l-1.8-5.2L5 10.5l5.2-1.8z"/><path d="M18.5 16v4M16.5 18h4"/>',
  box: '<path d="M4 8l8-4 8 4v8l-8 4-8-4z"/><path d="M4 8l8 4 8-4M12 12v8"/>',
  card: '<rect x="3.5" y="6" width="17" height="12" rx="2.5"/><path d="M3.5 10h17M7 14.5h3"/>',
  calendar: '<rect x="4" y="5.5" width="16" height="14.5" rx="2.5"/><path d="M4 10h16M8.5 3.5v4M15.5 3.5v4"/><path d="M8 14h2M12 14h2M8 17h2"/>',
  pad: '<rect x="5" y="4" width="14" height="17" rx="2.5"/><path d="M9 2.8v2.4M15 2.8v2.4M8.5 10h7M8.5 14h7M8.5 18h4"/>',
  pencil: '<path d="M14.5 5.5l4 4L9 19H5v-4z"/><path d="M12.5 7.5l4 4"/>',
  refresh: '<path d="M19 12a7 7 0 1 1-2.1-5"/><path d="M19 4.5V8h-3.5"/>',
  backspace: '<path d="M9 6h10a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 19 18H9l-5.5-6z"/><path d="M12 9.5l5 5M17 9.5l-5 5"/>',
  food: '<path d="M7 3.5v7.5M5 3.5V8a2 2 0 0 0 4 0V3.5M7 11v9.5"/><path d="M16.5 20.5V3.5c-2 1-3 3.5-3 6.5v3h3"/>',
  cart: '<path d="M3.5 4.5h2.5l2.2 10.5h9.6l2-7.5H7"/><circle cx="9.5" cy="19" r="1.4"/><circle cx="17" cy="19" r="1.4"/>',
  fuel: '<path d="M5 20V5.5A1.5 1.5 0 0 1 6.5 4h6A1.5 1.5 0 0 1 14 5.5V20M4 20h11M7.5 8h4"/><path d="M14 10h2a1.5 1.5 0 0 1 1.5 1.5V16a1.5 1.5 0 0 0 3 0V8.5L18 6"/>',
  bulb: '<path d="M9 17.5h6M10 20.5h4"/><path d="M8.5 14.5A6 6 0 1 1 15.5 14.5c-.8.7-1 1.4-1 2.5h-5c0-1.1-.2-1.8-1-2.5z"/>',
  bag: '<path d="M5.5 8h13l-1 12h-11z"/><path d="M9 10V7a3 3 0 0 1 6 0v3"/>',
  pill: '<rect x="3.2" y="8.5" width="17.6" height="7" rx="3.5" transform="rotate(-45 12 12)"/><path d="M9.5 9.5l5 5"/>',
  books: '<path d="M5 4.5h4v15H5zM9 6.5h4v13H9z"/><path d="M14 6.8l3.6-1 3.4 13.5-3.7 1z"/>',
  film: '<rect x="4" y="4.5" width="16" height="15" rx="2.5"/><path d="M8 4.5v15M16 4.5v15M4 9.5h4M4 14.5h4M16 9.5h4M16 14.5h4"/>',
  gift: '<rect x="4" y="9" width="16" height="4" rx="1"/><path d="M5.5 13v7h13v-7M12 9v11"/><path d="M12 9c-3.5 0-5-1.5-4-3.5s4 .5 4 3.5zM12 9c3.5 0 5-1.5 4-3.5s-4 .5-4 3.5z"/>',
  briefcase: '<rect x="4" y="7.5" width="16" height="12" rx="2.5"/><path d="M9 7.5V6a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 6v1.5M4 12.5h16"/>',
  store: '<path d="M4.5 9.5L6 4.5h12l1.5 5"/><path d="M4.5 9.5a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0"/><path d="M6 12v8h12v-8M10 20v-4.5h4V20"/>',
  cash: '<rect x="3.5" y="7" width="17" height="10" rx="2"/><circle cx="12" cy="12" r="2.3"/><path d="M6.5 10v4M17.5 10v4"/>',
  phone: '<rect x="7" y="3" width="10" height="18" rx="2.5"/><path d="M11 18h2"/>',
  bank: '<path d="M4 9.5L12 5l8 4.5M5 20h14M6.5 10.5v7M10 10.5v7M14 10.5v7M17.5 10.5v7"/>',
  tag: '<path d="M4 11.5V4.5h7l8.5 8.5-7 7z"/><circle cx="8" cy="8.5" r="1.3"/>',
  moneyout: '<rect x="3.5" y="9" width="17" height="10" rx="2"/><circle cx="12" cy="14" r="2"/><path d="M12 6V2.8M9.8 4.6L12 2.8l2.2 1.8"/>',
  trend: '<path d="M4 17l5.5-5.5 3.5 3.5L20 8"/><path d="M15 8h5v5"/>',
  receipt: '<path d="M6 3.5h12V21l-2-1.3-2 1.3-2-1.3-2 1.3-2-1.3L6 21z"/><path d="M9 8h6M9 11.5h6M9 15h4"/>',
  repeat: '<path d="M5 11V9.5A2.5 2.5 0 0 1 7.5 7H19l-3-3M19 13v1.5a2.5 2.5 0 0 1-2.5 2.5H5l3 3"/>',
  wave: '<path d="M8.5 13V6.5a1.5 1.5 0 0 1 3 0V12M11.5 11V5a1.5 1.5 0 0 1 3 0v6M14.5 11.5V7a1.5 1.5 0 0 1 3 0v7a6.5 6.5 0 0 1-11.6 4l-2.7-3.6a1.5 1.5 0 0 1 2.3-1.9L8.5 15"/>',
  zap: '<path d="M13 3L5 13.5h6L10 21l8-10.5h-6z"/>',
  calc: '<rect x="5" y="3.5" width="14" height="17" rx="2.5"/><rect x="8" y="6.5" width="8" height="3.5" rx="1"/><path d="M8.5 13.5h.1M12 13.5h.1M15.5 13.5h.1M8.5 17h.1M12 17h.1M15.5 17h.1"/>',
  pen: '<path d="M5 19c2.5-.5 4-2 5.5-4L18 7.5a2.1 2.1 0 0 0-3-3L7.5 12c-2 1.5-3.5 3-4 5.5z"/><path d="M13.5 6l4.5 4.5"/>',
  fire: '<path d="M12 21a6 6 0 0 0 6-6c0-4-3-6-4-10-1.5 2-2 3.5-2 5-1-1-1.5-2-1.5-3C8 9 6 11.5 6 15a6 6 0 0 0 6 6z"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  file: '<path d="M6.5 3.5H14l4.5 4.5v11A1.5 1.5 0 0 1 17 20.5H6.5A1.5 1.5 0 0 1 5 19V5a1.5 1.5 0 0 1 1.5-1.5z"/><path d="M14 3.5V8h4.5"/>',
  quote: '<path d="M6 17c-1.5-2-1.5-6 2-8M13 17c-1.5-2-1.5-6 2-8"/><circle cx="8.5" cy="14.5" r="2.5"/><circle cx="15.5" cy="14.5" r="2.5"/>',
  undo: '<path d="M9 7L4.5 11.5 9 16"/><path d="M4.5 11.5H15a5 5 0 0 1 0 10h-2"/>',
  redo: '<path d="M15 7l4.5 4.5L15 16"/><path d="M19.5 11.5H9a5 5 0 0 0 0 10h2"/>',
  up: '<path d="M12 19V5M6.5 10.5L12 5l5.5 5.5"/>',
  right: '<path d="M5 12h14M13.5 6.5L19 12l-5.5 5.5"/>',
  user: '<circle cx="12" cy="8.5" r="3.8"/><path d="M4.5 20a7.5 7.5 0 0 1 15 0"/>',
  eye: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
  dice: '<rect x="4.5" y="4.5" width="15" height="15" rx="3.5"/><path d="M9 9h.1M15 9h.1M12 12h.1M9 15h.1M15 15h.1" stroke-width="2.6"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M12 3.5v2.2M12 18.3v2.2M20.5 12h-2.2M5.7 12H3.5M18 6l-1.6 1.6M7.6 16.4L6 18M18 18l-1.6-1.6M7.6 7.6L6 6"/>',
  globe: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.5 2.5 3.5 5.5 3.5 8.5s-1 6-3.5 8.5c-2.5-2.5-3.5-5.5-3.5-8.5s1-6 3.5-8.5z"/>',
  search: '<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.3-4.3"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.8v2M12 19.2v2M2.8 12h2M19.2 12h2M5.5 5.5l1.4 1.4M17.1 17.1l1.4 1.4M5.5 18.5l1.4-1.4M17.1 6.9l1.4-1.4"/>',
  moon: '<path d="M19.5 14.5A8 8 0 0 1 9.5 4.5a8 8 0 1 0 10 10z"/>',
  text: '<path d="M5 6.5V5h14v1.5M12 5v14M9.5 19h5"/>',
  more: '<circle cx="5.5" cy="12" r="1.3"/><circle cx="12" cy="12" r="1.3"/><circle cx="18.5" cy="12" r="1.3"/>',
  tasks: '<path d="M4.5 6.5l1.5 1.5 3-3M4.5 12.5l1.5 1.5 3-3M4.5 18.5l1.5 1.5 3-3"/><path d="M12 7h8M12 13h8M12 19h8"/>',
  info: '<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.5M12 7.8v.1"/>',
  apps: '<rect x="4.5" y="4.5" width="6" height="6" rx="1.8"/><rect x="13.5" y="4.5" width="6" height="6" rx="1.8"/><rect x="4.5" y="13.5" width="6" height="6" rx="1.8"/><rect x="13.5" y="13.5" width="6" height="6" rx="1.8"/>',
};
const svgI = (n) => `<svg class="i" viewBox="0 0 24 24" aria-hidden="true">${ICONS[n] || ICONS.info}</svg>`;
// emoji used in the page code → line icon
const EMAP = {
  '✔': 'check', '✓': 'check', '✅': 'checkc', '☑': 'checkbox', '✕': 'x', '✖': 'x', '🔒': 'lock', '🔐': 'shield', '🔑': 'key', '🗑': 'trash',
  '📔': 'book', '📋': 'clip', '⚠': 'alert', '📤': 'upload', '📥': 'download', '⬇': 'download', '📊': 'chart', '📝': 'note', '💰': 'wallet', '⏰': 'alarm',
  '🔔': 'bell', '📌': 'pin', '📍': 'mappin', '🖼': 'image', '📷': 'camera', '💾': 'save', '🎉': 'sparkle', '🏠': 'home', '📦': 'box', '💳': 'card',
  '📅': 'calendar', '🗒': 'pad', '✏': 'pencil', '♻': 'refresh', '⌫': 'backspace', '🍛': 'food', '🛒': 'cart', '⛽': 'fuel', '💡': 'bulb', '🛍': 'bag',
  '💊': 'pill', '📚': 'books', '🎬': 'film', '🎁': 'gift', '💼': 'briefcase', '🏪': 'store', '💵': 'cash', '📱': 'phone', '🏦': 'bank', '➖': 'minus',
  '➕': 'plus', '🏷': 'tag', '💸': 'moneyout', '📈': 'trend', '🧾': 'receipt', '🔁': 'repeat', '👋': 'wave', '⚡': 'zap', '🧮': 'calc', '✍': 'pen',
  '🔥': 'fire', '🕰': 'clock', '📄': 'file', '❝': 'quote', '↶': 'undo', '↷': 'redo', '↑': 'up', '→': 'right', '👤': 'user', '👁': 'eye', '🔗': 'link',
  '🎲': 'dice', '⚙': 'gear', '🌐': 'globe', '📲': 'phone', '🔍': 'search', '☰': 'menu', 'ℹ': 'info',
};
const ERX = new RegExp('(' + Object.keys(EMAP).map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')\\uFE0F?', 'g');
const SKIP = '.ed,.moods,textarea,input,select,.nc p,.calc,.calcrow,script,style,svg,#viewer img,.keep-emoji,[contenteditable]';

function iconize(root) {
  if (!root || root.nodeType !== 1 || root.closest?.(SKIP)) return;
  const has = (s) => { ERX.lastIndex = 0; const r = ERX.test(s); ERX.lastIndex = 0; return r; };
  const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: (n) => (has(n.data) && !n.parentElement?.closest(SKIP) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT) });
  const nodes = []; while (w.nextNode()) nodes.push(w.currentNode);
  for (const n of nodes) {
    ERX.lastIndex = 0;
    const parts = n.data.split(ERX); if (parts.length < 2) continue;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < parts.length; i++) {
      const p = parts[i]; if (!p) continue;
      if (i % 2 === 1) { const t = document.createElement('template'); t.innerHTML = svgI(EMAP[p]); frag.append(t.content); }
      else if (p.trim()) { const sp = document.createElement('span'); sp.className = 'lbl'; sp.textContent = p.replace(/^\s+/, ''); frag.append(sp); }
      else frag.append(document.createTextNode(p));
    }
    n.replaceWith(frag);
  }
}
let iq = new Set(), iqOn = false;
const mo = new MutationObserver((recs) => {
  for (const r of recs) { for (const n of r.addedNodes) if (n.nodeType === 1) iq.add(n); else if (n.nodeType === 3 && n.parentElement) iq.add(n.parentElement); if (r.type === 'characterData' && r.target.parentElement) iq.add(r.target.parentElement); }
  if (!iqOn) { iqOn = true; queueMicrotask(() => { iqOn = false; const s = iq; iq = new Set(); for (const el of s) if (el.isConnected) iconize(el); }); }
});

/* ---------- preferences ---------- */
const UI = {
  p: Object.assign({ theme: 'light', fs: 'm', btn: 'icon', fab: true }, LS.get('ui', {})),
  save() { LS.set('ui', this.p); this.apply(); },
  apply() {
    const dark = this.p.theme === 'dark' || (this.p.theme === 'auto' && matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    document.documentElement.style.fontSize = { s: '14.5px', m: '16px', l: '17.5px', xl: '19.5px' }[this.p.fs] || '16px';
    document.body.classList.remove('bs-icon', 'bs-both', 'bs-text'); document.body.classList.add('bs-' + this.p.btn);
    document.body.classList.toggle('nofab', !this.p.fab);
    document.querySelector('meta[name=theme-color]')?.setAttribute('content', dark ? '#0f1220' : '#f6f5f1');
    if (window.Capacitor?.isNativePlatform?.()) { try { window.Capacitor.Plugins?.StatusBar?.setStyle?.({ style: dark ? 'DARK' : 'LIGHT' }); } catch {} }
  },
};
matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', () => UI.apply());

const UIT = {
  en: { look: 'Appearance', theme: 'Theme', light: 'Light', dark: 'Dark', auto: 'Phone setting', fsize: 'Text size', fs_s: 'Small', fs_m: 'Normal', fs_l: 'Large', fs_xl: 'Extra large',
    bstyle: 'Buttons', bs_icon: 'Icons', bs_both: 'Icon + text', bs_text: 'Text only', fabOpt: 'Floating + button', fabNote: 'Off: the Add button moves to the top bar', add: 'Add', more: 'More', preview: 'Preview', tasks: 'Tasks', money: 'Money' },
  hi: { look: 'दिखावट', theme: 'थीम', light: 'हल्की (सफ़ेद)', dark: 'डार्क', auto: 'फ़ोन जैसी', fsize: 'अक्षरों का साइज़', fs_s: 'छोटा', fs_m: 'सामान्य', fs_l: 'बड़ा', fs_xl: 'बहुत बड़ा',
    bstyle: 'बटन', bs_icon: 'सिर्फ़ आइकन', bs_both: 'आइकन + नाम', bs_text: 'सिर्फ़ नाम', fabOpt: 'तैरता + बटन', fabNote: 'बंद करने पर जोड़ें बटन ऊपर आ जाएगा', add: 'जोड़ें', more: 'और', preview: 'झलक', tasks: 'काम', money: 'ख़र्चा' },
};
const ut = (k) => UIT[lang]?.[k] ?? UIT.en[k] ?? k;

/* ---------- page icons, top buttons, floating button ---------- */
const PAGE_ICON = { home: 'home', exp: 'wallet', cal: 'calendar', notes: 'note', diary: 'book', sheets: 'chart', pass: 'key', locker: 'shield', settings: 'gear' };
for (const [k, ic] of Object.entries(PAGE_ICON)) if (PAGES[k]) PAGES[k].icon = svgI(ic);
// eslint-disable-next-line no-global-assign
topAction = function (icon, label, fn) {
  const b = document.createElement('button'); b.className = 'iconbtn'; b.title = label; b.setAttribute('aria-label', label);
  const name = EMAP[String(icon).replace(/️/g, '')] || (ICONS[icon] ? icon : null);
  b.innerHTML = (name ? svgI(name) : `<span>${esc(icon)}</span>`) + `<span class="lbl">${esc(label)}</span>`;
  b.onclick = fn; $('#topActions').appendChild(b); return b;
};
// eslint-disable-next-line no-global-assign
fab = function (fn) {
  if (!UI.p.fab) { const b = topAction('plus', ut('add'), fn); b.classList.add('addtop'); return b; }
  const b = document.createElement('button'); b.className = 'fab'; b.innerHTML = svgI('plus'); b.setAttribute('aria-label', ut('add')); b.onclick = fn; $('#page').appendChild(b); return b;
};

/* ---------- bottom tab bar ---------- */
function buildTabs() {
  let tb = $('#tabbar');
  if (!tb) { tb = document.createElement('nav'); tb.id = 'tabbar'; $('#app').appendChild(tb); }
  const items = [['home', 'home', t('home')], ['cal', 'tasks', ut('tasks')], ['exp', 'wallet', ut('money')], ['notes', 'note', t('notes')], ['more', 'apps', ut('more')]];
  tb.innerHTML = items.map(([k, ic, l]) => `<a href="${k === 'more' ? '#' : '#/' + k}" data-tab="${k}">${svgI(ic)}<span>${esc(l)}</span></a>`).join('');
  tb.querySelector('[data-tab=more]').onclick = (e) => { e.preventDefault(); App.drawer(true); };
  markTab();
}
function markTab() {
  const cur = (location.hash.replace(/^#\/?/, '') || 'home').split('/')[0];
  const key = cur === 'note' ? 'notes' : cur;
  $$('#tabbar a').forEach((a) => a.classList.toggle('on', a.dataset.tab === key || (a.dataset.tab === 'more' && !['home', 'cal', 'exp', 'notes'].includes(key))));
}
window.addEventListener('hashchange', markTab);
window.addEventListener('scroll', () => $('header.top')?.classList.toggle('sc', scrollY > 4), { passive: true });

// language changes rebuild the menu → rebuild tabs as well
const _menu = App.menu.bind(App);
App.menu = function () { _menu(); $('#drawerFoot').innerHTML = svgI('lock') + `<span>${esc(t('footer'))}</span>`; buildTabs(); };
$('#menuBtn').innerHTML = svgI('menu') + '<span class="lbl">Menu</span>';
$('#lockBtn').innerHTML = svgI('lock') + `<span class="lbl">${esc(lang === 'hi' ? 'लॉक' : 'Lock')}</span>`;

/* ---------- appearance card in Settings ---------- */
const _setRender = PAGES.settings.render.bind(PAGES.settings);
PAGES.settings.render = async function (el) {
  await _setRender(el);
  const ch = (key, opts) => `<div class="chips" style="flex-wrap:wrap">${opts.map(([v, l, ic]) => `<button class="chip ${UI.p[key] === v ? 'on' : ''}" data-ui="${key}|${v}">${ic ? svgI(ic) : ''}<span class="lbl">${esc(l)}</span></button>`).join('')}</div>`;
  const card = document.createElement('div'); card.className = 'card';
  card.innerHTML = `<h3>${svgI('sparkle')}<span>${esc(ut('look'))}</span></h3>
    <label class="l">${esc(ut('theme'))}</label>${ch('theme', [['light', ut('light'), 'sun'], ['dark', ut('dark'), 'moon'], ['auto', ut('auto'), 'phone']])}
    <label class="l">${esc(ut('fsize'))}</label>${ch('fs', [['s', ut('fs_s')], ['m', ut('fs_m')], ['l', ut('fs_l')], ['xl', ut('fs_xl')]])}
    <label class="l">${esc(ut('bstyle'))}</label>${ch('btn', [['icon', ut('bs_icon'), 'apps'], ['both', ut('bs_both'), 'tag'], ['text', ut('bs_text'), 'text']])}
    <div class="toggle" style="margin-top:6px"><div>${esc(ut('fabOpt'))}<small>${esc(ut('fabNote'))}</small></div><label class="sw"><input type="checkbox" id="fabSw" ${UI.p.fab ? 'checked' : ''}><span></span></label></div>`;
  el.prepend(card);
  card.querySelectorAll('[data-ui]').forEach((b) => b.onclick = () => { const [k, v] = b.dataset.ui.split('|'); UI.p[k] = v; UI.save(); App.refresh(); });
  card.querySelector('#fabSw').onchange = (e) => { UI.p.fab = e.target.checked; UI.save(); };
};

/* ---------- start ---------- */
UI.apply();
mo.observe(document.body, { childList: true, subtree: true, characterData: true });
iconize(document.body);
buildTabs();
