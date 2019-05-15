import React from "react"
import { Link, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

export default ({ data }) => {
  const post = data && data.markdownRemark

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Container style={{ textAlign: "center" }}>
        <Row>
          <Link to="/blogs" style={{ color: "black" }}>
            Back
          </Link>
          <hr />
        </Row>
        <Row>
          <Col>
            <img
              src={post.frontmatter.thumbnail}
              style={{ maxWidth: "50%" }}
              alt={post.frontmatter.title}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>{post.frontmatter.title}</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Posted on {post.frontmatter.date}</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const blogPostQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        thumbnail
        description
      }
    }
  }
`
