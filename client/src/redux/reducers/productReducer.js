import {SET_SELECTED} from '../actions/productActionTypes';

const initialState = {selected: '?selected=inverter'};

const productReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_SELECTED:
            return {...state, selected: action.payload}
        default:
            return state;
    }
}
export default productReducer;