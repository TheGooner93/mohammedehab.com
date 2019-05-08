import React from "react"

const Footer = () => {
  return (
    <footer
      style={{
        position: "absolute",
        background: "black",
        width: "100%",
        bottom: "0",
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 300,
          padding: `1.45rem 1.0875rem`,
          color: "white",
        }}
      >
        © {new Date().getFullYear()} | Mohammed Ehab
      </div>
    </footer>
  )
}

export default Footer
