import React from "react";
import { connect } from "react-redux";
import classNames from 'classnames';
import { Container, Row, Col } from "react-bootstrap";
import RoleCarousel from "../components/RoleCarousel";
import AboutMeCard from "../components/AboutMeCard";
import ProfileImage from "../components/ProfileImage";

const HomeContainer = (props) => {
    const { theme = '' } = props;
    return (
        <Container style={{ textAlign: "center", paddingBottom: "1.5rem" }}>
            <Row className='mb-3 mb-md-4'>
                <Col>
                    <div className='profile-image-wrapper'>
                        <ProfileImage />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1 className={classNames('layout-text', theme === 'night' ? 'layout-text_dark' : '')}>
                        Hi, I'm{" "}
                        <span style={{
                            backgroundColor: "rgba(63,94,251,1)",
                            color: "white",
                            padding: "0.25rem",
                        }}>
                            Mohammed Ehab
                </span>
                    </h1>
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    <div>
                        <h2 className={classNames('layout-text', theme === 'night' ? 'layout-text_dark' : '')}>I am a</h2>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <RoleCarousel />
                </Col>
            </Row>
            <br />
            <br />
            <Row>
                <Col>
                    <AboutMeCard />
                </Col>
            </Row>
        </Container>
    )
};

const mapStateToProps = state => ({
    theme: state.theme.theme
});

export default connect(mapStateToProps, {})(HomeContainer);
