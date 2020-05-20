import { SET_IS_FIRST_LOAD_DONE } from '../types';
import helper from '../../utils/helper';

const initialState = {
    isFirstLoadDone: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_FIRST_LOAD_DONE:
            {
                return { ...state, isFirstLoadDone: action.payload };
            }
        default:
            return state;
    }
};