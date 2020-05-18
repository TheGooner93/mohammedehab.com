/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./Header";
import Footer from "./Footer";

import "bootstrap/dist/css/bootstrap.css";
import "../styles/layout.scss";

const Layout = ({ children }) => {
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
    render={data => (
      <div style={{ position: "relative" }}>
        <Header />
        <div
          style={{
            margin: `0 auto`,
            padding: `1.5rem 1.0875rem 7rem`,
            background: "whitesmoke",
            minHeight: "100vh"
          }}
        >
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

export default Layout;
