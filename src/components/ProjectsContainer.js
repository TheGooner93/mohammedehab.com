import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { StaticQuery, graphql } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";

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
              key={repo.node.id}
            >
              <OutboundLink href={repo.node.homepageUrl}>
                <Card text="white" className="project-card">
                  <Card.Body>
                    <Card.Title>
                      <strong>{repo.node.name}</strong>
                    </Card.Title>
                    <Card.Text>{repo.node.description}</Card.Text>
                    {/* <Card.Link
                    href={repo.node.homepageUrl}
                    aria-label="Visit Live App"
                  > */}
                    {/* <Button variant="primary" aria-label="Visit live app"> */}
                    {/* Visit Live App */}
                    {/* </Button> */}
                    {/* </Card.Link> */}
                  </Card.Body>
                </Card>
              </OutboundLink>
            </Col>
          ))}
        </Row>
      </Container>
    )}
  />
);

export default ProjectsContainer;
