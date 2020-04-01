import React from 'react'
import PropTypes from 'prop-types'

class OutlineTable extends React.Component {
  render() {
    const tableOfContents = this.buildHierarchy(this.props.posts)
    return (
      <div className="table-of-contents is-multiline">
        {Object
          .keys(tableOfContents)
          .map((key, i) => {
            const items = tableOfContents[key]
            return (
              <div key={`${key}-${i}`}>
                <a className="header-category" href={items.headerPost.fields.slug}>{items.headerPost.frontmatter.title}</a>
                <ul>{items
                    .posts
                    .map(item => {
                      const {frontmatter} = item
                      return (
                        <li key={item.id}>
                          <a className="subject-item" href={item.fields.slug}>{frontmatter.title}</a>
                        </li>
                      )
                    })}
                </ul>
              </div>
            )
          })}
      </div>
    )
  }

  buildHierarchy(posts) {
    const hierarchy = {}
    posts.forEach(post => {
      const {section, order} = post.frontmatter
      if (order === 0) {
        hierarchy[section]
          ? hierarchy[section].headerPost = hierarchy[section].headerPost || post
          : hierarchy[section] = {
            headerPost: post,
            posts: []
          }
      } else {
        hierarchy[section]
          ? hierarchy[section]
            .posts
            .push(post)
          : hierarchy[section] = {
            posts: [post]
          }
      }
    })
    return hierarchy
  }

}

OutlineTable.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    text: PropTypes.string
  }))
}

export default OutlineTable
