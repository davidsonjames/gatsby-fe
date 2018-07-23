import React from 'react'

class IndexArticles extends React.Component {

  render() {
    const articles = this.props.data.allNodeArticle.edges
    const articleTitles = articles.map(article => <li className="list-group-item">{ article.node.title }</li>)
    return <ul className="list-group">{articleTitles}</ul>
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