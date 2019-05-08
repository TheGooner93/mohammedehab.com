import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi, I'm Mohammed Ehab!</h1>
    <h2>I am a frontend developer, photoblogger, gamer.</h2>
  </Layout>
)

export default IndexPage
