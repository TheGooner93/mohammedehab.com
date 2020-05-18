import React from "react";
import { connect } from "react-redux";
import classNames from 'classnames';
import { Card, Container, Row, Col } from "react-bootstrap";
import { StaticQuery, graphql } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";

const ProjectsContainer = (props) => {

  const { theme = '' } = props;

  const projectsView = (<StaticQuery
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
  />);


  return (
    <Container className="projects-container">
      <Row>
        <Col>
          <h1 className={classNames('pb-3 layout-text', theme === 'night' ? 'layout-text_dark projects-container-heading_dark' : 'projects-container-heading')}>Projects</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          {projectsView}
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => ({
  theme: state.theme.theme
});

export default connect(mapStateToProps, {})(ProjectsContainer);
