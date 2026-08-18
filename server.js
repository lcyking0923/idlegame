/* ═══════════════════════════════════════════════════════════════
   조선 관제소 서버 — 조선검객·조선거상 운영 대시보드
   의존성 0, Node.js 내장 모듈만 사용.
   실행:  node server.js   →  게임 http://localhost:8282/
                              대시보드 http://localhost:8282/admin
   ═══════════════════════════════════════════════════════════════ */
'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const PORT = process.env.PORT || 8282;
const ROOT = __dirname;
const DATA_FILE = path.join(ROOT, 'dashboard-data.json');
const ONLINE_MS = 75000;      // 마지막 하트비트 후 이 시간 안이면 "접속 중"
                              // (백그라운드 탭은 브라우저가 타이머를 최대 1분까지 늦추므로 여유를 둔다)
const IDLE_MS = 20000;        // 이 시간 넘게 하트비트가 늦으면 "대기(백그라운드)"
const SNAP_MS = 30000;        // 동시 접속 스냅샷 주기
const SNAP_CAP = 2880;        // 24시간치 (30초 × 2880)
const LOG_CAP = 300;

/* ── 영속 데이터 ── */
let D = {
  players: {},   // pid → {pid,name,game,ip,ua,first,last,beats,stats,sessionStart}
  history: [],   // [{t, sword, geosang}]
  logins: [],    // [{t,pid,name,game,ip}]
  errors: [],    // [{t,pid,name,game,msg,src,line,col,stack}]
  mails: {},     // pid → [{id,at,title,msg,items:[{type,id,amt}]}]
  blocked: [],   // [pid]
  daily: {},     // 'YYYY-MM-DD' → [pid]
  mailsSent: 0,
};
try {
  const raw = fs.readFileSync(DATA_FILE, 'utf8');
  Object.assign(D, JSON.parse(raw));
} catch (e) { /* 첫 실행 */ }

const noticeQ = {}; // pid → [msg]  (공지는 메모리만)

let saveTimer = null;
function saveSoon() {
  if (saveTimer) return;
  saveTimer = setTimeout(() => {
    saveTimer = null;
    try { fs.writeFileSync(DATA_FILE, JSON.stringify(D)); } catch (e) {}
  }, 2000);
}
setInterval(() => { try { fs.writeFileSync(DATA_FILE, JSON.stringify(D)); } catch (e) {} }, 60000);

function today() {
  const d = new Date();
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}
function isOnline(p, now) { return p.last > 0 && (now - p.last) < ONLINE_MS; }
function onlineCount(game) {
  const now = Date.now();
  let n = 0;
  for (const pid in D.players) {
    const p = D.players[pid];
    if (isOnline(p, now) && (!game || p.game === game)) n++;
  }
  return n;
}

/* 30초마다 동시 접속 스냅샷 */
setInterval(() => {
  D.history.push({ t: Date.now(), sword: onlineCount('sword'), geosang: onlineCount('geosang') });
  if (D.history.length > SNAP_CAP) D.history.splice(0, D.history.length - SNAP_CAP);
  saveSoon();
}, SNAP_MS);

/* ── API 핸들러 ── */
function apiBeat(body, ip, ua) {
  const { pid, name, game, stats } = body;
  if (!pid || typeof pid !== 'string' || pid.length > 40) return { err: 'bad pid' };
  const now = Date.now();
  let p = D.players[pid];
  const wasOnline = p && isOnline(p, now);
  if (!p) p = D.players[pid] = { pid, first: now, last: 0, beats: 0, sessionStart: now };
  if (!wasOnline) { // 새 로그인(첫 접속 또는 재접속)
    p.sessionStart = now;
    D.logins.unshift({ t: now, pid, name: name || p.name || '?', game: game || '?', ip });
    if (D.logins.length > LOG_CAP) D.logins.length = LOG_CAP;
    const day = today();
    if (!D.daily[day]) D.daily[day] = [];
    if (!D.daily[day].includes(pid)) D.daily[day].push(pid);
  }
  p.name = (typeof name === 'string' && name.slice(0, 40)) || p.name || '무명객';
  p.game = game === 'geosang' ? 'geosang' : 'sword';
  p.ip = ip; p.ua = (ua || '').slice(0, 200);
  p.last = now; p.beats++;
  if (stats && typeof stats === 'object') p.stats = stats;
  saveSoon();

  if (D.blocked.includes(pid)) return { kick: true };
  const resp = { ok: 1 };
  if (noticeQ[pid] && noticeQ[pid].length) { resp.notices = noticeQ[pid]; delete noticeQ[pid]; }
  const mq = D.mails[pid];
  if (mq && mq.length) resp.mails = mq;
  return resp;
}

function resolveTargets(body) {
  const now = Date.now();
  if (body.target === 'all') return Object.keys(D.players);
  if (body.target === 'online') return Object.keys(D.players).filter(pid => isOnline(D.players[pid], now));
  if (Array.isArray(body.pids)) return body.pids.filter(pid => D.players[pid]);
  return [];
}

function apiMail(body) {
  const title = String(body.title || '').slice(0, 60) || '운영자 우편';
  const msg = String(body.msg || '').slice(0, 500);
  let items = Array.isArray(body.items) ? body.items.slice(0, 4) : [];
  items = items.map(it => ({
    type: String(it.type || '').slice(0, 12),
    id: Number.isInteger(it.id) ? it.id : undefined,
    amt: Math.max(1, Math.min(1e15, Math.floor(+it.amt || 1))),
  })).filter(it => it.type);
  const pids = resolveTargets(body);
  const mail = { title, msg, items };
  for (const pid of pids) {
    if (!D.mails[pid]) D.mails[pid] = [];
    D.mails[pid].push({ id: crypto.randomBytes(6).toString('hex'), at: Date.now(), ...mail });
    if (D.mails[pid].length > 30) D.mails[pid].splice(0, D.mails[pid].length - 30);
  }
  D.mailsSent += pids.length;
  saveSoon();
  return { sent: pids.length };
}

function apiNotice(body) {
  const msg = String(body.msg || '').slice(0, 200);
  if (!msg) return { sent: 0 };
  const pids = resolveTargets(body);
  for (const pid of pids) {
    if (!noticeQ[pid]) noticeQ[pid] = [];
    noticeQ[pid].push(msg);
  }
  return { sent: pids.length };
}

function apiDashboard() {
  const now = Date.now();
  const day = today();
  const midnight = new Date(); midnight.setHours(0, 0, 0, 0);
  const players = Object.values(D.players).map(p => ({
    pid: p.pid, name: p.name, game: p.game, ip: p.ip,
    first: p.first, last: p.last, beats: p.beats, stats: p.stats || null,
    online: isOnline(p, now),
    idle: isOnline(p, now) && (now - p.last) > IDLE_MS,
    sessionMs: isOnline(p, now) ? now - p.sessionStart : 0,
    blocked: D.blocked.includes(p.pid),
    mailPending: (D.mails[p.pid] || []).length,
  }));
  players.sort((a, b) => (b.online - a.online) || (b.last - a.last));
  const dayAgo = now - 86400000;
  return {
    now,
    players: players.slice(0, 200),
    history: D.history,
    logins: D.logins.slice(0, 100),
    errors: D.errors.slice(0, 100),
    blocked: D.blocked,
    stats: {
      online: players.filter(p => p.online).length,
      onlineSword: players.filter(p => p.online && p.game === 'sword').length,
      onlineGeosang: players.filter(p => p.online && p.game === 'geosang').length,
      todayVisitors: (D.daily[day] || []).length,
      totalPlayers: Object.keys(D.players).length,
      todayLogins: D.logins.filter(l => l.t >= midnight.getTime()).length,
      mailPending: Object.values(D.mails).reduce((s, a) => s + a.length, 0),
      mailsSent: D.mailsSent,
      errors24h: D.errors.filter(e => e.t >= dayAgo).length,
    },
  };
}

/* ── HTTP ── */
const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif',
  '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.mp3': 'audio/mpeg',
  '.ogg': 'audio/ogg', '.wav': 'audio/wav', '.woff2': 'font/woff2', '.md': 'text/markdown; charset=utf-8',
};
const ROUTES = { '/': 'index.html', '/geosang': 'geosang.html', '/admin': 'admin.html' };

function send(res, code, data, type) {
  const buf = typeof data === 'string' || Buffer.isBuffer(data) ? data : JSON.stringify(data);
  res.writeHead(code, {
    'Content-Type': type || 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'no-store',
  });
  res.end(buf);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', c => { raw += c; if (raw.length > 200000) { reject(new Error('too big')); req.destroy(); } });
    req.on('end', () => { try { resolve(raw ? JSON.parse(raw) : {}); } catch (e) { reject(e); } });
    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://x');
  const p = url.pathname;
  const ip = (req.socket.remoteAddress || '').replace(/^::ffff:/, '').replace(/^::1$/, '127.0.0.1');

  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    });
    return res.end();
  }

  try {
    if (p.startsWith('/api/')) {
      if (req.method === 'GET' && p === '/api/dashboard') return send(res, 200, apiDashboard());
      if (req.method !== 'POST') return send(res, 405, { err: 'method' });
      const body = await readBody(req);

      if (p === '/api/beat') return send(res, 200, apiBeat(body, ip, req.headers['user-agent']));
      if (p === '/api/bye') {
        const pl = D.players[body.pid];
        if (pl) { pl.last = 0; saveSoon(); }
        return send(res, 200, { ok: 1 });
      }
      if (p === '/api/error') {
        D.errors.unshift({
          t: Date.now(), pid: String(body.pid || '').slice(0, 40), name: String(body.name || '').slice(0, 40),
          game: body.game === 'geosang' ? 'geosang' : 'sword',
          msg: String(body.msg || '').slice(0, 300), src: String(body.src || '').slice(0, 200),
          line: +body.line || 0, col: +body.col || 0, stack: String(body.stack || '').slice(0, 1500),
        });
        if (D.errors.length > LOG_CAP) D.errors.length = LOG_CAP;
        saveSoon();
        return send(res, 200, { ok: 1 });
      }
      if (p === '/api/mail') return send(res, 200, apiMail(body));
      if (p === '/api/mail/ack') {
        const mq = D.mails[body.pid];
        if (mq) {
          D.mails[body.pid] = mq.filter(m => m.id !== body.mid);
          if (!D.mails[body.pid].length) delete D.mails[body.pid];
          saveSoon();
        }
        return send(res, 200, { ok: 1 });
      }
      if (p === '/api/notice') return send(res, 200, apiNotice(body));
      if (p === '/api/kick') {
        if (body.pid && !D.blocked.includes(body.pid)) { D.blocked.push(body.pid); saveSoon(); }
        return send(res, 200, { ok: 1 });
      }
      if (p === '/api/unkick') {
        D.blocked = D.blocked.filter(x => x !== body.pid);
        saveSoon();
        return send(res, 200, { ok: 1 });
      }
      if (p === '/api/errors/clear') { D.errors = []; saveSoon(); return send(res, 200, { ok: 1 }); }
      return send(res, 404, { err: 'not found' });
    }

    /* 정적 파일 */
    let file = ROUTES[p] || decodeURIComponent(p.slice(1));
    const full = path.join(ROOT, file);
    if (!full.startsWith(ROOT) || file.includes('..')) return send(res, 403, 'Forbidden', 'text/plain');
    fs.readFile(full, (err, buf) => {
      if (err) return send(res, 404, 'Not Found', 'text/plain; charset=utf-8');
      send(res, 200, buf, MIME[path.extname(full).toLowerCase()] || 'application/octet-stream');
    });
  } catch (e) {
    send(res, 500, { err: String(e.message || e) });
  }
});

server.listen(PORT, () => {
  console.log('════════════════════════════════════════════');
  console.log('  🏯 조선 관제소 가동');
  console.log('  게임(조선검객):  http://localhost:' + PORT + '/');
  console.log('  게임(조선거상):  http://localhost:' + PORT + '/geosang');
  console.log('  운영 대시보드:   http://localhost:' + PORT + '/admin');
  console.log('════════════════════════════════════════════');
});

process.on('SIGINT', () => {
  try { fs.writeFileSync(DATA_FILE, JSON.stringify(D)); } catch (e) {}
  process.exit(0);
});
