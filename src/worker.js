// Azalt! kapatildi: her adres kapanis sayfasini gosterir.
// Eski uygulamanin kodu yedek/ klasorunde duruyor.
import HTML from "./kapali.html";
import KEDI from "./kedi.jpg";
import { ICON_192, ICON_512 } from "./icons.js";

const MANIFEST = {
  name: "Azalt! - Batus & Ulkus",
  short_name: "Azalt",
  id: "/",
  start_url: "/",
  display: "standalone",
  background_color: "#0f0b16",
  theme_color: "#0f0b16",
  icons: [
    { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
    { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
  ],
};

// Eski service worker'i devre disi birakir.
const SW_JS = `self.addEventListener("install", function(){ self.skipWaiting(); });
self.addEventListener("activate", function(e){ e.waitUntil(self.registration.unregister()); });`;

function png(b64) {
  const bytes = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
  return new Response(bytes, { headers: { "content-type": "image/png", "cache-control": "public, max-age=86400" } });
}

export default {
  async fetch(req) {
    const p = new URL(req.url).pathname;
    if (p === "/kedi.jpg") return new Response(KEDI, { headers: { "content-type": "image/jpeg", "cache-control": "public, max-age=86400" } });
    if (p === "/icon-192.png" || p === "/apple-touch-icon.png") return png(ICON_192);
    if (p === "/icon-512.png") return png(ICON_512);
    if (p === "/manifest.json") return new Response(JSON.stringify(MANIFEST), { headers: { "content-type": "application/manifest+json" } });
    if (p === "/sw.js") return new Response(SW_JS, { headers: { "content-type": "application/javascript", "cache-control": "no-store" } });
    if (p.startsWith("/api/")) return Response.json({ ok: false, error: "kapali" }, { status: 410 });
    return new Response(HTML, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" } });
  },
};

// Durable Object sinifi, mevcut baglama bozulmasin diye duruyor; artik kullanilmiyor.
export class AzaltDO {
  async fetch() {
    return Response.json({ ok: false, error: "kapali" }, { status: 410 });
  }
}
