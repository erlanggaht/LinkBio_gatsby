/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Erlangga Hidayatullah`,
    siteUrl: `https://erlanggaht.vercel.app`
  },
  plugins: ["gatsby-plugin-image","gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/",
      "icon": './src/assets/favicon.svg',
    },
    __key: "images"
  },
],

};