import prettierPlugin from "eslint-plugin-prettier";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import globals from "globals";

export default [
  {
    ignores: ["dist/**", "node_modules/**"],
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      prettier: prettierPlugin,
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      "prettier/prettier": "error",
      "max-len": ["warn", 70, 2, { ignoreComments: true }],
      "@typescript-eslint/no-unused-vars": "error",
    },
  },
];
