import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import RoleCarousel from "../components/RoleCarousel";
import AboutMeCard from "../components/AboutMeCard";
import ProfileImage from "../components/ProfileImage";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      lang="en"
      keywords={[`gatsby`, `application`, `react`]}
      description="Mohammed Ehab's Website"
    />
    <Container style={{ textAlign: "center", paddingBottom: "1.5rem" }}>
      <Row className='mb-3 mb-md-4'>
        <Col>
          <div className='profile-image-wrapper'>
            <ProfileImage />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>
            Hi, I'm{" "}
            <span
              style={{
                boxDecorationBreak: "clone",
                WebkitBoxDecorationBreak: "clone",
                backgroundColor: "rgba(63,94,251,1)",
                color: "white",
                padding: "0.25rem",
              }}
            >
              Mohammed Ehab
            </span>
            !
          </h1>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <div>
            <h2>I am a</h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <RoleCarousel />
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col>
          <AboutMeCard />
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default IndexPage;
