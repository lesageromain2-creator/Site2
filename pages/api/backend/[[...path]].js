/**
 * Proxy vers le backend du site de référence.
 * Toutes les requêtes /api/backend/* sont envoyées au backend commun.
 */
function getBackendBase() {
  const url =
    process.env.BACKEND_URL ||
    process.env.NEXT_PUBLIC_API_URL ||
    'http://localhost:5000';
  return url.replace(/\/$/, '');
}

export default async function handler(req, res) {
  const path = (req.query.path && req.query.path.length) ? `/${req.query.path.join('/')}` : '';
  const query = req.url?.includes('?') ? `?${req.url.split('?')[1]}` : '';
  const backendBase = getBackendBase();
  const targetUrl = `${backendBase}${path}${query}`;

  const headers = {};
  ['authorization', 'content-type', 'accept'].forEach((h) => {
    const v = req.headers[h];
    if (v) headers[h] = v;
  });
  if (!headers['content-type']) headers['content-type'] = 'application/json';

  let body;
  if (req.method !== 'GET' && req.method !== 'HEAD' && req.body) {
    body = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);
  }

  try {
    const backendRes = await fetch(targetUrl, {
      method: req.method || 'GET',
      headers,
      body,
    });
    const text = await backendRes.text();
    res.status(backendRes.status);
    backendRes.headers.forEach((v, k) => {
      if (k.toLowerCase() !== 'content-encoding') res.setHeader(k, v);
    });
    try {
      res.json(JSON.parse(text));
    } catch {
      res.send(text);
    }
  } catch (error) {
    console.error('[backend proxy]', error);
    res.status(502).json({ error: 'Backend inaccessible', message: 'Vérifiez BACKEND_URL.' });
  }
}

export const config = { api: { bodyParser: true } };
