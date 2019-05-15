import React from "react"
import { graphql, Link } from "gatsby"
import Img from 'gatsby-image'
import {map} from 'lodash'

import Layout from "../components/layout"
import Image from "../components/image"

const IndexPage = ({ data }) => (
  <Layout>
    <div
      style={{
        padding: `1rem 1rem`,
        width: `100%`,
        display: `flex`,
        alignItems: `flex-start`,
      }}
    >
      {
        map(
          data.allMarkdownRemark.edges,
          edge => (
            <div
              style={{
                padding: `0.5rem 0.5rem`,
                position: `relative`,
              }}
            >
              <Img fixed={edge.node.frontmatter.cover_image.childImageSharp.fixed}/>
              <div
                style={{
                  position: `absolute`,
                  top: `50%`,
                  left: `50%`,
                  transform: `translate(-50%, -50%)`,
                  fontWeight: `700`,
                  fontSize: `2em`,
                  color: `white`,
                }}
              >
                {edge.node.frontmatter.short_title}
              </div>
            </div>
          )
        )
      }
    </div>
  </Layout>  
)

export const query = graphql`
  query PostThumbnailQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            short_title
            cover_image {
              publicURL
              childImageSharp {
                fixed(width: 200, height: 200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
