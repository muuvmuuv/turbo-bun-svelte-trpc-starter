/** @type {import("prettier").Config} */
module.exports = {
	semi: false,
	printWidth: 90,
	proseWrap: "always",
	singleQuote: false,
	useTabs: true,
	tabWidth: 2,
	plugins: ["prettier-plugin-svelte"],
	overrides: [
		{
			files: "*.svelte",
			options: {
				parser: "svelte",
			},
		},
	],
}
