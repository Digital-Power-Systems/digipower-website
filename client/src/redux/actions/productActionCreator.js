import {SET_SELECTED} from './productActionTypes';

export const setSelected = (item) => {
    return {
        type: SET_SELECTED,
        payload: item
    }
}