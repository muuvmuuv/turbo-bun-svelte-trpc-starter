/* eslint-disable no-undef */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable unicorn/prefer-module */

/** @type {import("eslint").Linter.Config} */
module.exports = {
	extends: [
		"eslint:recommended",
		"plugin:sonarjs/recommended",
		"plugin:unicorn/recommended",
		"turbo",
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		extraFileExtensions: [".svelte"],
	},
	rules: {
		"no-constant-condition": "error",
		"no-unused-expressions": "error",
		"no-unreachable": "error",
		"no-cond-assign": "error",
		"no-sequences": "error",
	},
	ignorePatterns: [
		"**/node_modules/**",
		"**/build/**",
		"**/.turbo/**",
		"**/.svelte-kit/**",
	],
	overrides: [
		{
			files: ["*.ts", "*.svelte"],
			extends: [
				"plugin:@typescript-eslint/recommended",
				"plugin:@typescript-eslint/strict",
			],
			parserOptions: {
				project: ["tsconfig.json", "tsconfig.app.json"],
			},
			rules: {},
		},
		{
			files: ["*.svelte"],
			extends: ["plugin:svelte/recommended", "plugin:svelte/prettier"],
			parser: "svelte-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser",
			},
			env: {
				browser: true,
			},
			rules: {},
		},
		{
			files: "*",
			extends: ["prettier"],
		},
	],
}
