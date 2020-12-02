import { UserState, UserAction, GET_USERS, SET_ERROR, SET_LOADING } from './types';

const initialState: UserState = {
    users: [],
    loading: false,
    error: ""
}

export default (state = initialState, action: UserAction): UserState => {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}