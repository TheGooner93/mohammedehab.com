import React, { Fragment } from "react"
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa"
import { FACEBOOK_URL, LINKEDIN_URL, GITHUB_URL } from "../utils/websites"

const Footer = () => {
  return (
    <footer
      style={{
        textAlign: "center",
        position: "absolute",
        background: "black",
        width: "100%",
        bottom: "0",
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 280,
          padding: `1.45rem 1.0875rem`,
          color: "white",
        }}
      >
        <div>© {new Date().getFullYear()} | Mohammed Ehab</div>
        <div>
          <a href={FACEBOOK_URL}>
            <FaFacebookSquare size="1.3em" />
          </a>{" "}
          <a href={FACEBOOK_URL}>
            <FaLinkedin size="1.3em" />
          </a>{" "}
          <a href={GITHUB_URL}>
            <FaGithubSquare size="1.3em" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
