import PropTypes from "prop-types";
import classNames from "classnames";
import { connect } from 'react-redux';
import { FaBars } from "react-icons/fa";
import { RiSunLine, RiMoonLine } from "react-icons/ri";
import { Link, StaticQuery, graphql } from "gatsby";
import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import LogoImage from "./LogoImage";
import helper from '../utils/helper';
import { toggleDarkMode } from '../state/actions/theme.action';

import "../styles/header.scss";

const Header = (props) => {

  const { theme: currentStoredTheme = '', toggleDarkMode = () => { }, showHeader = true } = props;

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('day');

  useEffect(() => {
    const currentTheme = currentStoredTheme ? currentStoredTheme : helper.getCurrentTheme();
    setCurrentTheme(currentTheme);
  }, []);

  const onThemeButtonClick = () => {
    const newTheme = currentTheme === 'day' ? 'night' : 'day'
    setCurrentTheme(newTheme);

    //Call action to update redux store
    toggleDarkMode(newTheme);
  }

  return (
    <header
      className={classNames({
        "header-default_disappeared" : !showHeader,
        "header-default": showHeader && !isDrawerOpen && currentTheme === 'day',
        "header-default_dark": showHeader && currentTheme === 'night',
        "header-expanded": showHeader && isDrawerOpen
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
                  currentTheme === 'night' ? <RiMoonLine
                    color={currentTheme === 'night' ? "white" : "black"}
                    className={'header-drawer-icon'}
                  /> : <RiSunLine
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
          <Row className={classNames('row-header-expanded', currentTheme === 'night' ? 'row-header-expanded_dark' : '')}>
            <Col xs="6" sm="3" md="3" lg="3" xl="3">
              <Link to="/">
                {" "}
                <div
                  className={classNames("drawer-cell", currentTheme === 'night' ? 'drawer-cell_dark' : '')}
                  onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                >
                  Home
                </div>
              </Link>
            </Col>
            <Col xs="6" sm="3" md="3" lg="3" xl="3">
              <Link to="/blogs/">
                <div
                  className={classNames("drawer-cell", currentTheme === 'night' ? 'drawer-cell_dark' : '')}
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
                  className={classNames("drawer-cell", currentTheme === 'night' ? 'drawer-cell_dark' : '')}
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
                        className={classNames("drawer-cell", currentTheme === 'night' ? 'drawer-cell_dark' : '')}
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
  siteTitle: PropTypes.string,
  theme: PropTypes.string.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
  showHeader : PropTypes.bool.isRequired,
};

Header.defaultProps = {
  siteTitle: ``
};

const mapStateToProps = state => {
  return {
    theme: state.theme.theme
  }
};

export default connect(mapStateToProps, { toggleDarkMode })(Header);
