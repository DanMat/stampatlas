/**
 * The public read path (ADR-0047): a Worker serving a materialised, public-safe projection.
 *
 * Two routes and nothing else. `/api/public.json` returns the projection — from R2 in production,
 * from the bundled copy under local `wrangler dev` — and `/` returns the story page that renders it.
 * There is no database, no origin, nothing a crawler can wake; the projection is a few kilobytes of
 * facts the private archive chose to publish, and this Worker only hands them out.
 */
import bundledProjection from '../public/public.json';
import { PAGE } from './page.js';

interface Env {
	PROJECTION?: R2Bucket;
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const url = new URL(request.url);

		if (url.pathname === '/api/public.json') {
			// Prefer the R2 object (production); fall back to what was bundled at build time so
			// local dev and a not-yet-uploaded deploy still render rather than 404.
			const fromR2 = env.PROJECTION ? await env.PROJECTION.get('public.json') : null;
			const body = fromR2 ? await fromR2.text() : JSON.stringify(bundledProjection);
			return new Response(body, {
				headers: {
					'content-type': 'application/json; charset=utf-8',
					// Short edge cache: the projection changes only when the archive is reprocessed.
					'cache-control': 'public, max-age=300',
				},
			});
		}

		return new Response(PAGE, {
			headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'public, max-age=300' },
		});
	},
};
