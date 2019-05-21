import React from "react";
import { Link, graphql } from "gatsby";
import { Container, Row, Col, Button } from "react-bootstrap";
import Moment from "react-moment";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default ({ data }) => {
  const post = data && data.markdownRemark;

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Container style={{ textAlign: "center" }}>
        <Row>
          <Link to="/blogs" style={{ color: "black", float: "left" }}>
            <Button variant="info" aria-label="Back to blogs">
              Back to Blogs
            </Button>
          </Link>
        </Row>
        <Row>
          <Col>
            <img
              src={post.frontmatter.thumbnail}
              style={{ margin: "1rem", maxWidth: "50%" }}
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
            <h5>
              Taken on{" "}
              <Moment format="DD MMM YYYY, hh:mm A">
                {post.frontmatter.date}
              </Moment>
            </h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

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
`;
