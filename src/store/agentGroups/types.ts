import { AgentGroupDataDisplay } from "../table/types";
import { GenericError } from "../users/types";

export const GET_AGENTGROUPS = "GET_AGENTGROUPS";
export const SET_AGENTGROUPS_ERROR = "SET_AGENTGROUPS_ERROR";
export const SET_AGENTGROUPS_LOADING = "SET_AGENTGROUPS_LOADING";

export interface AgentGroupsState {
    data: AgentGroup[];
    map: {};
    error: AgentGroupsError | null;
    loading: boolean;
}

export interface AgentGroup extends AgentGroupDataDisplay {
  deleted: boolean;
  isEnabled: boolean;
  description?: string;
}

export interface AgentGroupsError extends GenericError {}

export interface GetAgentGroupsAction {
  type: typeof GET_AGENTGROUPS;
  payload: { data: AgentGroup[], map: any };
}

interface SetLoadingAction {
  type: typeof SET_AGENTGROUPS_LOADING;
}

interface SetErrorAction {
  type: typeof SET_AGENTGROUPS_ERROR;
  payload: AgentGroupsError;
}

export type AgentGroupsAction = GetAgentGroupsAction | SetLoadingAction | SetErrorAction;
