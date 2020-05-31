import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
	image,
	bannerImage,
	title,
	heading,
	subheading,
	mainpitch,
	description,
	intro,
}) => (
	<div>
		<div
			className="full-width-image margin-top-0"
			style={{
				backgroundImage: `url(${
					image.childImageSharp ? image.childImageSharp.fluid.src : image
				})`,
				backgroundPosition: 'bottom',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				minHeight: '600px'
			}}
		>
			<div
				style={{
					display: 'flex',
					alignItems: 'left',
					flexDirection: 'column',
				}}
				className="leaf-logo"
			>
				<h1
					className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
					style={{
						boxShadow:
              'rgb(255, 0, 0, .45) 0.5rem 0px 0px, rgb(255, 0, 0, .45) -0.5rem 0px 0px',
						backgroundColor: 'rgb(255, 0, 0, .45)',
						color: 'white',
						lineHeight: '1',
						padding: '0.25em',
						fontFamily: 'monospace'
					}}
				>
					{title}
				</h1>
				<img
					alt="remote therapy leaf"
					className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
					style={{
						height: '1em',
						width: '1em',
						margin: '10px auto',
						opacity: .75
					}}
					src={bannerImage.childImageSharp ? bannerImage.childImageSharp.fluid.src : bannerImage}/>
				<h3
					className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
					style={{
						boxShadow:
              'rgb(255, 0, 0, .45) 0.5rem 0px 0px, rgb(255, 0, 0, .45) -0.5rem 0px 0px',
						backgroundColor: 'rgb(255, 0, 0, .45)',
						color: 'white',
						lineHeight: '1',
						padding: '0.75em',
						textAlign: 'center',
						fontFamily: 'monospace'
					}}
				>
					{subheading}
				</h3>
			</div>
		</div>
		<section className="section section--gradient">
			<div className="container">
				<div className="section">
					<div className="columns">
						<div className="column is-10 is-offset-1">
							<div className="content">
								<div className="content">
									<div className="tile">
										<h1 className="title">{mainpitch.title}</h1>
									</div>
									<div className="tile">
										<h3 className="subtitle">{mainpitch.description}</h3>
									</div>
								</div>
								<div className="columns">
									<div className="column is-12">
										<h3 className="has-text-weight-semibold is-size-2">
											{heading}
										</h3>
										<p>{description}</p>
									</div>
								</div>
								<Features gridItems={intro.blurbs} />
								<div className="columns">
									<div className="column is-12 has-text-centered">
										<Link className="btn" to="/outline">
                      Let's Get Started
										</Link>
									</div>
								</div>
								<div className="column is-12">
									<h3 className="has-text-weight-semibold is-size-2">
                    Featured Posts
									</h3>
									<BlogRoll />
									<div className="column is-12 has-text-centered">
										<Link className="btn" to="/outline">
                      View All
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
)

IndexPageTemplate.propTypes = {
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	bannerImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	title: PropTypes.string,
	heading: PropTypes.string,
	subheading: PropTypes.string,
	mainpitch: PropTypes.object,
	description: PropTypes.string,
	intro: PropTypes.shape({
		blurbs: PropTypes.array,
	}),
}

const IndexPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark

	return (
		<Layout>
			<IndexPageTemplate
				image={frontmatter.image}
				bannerImage={frontmatter.bannerImage}
				title={frontmatter.title}
				heading={frontmatter.heading}
				subheading={frontmatter.subheading}
				mainpitch={frontmatter.mainpitch}
				description={frontmatter.description}
				intro={frontmatter.intro}
			/>
		</Layout>
	)
}

IndexPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object,
		}),
	}),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bannerImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
