import { SkillsState, SkillAction, GET_SKILLS, SET_SKILLS_ERROR, SET_SKILLS_LOADING } from './types';

const initialState: SkillsState = {
    skills: [],
    error: null,
    loading: false
}

export default (state = initialState, action: SkillAction): SkillsState => {
    switch(action.type) {
        case GET_SKILLS:
            return {
                ...state,
                skills: action.payload,
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
                loading: true
            }
        default:
            return state;
    }
}