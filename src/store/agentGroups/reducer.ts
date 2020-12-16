import { AgentGroupsState, AgentGroupsAction, GET_AGENTGROUPS, SET_AGENTGROUPS_ERROR, SET_AGENTGROUPS_LOADING } from './types';

const initialState: AgentGroupsState = {
    data: [],
    map: {},
    error: null,
    loading: false
}

export default (state = initialState, action: AgentGroupsAction): AgentGroupsState => {
    switch(action.type) {
        case GET_AGENTGROUPS:
            return {
                ...state,
                loading: false,
                data: action.payload.data,
                map: action.payload.map
            }
        case SET_AGENTGROUPS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case SET_AGENTGROUPS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}