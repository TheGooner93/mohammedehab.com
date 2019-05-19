import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import BlogsContainer from "../components/BlogsContainer";

import "../styles/blog.scss";

const BlogPage = () => (
  <Layout>
    <SEO
      title="Blog"
      lang="en"
      keywords={[`Mohammed`, `Ehab`, `blog`, `photoblog`, `feed`]}
      description="Mohammed Ehab's Photoblog"
    />
    <Container className="blog-container">
      <Row>
        <Col>
          <h1>Blog</h1>
        </Col>
      </Row>
      <Row>
        <BlogsContainer />
      </Row>
    </Container>
  </Layout>
);

export default BlogPage;
