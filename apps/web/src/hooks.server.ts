import type { Handle } from "@sveltejs/kit"

export const handle = (async ({ event, resolve }) => {
	return await resolve(event, {
		transformPageChunk: ({ html }) => {
			html = html.replaceAll("%apiUrl%", import.meta.env.VITE_RPC_URL)

			return html
		},
	})
}) satisfies Handle
