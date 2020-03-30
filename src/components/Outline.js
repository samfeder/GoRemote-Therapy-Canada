import React from 'react'
import PropTypes from 'prop-types'

class OutlineTable extends React.Component {
  render() {
    const tableOfContents = this.buildHierarchy(this.props.posts)
    return (
      <div className="table-of-contents is-multiline">
        {Object
          .keys(tableOfContents)
          .map(key => {
            const items = tableOfContents[key]
            return (
              <div>
                <a class="header-category" href={items.headerPost.fields.slug}>{items.headerPost.frontmatter.title}</a>
                <ul>{items
                    .posts
                    .map(item => {
                      const {frontmatter} = item
                      return (
                        <li>
                          <a key={item.id} class="subject-item" href={item.fields.slug}>{frontmatter.title}</a>
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
      const levels = post
        .fields
        .slug
        .split('/')
        .filter(Boolean)

      if (levels.length === 2) {
        hierarchy[levels[1]]
          ? hierarchy[levels[1]].headerPost = post
          : hierarchy[levels[1]] = {
            headerPost: post
          }
      }

      if (levels.length > 2) {
        hierarchy[levels[1]]
          ? hierarchy[levels[1]]
            .posts
            .push(post)
          : hierarchy[levels[1]] = {
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
