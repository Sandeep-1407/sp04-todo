package com.sandeep.sp04;

import android.Manifest;
import android.app.Activity;
import android.app.PendingIntent;
import android.content.ContentResolver;
import android.content.ContentUris;
import android.content.ContentValues;
import android.database.Cursor;
import android.graphics.Bitmap;
import android.media.MediaScannerConnection;
import android.net.Uri;
import android.os.Build;
import android.os.Environment;
import android.provider.MediaStore;
import android.util.Base64;
import android.util.Size;

import androidx.activity.result.ActivityResultLauncher;
import androidx.activity.result.IntentSenderRequest;
import androidx.activity.result.contract.ActivityResultContracts;

import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.PermissionState;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.annotation.Permission;
import com.getcapacitor.annotation.PermissionCallback;

import org.json.JSONArray;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;

/** Photo Locker: lists gallery photos, reads them, removes the originals from the gallery, and puts photos back. */
@CapacitorPlugin(
    name = "Locker",
    permissions = {
        @Permission(alias = "images", strings = { Manifest.permission.READ_MEDIA_IMAGES }),
        @Permission(alias = "read", strings = { Manifest.permission.READ_EXTERNAL_STORAGE }),
        @Permission(alias = "write", strings = { Manifest.permission.WRITE_EXTERNAL_STORAGE })
    }
)
public class LockerPlugin extends Plugin {
    private ActivityResultLauncher<IntentSenderRequest> deleteLauncher;
    private PluginCall pendingDelete;

    @Override
    public void load() {
        deleteLauncher = getActivity().registerForActivityResult(new ActivityResultContracts.StartIntentSenderForResult(), result -> {
            if (pendingDelete != null) {
                JSObject r = new JSObject();
                r.put("deleted", result.getResultCode() == Activity.RESULT_OK);
                pendingDelete.resolve(r);
                pendingDelete = null;
            }
        });
    }

    private String readAlias() { return Build.VERSION.SDK_INT >= 33 ? "images" : "read"; }
    private boolean canRead() { return getPermissionState(readAlias()) == PermissionState.GRANTED; }
    private boolean canWriteLegacy() { return Build.VERSION.SDK_INT >= 30 || getPermissionState("write") == PermissionState.GRANTED; }

    @PluginMethod
    public void checkAccess(PluginCall call) {
        JSObject r = new JSObject();
        r.put("granted", canRead());
        call.resolve(r);
    }

    @PluginMethod
    public void requestAccess(PluginCall call) {
        if (canRead() && canWriteLegacy()) { checkAccess(call); return; }
        if (Build.VERSION.SDK_INT < 30) requestPermissionForAliases(new String[] { "read", "write" }, call, "accessCb");
        else requestPermissionForAlias(readAlias(), call, "accessCb");
    }

    @PermissionCallback
    private void accessCb(PluginCall call) { checkAccess(call); }

    @PluginMethod
    public void listImages(PluginCall call) {
        if (!canRead()) { call.reject("Photo permission not granted"); return; }
        getBridge().execute(() -> {
            JSArray arr = new JSArray();
            Uri base = MediaStore.Images.Media.EXTERNAL_CONTENT_URI;
            String[] cols = { MediaStore.Images.Media._ID, MediaStore.Images.Media.DISPLAY_NAME, MediaStore.Images.Media.SIZE,
                MediaStore.Images.Media.DATE_MODIFIED, MediaStore.Images.Media.BUCKET_DISPLAY_NAME, MediaStore.Images.Media.MIME_TYPE };
            try (Cursor c = getContext().getContentResolver().query(base, cols, null, null, MediaStore.Images.Media.DATE_MODIFIED + " DESC")) {
                if (c != null) {
                    while (c.moveToNext()) {
                        long id = c.getLong(0);
                        JSObject v = new JSObject();
                        v.put("id", String.valueOf(id));
                        v.put("name", c.getString(1));
                        v.put("size", c.getLong(2));
                        v.put("date", c.getLong(3));
                        v.put("folder", c.getString(4));
                        v.put("mime", c.getString(5) == null ? "image/jpeg" : c.getString(5));
                        v.put("uri", ContentUris.withAppendedId(base, id).toString());
                        arr.put(v);
                    }
                }
                JSObject r = new JSObject();
                r.put("images", arr);
                call.resolve(r);
            } catch (Exception e) {
                call.reject("List failed: " + e.getMessage());
            }
        });
    }

    @PluginMethod
    public void thumbnail(PluginCall call) {
        String idStr = call.getString("id");
        if (idStr == null) { call.reject("id missing"); return; }
        getBridge().execute(() -> {
            try {
                long id = Long.parseLong(idStr);
                Bitmap bmp;
                if (Build.VERSION.SDK_INT >= 29) {
                    Uri u = ContentUris.withAppendedId(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, id);
                    bmp = getContext().getContentResolver().loadThumbnail(u, new Size(256, 256), null);
                } else {
                    bmp = MediaStore.Images.Thumbnails.getThumbnail(getContext().getContentResolver(), id, MediaStore.Images.Thumbnails.MINI_KIND, null);
                }
                if (bmp == null) { call.reject("no thumbnail"); return; }
                ByteArrayOutputStream out = new ByteArrayOutputStream();
                bmp.compress(Bitmap.CompressFormat.JPEG, 70, out);
                JSObject r = new JSObject();
                r.put("data", "data:image/jpeg;base64," + Base64.encodeToString(out.toByteArray(), Base64.NO_WRAP));
                call.resolve(r);
            } catch (Exception e) {
                call.reject("thumbnail failed: " + e.getMessage());
            }
        });
    }

    @PluginMethod
    public void readImage(PluginCall call) {
        String uri = call.getString("uri");
        if (uri == null) { call.reject("uri missing"); return; }
        getBridge().execute(() -> {
            try (InputStream in = getContext().getContentResolver().openInputStream(Uri.parse(uri))) {
                ByteArrayOutputStream out = new ByteArrayOutputStream();
                byte[] buf = new byte[65536];
                int n;
                while ((n = in.read(buf)) > 0) out.write(buf, 0, n);
                JSObject r = new JSObject();
                r.put("data", Base64.encodeToString(out.toByteArray(), Base64.NO_WRAP));
                call.resolve(r);
            } catch (Exception e) {
                call.reject("read failed: " + e.getMessage());
            }
        });
    }

    @PluginMethod
    public void deleteImages(PluginCall call) {
        if (Build.VERSION.SDK_INT < 30 && getPermissionState("write") != PermissionState.GRANTED) {
            requestPermissionForAlias("write", call, "deleteCb");
            return;
        }
        doDelete(call);
    }

    @PermissionCallback
    private void deleteCb(PluginCall call) { doDelete(call); }

    private void doDelete(PluginCall call) {
        try {
            JSONArray arr = call.getArray("uris");
            List<Uri> uris = new ArrayList<>();
            for (int i = 0; i < arr.length(); i++) uris.add(Uri.parse(arr.getString(i)));
            ContentResolver cr = getContext().getContentResolver();
            if (Build.VERSION.SDK_INT >= 30) {
                PendingIntent pi = MediaStore.createDeleteRequest(cr, uris);
                pendingDelete = call;
                deleteLauncher.launch(new IntentSenderRequest.Builder(pi.getIntentSender()).build());
                return;
            }
            int failed = 0;
            for (Uri u : uris) {
                try { if (cr.delete(u, null, null) < 1) failed++; } catch (Exception e) { failed++; }
            }
            JSObject r = new JSObject();
            r.put("deleted", failed == 0);
            call.resolve(r);
        } catch (Exception e) {
            call.reject("delete failed: " + e.getMessage());
        }
    }

    @PluginMethod
    public void saveImage(PluginCall call) {
        if (Build.VERSION.SDK_INT < 29 && getPermissionState("write") != PermissionState.GRANTED) {
            requestPermissionForAlias("write", call, "saveCb");
            return;
        }
        doSave(call);
    }

    @PermissionCallback
    private void saveCb(PluginCall call) { doSave(call); }

    private void doSave(PluginCall call) {
        String data = call.getString("data");
        String name = call.getString("name", "SP04_" + System.currentTimeMillis() + ".jpg");
        String mime = call.getString("mime", "image/jpeg");
        if (data == null) { call.reject("data missing"); return; }
        getBridge().execute(() -> {
            try {
                byte[] bytes = Base64.decode(data, Base64.DEFAULT);
                Uri out;
                if (Build.VERSION.SDK_INT >= 29) {
                    ContentValues cv = new ContentValues();
                    cv.put(MediaStore.Images.Media.DISPLAY_NAME, name);
                    cv.put(MediaStore.Images.Media.MIME_TYPE, mime);
                    cv.put(MediaStore.Images.Media.RELATIVE_PATH, Environment.DIRECTORY_PICTURES + "/SP04");
                    cv.put(MediaStore.Images.Media.IS_PENDING, 1);
                    ContentResolver cr = getContext().getContentResolver();
                    out = cr.insert(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, cv);
                    try (OutputStream os = cr.openOutputStream(out)) { os.write(bytes); }
                    cv.clear();
                    cv.put(MediaStore.Images.Media.IS_PENDING, 0);
                    cr.update(out, cv, null, null);
                } else {
                    File dir = new File(Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_PICTURES), "SP04");
                    dir.mkdirs();
                    File f = new File(dir, name);
                    try (FileOutputStream os = new FileOutputStream(f)) { os.write(bytes); }
                    MediaScannerConnection.scanFile(getContext(), new String[] { f.getAbsolutePath() }, new String[] { mime }, null);
                    out = Uri.fromFile(f);
                }
                JSObject r = new JSObject();
                r.put("uri", out.toString());
                call.resolve(r);
            } catch (Exception e) {
                call.reject("save failed: " + e.getMessage());
            }
        });
    }
}
