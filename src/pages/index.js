import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import RoleCarousel from "../components/roleCarousel"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Container style={{ textAlign: "center" }}>
      <Row>
        <Col>
          {" "}
          <h1>Hi, I'm Mohammed Ehab!</h1>
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
    </Container>
  </Layout>
)

export default IndexPage
