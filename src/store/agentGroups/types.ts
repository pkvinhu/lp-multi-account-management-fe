export const GET_AGENTGROUPS = "GET_AGENTGROUPS";
export const SET_AGENTGROUPS_ERROR = "SET_AGENTGROUPS_ERROR";
export const SET_AGENTGROUPS_LOADING = "SET_AGENTGROUPS_LOADING";

export interface AgentGroupsState {
    agentGroups: AgentGroup[];
    error: AgentGroupsError | null;
    loading: boolean;
}

export interface AgentGroup {
  deleted: boolean;
  isEnabled: boolean;
  name: string;
  description: string | null;
  parentGroupId: number | null;
  id: number;
  dateUpdated: string | null;
}

export interface AgentGroupsError {
  time: string;
  message: string;
  internalCode: number;
  responseStatus: string;
}

export interface GetAgentGroupsAction {
  type: typeof GET_AGENTGROUPS;
  payload: AgentGroup[];
}

interface SetLoadingAction {
  type: typeof SET_AGENTGROUPS_LOADING;
}

interface SetErrorAction {
  type: typeof SET_AGENTGROUPS_ERROR;
  payload: AgentGroupsError;
}

export type AgentGroupsAction = GetAgentGroupsAction | SetLoadingAction | SetErrorAction;
