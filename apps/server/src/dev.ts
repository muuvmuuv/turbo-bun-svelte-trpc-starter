/* eslint-disable unicorn/prevent-abbreviations */

import { liveReload } from "bun-livereload"

import server from "./"

export default {
  ...server,
  fetch: liveReload(server.fetch),
}
