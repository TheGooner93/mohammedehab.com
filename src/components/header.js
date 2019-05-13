import PropTypes from "prop-types"
import React, { useState, Fragment } from "react"
import { Button, Container, Row, Col } from "react-bootstrap"
import { FaBars } from "react-icons/fa"
import LogoImage from "./LogoImage"
import { Link } from "gatsby"
import "../styles/header.css"

const Header = ({ siteTitle }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <header
      style={{
        height: "5rem",
        background: "white",
      }}
    >
      <Container style={{ height: "inherit", maxWidth: "100%" }}>
        <Row>
          <Col sm="4" md="4" lg="4" xl="4">
            <div
              className="header-image-wrapper"
              style={{
                margin: "0.2rem 0.2rem 0.2rem 0.2rem",
                padding: "0.5rem",
                maxWidth: 140,
                height: "inherit",
              }}
            >
              <Link to="/">
                <LogoImage />
              </Link>
            </div>
          </Col>
          <Col sm="8" md="8" lg="8" xl="8">
            <Container>
              <Row>
                {isDrawerOpen ? (
                  <Fragment>
                    <Col>
                      <div
                        style={{
                          float: "right",
                          paddingTop: "1.5rem",
                        }}
                      >
                        <span>
                          <Link to="/blog/">Blog</Link>
                        </span>
                      </div>
                    </Col>
                    <Col>
                      <div
                        style={{
                          float: "right",
                          paddingTop: "1.5rem",
                        }}
                      >
                        <span>
                          <Link to="/experience/">Experience</Link>
                        </span>
                      </div>
                    </Col>
                  </Fragment>
                ) : null}
                <Col>
                  <div
                    style={{
                      float: "right",
                      margin: "0.2rem 0.2rem 0.2rem 0.2rem",
                      padding: `0.7rem`,
                    }}
                  >
                    <Button
                      variant={isDrawerOpen ? "dark" : "light"}
                      onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                    >
                      <FaBars
                        color={isDrawerOpen ? "white" : "black"}
                        size="2em"
                      />
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
