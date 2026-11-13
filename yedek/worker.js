var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/worker.js
import HTML_RAW from "./675b6d4378c89aa10ab4a2c9768936399b15b018-index.html";
import SW_JS from "./042651731a23ce7a403e8cd9567abb13bd4d7f5f-sw.txt";
var TZ_MS = 3 * 3600 * 1e3;
var WEEK_TR = ["Pzt", "Sal", "\xC7ar", "Per", "Cum", "Cmt", "Paz"];
var SLOTS = [
  ["12:00", "all"],
  ["17:00", "all"],
  ["00:00", "all"],
  ["03:00", "all"]
];
var DEFAULT_MSGS = [
  "Selam Batus \u{1F49C} Bug\xFCn {kalan} hakk\u0131n kald\u0131 \u2014 idareli kullan \u{1F60F}",
  "Hafta i\xE7i kontrol: bu hafta {kurtarilan}\u20BA kurtard\u0131n Batus \u{1F911}",
  "Bug\xFCn {bugun} adet i\xE7tin ({hedef} hedef) \u2014 rakam seni anlat\u0131yor \u{1F49C}",
  "K\u0131sa bir hat\u0131rlatma: her sigara ~6,5\u20BA. Bug\xFCn {bugun} adetle {kurtarilan}\u20BA tasarruftas\u0131n \u{1F4AA}",
  "Ak\u015Fam\u0131 d\xFC\u015F\xFCn \u{1F306} Bug\xFCn\xFC hedefin alt\u0131nda bitirirsen yar\u0131n kendinle gurur duyacaks\u0131n \u{1F49C}",
  "Batus, telefon elinde \u2014 bir sigara yerine 2 dakika nefes dene \u{1F60C}",
  "Birikim {birikim}\u20BA oldu! Cebinde kalan paray\u0131 d\xFC\u015F\xFCn, duman\u0131 de\u011Fil \u{1F911}",
  "Hedef {hedef}, bug\xFCn {bugun}. \u0130yi gidiyorsun \u2014 sonuna kadar bug\xFCn \u{1F49C}",
  "Geceye dikkat \u{1F319} Sigara i\xE7meden biten g\xFCn, uykusunun bile daha g\xFCzel geldi\u011Fi g\xFCnd\xFCr.",
  "Sadece bu saat: bir tane daha i\xE7meden \xF6nce 10 dakika bekle, \xE7o\u011Fu zaman ge\xE7er \u{1F60F}"
];
var MANIFEST = {
  name: "Azalt! - Batus & Ulkus",
  short_name: "Azalt",
  id: "/",
  start_url: "/",
  scope: "/",
  display: "standalone",
  background_color: "#0f0b16",
  theme_color: "#a855f7",
  icons: [
    { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
    { src: "/icon-512.png", sizes: "512x512", type: "image/png" }
  ]
};
var ICON_192 = "iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAFHElEQVR42u3dx3ZWVRzGYa7CmffA1YiAiIiIKHhj9oJgo4fee+9VrOgc9xcGmsUhEJJw9t7vk7Weefb/vL8hYcmShn9ef23pY+qwxI9hIxSDRxBGjxgMHyEYPuEh+JBEhuDDERuCj0VkBD4QsSH4KMRG4GMQG4GPQGwEjk9sBI5ObASOTWwEjkxsBI5LbASOSmwEjkl0BA5JbACOSGwEjkd0BA5HbACORnQEvR/jkzf+mZU3BwfQ10f/e0F5c0AErT/y0/LRXhXv7SyAdkf/aHTe20EErT3ms2WPquO9jQZg+PUOI+29o0TQyi//+bK/muKtAogc/nyHkfbeUQOo/Rf+YtmfXfDWSiMw/jqGkfRWAbyAL9/8o0vpbxVA8PiHhpH01uoCqPGX+6ocLUHaW6uMoL7x/x4j8b0CeI6vy6HokwCeN/7lv9E5ATzDN+U4ZBCAAAQggP98u/xXwgjA+EUggKWPNy9/SKj4ADaveEi4UQMYu8DvVvxCOAEggMQAtpTHw5YRIxg5gAcwLTKArSsfwLS4ALauvA8zCAABpATwfXkw/F9YAPdghpgAfnjrHgwKCeAuDIoI4MfyUBgSEsAdGBQRwE/loTBEAAig9wB+XnUbBgkAAfQewLZVt2CQABBA7wFsLw+FIRkBvH0TBkUEsKM8FIaEBHADBkUEsLM8FIaEBHAdBkUEsGv1dRgkAATQewC7V1+DQTH/JtjHZuzxjxrAntVXYQYBIICUAKbeuQozxP1t0Kl3rsC0yD+Ou7c8HPbmBnAZpkUGsK88HPalBjAdwZpLhIv+P8L2lwOQTQAIIDWAiQNrLhJq9P8oWwAIYGQH371AKAGIwPgFsPTxoXIQsgjgqQjOE6KWzVUVwOFyGDII4JkRnKNzNe2tugCOrD1H5wQwawBn6ZwAnuNoORJ9qm1rVQYgAuMXwNozdEYAc3TsvTN0otaNVR7AaTohgJd0vByPttW8rwYCOEXjBDBPJ8oRaVPt22oiABEYf3wAJ9edpDECEIHxC2BhnVp3gsq1tCcBIIDWnC5Hpk6tbanJAKYjeP84lWlxR80GMHGmHJ06tLqhxgM4RiUEMJKz5fiMq+X9NB/AkwiOMpLWt9NFABPn1h/lFethN90EIALjjw9g4vz6IyyynvbSXQAiMP74ACYurD/MAutxJ90GIALjjw9g4uIHh5mnnvfRfQBPIjjES+p9GxEBTFwqH5O5SdhFTABPIjjIC0rZRFQAE5fLx2V2SXuIC2A6gg0HeIa0LUQGMHGlfGxmStxBbAAiMP74ACaubtgfL/n7xweQHILvLoAZrn24L4bvLYDYCHxnAczqehlJr3xfAcwhhL3d8D0F8FJulPG0zncUwAKEMNUc300AC+rmR1PN8L0EsEgR7Kme7ySARXerDK02vosAYiPwPQQwYgi7R+P+AqjC7Y27Xzl3F0CFIexadO4sgKrdKSNdLO4rgMgQ3HORApj8OMTiubtx57y5owDaD2HTzjlzNwF05d6mHS/MvQQQGYL7CCDC/U3bn+IuAoiNwD0EEOmB8QsgOoCPt7mDAEAAME4AIiB6/AJAAA6CACA0ABEQPX4BIACHITkAERA9fgEQH4AIiB6/AIgPQAREj18AxAcgAqLHLwDiAxAB0eMXAfHjFwDxAYiA6PGLgPjxi4D48YuA+PGLgPjxi4D48YuA+PGLgPjxi4D48YuA+PELgfjhiwDjFwKGLwQMXwgYvhAwfDFg9IKgvsH/C7LIq/73T4M6AAAAAElFTkSuQmCC";
var ICON_512 = "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";
var _v = null;
var b64urlToBuf = /* @__PURE__ */ __name((s) => {
  let b = s.replace(/-/g, "+").replace(/_/g, "/");
  b = b.padEnd(Math.ceil(b.length / 4) * 4, "=");
  return Uint8Array.from(atob(b), (c) => c.charCodeAt(0));
}, "b64urlToBuf");
var pemToDer = /* @__PURE__ */ __name((pem) => {
  const b64 = pem.replace(/-----BEGIN PRIVATE KEY-----|-----END PRIVATE KEY-----|\s/g, "");
  return Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
}, "pemToDer");
async function vapidKeys(env) {
  if (_v) return _v;
  const der = pemToDer(env.VAPID_PRIVATE_PEM);
  const ecdsa = await crypto.subtle.importKey("pkcs8", der, { name: "ECDSA", namedCurve: "P-256" }, false, ["sign"]);
  const ecdh = await crypto.subtle.importKey("pkcs8", der, { name: "ECDH", namedCurve: "P-256" }, false, ["deriveBits"]);
  _v = { ecdsa, ecdh, pubRaw: b64urlToBuf(env.VAPID_PUB_B64URL) };
  return _v;
}
__name(vapidKeys, "vapidKeys");
var b64url = /* @__PURE__ */ __name((buf) => {
  const u = new Uint8Array(buf);
  let s = "";
  for (let i = 0; i < u.length; i += 32768) s += String.fromCharCode(...u.subarray(i, i + 32768));
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}, "b64url");
function derToRaw(der) {
  const u = new Uint8Array(der);
  let i = 2;
  i += 1;
  const l1 = u[i];
  i += 1;
  let r = u.slice(i, i + l1);
  i += l1;
  i += 1;
  const l2 = u[i];
  i += 1;
  let s = u.slice(i, i + l2);
  if (r.length === 33) r = r.slice(1);
  if (s.length === 33) s = s.slice(1);
  const o = new Uint8Array(64);
  o.set(r, 0);
  o.set(s, 32);
  return o;
}
__name(derToRaw, "derToRaw");
function toRawSig(sig) {
  const u = new Uint8Array(sig);
  if (u.length === 64 && u[0] !== 48) return u;
  return derToRaw(u);
}
__name(toRawSig, "toRawSig");
async function signJwt(ecdsaKey, aud) {
  const enc = new TextEncoder();
  const h = b64url(enc.encode(JSON.stringify({ typ: "JWT", alg: "ES256" })));
  const b = b64url(enc.encode(JSON.stringify({ aud, exp: Math.floor(Date.now() / 1e3) + 12 * 3600, sub: "mailto:ulkus@azalt.app" })));
  const data = h + "." + b;
  const sig = await crypto.subtle.sign({ name: "ECDSA", hash: "SHA-256" }, ecdsaKey, enc.encode(data));
  return data + "." + b64url(toRawSig(sig));
}
__name(signJwt, "signJwt");
async function encryptPayload(clientPubB64, authB64, payload, pubRaw65, ecdhKey) {
  const enc = new TextEncoder();
  const asPub = await crypto.subtle.importKey("raw", b64urlToBuf(clientPubB64), { name: "ECDH", namedCurve: "P-256" }, false, []);
  const auth = b64urlToBuf(authB64);
  const ecdh = await crypto.subtle.deriveBits({ name: "ECDH", public: asPub }, ecdhKey, 256);
  const hkdf = /* @__PURE__ */ __name(async (ikm, salt, info, len) => {
    const ik = await crypto.subtle.importKey("raw", ikm, "HKDF", false, ["deriveBits"]);
    return new Uint8Array(await crypto.subtle.deriveBits({ name: "HKDF", hash: "SHA-256", salt, info }, ik, len * 8));
  }, "hkdf");
  const prk = await hkdf(ecdh, auth, enc.encode("Content-Encoding: auth\0"), 32);
  const z32 = new Uint8Array(32);
  const cek = await hkdf(prk, z32, enc.encode("Content-Encoding: aes128gcm\0"), 16);
  const nonce = await hkdf(prk, z32, enc.encode("Content-Encoding: nonce\0"), 12);
  const salt16 = crypto.getRandomValues(new Uint8Array(16));
  const key = await crypto.subtle.importKey("raw", cek, { name: "AES-GCM" }, false, ["encrypt"]);
  const header = new Uint8Array(16 + 4 + 1 + 65);
  header.set(salt16, 0);
  new DataView(header.buffer).setUint32(16, 4096, false);
  header[20] = 65;
  header.set(pubRaw65, 21);
  let body = new Uint8Array(1 + payload.length);
  body[0] = 2;
  body.set(payload, 1);
  {
    const padded = new Uint8Array(Math.ceil(body.length / 16) * 16);
    padded.fill(0);
    padded.set(body, 0);
    body = padded;
  }
  const ct = await crypto.subtle.encrypt({ name: "AES-GCM", iv: nonce, additionalData: header, tagLength: 128 }, key, body);
  const out = new Uint8Array(header.length + ct.byteLength);
  out.set(header, 0);
  out.set(new Uint8Array(ct), header.length);
  return out;
}
__name(encryptPayload, "encryptPayload");
async function sendPush(sub, payloadObj, env) {
  try {
    const vk = await vapidKeys(env);
    const payload = new TextEncoder().encode(JSON.stringify(payloadObj));
    const aud = new URL(sub.endpoint).origin;
    const jwt = await signJwt(vk.ecdsa, aud);
    const wire = await encryptPayload(sub.keys.p256dh, sub.keys.auth, payload, vk.pubRaw, vk.ecdh);
    const res = await fetch(sub.endpoint, {
      method: "POST",
      headers: {
        "Authorization": "vapid t=" + jwt + ", k=" + env.VAPID_PUB_B64URL,
        "Content-Encoding": "aes128gcm",
        "Content-Type": "application/octet-stream",
        "TTL": "300",
        "Urgency": "high"
      },
      body: wire
    });
    if (res.ok) return true;
    if (res.status === 410 || res.status === 404) return "dead:" + res.status;
    return "http:" + res.status + " " + (await res.text()).slice(0, 200);
  } catch (e) {
    return String(e);
  }
}
__name(sendPush, "sendPush");
function defVozol() {
  return [
    { id: "v50", name: "Vozol 50K", cap: 5e4, cost: 0 },
    { id: "v20", name: "Vozol 20K", cap: 2e4, cost: 0 }
  ];
}
__name(defVozol, "defVozol");
function defaults() {
  return {
    settings: { target: 30, price_sigara: 120, price_iqos: 200, start_date: new Date(Date.now() + TZ_MS).toISOString().slice(0, 10), vozol: defVozol() },
    entries: [],
    readings: []
  };
}
__name(defaults, "defaults");
var dayKey = /* @__PURE__ */ __name((ts) => new Date(ts * 1e3 + TZ_MS).toISOString().slice(0, 10), "dayKey");
var tzNowDate = /* @__PURE__ */ __name(() => new Date(Date.now() + TZ_MS), "tzNowDate");
var todayStr = /* @__PURE__ */ __name(() => tzNowDate().toISOString().slice(0, 10), "todayStr");
var weekdayIdx = /* @__PURE__ */ __name((iso) => {
  const u = (/* @__PURE__ */ new Date(iso + "T00:00:00Z")).getUTCDay();
  return (u + 6) % 7;
}, "weekdayIdx");
function agg(d) {
  const s = d.settings;
  const target = Math.max(1, +s.target || 30);
  const p_s = (+s.price_sigara || 120) / 20;
  const p_i = (+s.price_iqos || 200) / 20;
  const p_avg = (p_s + p_i) / 2;
  const start = s.start_date;
  const today = todayStr();
  const days = {};
  for (const e of d.entries || []) {
    const k = dayKey(e.ts);
    const a = days[k] = days[k] || { n: 0, sig: 0, iq: 0, cost: 0, by: { sen: 0, o: 0 } };
    a.n += 1;
    if (e.type === "sigara") {
      a.sig += 1;
      a.cost += p_s;
    } else {
      a.iq += 1;
      a.cost += p_i;
    }
    const p = e.person || "o";
    a.by[p] = (a.by[p] || 0) + 1;
  }
  const t = days[today] || { n: 0, sig: 0, iq: 0, cost: 0, by: { sen: 0, o: 0 } };
  const Z = /* @__PURE__ */ __name(() => ({ n: 0, sig: 0, iq: 0, cost: 0, by: { sen: 0, o: 0 } }), "Z");
  const series = {};
  let cum = 0;
  let curMs = Date.parse(start + "T00:00:00Z");
  const todayMs = Date.parse(today + "T00:00:00Z");
  const DAY = 864e5;
  while (curMs <= todayMs) {
    const iso = new Date(curMs).toISOString().slice(0, 10);
    const a = days[iso] || Z();
    cum += Math.max(0, target * p_avg - a.cost);
    series[iso] = {
      dd: new Date(curMs).getUTCDate(),
      d: WEEK_TR[weekdayIdx(iso)],
      iso,
      n: a.n,
      sig: a.sig,
      iq: a.iq,
      ok: a.n <= target,
      saved_cum: Math.round(cum * 10) / 10
    };
    curMs += DAY;
  }
  const allKeys = Object.keys(series).sort();
  const tIdx = weekdayIdx(today);
  const monday = new Date(todayMs - tIdx * DAY);
  const week = [];
  let saved_week = 0;
  for (let i = 0; i < 7; i++) {
    const k = new Date(monday.getTime() + i * DAY).toISOString().slice(0, 10);
    const a = days[k] || Z();
    saved_week += Math.max(0, target * p_avg - (a.cost || 0));
    week.push({ d: WEEK_TR[weekdayIdx(k)], iso: k, n: a.n, ok: a.n <= target, today: k === today });
  }
  const week_total = week.reduce((x, w) => x + w.n, 0);
  let streak = 0;
  if (t.n <= target) {
    let kms = todayMs - DAY;
    const startMs = Date.parse(start + "T00:00:00Z");
    while (kms >= startMs) {
      const k = new Date(kms).toISOString().slice(0, 10);
      const a = days[k];
      if (a && a.n <= target) {
        streak += 1;
        kms -= DAY;
      } else break;
    }
  }
  let saved_total = 0, avoided = 0;
  curMs = start ? Date.parse(start + "T00:00:00Z") : todayMs;
  while (curMs <= todayMs) {
    const iso = new Date(curMs).toISOString().slice(0, 10);
    const a = days[iso] || Z();
    saved_total += Math.max(0, target * p_avg - a.cost);
    avoided += Math.max(0, target - a.n);
    curMs += DAY;
  }
  const saved_today = Math.max(0, target * p_avg - t.cost);
  const last7 = [];
  for (let i = 0; i < 7; i++) {
    const k = new Date(todayMs - i * DAY).toISOString().slice(0, 10);
    if (days[k]) last7.push(days[k]);
  }
  const avg = last7.length ? last7.reduce((x, a) => x + a.n, 0) / last7.length : 0;
  let tier;
  if (!(d.entries || []).length) tier = "\u0130lk kayd\u0131 gir \u2014 ger\xE7ek rakam g\xF6z\xFCn\xFC a\xE7ar \u{1F49C}";
  else if (avg <= 10) tier = "Neredeyse b\u0131rakt\u0131n \u2014 gurur duyuyoruz \u{1F979}\u{1F49C}";
  else if (avg <= 15) tier = "\xC7ok hafif i\xE7ici seviyesi \u2014 inan\u0131lmaz \u{1F49C}";
  else if (avg <= 20) tier = "Yar\u0131 yar\u0131ya indin \u2014 kalbin de akci\u011Ferlerin de te\u015Fekk\xFCr ediyor \u{1F49C}";
  else if (avg <= 25) tier = "Ciddi azalma \u2014 nefesin bile farkl\u0131 \u{1FAF6}";
  else if (avg <= 30) tier = "\u0130yi gidiyorsun, bir kademe daha d\xFC\u015F\xFCr \u{1F4AA}\u{1F49C}";
  else tier = "Hen\xFCz ba\u015Flang\u0131\xE7 \u2014 k\xFC\xE7\xFCk ad\u0131mlarla devam \u{1F49C}";
  const MILESTONES = [
    [10, "kan\u0131ndaki nikotin azal\u0131yor"],
    [50, "tat ve koku duyular\u0131n geri geliyor"],
    [100, "kan dola\u015F\u0131m\u0131n d\xFCzeldi"],
    [200, "\xF6ks\xFCr\xFC\u011F\xFCn belirgin azald\u0131"],
    [500, "kalp krizi riskin d\xFC\u015Ft\xFC"],
    [1e3, "akci\u011Ferlerin derin temizlikte"]
  ];
  const milestones = [];
  let next_one = null;
  for (const [m, txt] of MILESTONES) {
    if (avoided >= m) milestones.push({ at: m, txt, st: "done" });
    else if (!next_one) {
      next_one = { at: m, txt, pct: Math.round(100 * avoided / m) };
      milestones.push({ at: m, txt, st: "cur", pct: next_one.pct });
    } else {
      milestones.push({ at: m, txt, st: "next" });
    }
  }
  const vozolDevs = d.settings.vozol || defVozol();
  const mapId = {};
  for (const dev of vozolDevs) mapId[dev.id] = dev;
  function dailyUse(rs) {
    const m = {};
    for (let i = 1; i < rs.length; i++) {
      const delta = rs[i - 1].remaining - rs[i].remaining;
      if (delta > 0) {
        const k = dayKey(rs[i].ts);
        m[k] = (m[k] || 0) + delta;
      }
    }
    return m;
  }
  __name(dailyUse, "dailyUse");
  const vozol = vozolDevs.map((dev) => {
    const cap = +dev.cap || 5e4;
    const rs = (d.readings || []).filter((r) => r.device === dev.id).sort((a, b) => a.ts - b.ts);
    const last = rs.length ? rs[rs.length - 1] : null;
    const remaining = last ? Math.max(0, Math.min(cap, last.remaining)) : cap;
    const useMap = dailyUse(rs);
    const today_use = useMap[today] || 0;
    const last7k = Object.keys(useMap).sort().slice(-7);
    const vals7 = last7k.map((k) => useMap[k]);
    const avg7 = vals7.length ? vals7.reduce((x, y) => x + y, 0) / vals7.length : 0;
    const est_days = remaining > 0 && avg7 > 0 ? Math.max(1, Math.floor(remaining / avg7)) : null;
    const spent = Math.round((cap - remaining) * ((+dev.cost || 0) / cap));
    return {
      id: dev.id,
      name: dev.name || dev.id,
      cap,
      cost: +dev.cost || 0,
      remaining,
      pct: Math.round(remaining / cap * 100),
      today_use,
      avg7: Math.round(avg7),
      est_days,
      spent,
      last_iso: last ? dayKey(last.ts) : null,
      today_entered: !!last && dayKey(last.ts) === today
    };
  });
  const vozol_spent_total = vozol.reduce((x, v) => x + v.spent, 0);
  const vozolByDay = {};
  for (const dev of vozolDevs) {
    const rs = (d.readings || []).filter((r) => r.device === dev.id).sort((a, b) => a.ts - b.ts);
    const m = dailyUse(rs);
    for (const k of Object.keys(m)) vozolByDay[k] = (vozolByDay[k] || 0) + m[k];
  }
  for (const w of week) w.vozol = vozolByDay[w.iso] || 0;
  const week_vozol_total = week.reduce((x, w) => x + (w.vozol || 0), 0);
  const hist = allKeys.slice(-30).map((k) => ({ ...series[k], vozol: vozolByDay[k] || 0 }));
  const entries_today = (d.entries || []).filter((e) => dayKey(e.ts) === today).map((e) => ({ id: e.id, type: e.type, person: e.person || "o", tm: new Date(e.ts * 1e3 + TZ_MS).toISOString().slice(11, 16) })).sort((a, b) => a.tm < b.tm ? 1 : -1);
  const subs_o = (d.subs || []).filter((x) => x.person === "o").length;
  const hours = new Array(24).fill(0);
  for (const e of d.entries || []) {
    const hh = +new Date(e.ts * 1e3 + TZ_MS).toISOString().slice(11, 13);
    hours[hh] += 1;
  }
  let hour_peak = -1;
  for (let i = 0; i < 24; i++) if (hours[i] > (hour_peak < 0 ? 0 : hours[hour_peak])) hour_peak = i;
  if (hour_peak >= 0 && hours[hour_peak] === 0) hour_peak = -1;
  const monthPrefix = today.slice(0, 7);
  const dom = +today.slice(8, 10);
  const prevM = new Date(Date.parse(monthPrefix + "-01T00:00:00Z"));
  prevM.setUTCMonth(prevM.getUTCMonth() - 1);
  const prevPrefix = prevM.toISOString().slice(0, 7);
  let monthN = 0, prevN = 0;
  for (const e of d.entries || []) {
    const k = dayKey(e.ts);
    if (k.slice(0, 7) === monthPrefix) monthN += 1;
    else if (k.slice(0, 7) === prevPrefix && +k.slice(8, 10) <= dom) prevN += 1;
  }
  const month = {
    n: monthN,
    prev_same: prevN,
    day: dom,
    diff_pct: prevN > 0 ? Math.round((monthN - prevN) / prevN * 100) : null,
    prev_label: MONTH_TR[prevM.getUTCMonth()]
  };
  return {
    subs_o,
    today: {
      n: t.n,
      sig: t.sig,
      iq: t.iq,
      cost: t.cost,
      by: t.by,
      vozol: vozolByDay[today] || 0,
      left: Math.max(0, target - t.n),
      over: t.n > target,
      pct: Math.min(1, t.n / Math.max(1, target))
    },
    target,
    week,
    week_total,
    week_vozol_total,
    saved_week: Math.round(saved_week * 10) / 10,
    streak,
    hours,
    hour_peak,
    month,
    money: { spent_today: Math.round(t.cost * 10) / 10, saved_today: Math.round(saved_today * 10) / 10, saved_total: Math.round(saved_total * 10) / 10, p_avg: Math.round(p_avg * 100) / 100 },
    health: { avoided, tier, avg7: Math.round(avg * 10) / 10, milestones },
    entries_today,
    vozol,
    vozol_spent_total,
    hist,
    settings: { target, price_sigara: s.price_sigara, price_iqos: s.price_iqos, start_date: s.start_date },
    day_iso: today
  };
}
__name(agg, "agg");
var _html = null;
function html(env) {
  if (!_html) _html = HTML_RAW.split("__VAPID_PUB__").join(env.VAPID_PUB_B64URL);
  return _html;
}
__name(html, "html");
var json = /* @__PURE__ */ __name((o, status = 200) => new Response(JSON.stringify(o), { status, headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" } }), "json");
var text = /* @__PURE__ */ __name((s, type) => new Response(s, { headers: { "Content-Type": type + "; charset=utf-8", "Cache-Control": "no-store" } }), "text");
var png = /* @__PURE__ */ __name((b64) => new Response(Uint8Array.from(atob(b64), (c) => c.charCodeAt(0)), { headers: { "Content-Type": "image/png", "Cache-Control": "no-store" } }), "png");
var GIRIS_HTML = `<!DOCTYPE html><html lang="tr"><head><meta charset="utf-8">
<title>Azalt! \u2014 giri\u015F</title>
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#0f0b16"><style>
*{box-sizing:border-box;margin:0;padding:0}
body{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:20px;
background:radial-gradient(900px 520px at -12% -12%,rgba(168,85,247,.17),transparent 62%),
radial-gradient(820px 500px at 112% 10%,rgba(244,114,182,.13),transparent 60%),#0f0b16;
color:#f2eff9;font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display",sans-serif}
.k{width:100%;max-width:360px;background:rgba(255,255,255,.045);
border:1px solid rgba(255,255,255,.09);border-radius:22px;padding:26px 22px}
h1{font-size:20px;font-weight:800;margin-bottom:6px}
h1 em{font-style:normal;background:linear-gradient(135deg,#a855f7,#f472b6);
-webkit-background-clip:text;background-clip:text;color:transparent}
p{font-size:13px;color:#a094bd;line-height:1.6;margin-bottom:16px}
input{width:100%;font:inherit;font-size:16px;padding:13px 14px;border-radius:14px;
border:1px solid rgba(255,255,255,.12);background:rgba(0,0,0,.35);color:#f2eff9}
button{margin-top:12px;width:100%;font:inherit;font-size:16px;font-weight:700;padding:14px;
border:0;border-radius:14px;background:linear-gradient(135deg,#a855f7,#f472b6);color:#fff;
cursor:pointer}
.h{color:#fb7185;font-size:13px;min-height:18px;margin-top:10px}
</style></head><body>
<form class="k" method="POST" action="/giris">
<h1>Azalt! <em>giri\u015F</em></h1>
<p>Bu uygulama ki\u015Fisel, \u015Fifre gerekiyor. Bir kez gir, cihaz hat\u0131rlar.</p>
<input type="password" name="sifre" placeholder="\u015Eifre" autofocus
autocomplete="current-password" autocapitalize="none" spellcheck="false">
<button type="submit">Giri\u015F</button>
<div class="h">%HATA%</div></form></body></html>`;
var girisSayfasi = /* @__PURE__ */ __name((hata = "") => new Response(GIRIS_HTML.replace("%HATA%", hata), {
  status: 200,
  headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" }
}), "girisSayfasi");
async function tokenFor(sifre) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode("azalt:" + sifre));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("").slice(0, 32);
}
__name(tokenFor, "tokenFor");
async function yetkili(req, env) {
  const s = env.AZALT_SIFRE || "";
  if (!s) return true;
  const c = req.headers.get("Cookie") || "";
  const m = c.match(/azalt_oturum=([A-Za-z0-9_-]+)/);
  return !!m && m[1] === await tokenFor(s);
}
__name(yetkili, "yetkili");
async function load(env) {
  const raw = await env.AZALT_KV.get("data", { cacheTtl: 30 });
  let d;
  if (!raw) {
    d = defaults();
  } else {
    try {
      d = JSON.parse(raw);
    } catch {
      d = defaults();
    }
  }
  if (!d.settings) d.settings = {};
  if (!Array.isArray(d.settings.vozol)) d.settings.vozol = defVozol();
  if (!Array.isArray(d.readings)) d.readings = [];
  return d;
}
__name(load, "load");
async function save(env, d) {
  await env.AZALT_KV.put("data", JSON.stringify(d));
}
__name(save, "save");
var MONTH_TR = [
  "Ocak",
  "\u015Eubat",
  "Mart",
  "Nisan",
  "May\u0131s",
  "Haziran",
  "Temmuz",
  "A\u011Fustos",
  "Eyl\xFCl",
  "Ekim",
  "Kas\u0131m",
  "Aral\u0131k"
];
function dayDetail(d, iso) {
  const s = d.settings || {};
  const target = Math.max(1, +s.target || 30);
  const p_s = (+s.price_sigara || 120) / 20;
  const p_i = (+s.price_iqos || 200) / 20;
  const p_avg = (p_s + p_i) / 2;
  const DAY = 864e5;
  const ents = (d.entries || []).filter((e) => dayKey(e.ts) === iso).sort((a, b) => a.ts - b.ts);
  const sig = ents.filter((e) => e.type === "sigara").length;
  const iq = ents.filter((e) => e.type !== "sigara").length;
  const n = sig + iq;
  const cost = sig * p_s + iq * p_i;
  let voz = 0;
  const vozolDevices = {};
  for (const dev of s.vozol || defVozol()) {
    const rs = (d.readings || []).filter((r) => r.device === dev.id).sort((a, b) => a.ts - b.ts);
    let use = 0;
    for (let i = 1; i < rs.length; i++) {
      const dl = rs[i - 1].remaining - rs[i].remaining;
      if (dl > 0 && dayKey(rs[i].ts) === iso) use += dl;
    }
    if (use > 0) {
      voz += use;
      vozolDevices[dev.name || dev.id] = use;
    }
  }
  const start = s.start_date || iso;
  const today = todayStr();
  const isoMs = Date.parse(iso + "T00:00:00Z");
  const prev = new Date(isoMs - DAY).toISOString().slice(0, 10);
  const next = new Date(isoMs + DAY).toISOString().slice(0, 10);
  let sum7 = 0;
  for (let i = 1; i <= 7; i++) {
    const k = new Date(isoMs - i * DAY).toISOString().slice(0, 10);
    sum7 += (d.entries || []).filter((e) => dayKey(e.ts) === k).length;
  }
  const prev_avg = Math.round(sum7 / 7 * 10) / 10;
  return {
    ok: true,
    iso,
    d: WEEK_TR[weekdayIdx(iso)],
    dd: +iso.slice(8, 10),
    mm: MONTH_TR[+iso.slice(5, 7) - 1],
    yy: iso.slice(0, 4),
    target,
    n,
    sig,
    iq,
    vozol: voz,
    vozol_devices: vozolDevices,
    over: n > target,
    left: Math.max(0, target - n),
    spent: Math.round(cost * 10) / 10,
    saved: Math.round(Math.max(0, target * p_avg - cost) * 10) / 10,
    entries: ents.map((e) => ({
      id: e.id,
      type: e.type === "sigara" ? "sigara" : "iqos",
      person: e.person || "o",
      tm: new Date(e.ts * 1e3 + TZ_MS).toISOString().slice(11, 16)
    })),
    prev_iso: prev >= start ? prev : null,
    next_iso: next <= today ? next : null,
    is_today: iso === today,
    prev_avg
  };
}
__name(dayDetail, "dayDetail");
async function route(req, env) {
  tick(env).catch(() => {
  });
  const url = new URL(req.url);
  const p = url.pathname;
  if (p === "/api/tick") {
    await tick(env);
    return json({ ok: true });
  }
  if (p === "/giris") {
    if (req.method === "POST") {
      let raw = "";
      try {
        raw = await req.text();
      } catch {
        raw = "";
      }
      const m = raw.match(/(?:^|&)sifre=([^&]*)/);
      const verilen = m ? decodeURIComponent(m[1].replace(/\+/g, " ")) : "";
      const s = env.AZALT_SIFRE || "";
      const ip = req.headers.get("CF-Connecting-IP") || "x";
      const failKey = "fail:" + ip;
      let fails = 0;
      try {
        fails = parseInt(await env.AZALT_KV.get(failKey) || "0", 10) || 0;
      } catch {
        fails = 0;
      }
      if (fails >= 10) {
        return girisSayfasi("\xC7ok fazla yanl\u0131\u015F deneme. 10 dakika sonra tekrar dene.");
      }
      if (s && verilen === s) {
        try {
          await env.AZALT_KV.delete(failKey);
        } catch {
        }
        const tok = await tokenFor(s);
        return new Response("", {
          status: 303,
          headers: {
            Location: "/",
            "Set-Cookie": `azalt_oturum=${tok}; Path=/; Max-Age=31536000; SameSite=Lax`
          }
        });
      }
      try {
        await env.AZALT_KV.put(failKey, String(fails + 1), { expirationTtl: 600 });
      } catch {
      }
      return girisSayfasi(s ? "\u015Eifre hatal\u0131." : "\u015Eifre tan\u0131ml\u0131 de\u011Fil, y\xF6neticiye haber ver.");
    }
    return girisSayfasi("");
  }
  const PUBLIC_ASSETS = /* @__PURE__ */ new Set([
    "/manifest.json",
    "/sw.js",
    "/icon-192.png",
    "/icon-512.png",
    "/apple-touch-icon.png",
    "/favicon.ico"
  ]);
  if (!PUBLIC_ASSETS.has(p) && !await yetkili(req, env)) {
    if (p.startsWith("/api/")) return json({ ok: false, error: "giris gerekli" }, 401);
    return girisSayfasi("");
  }
  try {
    if (req.method === "GET") {
      if (p === "/" || p === "/index.html") return text(html(env), "text/html");
      if (p === "/manifest.json") return text(JSON.stringify(MANIFEST), "application/manifest+json");
      if (p === "/sw.js") return text(SW_JS, "application/javascript");
      if (p === "/icon-192.png" || p === "/apple-touch-icon.png") return png(ICON_192);
      if (p === "/icon-512.png") return png(ICON_512);
      if (p === "/api/state") return json(agg(await load(env)));
      if (p === "/api/day") {
        const iso = url.searchParams.get("iso") || "";
        if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return json({ ok: false, error: "tarih hatal\u0131" }, 400);
        return json(dayDetail(await load(env), iso));
      }
      if (p === "/api/subs") {
        const d = await load(env);
        return json({ ok: true, subs: (d.subs || []).map((s) => ({ person: s.person, added: s.added })) });
      }
      return json({ error: "yok" }, 404);
    }
    if (req.method === "POST") {
      let body = {};
      try {
        body = await req.json();
      } catch (e) {
      }
      const d = await load(env);
      if (p === "/api/log") {
        const typ = body.type, per = body.person;
        if (typ !== "sigara" && typ !== "iqos") return json({ ok: false, error: "tip hatal\u0131" });
        const person = per === "sen" ? "sen" : "o";
        const isoIn = /^\d{4}-\d{2}-\d{2}$/.test(body.iso || "") ? body.iso : null;
        const ts0 = isoIn ? Date.parse(isoIn + "T12:00:00+03:00") / 1e3 : Date.now() / 1e3;
        const e = { id: [...crypto.getRandomValues(new Uint8Array(4))].map((b) => b.toString(16).padStart(2, "0")).join(""), ts: ts0, type: typ, person };
        d.entries.push(e);
        await save(env, d);
        const st = agg(d);
        return json({ ok: true, over: st.today.over, left: st.today.left });
      }
      if (p === "/api/vreading") {
        const dev = (body.device || "").toString();
        const remaining = parseInt(body.remaining, 10);
        const devCfg = (d.settings.vozol || []).find((x) => x.id === dev);
        if (!devCfg) return json({ ok: false, error: "cihaz yok" });
        if (!(remaining >= 0)) return json({ ok: false, error: "say\u0131 girmelisin" });
        const cap = +devCfg.cap || 5e4;
        const clamped = Math.max(0, Math.min(cap * 2, remaining));
        d.readings.push({ ts: Date.now() / 1e3, device: dev, remaining: clamped });
        await save(env, d);
        const st = agg(d);
        const vv = (st.vozol || []).find((x) => x.id === dev);
        return json({ ok: true, today_use: vv ? vv.today_use : 0 });
      }
      if (p === "/api/undo") {
        d.entries = (d.entries || []).filter((e) => e.id !== (body.id || ""));
        await save(env, d);
        return json({ ok: true });
      }
      if (p === "/api/settings") {
        const s = d.settings;
        try {
          if (body.target !== void 0 && body.target !== null) s.target = Math.max(0, Math.min(200, parseInt(body.target, 10) || 0));
          if (body.price_sigara !== void 0 && body.price_sigara !== null) s.price_sigara = Math.max(0, parseFloat(body.price_sigara) || 0);
          if (body.price_iqos !== void 0 && body.price_iqos !== null) s.price_iqos = Math.max(0, parseFloat(body.price_iqos) || 0);
          if (Array.isArray(body.vozol)) {
            s.vozol = body.vozol.map((v) => ({
              id: String(v.id || ""),
              name: String(v.name || v.id || "Vozol"),
              cap: Math.max(1, parseInt(v.cap, 10) || 1),
              cost: Math.max(0, parseFloat(v.cost) || 0)
            })).filter((v) => v.id);
          }
          await save(env, d);
          return json({ ok: true });
        } catch (e) {
          return json({ ok: false, error: "deger hatali" });
        }
      }
      if (p === "/api/subscribe") {
        const ep = body.endpoint || "", keys = body.keys || {}, per = body.person;
        if (!ep || !keys.p256dh || !keys.auth) return json({ ok: false, error: "eksik" });
        d.subs = (d.subs || []).filter((s) => s.endpoint !== ep);
        d.subs.push({
          endpoint: ep,
          keys: { p256dh: keys.p256dh, auth: keys.auth },
          person: per === "sen" ? "sen" : "o",
          origin: "https://" + (req.headers.get("Host") || "azalt.app"),
          added: Date.now() / 1e3
        });
        await save(env, d);
        return json({ ok: true });
      }
      if (p === "/api/unsubscribe") {
        const ep = body.endpoint || "";
        d.subs = (d.subs || []).filter((s) => s.endpoint !== ep);
        await save(env, d);
        return json({ ok: true });
      }
      if (p === "/api/subs") return json({ ok: true, subs: (d.subs || []).map((s) => ({ person: s.person, added: s.added })) });
      if (p === "/api/testpush") {
        const target = body.endpoint;
        let subs = d.subs || [];
        if (target) subs = subs.filter((s) => s.endpoint === target);
        if (!subs.length) return json({ ok: false, error: "abone yok" });
        const res = [];
        for (const sub of [...subs]) {
          const r = await sendPush(sub, { title: "Azalt! \xB7 Test \u{1F49C}", body: "Bu bir test bildirimi \u{1F49C}" }, env);
          res.push({ ok: r === true, err: r !== true ? r : null });
        }
        return json({ ok: true, results: res });
      }
      return json({ ok: false, error: "bilinmeyen" }, 404);
    }
    return json({ error: "yok" }, 404);
  } catch (e) {
    return json({ ok: false, error: String(e) }, 500);
  }
}
__name(route, "route");
var AzaltDO = class {
  static {
    __name(this, "AzaltDO");
  }
  constructor(state, env) {
    this.env = env;
  }
  async fetch(req) {
    const env = this.env;
    if (new URL(req.url).pathname === "/api/tick") {
      await tick(env);
      return json({ ok: true });
    }
    return route(req, env);
  }
};
var worker_default = {
  async fetch(req, env, ctx) {
    const id = env.AZALT_DO.idFromName("global");
    return env.AZALT_DO.get(id).fetch(req);
  },
  async scheduled(event, env, ctx) {
    const id = env.AZALT_DO.idFromName("global");
    await env.AZALT_DO.get(id).fetch(new Request("https://azalt.internal/api/tick", { method: "POST" }));
  }
};
async function tick(env) {
  try {
    const d = await load(env);
    const nowMs = Date.now();
    const today = todayStr();
    d.sent = d.sent || {};
    const cutoff = new Date(tzNowDate().getTime() - 3 * 864e5).toISOString().slice(0, 10);
    for (const k of Object.keys(d.sent)) if (k < cutoff) delete d.sent[k];
    const st = agg(d);
    const pool = Array.isArray(d.msgs) && d.msgs.length ? d.msgs.filter((x) => typeof x === "string" && x.trim()) : DEFAULT_MSGS;
    d.used = d.used || {};
    if (!d.used[today]) d.used[today] = [];
    const varsMap = {
      kalan: st.today.left,
      bugun: st.today.n,
      hedef: st.target,
      kurtarilan: st.saved_week,
      birikim: st.money.saved_total
    };
    const fill = /* @__PURE__ */ __name((txt) => String(txt).replace(/\{([a-z_]+)\}/g, (m, k) => k in varsMap ? varsMap[k] : m), "fill");
    for (const [hhmm, who] of SLOTS) {
      const slotMs = Date.parse(today + "T" + hhmm + ":00+03:00");
      const key = today + hhmm;
      if (nowMs < slotMs) continue;
      if (nowMs - slotMs > 90 * 6e4) continue;
      if (d.sent[key]) continue;
      let cand = pool.map((_, i) => i).filter((i) => !d.used[today].includes(i));
      if (!cand.length) {
        d.used[today] = [];
        cand = pool.map((_, i) => i);
      }
      const idx = cand[Math.floor(Math.random() * cand.length)];
      d.used[today].push(idx);
      const body = fill(pool[idx] || DEFAULT_MSGS[0]);
      const payload = { title: "Azalt! \xB7 Hat\u0131rlatma \u{1F49C}", body };
      let sentAny = false;
      for (const sub of [...d.subs || []]) {
        if (who !== "all" && sub.person !== who) continue;
        const r = await sendPush(sub, payload, env);
        if (r === true) sentAny = true;
        else if (typeof r === "string" && (r.includes("410") || r.includes("404"))) {
          d.subs = (d.subs || []).filter((x) => x.endpoint !== sub.endpoint);
        }
      }
      d.sent[key] = true;
      await save(env, d);
      if (sentAny) console.log("[push]", key, "-> ok");
    }
  } catch (e) {
    console.log("[push] hata:", String(e));
  }
}
__name(tick, "tick");
export {
  AzaltDO,
  worker_default as default
};
//# sourceMappingURL=worker.js.map
