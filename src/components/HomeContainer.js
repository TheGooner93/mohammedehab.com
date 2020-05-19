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
                    <div className='profile-image-wrapper animate__animated animate__bounceInDown animate__fast'>
                        <ProfileImage />
                    </div>
                </Col>
            </Row>
            <Row className='animate__animated animate__bounceInDown animate__delay-1s animate__fast'>
                <Col>
                    <h1 className={classNames('layout-text', theme === 'night' ? 'layout-text_dark' : '')}>
                        Hi, I'm{" "}
                        <span className={classNames(theme === 'day' ? 'home-name-text' : 'home-name-text_dark')}>
                            Mohammed Ehab
                        </span>
                        <span>!</span>
                    </h1>
                </Col>
            </Row>
            <br />
            <Row className='animate__animated animate__bounceInDown animate__delay-1s animate__fast'>
                <Col>
                    <div>
                        <h2 className={classNames('layout-text', theme === 'night' ? 'layout-text_dark' : '')}>I am a</h2>
                    </div>
                </Col>
            </Row>
            <Row className='animate__animated animate__bounceInDown animate__delay-1s animate__fast'>
                <Col>
                    <RoleCarousel />
                </Col>
            </Row>
            <br />
            <br />
            <Row className='animate__animated animate__bounceInDown animate__delay-2s animate__fast'>
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
