import PropTypes from "prop-types"
import React, { useState } from "react"
import { Button, Container, Row, Col } from "react-bootstrap"
import { FaBars } from "react-icons/fa"
import LogoImage from "./LogoImage"
import { Link } from "gatsby"
import classnames from "classnames"

import "../styles/header.scss"

const Header = ({ siteTitle }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <header
      className={classnames({
        "header-default": !isDrawerOpen,
        "header-expanded": isDrawerOpen,
      })}
    >
      <Container style={{ height: "inherit", maxWidth: "100%" }}>
        <Row>
          <Col sm="6" md="6" lg="6" xl="6">
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
          <Col sm="6" md="6" lg="6" xl="6">
            <Container>
              <Row>
                <Col>
                  <div
                    style={{
                      float: "right",
                      margin: "0.4rem 0rem 0.1rem 0.1rem",
                      padding: `0.5rem`,
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
        {isDrawerOpen ? (
          <Row className="row-header-expanded">
            <Col>
              <div className="drawer-cell">
                <Link to="/">Home</Link>
              </div>
            </Col>
            <Col>
              <div className="drawer-cell">
                <Link to="/blogs/">Blog</Link>
              </div>
            </Col>
            <Col>
              <div className="drawer-cell">
                <Link to="/projects/">Projects</Link>
              </div>
            </Col>
            <Col>
              <div className="drawer-cell">
                <Link to="/resume/">Resume</Link>
              </div>
            </Col>
          </Row>
        ) : null}
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
