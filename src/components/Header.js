import PropTypes from "prop-types";
import classnames from "classnames";
import { connect } from 'react-redux';
import { FaBars } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import { Link, StaticQuery, graphql } from "gatsby";
import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import LogoImage from "./LogoImage";
import helper from '../utils/helper';
import { toggleDarkMode } from '../state/actions/theme.action';

import "../styles/header.scss";

const Header = (props) => {

  const { theme:currentStoredTheme = '', toggleDarkMode = () => {} } = props;

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('day');

  useEffect(() => {
    const currentTheme = currentStoredTheme ? currentStoredTheme : helper.getCurrentTheme();
    setCurrentTheme(currentTheme);
  }, []);

  // useEffect(() => {
  //   const currentStoredTheme = helper.getCurrentTheme();
  //   if (currentStoredTheme !== currentTheme) {
  //     helper.toggleTheme();
  //   }
  // }, [currentTheme])

  const onThemeButtonClick = () => {
    const newTheme = currentTheme === 'day' ? 'night' : 'day'
    setCurrentTheme(newTheme);

    //Call action to update redux store
    toggleDarkMode(newTheme);
  }

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
          <div className='d-flex justify-content-center'>
            <div className="header-drawer" style={{ padding: `0.15rem` }}>
              <Button
                variant={currentTheme === 'night' ? "dark" : "light"}
                onClick={onThemeButtonClick}
                aria-label="Toggle theme"
              >
                {
                  currentTheme === 'night' ? <BsMoon
                    color={currentTheme === 'night' ? "white" : "black"}
                    className={'header-drawer-icon'}
                  /> : <BsSun
                      color={currentTheme === 'night' ? "white" : "black"}
                      className={'header-drawer-icon'}
                    />
                }
              </Button>
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

const mapStateToProps = state => ({
  theme: state.theme.theme
})

export default connect(mapStateToProps, {toggleDarkMode})(Header);
