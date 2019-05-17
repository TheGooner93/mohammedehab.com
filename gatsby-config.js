require("dotenv").config({
  path: `.env.development`
});

module.exports = {
  siteMetadata: {
    title: `Mohammed Ehab's Website`,
    description: `Portfolio, photoblog and other jazz, courtesy of yours truly.`,
    author: `@TheGooner93`
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/static/blog_posts`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `resume`,
        path: `${__dirname}/static/resume`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/LogoTN.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        //token required by Github API
        token: "29d4b0d9097bb7c0885d747a98bc878017e602ce",
        graphQLQuery: `
        query GetGHRepos($user: String!){ 
          user(login:$user) {
            name
            pinnedRepositories(first:10) {    
              edges {
                node {
                  id
                  name
                  description
                  url
                  homepageUrl
                }
              }
            }
          }
        }`,
        variables: { user: `TheGooner93` }
      }
    }
  ]
};
