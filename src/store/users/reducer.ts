import { UserState, UserAction, GET_USERS, SET_USER_ERROR, SET_USER_LOADING } from './types';

const initialState: UserState = {
    data: [],
    loading: false,
    error: null
}

export default (state = initialState, action: UserAction): UserState => {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        case SET_USER_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case SET_USER_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}