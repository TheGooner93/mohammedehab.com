import React from "react";
import classNames from 'classnames';
import { connect } from "react-redux";
import { StaticQuery, graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import BlogCardContainer from './BlogCardContainer';

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
            data.allMarkdownRemark.edges.map((post) => (
              <Row key={post.node.id} className={`animate__animated animate__flipInX animate__fast`}>
                <Col xs="12" sm="12" md="12" lg="12" xl="12">
                  <BlogCardContainer post={post} />
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
