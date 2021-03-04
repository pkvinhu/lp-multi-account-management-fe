export const CHECK_AUTH = 'CHECK_AUTH';
export const SET_AUTH_ERROR = "SET_AUTH_ERROR";

export interface Auth {
    loggedIn: boolean;
    error: string;
    loading: boolean;
}

export interface CheckAuthAction {
    type: typeof CHECK_AUTH;
    payload: boolean;
}

export interface SetAuthError {
    type: typeof SET_AUTH_ERROR;
    payload: string; 
}

export type GetAuthAction = CheckAuthAction | SetAuthError;