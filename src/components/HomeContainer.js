import React, { useEffect } from "react";
import { connect } from "react-redux";
import classNames from 'classnames';
import { InlineIcon } from '@iconify/react';
import { MdEmail } from "react-icons/md";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";

import RoleCarousel from "../components/RoleCarousel";
import ProfileImage from "../components/ProfileImage";

import { setIsFirstLoadDone } from '../state/actions/loader.action';
import { FACEBOOK_URL, LINKEDIN_URL, GITHUB_URL, EMAIL_URL } from "../utils/websites";
import helper from '../utils/helper';

const HomeContainer = (props) => {
    const { theme = '', isFirstLoadDone = false, setIsFirstLoadDone = () => { } } = props;

    useEffect(() => {
        //On unmount
        return () => setIsFirstLoadDone(true);
    }, []);

    const animationClass = !isFirstLoadDone ? 'animate__animated animate__zoomInDown animate__fast' : '';

    const getSkillView = (skill) => {
        const { url = '', icon = '' } = helper.getSkillIconInfo(skill);

        return (<OutboundLink
            href={url}
            aria-label={skill}
            target="_blank">
            <InlineIcon icon={icon} className={'mr-2'} />
        </OutboundLink>
        );
    };

    return (
        <div className={'home-container'}>
            <div className={`profile-image-wrapper ${animationClass}`}>
                <ProfileImage />
            </div>
            <div className={classNames(`home-hi-text mt-3 ${animationClass} animate__delay-1s`)}>
                <div className={classNames('layout-text', theme === 'night' ? 'layout-text_dark' : '')}>
                    <div>Hi, I'm</div>
                    <span className={classNames('ml-0', theme === 'day' ? 'home-name-text' : 'home-name-text_dark')}>
                        Mohammed Ehab
                    </span>
                    <span>!</span>
                </div>
            </div>
            <div className={classNames(`home-intro-text mt-2 ${animationClass} animate__delay-1s`)}>
                <div className={classNames('layout-text', theme === 'night' ? 'layout-text_dark' : '')}>I am a</div>
            </div>
            <div className={`mt-1 mt-sm-0 role-carousel ${animationClass} animate__delay-1s`}>
                <RoleCarousel />
            </div>
            <div className={classNames(`home-about-text mt-4 ${animationClass} animate__delay-1s`, theme === 'night' ? 'home-dark-text' : '')}>
                I build websites, apps and more.
            </div>
            <div className={classNames(`home-about-text mt-1 ${animationClass} animate__delay-1s`, theme === 'night' ? 'home-dark-text' : '')}>
                <span className={'mr-2'}>I'm a huge fan of</span>
                {getSkillView('react')}
                {getSkillView('redux')}
                {getSkillView('graphql')}
                {getSkillView('nodejs')}
                {getSkillView('gatsby')}
                {getSkillView('js')}
                {getSkillView('ts')}
            </div>
            <div className={classNames(`home-footer-text mt-4 mt-sm-4 ${animationClass} animate__delay-2s`, theme === 'night' ? 'home-dark-text' : '')}>
                <span>
                    Want to get in touch?
                    <div className={'ml-2'}>
                        <OutboundLink
                            href={EMAIL_URL}
                            aria-label="Email">
                            <MdEmail size="1.3em" style={{ color: theme === 'day' ? "black" : 'white' }} />
                        </OutboundLink>
                        <OutboundLink
                            className={'ml-2'}
                            href={FACEBOOK_URL}
                            aria-label="Facebook"
                        >
                            <FaFacebookSquare size="1em" style={{ color: theme === 'day' ? "black" : 'white' }} />
                        </OutboundLink>{" "}
                        <OutboundLink
                            className={'ml-1'}
                            href={LINKEDIN_URL}
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size="1em" style={{ color: theme === 'day' ? "black" : 'white' }} />
                        </OutboundLink>{" "}
                        <OutboundLink
                            className={'ml-1'}
                            href={GITHUB_URL}
                            aria-label="Github">
                            <FaGithubSquare size="1em" style={{ color: theme === 'day' ? "black" : 'white' }} />
                        </OutboundLink>
                    </div>
                </span>
            </div>
        </div >
    )
};

const mapStateToProps = state => ({
    theme: state.theme.theme,
    isFirstLoadDone: state.loader.isFirstLoadDone,
});

export default connect(mapStateToProps, { setIsFirstLoadDone })(HomeContainer);
