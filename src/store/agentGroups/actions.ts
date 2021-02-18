import { RootState } from '..';
import { ThunkAction } from 'redux-thunk';
import { AgentGroupsAction, AgentGroup, GET_AGENTGROUPS, SET_AGENTGROUPS_ERROR, SET_AGENTGROUPS_LOADING, CLEAR_AGENTGROUPS_DATA } from './types';
import axios from 'axios';
import { getCookie } from '../../util/components/helpers';

export const getAgentGroups = (account: string|number): ThunkAction<void, RootState, null, AgentGroupsAction | any> => {
    return async dispatch => {
        try {
            const res: any = await axios.get(`http://localhost:1337/api/agentGroups/${account}`, { headers: { Authorization: `Bearer ${getCookie("jwt")}`}, withCredentials: true });
            let data: AgentGroup[] = res.data;
            let map = {};
            res.data.forEach((e, i) => { map[e.id] = e.name });
            dispatch({
                type: GET_AGENTGROUPS,
                payload: { data, map }
            })
        } catch(err) {
            dispatch({
                type: SET_AGENTGROUPS_ERROR,
                error: err
            })
        }
    }
}

export const setAgentGroupsLoading = (): AgentGroupsAction => {
    return {
        type: SET_AGENTGROUPS_LOADING
    }
}

export const setAgentGroupsError = (error): AgentGroupsAction => {
    return {
        type: SET_AGENTGROUPS_ERROR,
        payload: error
    }
}

export const clearAgentGroupsData = (): AgentGroupsAction => {
    return {
        type: CLEAR_AGENTGROUPS_DATA,
    }
}