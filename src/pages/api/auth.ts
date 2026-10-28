import type { APIRoute } from 'astro';

// Paso 1 del login de Decap CMS: redirige a GitHub.
export const prerender = false;

export const GET: APIRoute = ({ url, cookies, redirect }) => {
  const clientId = process.env.GITHUB_CLIENT_ID;
  if (!clientId) return new Response('Falta GITHUB_CLIENT_ID en Vercel', { status: 500 });

  const state = crypto.randomUUID();
  cookies.set('decap_state', state, { httpOnly: true, secure: true, sameSite: 'lax', path: '/api', maxAge: 600 });

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: `${url.origin}/api/callback`,
    scope: url.searchParams.get('scope') ?? 'repo',
    state,
  });
  return redirect(`https://github.com/login/oauth/authorize?${params}`);
};
