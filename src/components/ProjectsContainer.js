import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { StaticQuery, graphql } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";

const ProjectsContainer = () => (
  <StaticQuery
    query={graphql`
      query repoDetails {
        data {
          user {
            name
            pinnedItems {
              nodes {
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
    `}
    render={(data) => {
      const pinnedRepos =
        data &&
        data.githubData &&
        data.githubData.data &&
        data.githubData.data.user.pinnedRepositories &&
        data.githubData.data.user.pinnedRepositories.edges;

      return (
        <Container>
          <Row>
            {pinnedRepos.length ? (
              pinnedRepos.map((pinnedRepo) => (
                <Col
                  xs="12"
                  sm="12"
                  md="6"
                  lg="4"
                  xl="4"
                  className="project-card-wrapper"
                  key={pinnedRepo.node.id}
                >
                  <OutboundLink href={pinnedRepo.node.homepageUrl}>
                    <Card text="white" className="project-card">
                      <Card.Body>
                        <Card.Title>
                          <strong>{pinnedRepo.node.name}</strong>
                        </Card.Title>
                        <Card.Text>{pinnedRepo.node.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </OutboundLink>
                </Col>
              ))
            ) : (
              <Col xs="12" sm="12" md="12" lg="12" xl="12">
                <div className="project-empty">No projects available</div>
              </Col>
            )}
          </Row>
        </Container>
      );
    }}
  />
);

export default ProjectsContainer;
