import { CHECK_AUTH, SET_AUTH_ERROR, GetAuthAction, Auth } from './types';

const initialState: Auth = {
    loggedIn: false,
    error: ""
}

export default (state = initialState, action: GetAuthAction): Auth => {
    switch(action.type){
        case CHECK_AUTH:
            return {
                ...state,
                loggedIn: action.payload
            }
        case SET_AUTH_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}