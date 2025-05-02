/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
    app(input) {
        return {
            name: "portfolio-website",
            removal: input?.stage === "production" ? "retain" : "remove",
            home: "aws",
            providers: {
                aws: {
                    region: "ap-southeast-2",
                    profile: "portfolio",
                },
            },
        };
    },
    async run() {
        const website = new sst.aws.Astro("PortfolioWebsite", {
            domain:
                $app.stage === "production"
                    ? {
                          name: "poulgrain.link",
                          redirects: ["www.poulgrain.link"],
                      }
                    : undefined,
        });

        return {
            websiteUrl: website.url,
        };
    },
});
