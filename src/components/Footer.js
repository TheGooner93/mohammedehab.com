import React from "react";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { FACEBOOK_URL, LINKEDIN_URL, GITHUB_URL } from "../utils/websites";
import { connect } from "react-redux";
import { OutboundLink } from "gatsby-plugin-google-analytics";

const Footer = ({ theme = '' }) => {
  return (
    <footer
      style={{
        textAlign: "center",
        position: "absolute",
        background: theme === 'day' ? "linear-gradient(23deg, rgba(24,44,148,1) 0%, rgba(0,0,0,1) 100%)" : 'black',
        width: "100%",
        minHeight: "6rem",
        bottom: 0,
        borderTop: '1px whitesmoke solid'
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          padding: `1.5rem 1.0875rem 1.5rem`,
          color: "white"
        }}
      >
        <div>© {new Date().getFullYear()} | Mohammed Ehab</div>
        <div>
          <OutboundLink
            href={FACEBOOK_URL}
            aria-label="Facebook"
          >
            <FaFacebookSquare size="1.3em" />
          </OutboundLink>{" "}
          <OutboundLink
            href={LINKEDIN_URL}
            aria-label="LinkedIn"
          >
            <FaLinkedin size="1.3em" />
          </OutboundLink>{" "}
          <OutboundLink href={GITHUB_URL} aria-label="Github">
            <FaGithubSquare size="1.3em" style={{ color: "white" }} />
          </OutboundLink>
        </div>
      </div>
    </footer>
  );
};

const mapStateToProps = state => {
  return {
    theme: state.theme.theme
  }
};

export default connect(mapStateToProps, {})(Footer);
