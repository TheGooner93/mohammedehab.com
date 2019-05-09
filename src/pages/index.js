import React from "react"
import { Carousel, CarouselItem, Container, Row, Col } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

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
        <Col className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <div>
            <h2>I am a</h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col style={{ paddingTop: "3px" }}>
          <div
            style={{
              margin: "auto",
              maxWidth: "300px",
              color: "white",
              background: "red",
              borderRadius: "10px",
            }}
          >
            <Carousel controls="false" indicators="false" interval="3000">
              <CarouselItem>
                <h3>developer</h3>
              </CarouselItem>
              <CarouselItem>
                <h3>photographer</h3>
              </CarouselItem>
              <CarouselItem>
                <h3>gamer</h3>
              </CarouselItem>
            </Carousel>
          </div>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
