"""Runs in GitHub Actions after `npx cap add android`.
Adds the Photo Locker plugin, permissions and the SP04 icon to the generated Android project."""
import os, shutil, subprocess, glob

ROOT = os.path.dirname(os.path.abspath(__file__))          # app/android-src
APP = os.path.abspath(os.path.join(ROOT, '..'))             # app/
AND = os.path.join(APP, 'android', 'app', 'src', 'main')
PKG = os.path.join(AND, 'java', 'com', 'sandeep', 'sp04')
os.makedirs(PKG, exist_ok=True)

# 1) plugin + MainActivity
shutil.copy(os.path.join(ROOT, 'LockerPlugin.java'), os.path.join(PKG, 'LockerPlugin.java'))
with open(os.path.join(PKG, 'MainActivity.java'), 'w') as f:
    f.write('''package com.sandeep.sp04;

import android.graphics.Color;
import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsCompat;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(LockerPlugin.class);
        super.onCreate(savedInstanceState);
        // Keep the app below the phone's status bar and above the navigation bar (Android 15+ draws edge-to-edge).
        int bg = Color.parseColor("#f6f5f1");
        getWindow().getDecorView().setBackgroundColor(bg);
        WindowCompat.getInsetsController(getWindow(), getWindow().getDecorView()).setAppearanceLightStatusBars(true);
        WindowCompat.getInsetsController(getWindow(), getWindow().getDecorView()).setAppearanceLightNavigationBars(true);
        View web = getBridge().getWebView();
        ViewCompat.setOnApplyWindowInsetsListener(web, (v, insets) -> {
            Insets bars = insets.getInsets(WindowInsetsCompat.Type.systemBars() | WindowInsetsCompat.Type.displayCutout());
            Insets ime = insets.getInsets(WindowInsetsCompat.Type.ime());
            ViewGroup.MarginLayoutParams lp = (ViewGroup.MarginLayoutParams) v.getLayoutParams();
            lp.topMargin = bars.top;
            lp.leftMargin = bars.left;
            lp.rightMargin = bars.right;
            lp.bottomMargin = Math.max(bars.bottom, ime.bottom);
            v.setLayoutParams(lp);
            return WindowInsetsCompat.CONSUMED;
        });
        ViewCompat.requestApplyInsets(web);
    }
}
''')

# 2) manifest permissions
mf = os.path.join(AND, 'AndroidManifest.xml')
m = open(mf).read()
perms = [
    '<uses-permission android:name="android.permission.READ_MEDIA_IMAGES" />',
    '<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" android:maxSdkVersion="32" />',
    '<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" android:maxSdkVersion="29" />',
    '<uses-permission android:name="android.permission.POST_NOTIFICATIONS" />',
    '<uses-permission android:name="android.permission.SCHEDULE_EXACT_ALARM" />',
    '<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />',
]
for p in perms:
    if p.split('"')[1] not in m:
        m = m.replace('</manifest>', '    ' + p + '\n</manifest>')
if 'requestLegacyExternalStorage' not in m:
    m = m.replace('<application', '<application\n        android:requestLegacyExternalStorage="true"', 1)
open(mf, 'w').write(m)

# 3) icons (from the web app icon)
icon = os.path.join(APP, 'www', 'icon-512.png')
res = os.path.join(AND, 'res')
shutil.rmtree(os.path.join(res, 'mipmap-anydpi-v26'), ignore_errors=True)
sizes = {'mdpi': 48, 'hdpi': 72, 'xhdpi': 96, 'xxhdpi': 144, 'xxxhdpi': 192}
for d, px in sizes.items():
    folder = os.path.join(res, 'mipmap-' + d)
    os.makedirs(folder, exist_ok=True)
    for f in glob.glob(os.path.join(folder, 'ic_launcher*.png')):
        os.remove(f)
    for name in ('ic_launcher.png', 'ic_launcher_round.png'):
        subprocess.run(['convert', icon, '-resize', f'{px}x{px}', os.path.join(folder, name)], check=True)

# ---- in-app updates, one fixed signing key, build number as version ----
CPKG = os.path.join(AND, 'java', 'com', 'sandeep', 'common')
os.makedirs(CPKG, exist_ok=True)
shutil.copy(os.path.join(ROOT, 'AppUpdaterPlugin.java'), os.path.join(CPKG, 'AppUpdaterPlugin.java'))
_ma = os.path.join(PKG, 'MainActivity.java'); _s = open(_ma).read()
if 'AppUpdaterPlugin' not in _s:
    _s = _s.replace('import com.getcapacitor.BridgeActivity;', 'import com.getcapacitor.BridgeActivity;\nimport com.sandeep.common.AppUpdaterPlugin;', 1)
    _s = _s.replace('super.onCreate(savedInstanceState);', 'registerPlugin(AppUpdaterPlugin.class);\n        super.onCreate(savedInstanceState);', 1)
    open(_ma, 'w').write(_s)
_m = open(mf).read()
if 'REQUEST_INSTALL_PACKAGES' not in _m:
    _m = _m.replace('</manifest>', '    <uses-permission android:name="android.permission.REQUEST_INSTALL_PACKAGES" />\n</manifest>', 1)
    open(mf, 'w').write(_m)
_fp = os.path.join(AND, 'res', 'xml', 'file_paths.xml')
if os.path.exists(_fp):
    _x = open(_fp).read()
    if 'external-files-path' not in _x:
        _x = _x.replace('</paths>', '    <external-files-path name="sp_updates" path="." />\n</paths>', 1); open(_fp, 'w').write(_x)
import re
_gr = os.path.join(APP, 'android', 'app', 'build.gradle'); _g = open(_gr).read()
_n = int(os.environ.get('GITHUB_RUN_NUMBER', '1'))
_g = re.sub(r'versionCode \d+', 'versionCode %d' % _n, _g, count=1)
_g = re.sub(r'versionName "[^"]*"', 'versionName "1.%d"' % _n, _g, count=1)
if os.environ.get('SP_KEYSTORE') and 'signingConfigs.sp' not in _g:
    _g = _g.replace('android {', 'android {\n    signingConfigs { sp { storeFile file(System.getenv("SP_KEYSTORE")); storePassword System.getenv("SP_KS_PASS"); keyAlias "sp"; keyPassword System.getenv("SP_KS_PASS") } }', 1)
    _g = _g.replace('buildTypes {', 'buildTypes {\n        debug { signingConfig signingConfigs.sp }', 1)
open(_gr, 'w').write(_g)
print('updater + signing + version', _n)
