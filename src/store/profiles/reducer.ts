import { ProfileState, ProfileAction, GET_PROFILES, SET_PROFILE_ERROR, SET_PROFILE_LOADING } from './types'

const initialState: ProfileState = {
    data: [],
    map: {},
    error: null,
    loading: false
};

export default (state = initialState, action: ProfileAction): ProfileState => {
    switch(action.type) {
        case GET_PROFILES:
            return {
                ...state,
                loading: false,
                data: action.payload.data,
                map: action.payload.map
            }
        case SET_PROFILE_LOADING:
            return {
                ...state,
                loading: true,
                data: []
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