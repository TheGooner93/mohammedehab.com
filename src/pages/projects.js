import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ProjectsContainer from "../components/ProjectsContainer"

import "../styles/projects.scss"

const ProjectsPage = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <Container className="projects-container">
        <Row>
          <Col>
            <h1>Projects</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <ProjectsContainer />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default ProjectsPage
