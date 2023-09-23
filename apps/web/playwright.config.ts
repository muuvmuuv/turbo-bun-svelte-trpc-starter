import type { PlaywrightTestConfig } from "@playwright/test"

const config: PlaywrightTestConfig = {
	webServer: {
		command: "pnpm --filter web run serve",
		port: 4173,
	},
	testDir: "tests",
}

export default config
