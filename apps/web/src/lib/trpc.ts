import type { TRPCLink } from "@trpc/client"
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client"
import type { Router } from "server/router"

type TRPCClientInit = {
  fetch?: typeof window.fetch
  /** Required for $app/stores */
  url: { origin: string }
}

let browserClient: ReturnType<typeof createTRPCClient>

/**
 * Create a tRPC client.
 *
 * @see https://trpc.io/docs/vanilla
 * @see https://github.com/icflorescu/trpc-sveltekit/blob/main/package/src/client.ts
 */
function createTRPCClient(init?: TRPCClientInit) {
  let link: TRPCLink<Router>

  if (typeof window === "undefined") {
    if (!init) {
      throw new Error("Calling tRPC server requires passing a valid LoadEvent argument")
    }

    link = httpBatchLink({ url: import.meta.env.VITE_RPC_URL, fetch: init.fetch })
  } else {
    link = httpBatchLink({ url: import.meta.env.VITE_RPC_URL })
  }

  return createTRPCProxyClient<Router>({ links: [link] })
}

export function trpc(init?: TRPCClientInit) {
  if (typeof window === "undefined") {
    return createTRPCClient(init)
  }
  if (!browserClient) {
    browserClient = createTRPCClient()
  }
  return browserClient
}
