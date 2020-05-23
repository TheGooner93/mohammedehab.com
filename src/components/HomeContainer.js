import React, { useEffect } from "react";
import { connect } from "react-redux";
import classNames from 'classnames';
import RoleCarousel from "../components/RoleCarousel";
import AboutMeCard from "../components/AboutMeCard";
import ProfileImage from "../components/ProfileImage";

import { InlineIcon } from '@iconify/react';
import reactIcon from '@iconify/icons-logos/react';
import reduxIcon from '@iconify/icons-logos/redux';
import javascriptIcon from '@iconify/icons-logos/javascript';
import css3 from '@iconify/icons-logos/css-3';
import bootstrap from '@iconify/icons-logos/bootstrap';
import ts from '@iconify/icons-logos/typescript-icon';
import mysql from '@iconify/icons-logos/mysql';
import graphql from '@iconify/icons-logos/graphql';
import jest from '@iconify/icons-logos/jest';
import nodejs from '@iconify/icons-logos/nodejs-icon';
import docker from '@iconify/icons-logos/docker-icon';
import gatsby from '@iconify/icons-logos/gatsby';
import grunt from '@iconify/icons-logos/grunt';
import mongodb from '@iconify/icons-logos/mongodb';
import git from '@iconify/icons-logos/git-icon';

import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import { setIsFirstLoadDone } from '../state/actions/loader.action';
import { FACEBOOK_URL, LINKEDIN_URL, GITHUB_URL, EMAIL_URL } from "../utils/websites";

const HomeContainer = (props) => {
    const { theme = '', isFirstLoadDone = false, setIsFirstLoadDone = () => { } } = props;

    useEffect(() => {
        //On unmount
        return () => setIsFirstLoadDone(true);
    }, []);

    const animationClass = !isFirstLoadDone ? 'animate__animated animate__zoomInDown animate__fast' : '';

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
                <span className={'mr-1'}>I'm a huge fan of</span>
                <InlineIcon icon={reactIcon} className={'mr-2'} />
                <InlineIcon icon={reduxIcon} className={'mr-2'} />
                <InlineIcon icon={graphql} className={'mr-2'} />
                <InlineIcon icon={nodejs} className={'mr-2'} />
                <InlineIcon icon={gatsby} className={'mr-2'} />
                <InlineIcon icon={javascriptIcon} className={'mr-2'} />
                <InlineIcon icon={ts} className={'mr-2'} />
            </div>
            <div className={classNames(`home-footer-text mt-4 mt-sm-4 ${animationClass} animate__delay-2s`, theme === 'night' ? 'home-dark-text' : '')}>
                <span>
                    Want to get in touch?
                    <div className={'ml-2'}>
                        <OutboundLink
                            href={EMAIL_URL}
                            aria-label="Email">
                            <MdEmail size="1.3em" style={{ color: theme === 'day'? "black" : 'white' }} />
                        </OutboundLink>
                        <OutboundLink
                            className={'ml-2'}
                            href={FACEBOOK_URL}
                            aria-label="Facebook"
                        >
                            <FaFacebookSquare size="1em" style={{ color: theme === 'day'? "black" : 'white' }} />
                        </OutboundLink>{" "}
                        <OutboundLink
                            className={'ml-1'}
                            href={LINKEDIN_URL}
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size="1em" style={{ color: theme === 'day'? "black" : 'white' }} />
                        </OutboundLink>{" "}
                        <OutboundLink
                            className={'ml-1'}
                            href={GITHUB_URL}
                            aria-label="Github">
                            <FaGithubSquare size="1em" style={{ color: theme === 'day'? "black" : 'white' }} />
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
