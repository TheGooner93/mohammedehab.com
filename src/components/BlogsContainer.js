import React from "react";
import classNames from 'classnames';
import { connect } from "react-redux";
import { StaticQuery, graphql, Link } from "gatsby";
import { Container, Card, Row, Col } from "react-bootstrap";

const BlogsContainer = (props) => {

  const { theme = '' } = props;

  const blogsView = (<StaticQuery
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
    render={data => {
      const blogsPosts =
        data && data.allMarkdownRemark && data.allMarkdownRemark.edges;

      return (
        <Container>
          {blogsPosts.length ? (
            data.allMarkdownRemark.edges.map(post => (
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
                          background: `url(${post.node.frontmatter.thumbnail})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "55rem",
                          backgroundPosition: "right",
                        }}
                      >
                        <Card.Body className="blog-card_blur">
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
            ))
          ) : (
              <Col xs="12" sm="12" md="12" lg="12" xl="12">
                <div className="blog-empty">No blog entries available</div>
              </Col>
            )}
        </Container>
      );
    }}
  />);

  return (
    <Container className="blog-container">
      <Row>
        <Col>
          <h1 className={classNames('pb-3 layout-text', theme === 'night' ? 'layout-text_dark blog-container-heading_dark' : 'blog-container-heading')}>Blog</h1>
        </Col>
      </Row>
      <Row>
        <Col>
        </Col>
      </Row>
      <Row>
        {blogsView}
      </Row>
    </Container>
  )
};

const mapStateToProps = state => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps, {})(BlogsContainer);
