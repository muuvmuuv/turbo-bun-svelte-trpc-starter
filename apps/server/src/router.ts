import { initTRPC } from "@trpc/server"

import post from "./routes/post"

const t = initTRPC.create()

export const router = t.router({
  hello: t.procedure.query(() => "world"),
  post,
})

export type Router = typeof router
