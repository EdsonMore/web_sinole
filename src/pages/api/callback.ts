import type { APIRoute } from 'astro';

// Paso 2: GitHub devuelve un código; lo cambiamos por un token y se lo pasamos al panel /admin.
export const prerender = false;

const respuesta = (estado: 'success' | 'error', contenido: object, origen: string) =>
  new Response(
    `<!doctype html><script>
      const msg = 'authorization:github:${estado}:' + ${JSON.stringify(JSON.stringify(contenido))};
      window.addEventListener('message', (e) => {
        if (e.origin === ${JSON.stringify(origen)}) window.opener.postMessage(msg, e.origin);
      });
      window.opener.postMessage('authorizing:github', ${JSON.stringify(origen)});
    </script>`,
    { headers: { 'Content-Type': 'text/html; charset=utf-8' } },
  );

export const GET: APIRoute = async ({ url, cookies }) => {
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  const esperado = cookies.get('decap_state')?.value;
  cookies.delete('decap_state', { path: '/api' });

  if (!code || !state || state !== esperado) {
    return respuesta('error', { message: 'Solicitud de login inválida' }, url.origin);
  }

  const r = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
    }),
  });
  const data = await r.json();

  if (!data.access_token) {
    return respuesta('error', { message: data.error_description ?? 'No se pudo obtener el token' }, url.origin);
  }
  return respuesta('success', { token: data.access_token, provider: 'github' }, url.origin);
};
