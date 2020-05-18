import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import ProjectsContainer from "../components/ProjectsContainer";

import "../styles/projects.scss";

const ProjectsPage = () => {
  return (
    <Layout>
      <SEO
        title="Projects"
        lang="en"
        keywords={[`Mohammed`, `Ehab`, `Projects`, `github`, `work`]}
        description="Mohammed Ehab's Projects"
      />
      <ProjectsContainer />
    </Layout>
  );
};

export default ProjectsPage;
