import { SET_IS_FIRST_LOAD_DONE } from '../types';

export const setIsFirstLoadDone = isFirstLoadDone => ({
    type: SET_IS_FIRST_LOAD_DONE, payload: isFirstLoadDone
});
