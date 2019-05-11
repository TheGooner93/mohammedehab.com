import PropTypes from "prop-types"
import React from "react"
import { FaBars } from "react-icons/fa"
import Image from "../components/image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: "linear-gradient(180deg, black 60%, whitesmoke 40%)",
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 180,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Image />
    </div>
    <div style={{ float: "right" }}>
      <FaBars color="green" size="2em" />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
