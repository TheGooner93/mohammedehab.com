import React from "react";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { FACEBOOK_URL, LINKEDIN_URL, GITHUB_URL } from "../utils/websites";

const Footer = () => {
  return (
    <footer
      style={{
        textAlign: "center",
        position: "absolute",
        background: "black",
        width: "100%",
        minHeight: "6rem",
        bottom: 0
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
          <a href={FACEBOOK_URL} style={{ color: "white" }}>
            <FaFacebookSquare size="1.3em" />
          </a>{" "}
          <a href={LINKEDIN_URL} style={{ color: "white" }}>
            <FaLinkedin size="1.3em" />
          </a>{" "}
          <a href={GITHUB_URL}>
            <FaGithubSquare size="1.3em" style={{ color: "white" }} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
