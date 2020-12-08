import { SkillsState, SkillAction, GET_SKILLS, GET_ERROR, SET_SKILLS_LOADING } from './types';

const initialState: SkillsState = {
    skills: [],
    error: "",
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
        case GET_ERROR:
            return {
                ...state,
                error: action.payload.message,
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