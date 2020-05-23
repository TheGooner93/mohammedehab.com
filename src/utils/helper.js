import {
    REACT_URL, REDUX_URL, GRAPHQL_URL, NODEJS_URL, GATSBY_URL, JS_URL, TS_URL
} from './websites'
import reactIcon from '@iconify/icons-logos/react';
import reduxIcon from '@iconify/icons-logos/redux';
import jsIcon from '@iconify/icons-logos/javascript';
import tsIcon from '@iconify/icons-logos/typescript-icon';
import graphqlIcon from '@iconify/icons-logos/graphql';
import nodejsIcon from '@iconify/icons-logos/nodejs-icon';
import gatsbyIcon from '@iconify/icons-logos/gatsby';

const toggleTheme = () => {
    const currentValue = JSON.parse(localStorage.getItem('currentTheme'));
    const newValue = currentValue === 'night' ? 'day' : 'night';

    localStorage.setItem('currentTheme', JSON.stringify(newValue));
};

const getCurrentTheme = () => {
    return JSON.parse(localStorage.getItem('currentTheme')) || 'day';
};

const getSkillIconInfo = (skill) => {
    const skillIconInfo = {
        url: '',
        icon: ''
    };

    switch(skill){
        case 'react': { skillIconInfo.url = REACT_URL; skillIconInfo.icon = reactIcon; break; } 
        case 'redux': { skillIconInfo.url = REDUX_URL; skillIconInfo.icon = reduxIcon; break; } 
        case 'graphql': { skillIconInfo.url = GRAPHQL_URL; skillIconInfo.icon = graphqlIcon; break; } 
        case 'nodejs': { skillIconInfo.url = NODEJS_URL; skillIconInfo.icon = nodejsIcon; break; } 
        case 'gatsby': { skillIconInfo.url = GATSBY_URL; skillIconInfo.icon = gatsbyIcon; break; } 
        case 'js': { skillIconInfo.url = JS_URL; skillIconInfo.icon = jsIcon; break; } 
        case 'ts': { skillIconInfo.url = TS_URL; skillIconInfo.icon = tsIcon; break; } 
        default: return skillIconInfo;
    }

    return skillIconInfo;
}

export default {
    toggleTheme,
    getCurrentTheme,
    getSkillIconInfo,
};