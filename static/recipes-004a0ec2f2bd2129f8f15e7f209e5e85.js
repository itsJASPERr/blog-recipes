import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

import RecipeSquare from '../components/blogSquare'
// import { makeStyles } from '@material-ui/styles'

// const useStyles = makeStyles(theme => ({
//     root: {}
// }))

const RecipePage = ({ data }) => {
  // const classes = useStyles()
  return (
    <Layout>
      <section
        style={{
          marginTop: '50px',
          display: 'flex',
          flexDirection: 'column-reverse',
        }}
      >
        {data.allMarkdownRemark.edges.map(post => (
          <RecipeSquare
            title={post.node.frontmatter.title}
            date={post.node.frontmatter.date}
            path={post.node.frontmatter.path}
            description={post.node.frontmatter.description}
            key={post.node.id}
            SquareProps={{}}
            RecipeProps={{}}
          />
        ))}
      </section>
    </Layout>
  )
}
export const pageQuery = graphql`
  query RecipeIndexQuery {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___date] }
      filter: { frontmatter: { section: { eq: "recipe" } } }
      ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            author
            date
            description
          }
        }
      }
    }
  }
`

export default RecipePage
