import PropTypes from "prop-types";
import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import LogoImage from "./LogoImage";
import { Link, StaticQuery, graphql } from "gatsby";
import classnames from "classnames";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import "../styles/header.scss";

const Header = ({ siteTitle }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <header
      className={classnames({
        "header-default": !isDrawerOpen,
        "header-expanded": isDrawerOpen
      })}
    >
      <Container style={{ height: "inherit", maxWidth: "100%" }}>
        <Row style={{ padding: "0.1rem 1.0875rem 0.1rem", justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="header-image-wrapper" >
            <Link to="/">
              <LogoImage />
            </Link>
          </div>
          <div className="header-drawer" style={{ padding: `0.15rem` }}>
            <Button
              variant={isDrawerOpen ? "dark" : "light"}
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              aria-label="Open drawer"
            >
              <FaBars
                color={isDrawerOpen ? "white" : "black"}
                className={'header-drawer-icon'}
              />
            </Button>
          </div>
        </Row>
        {isDrawerOpen ? (
          <Row className="row-header-expanded">
            <Col xs="6" sm="3" md="3" lg="3" xl="3">
              <Link to="/">
                {" "}
                <div
                  className="drawer-cell"
                  onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                >
                  Home
                </div>
              </Link>
            </Col>
            <Col xs="6" sm="3" md="3" lg="3" xl="3">
              <Link to="/blogs/">
                <div
                  className="drawer-cell"
                  onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                >
                  Blog
                </div>
              </Link>
            </Col>
            <Col xs="6" sm="3" md="3" lg="3" xl="3">
              <Link to="/projects/">
                {" "}
                <div
                  className="drawer-cell"
                  onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                >
                  Projects
                </div>
              </Link>
            </Col>
            <Col xs="6" sm="3" md="3" lg="3" xl="3">
              <StaticQuery
                query={graphql`
                  {
                    resumeLink: allFile(filter: { extension: { eq: "docx" } }) {
                      edges {
                        node {
                          publicURL
                        }
                      }
                    }
                  }
                `}
                render={data => {
                  return (
                    <OutboundLink
                      href={
                        data &&
                        data.resumeLink &&
                        data.resumeLink.edges &&
                        data.resumeLink.edges[0] &&
                        data.resumeLink.edges[0].node &&
                        data.resumeLink.edges[0].node.publicURL
                      }
                    >
                      <div
                        className="drawer-cell"
                        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                      >
                        Resume
                      </div>
                    </OutboundLink>
                  );
                }}
              />
            </Col>
          </Row>
        ) : null}
      </Container>
    </header >
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
