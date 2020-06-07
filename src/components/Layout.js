/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classNames from 'classnames';
import { StaticQuery, graphql } from "gatsby";
import { useToasts } from 'react-toast-notifications'

import Header from "./Header";
import Footer from "./Footer";

import "bootstrap/dist/css/bootstrap.css";
import "../styles/layout.scss";

const Layout = ({ children, theme }) => {
  const [showHeader, setShowHeader] = useState(true);
  const [currentScrollOffset, setCurrentScrollOffset] = useState(0);
  const previousScrollOffset = useRef(0);
  const { addToast } = useToasts();

  useEffect(() => {
    const onScroll = () => {
      setCurrentScrollOffset(previousOffset => {
        previousScrollOffset.current = previousOffset;
        return window.pageYOffset;
      });
    };
    window.addEventListener('scroll', onScroll, false);

    //Cleanup
    return () => window.removeEventListener('scroll', onScroll, false);
  }, []);

  useEffect(() => {
    if ((currentScrollOffset > 60) && previousScrollOffset.current < currentScrollOffset) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
  }, [currentScrollOffset]);

  const toggleNotification = () => {
    addToast('Downloading file...', {
      appearance: 'info',
      autoDismiss: true,
    });
  }

  return <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
        <div style={{ position: "relative" }}>
          <Header showHeader={showHeader} toggleNotification={toggleNotification} />
          <div className={classNames('layout-content-wrapper', theme === 'night' ? 'layout-content-wrapper_dark' : '')}>
           {children}
          </div>
          {/* <Footer /> */}
        </div>
    )}
  />
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  theme: state.theme.theme
});

export default connect(mapStateToProps, {})(Layout);
