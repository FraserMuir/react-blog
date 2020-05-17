require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST,
};

module.exports = {
  siteMetadata: {
    title: "Web Tricks",
    siteUrl: "https://web-tricks.dev/",
    titleTemplate: "%s · Web Tricks",
    description: "A collection of web development tips and tricks.",
    url: "https://web-tricks.dev",
    image: "logo.webp",
    twitterUsername: "@frasermuir14",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Web Tricks",
        short_name: "Web Tricks",
        start_url: "/",
        lang: "en",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "standalone",
        icon: "static/logo.webp",
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          globPatterns: ["**/*"],
        },
      },
    },
  ],
};
