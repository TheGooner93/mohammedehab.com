import { TOGGLE_DARKMODE } from '../types';
import helper from '../../utils/helper';

const initialState = {
    theme: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_DARKMODE:
            {
                const currentStoredTheme = helper.getCurrentTheme();
                if (currentStoredTheme !== action.payload) {
                    helper.toggleTheme();
                }
                return { ...state, theme: action.payload };
            }
        default:
            return state;
    }
};