import { CHECK_AUTH, CheckAuthAction, Auth } from './types';

const initialState: Auth = {
    loggedIn: false
}

export default (state = initialState, action: CheckAuthAction): Auth => {
    switch(action.type){
        case CHECK_AUTH:
            return {
                loggedIn: action.payload
            }
        default:
            return state;
    }
}