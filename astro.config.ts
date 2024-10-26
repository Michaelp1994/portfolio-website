import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"
import { remarkReadingTime } from "./src/utils/remarkReadingTime"
import rehypeExternalLinks from "rehype-external-links"
import expressiveCode from "astro-expressive-code"
import { expressiveCodeOptions } from "./src/site.config"
import icon from "astro-icon"
import rehypeUnwrapImages from "rehype-unwrap-images"

export default defineConfig({
	site: "https://example.me",
	integrations: [
		expressiveCode(expressiveCodeOptions),
		tailwind({
			applyBaseStyles: false
		}),
		sitemap(),
		mdx(),
		icon()
	],
	markdown: {
		remarkPlugins: [remarkReadingTime],
		rehypePlugins: [
			rehypeUnwrapImages,
			[
				rehypeExternalLinks,
				{
					target: "_blank",
					rel: ["nofollow, noopener, noreferrer"]
				}
			]
		],
		remarkRehype: {
			footnoteLabelProperties: {
				className: [""]
			}
		}
	},
	prefetch: true,
	output: "static"
})
