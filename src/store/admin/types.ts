export const SET_TOTAL_REQUESTS = "SET_TOTAL_REQUESTS";
export const SET_LOAD_PROGRESS = "SET_LOAD_PROGRESS";
export const SET_ERROR = "SET_ERROR";
export const SET_MESSAGE = "SET_MESSAGE";
export const RESET_STATE = "RESET_STATE";

export interface AdminState {
  loadProgress: number;
  totalRequests: number;
  message: string;
  error: string;
}

export interface AccountRequestEntity {
    password: string;
    accounts: RequestedAccountsInfoList[];
    requestingUser: RequestingUser;
}

export interface RequestedAccountsInfoList {
    account: AccountInfo;
    apiAgent: AgentInfo;
}

export interface RequestingUser {
    loginName: string;
    email: string;
    isSuperUser?: boolean;
    isLPA?: boolean;
}

interface AccountInfo {
    lpId: string;
    brand: string;
}

interface AgentInfo {
    username: string;
    password: string;
}

interface SetTotalRequests {
  type: typeof SET_TOTAL_REQUESTS;
  payload: number;
}

interface SetLoadProgress {
  type: typeof SET_LOAD_PROGRESS;
}

interface SetError {
  type: typeof SET_ERROR;
  payload: string;
}

interface SetMessage {
  type: typeof SET_MESSAGE;
  payload: string;
}

interface ResetState {
    type: typeof RESET_STATE
}

export type AdminAction =
  | SetTotalRequests
  | SetLoadProgress
  | SetError
  | SetMessage
  | ResetState;
