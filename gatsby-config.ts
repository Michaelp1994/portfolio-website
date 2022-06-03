import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  // siteMetadata: {
  //   siteUrl: `https://www.yourdomain.tld`,
  // },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /.svg$/, // See below to configure properly
        },
      },
    },
  ],
};

export default config;
