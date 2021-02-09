import { CHECK_AUTH, SET_AUTH_ERROR, GetAuthAction, Auth } from './types';

const initialState: Auth = {
    loggedIn: false,
    error: "",
    loading: true
}

export default (state = initialState, action: GetAuthAction): Auth => {
    switch(action.type){
        case CHECK_AUTH:
            return {
                ...state,
                loggedIn: action.payload,
                loading: false
            }
        case SET_AUTH_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}