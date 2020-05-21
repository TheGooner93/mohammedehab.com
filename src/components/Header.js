import PropTypes from "prop-types";
import classNames from "classnames";
import { connect } from 'react-redux';
import { FaBars } from "react-icons/fa";
import { RiSunLine, RiMoonLine } from "react-icons/ri";
import { StaticQuery, graphql } from "gatsby";
import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import AniLink from "gatsby-plugin-transition-link/AniLink"

import LogoImage from "./LogoImage";
import helper from '../utils/helper';
import { toggleDarkMode } from '../state/actions/theme.action';

import "../styles/header.scss";

const Header = (props) => {

  const {
    theme: currentStoredTheme = '',
    toggleDarkMode = () => { },
    showHeader = true,
    toggleNotification = () => { }
  } = props;

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('day');

  useEffect(() => {
    const currentTheme = currentStoredTheme ? currentStoredTheme : helper.getCurrentTheme();
    setCurrentTheme(currentTheme);
  }, []);

  useEffect(() => {
    //Call action to update redux store
    toggleDarkMode(currentTheme);
  }, [currentTheme]);

  const onThemeButtonClick = () => {
    const newTheme = currentTheme === 'day' ? 'night' : 'day'
    setCurrentTheme(newTheme);
  };

  const onResumeLinkClicked = () => {
    setIsDrawerOpen(!isDrawerOpen);
    toggleNotification();
  };

  return (
    <header
      className={classNames({
        "header-default_dark": showHeader && currentTheme === 'night',
        "header-default": showHeader && !isDrawerOpen && currentTheme === 'day',
        "header-expanded": showHeader && isDrawerOpen,
        "header-default_disappeared": !showHeader && currentTheme === 'day',
        "header-default_dark_disappeared": !showHeader && currentTheme === 'night',
      })}
    >
      <Container style={{ height: "inherit", maxWidth: "100%" }}>
        <Row style={{ padding: "0.1rem 1.0875rem 0.1rem", justifyContent: 'space-between', alignItems: 'center' }}>
          <Col className={'pl-0 d-flex justify-content-start'}>
            <div className="header-image-wrapper" >
              <AniLink cover bg={currentTheme === 'night' ? '#2c3e50' : ''} direction="right" to="/" >
                <LogoImage />
              </AniLink>
            </div>
          </Col>
          <Col className={'pr-0 d-flex justify-content-end'}>
            <div className='d-flex'>
              <div className="header-drawer" style={{ padding: `0.15rem` }}>
                <Button
                  className={'header-button'}
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
                  className={'header-button'}
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
          </Col>
        </Row>
        <Row className={classNames('row-header-expanded', !isDrawerOpen ? 'row-header-expanded_hidden' : '', currentTheme === 'night' ? 'row-header-expanded_dark' : '')}>
          <Col xs="6" sm="3" md="3" lg="3" xl="3">
            <AniLink cover bg={currentTheme === 'night' ? 'gray' : ''} direction="right" to="/">
              {" "}
              <div
                className={classNames("drawer-cell", currentTheme === 'night' ? 'drawer-cell_dark' : '')}
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              >
                Home
              </div>
            </AniLink>
          </Col>
          <Col xs="6" sm="3" md="3" lg="3" xl="3">
            <AniLink cover bg={currentTheme === 'night' ? 'gray' : ''} to="/blogs/">
              <div
                className={classNames("drawer-cell", currentTheme === 'night' ? 'drawer-cell_dark' : '')}
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              >
                Blog
              </div>
            </AniLink>
          </Col>
          <Col xs="6" sm="3" md="3" lg="3" xl="3">
            <AniLink cover bg={currentTheme === 'night' ? 'gray' : ''} to="/projects/">
              {" "}
              <div
                className={classNames("drawer-cell", currentTheme === 'night' ? 'drawer-cell_dark' : '')}
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              >
                Projects
              </div>
            </AniLink>
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
                      onClick={onResumeLinkClicked}
                    >
                      Resume
                    </div>
                  </OutboundLink>
                );
              }}
            />
          </Col>
        </Row>
      </Container>
    </header >
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
  theme: PropTypes.string.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
  toggleNotification: PropTypes.func.isRequired,
  showHeader: PropTypes.bool.isRequired,
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
