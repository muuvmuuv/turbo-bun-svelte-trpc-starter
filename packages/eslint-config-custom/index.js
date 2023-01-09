/* eslint-disable no-undef */
/* eslint-disable unicorn/prefer-module */

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:sonarjs/recommended",
    "plugin:unicorn/recommended",
    "turbo",
  ],
  plugins: ["simple-import-sort"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "simple-import-sort/imports": [
      "error",
      {
        groups: [["^\\u0000", "^node:"], ["^@?\\w"], ["^", "^src"], ["^\\."]],
      },
    ],
    "simple-import-sort/exports": "error",
    "no-constant-condition": "error",
    "no-unused-expressions": "error",
    "no-unreachable": "error",
    "no-cond-assign": "error",
    "no-sequences": "error",
  },
  overrides: [
    {
      files: ["*.ts"],
      parser: "@typescript-eslint/parser",
      plugins: ["tsdoc", "@typescript-eslint"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        // "plugin:@typescript-eslint/strict",
      ],
      rules: {
        "tsdoc/syntax": "error",
      },
    },
    {
      files: ["*.svelte"],
      plugins: ["svelte3"],
      processor: "svelte3/svelte3",
      settings: {
        "svelte3/typescript": () => require("typescript"),
      },
      env: {
        browser: true,
      },
    },
    {
      files: ["*"],
      extends: ["prettier"],
    },
  ],
}
