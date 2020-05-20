import React, { useEffect } from "react";
import { connect } from "react-redux";
import classNames from 'classnames';
import { Container, Row, Col } from "react-bootstrap";
import RoleCarousel from "../components/RoleCarousel";
import AboutMeCard from "../components/AboutMeCard";
import ProfileImage from "../components/ProfileImage";

import { setIsFirstLoadDone } from '../state/actions/loader.action';

const HomeContainer = (props) => {
    const { theme = '', isFirstLoadDone = false, setIsFirstLoadDone = () => {} } = props;

    useEffect(() => {
        //On unmount
        return () => setIsFirstLoadDone(true);
    }, []);

    const animationClass = !isFirstLoadDone ? 'animate__animated animate__zoomInDown animate__fast' : '';

    return (
        <Container style={{ textAlign: "center", paddingBottom: "1.5rem" }}>
            <Row className='mb-3 mb-md-4'>
                <Col>
                    <div className={`profile-image-wrapper ${animationClass}`}>
                        <ProfileImage />
                    </div>
                </Col>
            </Row>
            <Row className={`${animationClass} animate__delay-1s`}>
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
            <Row className={`${animationClass} animate__delay-1s`}>
                <Col>
                    <div>
                        <h2 className={classNames('layout-text', theme === 'night' ? 'layout-text_dark' : '')}>I am a</h2>
                    </div>
                </Col>
            </Row>
            <Row className={`${animationClass} animate__delay-1s`}>
                <Col>
                    <RoleCarousel />
                </Col>
            </Row>
            <br />
            <br />
            <Row className={`${animationClass} animate__delay-2s`}>
                <Col>
                    <AboutMeCard />
                </Col>
            </Row>
        </Container>
    )
};

const mapStateToProps = state => ({
    theme: state.theme.theme,
    isFirstLoadDone: state.loader.isFirstLoadDone,
});

export default connect(mapStateToProps, { setIsFirstLoadDone })(HomeContainer);
