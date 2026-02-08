import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { remarkReadingTime } from "./src/utils/remarkReadingTime";
import rehypeExternalLinks from "rehype-external-links";
import expressiveCode from "astro-expressive-code";
import { expressiveCodeOptions } from "./src/site.config";
import icon from "astro-icon";
import rehypeUnwrapImages from "rehype-unwrap-images";

import react from "@astrojs/react";

export default defineConfig({
    site: "https://poulgrain.link",
    integrations: [
        expressiveCode(expressiveCodeOptions),
        tailwind({
            applyBaseStyles: false,
        }),
        sitemap(),
        mdx(),
        icon(),
        react(),
    ],
    markdown: {
        remarkPlugins: [remarkReadingTime],
        rehypePlugins: [
            rehypeUnwrapImages,
            [
                rehypeExternalLinks,
                {
                    target: "_blank",
                    rel: ["nofollow, noopener, noreferrer"],
                },
            ],
        ],
        remarkRehype: {
            footnoteLabelProperties: {
                className: [""],
            },
        },
    },
    prefetch: true,
    output: "static",
});
