import React from 'react'
import PropTypes from 'prop-types'

const FeatureGrid = ({ posts }) => (
  <div className="columns is-multiline">
    {posts.map(item => 
    {
      const {node} = item
      const {frontmatter} = node
      return (
      <div key={frontmatter.title} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                width: '240px',
                display: 'inline-block',
              }}
            >
            </div>
          </div>
          <p>{frontmatter.title}</p>
        </section>
      </div>
    )})}
  </div>
)

FeatureGrid.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
