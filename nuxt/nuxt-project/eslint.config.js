// eslint.config.js
import js from "@eslint/js";
import vue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import nuxt from "eslint-plugin-nuxt";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    languageOptions: {
      globals: {
        defineNuxtConfig: "readonly",
        ref: "readonly",
        computed: "readonly"
      },
    },
  },
  {
    ignores: ["**/node_modules/**", ".nuxt", "dist", ".output"],
  },
  js.configs.recommended,
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": ts,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/explicit-module-boundary-types": "off",
    },
  },
  {
    plugins: { vue },
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
    rules: {
      "no-console": "off",
      "arrow-parens": "off",
      "no-empty": "off",
      "no-unused-vars": "off",
      "multi-word": "off",
      "no-async-promise-executor": "off",
      "vue/multi-word-component-names": "off",
      "vue/v-on-event-hyphenation": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "vue/max-attributes-per-line": [
        "error",
        {
          singleline: 4,
          multiline: 1,
        },
      ],

      // Added Vue indentation rules
      "vue/html-indent": [
        "error",
        2,
        {
          attribute: 1,
          baseIndent: 1,
          closeBracket: 0,
          alignAttributesVertically: true,
          ignores: [],
        },
      ],
      "vue/script-indent": [
        "error",
        2,
        {
          baseIndent: 0,
          switchCase: 1,
          ignores: [],
        },
      ],
    },
  },
  {
    plugins: { nuxt },
    files: ["**/*.ts", "**/*.vue"],
    rules: {
      ...nuxt.configs.recommended.rules,
    },
  },
];
