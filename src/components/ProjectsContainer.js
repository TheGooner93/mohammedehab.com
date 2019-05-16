import React from "react"
import { Card, Container, Row, Col, Button } from "react-bootstrap"
import { StaticQuery, graphql } from "gatsby"

const ProjectsContainer = () => (
  <StaticQuery
    query={graphql`
      query repoDetails {
        githubData {
          data {
            user {
              name
              pinnedRepositories {
                edges {
                  node {
                    id
                    description
                    url
                    name
                    homepageUrl
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Container className="project-card-wrapper">
        <Row>
          {data.githubData.data.user.pinnedRepositories.edges.map(repo => (
            <Col xs="12" sm="12" md="6" lg="4" xl="4">
              <div className="project-card">
                <Card>
                  <Card.Header>{repo.node.name}</Card.Header>
                  <Card.Body>
                    <Card.Text>{repo.node.description}</Card.Text>
                    <a href={repo.node.homepageUrl}>
                      <Button variant="primary">Visit Live App</Button>
                    </a>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    )}
  />
)

export default ProjectsContainer
