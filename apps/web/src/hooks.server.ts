import type { Handle } from "@sveltejs/kit"

export const handle = (async ({ event, resolve }) => {
  return await resolve(event, {
    transformPageChunk: ({ html }) => {
      html = html.replace(/%apiUrl%/g, import.meta.env.VITE_RPC_URL)

      return html
    },
  })
}) satisfies Handle
