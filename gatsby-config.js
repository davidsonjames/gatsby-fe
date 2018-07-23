module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-drupal',
      options: {
        baseUrl: 'http://carraway.ddev.local'
      }
    }
  ],
}
