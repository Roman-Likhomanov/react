import { authAPI } from '../api/api';
import { stopSubmit } from 'redux-form';
import { getAuthUserData } from './auth-reducer'

const INITIALAIZED_SUCCESS = 'INITIALAIZED_SUCCESS';

let initialState = {
    initialaized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALAIZED_SUCCESS:
            return {
                ...state,
                initialaized: true
            }
        default:
            return state;
    }
}
export const initialaizedSuccess = () => ({ type: INITIALAIZED_SUCCESS });

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
    .then(() => {
        dispatch(initialaizedSuccess());
    })

}




export default appReducer; 