/* In-app updates for the SP Android apps: checks GitHub Releases, asks the user, downloads and opens the installer.
   Website (PWA) versions update themselves through the service worker and show a "new version" bar. */
(() => {
  'use strict';
  const REPO = document.currentScript?.dataset.repo; if (!REPO) return;
  const NATIVE = !!window.Capacitor?.isNativePlatform?.();
  const hi = () => (document.documentElement.lang || 'hi').slice(0, 2) !== 'en';
  const T = (h, e) => (hi() ? h : e);
  const css = `.spu-back{position:fixed;inset:0;z-index:2147483000;background:rgba(10,12,24,.55);display:flex;align-items:flex-end;justify-content:center;font-family:Inter,Hind,system-ui,sans-serif}
.spu{width:100%;max-width:440px;background:#fff;color:#1c2333;border-radius:22px 22px 0 0;padding:22px 20px calc(20px + env(safe-area-inset-bottom));box-shadow:0 -10px 40px rgba(0,0,0,.3)}
@media(min-width:600px){.spu-back{align-items:center}.spu{border-radius:22px}}
.spu h3{margin:0 0 6px;font-size:19px}.spu p{margin:0 0 14px;color:#5b6475;font-size:14px;line-height:1.5}
.spu .bar{height:8px;border-radius:8px;background:#eceff5;overflow:hidden;margin:6px 0 14px}.spu .bar i{display:block;height:100%;width:0;background:#1f2a5a;transition:width .3s}
.spu button{display:block;width:100%;border:0;border-radius:999px;padding:13px;font-size:15px;font-weight:700;margin-top:8px;cursor:pointer}
.spu .go{background:#1f2a5a;color:#fff}.spu .later{background:#f1f2f6;color:#1f2a5a}
.spu-strip{position:fixed;left:12px;right:12px;bottom:calc(84px + env(safe-area-inset-bottom));z-index:2147483000;background:#1f2a5a;color:#fff;border-radius:14px;padding:12px 14px;display:flex;gap:10px;align-items:center;font:600 14px Inter,Hind,system-ui,sans-serif;box-shadow:0 8px 24px rgba(0,0,0,.3)}
.spu-strip span{flex:1}.spu-strip button{border:0;border-radius:999px;background:#e8be5c;color:#1f2a5a;font-weight:800;padding:8px 14px;cursor:pointer}`;
  const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  /* ---------- website: tell the user when a new version is ready ---------- */
  if (!NATIVE && 'serviceWorker' in navigator) {
    let shown = false;
    const strip = () => {
      if (shown) return; shown = true;
      const d = document.createElement('div'); d.className = 'spu-strip';
      d.innerHTML = `<span>✨ ${T('नया वर्ज़न तैयार है', 'A new version is ready')}</span><button>${T('अपडेट करें', 'Update')}</button>`;
      d.querySelector('button').onclick = () => location.reload(); document.body.appendChild(d);
    };
    window.addEventListener('load', () => setTimeout(() => navigator.serviceWorker.getRegistration().then((reg) => {
      if (!reg) return;
      const watch = (w) => w && w.addEventListener('statechange', () => { if (w.state === 'installed' && navigator.serviceWorker.controller) strip(); });
      watch(reg.installing); reg.addEventListener('updatefound', () => watch(reg.installing));
      reg.update().catch(() => {}); setInterval(() => reg.update().catch(() => {}), 30 * 60 * 1000);
    }).catch(() => {}), 3000));
    return;
  }
  if (!NATIVE) return;

  /* ---------- Android app: check GitHub Releases ---------- */
  const U = window.Capacitor.Plugins?.AppUpdater || window.Capacitor.registerPlugin?.('AppUpdater');
  if (!U) return;
  const KEY = 'spu-' + REPO;
  async function check(manual) {
    try {
      const info = await U.info();
      const cur = Number(info.versionCode) || 0;
      const r = await fetch(`https://api.github.com/repos/Sandeep-1407/${REPO}/releases/latest`, { cache: 'no-store' });
      if (!r.ok) return;
      const rel = await r.json();
      const build = parseInt(String(rel.tag_name || '').replace(/\D+/g, ''), 10) || 0;
      const asset = (rel.assets || []).find((a) => /\.apk$/i.test(a.name));
      if (!asset || build <= cur) { if (manual) alert(T('ऐप पहले से नया है ✅', 'App is up to date ✅')); return; }
      let snooze = {}; try { snooze = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch {}
      if (!manual && snooze.build === build && Date.now() - snooze.at < 12 * 3600 * 1000) return;
      ask(build, asset, rel, info);
    } catch {}
  }
  function ask(build, asset, rel, info) {
    const back = document.createElement('div'); back.className = 'spu-back';
    const notes = String(rel.body || '').split('\n').filter((l) => l.trim() && !/^install/i.test(l)).slice(0, 4).join(' ');
    back.innerHTML = `<div class="spu"><h3>✨ ${T('नया अपडेट आया है', 'Update available')}</h3>
      <p>${T('नया वर्ज़न', 'New version')} ${build} · ${(asset.size / 1048576).toFixed(1)} MB<br>${T('आपका सारा डेटा सुरक्षित रहेगा।', 'All your data stays safe.')}${notes ? '<br><small>' + notes.replace(/</g, '&lt;') + '</small>' : ''}</p>
      <div class="bar hidden-bar" style="display:none"><i></i></div>
      <button class="go">${T('अभी अपडेट करें', 'Update now')}</button><button class="later">${T('बाद में', 'Later')}</button></div>`;
    document.body.appendChild(back);
    const go = back.querySelector('.go'), later = back.querySelector('.later'), bar = back.querySelector('.bar'), fill = bar.querySelector('i'), p = back.querySelector('p');
    later.onclick = () => { localStorage.setItem(KEY, JSON.stringify({ build, at: Date.now() })); back.remove(); };
    go.onclick = async () => {
      const inf = await U.info();
      if (!inf.canInstall) {
        p.innerHTML = T('एक बार की अनुमति: अगली स्क्रीन पर <b>"Allow from this source / इस स्रोत से अनुमति दें"</b> चालू करें, फिर वापस आकर <b>अभी अपडेट करें</b> दबाएँ।',
          'One-time permission: on the next screen turn on <b>"Allow from this source"</b>, then come back and tap <b>Update now</b>.');
        await U.allowInstalls(); return;
      }
      go.disabled = true; later.style.display = 'none'; bar.style.display = 'block'; go.textContent = T('डाउनलोड हो रहा है…', 'Downloading…');
      const ls = await U.addListener('progress', (e) => { fill.style.width = Math.round((e.progress || 0) * 100) + '%'; });
      try {
        await U.download({ url: asset.browser_download_url, title: document.title });
        fill.style.width = '100%'; go.textContent = T('इंस्टॉल स्क्रीन पर "अपडेट" दबाएँ', 'Tap "Update" on the install screen');
        go.disabled = false; go.onclick = () => U.install(); later.style.display = 'block'; later.textContent = T('बंद करें', 'Close'); later.onclick = () => back.remove();
      } catch (e) { go.disabled = false; go.textContent = T('फिर से कोशिश करें', 'Try again'); }
      ls?.remove?.();
    };
  }
  window.spCheckUpdate = () => check(true);
  setTimeout(() => check(false), 2500);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) { const last = +(sessionStorage.getItem(KEY + 't') || 0); if (Date.now() - last > 6 * 3600 * 1000) { sessionStorage.setItem(KEY + 't', Date.now()); check(false); } } });
})();
