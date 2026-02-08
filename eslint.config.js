import { defineConfig } from "eslint/config";
import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";
import js from "@eslint/js";
export default defineConfig([
    js.configs.recommended,
    ...tseslint.configs.recommended,
    ...eslintPluginAstro.configs.recommended,
    {
        // 6. Ignore build artifacts
        ignores: ["dist/", ".astro/"],
    },
]);
