import { ProfileState, ProfileAction, GET_PROFILES, SET_PROFILE_ERROR, SET_PROFILE_LOADING } from './types'

const initialState: ProfileState = {
    profiles: [],
    error: null,
    loading: false
};

export default (state = initialState, action: ProfileAction): ProfileState => {
    switch(action.type) {
        case GET_PROFILES:
            return {
                ...state,
                loading: false,
                profiles: action.payload
            }
        case SET_PROFILE_LOADING:
            return {
                ...state,
                loading: true
            }
        case SET_PROFILE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}