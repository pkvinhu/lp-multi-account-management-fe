export const GET_APP_KEYS = "GET_APP_KEYS";
export const SET_APP_KEYS_ERROR = "GET_APP_KEYS_ERROR";
export const SET_APP_KEYS_LOADING = "SET_APP_KEYS_LOADING";

export interface AppKeysState {
    data: AppKeys[];
    error: string | null;
    loading: boolean;
}

export interface AppKeys {
    developerID: string;
    appName: string;
    purpose: string;
    privileges: Privilege[];
    keyId: string;
    enabled: boolean;
    appSecret: string;
    token: string;
    tokenSecret: string;
    creationTime: Date;
    keyType: string;
    appDescription?: string;
    ipRanges?: string[];
    external?: string;
}

interface Privilege {
    type: string;
    data: string;
}

export interface GetAppKeys {
    type: typeof GET_APP_KEYS;
    payload: AppKeys[];
}

export interface SetAppKeysError {
    type: typeof SET_APP_KEYS_ERROR;
    payload: string;
}

export interface SetAppKeysLoading {
    type: typeof SET_APP_KEYS_LOADING;
}

export type GetAppKeysAction = GetAppKeys | SetAppKeysError | SetAppKeysLoading;