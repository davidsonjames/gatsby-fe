module.exports = {
  siteMetadata: {
    title: 'Nick Carroways Website',
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
