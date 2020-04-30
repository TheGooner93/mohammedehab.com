import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { StaticQuery, graphql } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";

const ProjectsContainer = () => (
  <StaticQuery
    query={graphql`
      query GetGHRepos {
        githubData {
          data {
            user {
              name
              pinnedItems {
                nodes {
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
      console.log(data);
      const {
        githubData: {
          data: {
            user: { pinnedItems: { nodes: pinnedRepos = [] } = {} } = {},
          } = {},
        } = {},
      } = data;

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
                  key={pinnedRepo.id}
                >
                  <OutboundLink href={pinnedRepo.homepageUrl}>
                    <Card text="white" className="project-card">
                      <Card.Body>
                        <Card.Title>
                          <strong>{pinnedRepo.name}</strong>
                        </Card.Title>
                        <Card.Text>{pinnedRepo.description}</Card.Text>
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
