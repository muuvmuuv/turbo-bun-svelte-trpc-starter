import { initTRPC } from "@trpc/server"
import { z } from "zod"

import { sleep } from "../utils/sleep"

export interface Post {
  name: string
}

const posts: Post[] = [
  { name: "First Post" },
  { name: "Second Post" },
  { name: "Third Post" },
  { name: "Fourth Post" },
]

const t = initTRPC.create()

export default t.router({
  get: t.procedure.query(async () => {
    await sleep(2000)
    return posts
  }),
  create: t.procedure.input(z.object({ name: z.string() })).mutation(({ input }) => {
    posts.push(input)
    return input
  }),
})
