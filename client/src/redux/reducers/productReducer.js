import {SET_SELECTED} from '../actions/productActionTypes';

const initialState = null;

const productReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_SELECTED:
            return {...state, selected: action.payload}
    }
}
export default productReducer;