export const CHECK_AUTH = 'CHECK_AUTH';
export const LOGOUT = 'LOGOUT';

export interface Auth {
    loggedIn: boolean
}

export interface CheckAuthAction {
    type: typeof CHECK_AUTH;
    payload: boolean;
}