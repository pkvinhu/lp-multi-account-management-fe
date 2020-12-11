import { RootState } from '..';
import { ThunkAction } from 'redux-thunk';
import { AgentGroupsAction, AgentGroup, GET_AGENTGROUPS, SET_AGENTGROUPS_ERROR, SET_AGENTGROUPS_LOADING } from './types';
import axios from 'axios';

export const getAgentGroups = (): ThunkAction<void, RootState, null, AgentGroupsAction | any> => {
    return async dispatch => {
        try {
            const res: any = await axios.get("http://localhost:1337/api/agentGroups/29778756");
            let data: AgentGroup[] = res.data;
            dispatch({
                type: GET_AGENTGROUPS,
                payload: data
            })
        } catch(err) {
            console.log(err);
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