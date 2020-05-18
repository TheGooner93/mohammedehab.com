const toggleTheme = () => {
    const currentValue = JSON.parse(localStorage.getItem('currentTheme'));
    const newValue = currentValue === 'night' ? 'day' : 'night';

    localStorage.setItem('currentTheme', JSON.stringify(newValue));

};

const getCurrentTheme = () => {
    return JSON.parse(localStorage.getItem('currentTheme'));
};

export default {
    toggleTheme,
    getCurrentTheme,
};