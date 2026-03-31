/**
 * Retourne l'URL de base de l'API backend (site de référence).
 * En production sans NEXT_PUBLIC_API_URL : utilise le proxy /api/backend.
 */
export function getApiBaseUrl() {
  const envUrl = process.env.NEXT_PUBLIC_API_URL;
  if (typeof window !== 'undefined') {
    const origin = window.location.origin;
    const isProduction = origin.includes('vercel.app') || origin.startsWith('https://');
    if (isProduction && (!envUrl || envUrl.replace(/\/$/, '') === origin.replace(/\/$/, ''))) {
      return '';
    }
  }
  let url = envUrl || 'http://localhost:5000';
  if (typeof window !== 'undefined' && window.location.protocol === 'https:' && url.startsWith('http://') && !url.includes('localhost')) {
    url = url.replace('http://', 'https://');
  }
  return url.replace(/\/$/, '');
}

export function getApiPrefix() {
  const base = getApiBaseUrl();
  return base === '' ? '/api/backend' : base;
}
