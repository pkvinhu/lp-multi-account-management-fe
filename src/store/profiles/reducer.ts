import { ProfileState, ProfileAction, GET_PROFILES, SET_PROFILE_ERROR, SET_PROFILE_LOADING } from './types'

const initialState: ProfileState = {
    data: [],
    map: {},
    roleTypeCountMap: {},
    error: null,
    loading: false
};

export default (state = initialState, action: ProfileAction): ProfileState => {
    switch(action.type) {
        case GET_PROFILES:
            const { data, map, roleTypeCountMap } = action.payload;
            return {
                ...state,
                loading: false,
                data,
                map,
                roleTypeCountMap
            }
        case SET_PROFILE_LOADING:
            return {
                ...state,
                loading: true,
                data: [],
                map: {},
                roleTypeCountMap: {}
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