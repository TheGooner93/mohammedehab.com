import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { StaticQuery, graphql } from "gatsby";

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
      <Container>
        <Row>
          {data.githubData.data.user.pinnedRepositories.edges.map(repo => (
            <Col
              xs="12"
              sm="12"
              md="6"
              lg="4"
              xl="4"
              className="project-card-wrapper"
            >
              <Card>
                <Card.Header>{repo.node.name}</Card.Header>
                <Card.Body>
                  <Card.Text>{repo.node.description}</Card.Text>
                  <a href={repo.node.homepageUrl} aria-label="Visit Live App">
                    <Button variant="primary" aria-label="Visit live app">
                      Visit Live App
                    </Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    )}
  />
);

export default ProjectsContainer;
