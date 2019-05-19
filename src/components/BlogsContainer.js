import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import { Container, Card, Row, Col } from "react-bootstrap";

const BlogsContainer = () => (
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
      <Container>
        {data.allMarkdownRemark.edges.map(post => (
          <Row key={post.node.id}>
            <Col xs="12" sm="12" md="12" lg="12" xl="12">
              <div className="blog-card-wrapper">
                <Link
                  to={post.node.fields.slug}
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    className="blog-card text-white"
                    style={{
                      backgroundImage: `url(${post.node.frontmatter.thumbnail})`
                    }}
                  >
                    <Card.Body>
                      <Card.Title>
                        <h3>{post.node.frontmatter.title}</h3>
                      </Card.Title>
                      <Card.Text>{post.node.frontmatter.description}</Card.Text>
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
);

export default BlogsContainer;
