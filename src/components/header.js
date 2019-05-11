import PropTypes from "prop-types"
import React from "react"
import { Button, Container, Row, Col } from "react-bootstrap"
import { FaBars } from "react-icons/fa"
import Image from "../components/image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: "linear-gradient(180deg, black 60%, whitesmoke 40%)",
    }}
  >
    <Container style={{ maxWidth: "100%" }}>
      <Row>
        <Col sm="4" md="4" lg="4" xl="4">
          <div style={{ float: "right" }} />
        </Col>
        <Col sm="4" md="6" lg="4" xl="4">
          <div
            style={{
              margin: `0 auto`,
              minWidth: 180,
              maxWidth: 180,
              padding: `1.45rem 1.0875rem`,
            }}
          >
            <Image />
          </div>
        </Col>
        <Col sm="4" md="6" lg="4" xl="4">
          <div
            style={{
              float: "right",
              margin: `20px`,
              padding: `1rem 1.0875rem`,
            }}
          >
            <Button variant="secondary">
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
