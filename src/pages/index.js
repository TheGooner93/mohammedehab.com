import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import RoleCarousel from "../components/roleCarousel"
import AboutMeCard from "../components/aboutMeCard"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Container style={{ textAlign: "center" }}>
      <Row>
        <Col>
          <h1>
            Hi, I'm{" "}
            <mark
              style={{
                backgroundColor: "lightgrey",
                color: "black",
                padding: "0.25rem",
              }}
            >
              Mohammed Ehab
            </mark>
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
)

export default IndexPage
