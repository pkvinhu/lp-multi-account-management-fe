import { GET_APP_KEYS, SET_APP_KEYS_ERROR, SET_APP_KEYS_LOADING, GetAppKeysAction } from "./types";
import { RootState } from "..";
import { ThunkAction } from "redux-thunk";
import axios from "axios";

export const getAppKeys = (accountId: string|number): ThunkAction<void, RootState, null, GetAppKeysAction | any> => {
    return async dispatch => {
        try {
            let res = await axios.get(`http://localhost:1337/api/appKeys/${accountId}`)
            let data = res.data;
            dispatch({
                type: GET_APP_KEYS,
                payload: data
            })
        } catch(e) {
            dispatch({
                type: SET_APP_KEYS_ERROR,
                payload: e.message
            })
        }
    }
} 

export const setAppKeysLoading = () => {
    return {
        type: SET_APP_KEYS_LOADING,
        payload: true
    }
}