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
        name: `Mohammed Ehab's Website`,
        short_name: `ME`,
        start_url: `/`,
        background_color: `black`,
        theme_color: `black`,
        display: `minimal-ui`,
        icon: `src/images/ThickBorderLogo.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        //token required by Github API
        token: process.env.GH_API_TOKEN,
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
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-140382357-1`,
        respectDNT: true
      }
    }
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography`
    //   }
    // }
  ]
};
