import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import OutlineTable from '../components/Outline'

export const OutlinePageTemplate = ({posts, title, description, image, heading}) => (
  <div className="content">
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <p>{heading}</p>
              <p>{description}</p>
              <OutlineTable posts={posts.map(post => post.node)}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

OutlinePageTemplate.propTypes = {
  posts: PropTypes.array
}

const OutlinePage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  const { description, title, image, heading } = data.markdownRemark.frontmatter


  return (
    <Layout>
      <OutlinePageTemplate
        posts={posts}
        description={description}
        title={title}
        image={image}
        heading={heading}
      />
    </Layout>
  )
}

OutlinePage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default OutlinePage

export const OutlinePageQuery = graphql`
query OutlineQuery {
  markdownRemark {
    id
    frontmatter {
      title
      description
      heading
      image {
        childImageSharp {
          fluid(maxWidth: 240, quality: 64) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
  allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {templateKey: {eq: "guide-post"}}, fields: {slug: {}}}) {
    edges {
      node {
        id
        fields {
          slug
        }
        frontmatter {
          section
          order
          title
          templateKey
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
}
`
