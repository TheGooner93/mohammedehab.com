import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

import ResumeContainer from "../components/ResumeContainer";

import "../styles/resume.scss";

const ResumePage = () => {
  return (
    <Layout>
      <SEO title="Resume" />
      {/* <Container className="resume-container">
        <Row>
          <Col>
            <h1>Resume</h1>
          </Col>
        </Row>
        <Row> */}
          <ResumeContainer />
        {/* </Row>
      </Container> */}
    </Layout>
  );
};

export default ResumePage;
