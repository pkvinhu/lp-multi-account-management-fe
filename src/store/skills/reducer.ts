import { SkillsState, SkillAction, GET_SKILLS, SET_SKILLS_ERROR, SET_SKILLS_LOADING } from './types';

const initialState: SkillsState = {
    data: [],
    map: {},
    error: null,
    loading: false
}

export default (state = initialState, action: SkillAction): SkillsState => {
    switch(action.type) {
        case GET_SKILLS:
            return {
                ...state,
                data: action.payload.data,
                map: action.payload.map,
                loading: false
            }
        case SET_SKILLS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case SET_SKILLS_LOADING:
            return {
                ...state,
                loading: true,
                data: []
            }
        default:
            return state;
    }
}