import eslint from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tseslintParser from "@typescript-eslint/parser";
import eslintPluginLit from "eslint-plugin-lit";
import prettierConfig from "eslint-config-prettier";

export default [
  eslint.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tseslintParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      "lit": eslintPluginLit,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...eslintPluginLit.configs.recommended.rules,
    },
  },
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      ".git/**",
      "demo/**",
      "src/**/*.spec.ts"
    ],
  },
  prettierConfig,
];
