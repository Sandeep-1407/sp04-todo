package com.sandeep.common;

import android.app.DownloadManager;
import android.content.Context;
import android.content.Intent;
import android.database.Cursor;
import android.net.Uri;
import android.os.Build;
import android.os.Environment;
import android.os.Handler;
import android.os.Looper;
import android.provider.Settings;

import androidx.core.content.FileProvider;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.io.File;

/** In-app updates: downloads the new APK from GitHub Releases and opens the Android installer (update keeps all data). */
@CapacitorPlugin(name = "AppUpdater")
public class AppUpdaterPlugin extends Plugin {
    private long dlId = -1;
    private final Handler h = new Handler(Looper.getMainLooper());

    private File apkFile() {
        File dir = getContext().getExternalFilesDir(Environment.DIRECTORY_DOWNLOADS);
        return new File(dir, "update.apk");
    }

    @PluginMethod
    public void info(PluginCall call) {
        JSObject r = new JSObject();
        try {
            android.content.pm.PackageInfo pi = getContext().getPackageManager().getPackageInfo(getContext().getPackageName(), 0);
            r.put("versionCode", Build.VERSION.SDK_INT >= 28 ? pi.getLongVersionCode() : pi.versionCode);
            r.put("versionName", pi.versionName);
        } catch (Exception e) {
            r.put("versionCode", 0);
        }
        r.put("canInstall", Build.VERSION.SDK_INT < 26 || getContext().getPackageManager().canRequestPackageInstalls());
        call.resolve(r);
    }

    /** Opens the "Install unknown apps" switch for this app (needed once). */
    @PluginMethod
    public void allowInstalls(PluginCall call) {
        if (Build.VERSION.SDK_INT >= 26) {
            Intent i = new Intent(Settings.ACTION_MANAGE_UNKNOWN_APP_SOURCES, Uri.parse("package:" + getContext().getPackageName()));
            i.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            getContext().startActivity(i);
        }
        call.resolve();
    }

    @PluginMethod
    public void download(PluginCall call) {
        String url = call.getString("url");
        if (url == null) { call.reject("url missing"); return; }
        File f = apkFile();
        if (f.exists()) f.delete();
        DownloadManager dm = (DownloadManager) getContext().getSystemService(Context.DOWNLOAD_SERVICE);
        DownloadManager.Request rq = new DownloadManager.Request(Uri.parse(url))
            .setTitle(call.getString("title", "App update"))
            .setMimeType("application/vnd.android.package-archive")
            .setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE)
            .setDestinationUri(Uri.fromFile(f));
        dlId = dm.enqueue(rq);
        call.setKeepAlive(true);
        poll(call, dm);
    }

    private void poll(PluginCall call, DownloadManager dm) {
        h.postDelayed(() -> {
            try (Cursor c = dm.query(new DownloadManager.Query().setFilterById(dlId))) {
                if (c == null || !c.moveToFirst()) { call.reject("Download cancelled"); call.setKeepAlive(false); return; }
                int st = c.getInt(c.getColumnIndexOrThrow(DownloadManager.COLUMN_STATUS));
                long done = c.getLong(c.getColumnIndexOrThrow(DownloadManager.COLUMN_BYTES_DOWNLOADED_SO_FAR));
                long total = c.getLong(c.getColumnIndexOrThrow(DownloadManager.COLUMN_TOTAL_SIZE_BYTES));
                if (st == DownloadManager.STATUS_SUCCESSFUL) {
                    JSObject r = new JSObject(); r.put("done", true); r.put("progress", 1);
                    call.resolve(r); call.setKeepAlive(false);
                    install();
                    return;
                }
                if (st == DownloadManager.STATUS_FAILED) { call.reject("Download failed"); call.setKeepAlive(false); return; }
                JSObject p = new JSObject(); p.put("progress", total > 0 ? (double) done / total : 0);
                notifyListeners("progress", p);
            } catch (Exception e) { call.reject(e.getMessage()); call.setKeepAlive(false); return; }
            poll(call, dm);
        }, 400);
    }

    @PluginMethod
    public void install(PluginCall call) { install(); call.resolve(); }

    private void install() {
        File f = apkFile();
        if (!f.exists()) return;
        Uri u = FileProvider.getUriForFile(getContext(), getContext().getPackageName() + ".fileprovider", f);
        Intent i = new Intent(Intent.ACTION_VIEW);
        i.setDataAndType(u, "application/vnd.android.package-archive");
        i.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION | Intent.FLAG_ACTIVITY_NEW_TASK);
        getContext().startActivity(i);
    }
}
