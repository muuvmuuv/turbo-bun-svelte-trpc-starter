<script lang="ts">
  import { onMount } from "svelte"

  import type { Post } from "server/routes/post"

  import { page } from "$app/stores"
  import { trpc } from "$lib/trpc"

  let greeting = "press the button to load data"
  let loading = false

  const loadData = async () => {
    loading = true
    try {
      greeting = await trpc($page).hello.query()
    } catch (error) {
      console.error(error)
    } finally {
      loading = false
    }
  }

  let posts: Post[] = []

  onMount(async () => {
    try {
      posts = await trpc($page).post.get.query()
    } catch (error) {
      console.error(error)
    } finally {
      loading = false
    }
  })
</script>

<h6>Loading data in<br /><code>+page.svelte</code></h6>

<a
  href="#load"
  role="button"
  class="secondary"
  aria-busy={loading}
  on:click|preventDefault={loadData}>Load</a
>

<p>{greeting}</p>

<h3>Posts</h3>

<div class="posts">
  {#each posts as post}
    <div class="post">
      <h4>{post.name}</h4>
    </div>
  {:else}
    <!-- this block renders when photos.length === 0 -->
    <p>loading...</p>
  {/each}
</div>

<style lang="scss">
  .posts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 2rem;

    .post {
      padding: 1rem;
      background-color: rgb(237, 235, 235);
      border-radius: 0.65rem;
    }
  }
</style>
