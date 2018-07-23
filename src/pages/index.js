import React from 'react'

class IndexArticles extends React.Component {

  render() {
    const articles = this.props.data.allNodeArticle.edges
    const articleTitles = articles.map(article => <li>{ article.node.title }</li>)
    return <ul>{articleTitles}</ul>
  }
}

export default IndexArticles

export const query = graphql`
  query pageQuery {
    allNodeArticle {
      edges {
        node {
          title
        }
      }
    }
  }
  `