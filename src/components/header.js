import PropTypes from "prop-types"
import React from "react"
import { Button, Container, Row, Col } from "react-bootstrap"
import { FaBars } from "react-icons/fa"
import Image from "../components/image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      height: "5rem",
      background: "white",
    }}
  >
    <Container style={{ maxWidth: "100%" }}>
      <Row>
        <Col sm="4" md="4" lg="4" xl="4">
          <div style={{ float: "left" }} />
        </Col>
        <Col sm="4" md="4" lg="4" xl="4">
          <div />
        </Col>
        <Col sm="4" md="4" lg="4" xl="4">
          <div
            style={{
              float: "right",
              margin: `2px`,
              padding: `1rem`,
            }}
          >
            <Button variant="dark">
              <FaBars color="white" size="2em" />
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
    {/* <div
      style={{
        margin: `0 auto`,
        maxWidth: 180,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Image />
      <div style={{ float: "right" }}>
        <FaBars color="green" size="2em" />
      </div>
    </div> */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
