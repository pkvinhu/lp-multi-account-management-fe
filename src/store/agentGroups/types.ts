export const GET_AGENTGROUPS = "GET_AGENTGROUPS";
export const SET_AGENTGROUPS_ERROR = "SET_AGENTGROUPS_ERROR";
export const SET_AGENTGROUPS_LOADING = "SET_AGENTGROUPS_LOADING";

export interface AgentGroupsState {
    data: AgentGroup[];
    map: {};
    error: AgentGroupsError | null;
    loading: boolean;
}

export interface AgentGroup {
  deleted: boolean;
  isEnabled: boolean;
  name: string;
  description?: string;
  parentGroupId?: number;
  id: number;
  dateUpdated?: string;
}

export interface AgentGroupsError {
  time: string;
  message: string;
  internalCode: number;
  responseStatus: string;
}

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
