import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import HomeContainer from "../components/HomeContainer";

import "../styles/home.scss";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      lang="en"
      keywords={[`gatsby`, `application`, `react`]}
      description="Mohammed Ehab's Website"
    />
    <HomeContainer />
  </Layout>
);

export default IndexPage;
