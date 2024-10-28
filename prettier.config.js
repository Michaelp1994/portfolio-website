/** @type {import("prettier").Config} */
export default {
    // i am just using the standard config, change if you need something else
    plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro",
            },
        },
    ],
    trailingComma: "es5",
    tabWidth: 4,
    semi: true,
    singleQuote: false,
};
