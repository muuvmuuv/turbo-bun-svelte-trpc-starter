import { expect, test } from "bun:test"
import { router } from "../../src/router"

test("returns posts", async () => {
	const caller = router.createCaller({})

	const posts = await caller.post.get()

	expect(posts).toHaveLength(4)
})
