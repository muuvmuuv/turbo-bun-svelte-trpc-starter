import { fetchRequestHandler } from "@trpc/server/adapters/fetch"

export default {
  port: 4317,
  fetch: async (request: Request) => {
    if (request.method === "OPTIONS") {
      return new Response("", {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
        },
      })
    }

    const { router } = await import("./router")
    const response = await fetchRequestHandler({
      router,
      endpoint: "",
      req: request,
      createContext: async () => {
        void 0
      },
    })

    response.headers.set("Access-Control-Allow-Origin", "*")

    return response
  },
}
