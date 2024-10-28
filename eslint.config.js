import eslintPluginAstro from "eslint-plugin-astro";
import eslint from "@eslint/js";
export default [
    // add more generic rule sets here, such as:
    eslint.configs.recommended,
    ...eslintPluginAstro.configs.recommended,
    {
        rules: {
            // override/add rules settings here, such as:
            // "astro/no-set-html-directive": "error"
        },
    },
];
