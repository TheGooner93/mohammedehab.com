import React from "react";
import FileViewer from 'react-file-viewer';
import classNames from 'classnames';
import { connect } from "react-redux";
import { StaticQuery, graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

const ResumeContainer = (props) => {

  const { theme = '' } = props;

  const resumeView = (
    <StaticQuery
      query={graphql`
                  {
                    resumeLink: allFile(filter: { extension: { eq: "docx" } }) {
                      edges {
                        node {
                          publicURL
                        }
                      }
                    }
                  }
                `}
      render={data => {
        const {
          resumeLink: {
            edges: {
              [0]: {
                node: {
                  publicURL: filePath = ''
                } = {}
              } = {}
            } = {}
          } = {}
        } = data;

        return (
          <div className="container mt-4 mb-4" >
            {/* <FileViewer fileType={fileType} filePath={filePath} /> */}
            <iframe title='resume' src={`${filePath}`}
              style={{width:'90%', height: '50rem'}} 
              frameborder="0"></iframe>
          </div>
        );
      }}
    />
  );

  return (
    <Container className="resume-container">
      <Row>
        <Col>
          <h1 className={classNames('pb-3 layout-text', theme === 'night' ? 'layout-text_dark resume-container-heading_dark' : 'resume-container-heading')}>Resume</h1>
        </Col>
      </Row>
      <Row>
        {resumeView}
      </Row>
    </Container>
  );
};

const mapStateToProps = state => ({
  theme: state.theme.theme,
});


export default connect(mapStateToProps, {})(ResumeContainer);
