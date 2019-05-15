import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { Container, Card, Row, Col } from "react-bootstrap"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import "../styles/blog.scss"

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <StaticQuery
      query={graphql`
        query allBlogPosts {
          allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 5
          ) {
            edges {
              node {
                id
                frontmatter {
                  title
                  date
                  description
                  thumbnail
                }
                fields {
                  slug
                }
              }
            }
          }
        }
      `}
      render={data => (
        <Container className="blog-container">
          <Row>
            <Col>
              <h1>Blog</h1>
            </Col>
          </Row>
          {data.allMarkdownRemark.edges.map(post => (
            <Row key={post.node.id}>
              <Col>
                <div className="blog-card-wrapper">
                  <Link
                    to={post.node.fields.slug}
                    style={{ textDecoration: "none" }}
                  >
                    <Card
                      className="blog-card text-white"
                      style={{
                        backgroundImage: `url(${
                          post.node.frontmatter.thumbnail
                        })`,
                      }}
                    >
                      <Card.Body>
                        <Card.Title>
                          <h3>{post.node.frontmatter.title}</h3>
                        </Card.Title>
                        <Card.Text>
                          {post.node.frontmatter.description}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </div>
              </Col>
            </Row>
          ))}
        </Container>
      )}
    />
  </Layout>
)

export default BlogPage
