/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';
import { StaticQuery, graphql } from "gatsby";

import Header from "./Header";
import Footer from "./Footer";

import "bootstrap/dist/css/bootstrap.css";
import "../styles/layout.scss";
import { connect } from "react-redux";

const Layout = ({ children, theme }) => {
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
        <Header />
        <div className={classNames('layout-content-wrapper', theme === 'night' ? 'layout-content-wrapper_dark' : '')}>
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    )}
  />
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

const mapStateToProps = state => ({
  theme: state.theme.theme
});

export default connect(mapStateToProps, {})(Layout);
