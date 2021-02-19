import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import {
  AdminAction,
  AccountRequestEntity,
  SET_ERROR,
  SET_LOAD_PROGRESS,
  SET_MESSAGE,
  SET_TOTAL_REQUESTS,
  RESET_STATE,
  RequestedAccountsInfoList,
  RequestingUser
} from "./types";
import axios from "axios";
import { getCookie } from "../../util/components/helpers";
import { verifyAgent } from "../../util/store/admin";

export const checkApiAgentExistence = (
  requestedAccount: RequestedAccountsInfoList,
  adminId: string
): ThunkAction<void, RootState, null, AdminAction | any> => {
  return async dispatch => {
    const { account, apiAgent } = requestedAccount
    try {
      const res: any = await axios.get(
        `http://localhost:1337/api/users/${account.lpId}`,
        {
          headers: { Authorization: `Bearer ${getCookie("jwt")}` },
          withCredentials: true
        }
      );
      const data: any = res.data;
      const verify = verifyAgent(apiAgent, data, adminId);
      if (verify.message) {
        dispatch({
          type: SET_MESSAGE,
          payload: verify.message
        });
      } else {
        dispatch({
          type: SET_ERROR,
          payload: verify.error
        });
      }
    } catch (e) {
      dispatch({
        type: SET_ERROR,
        payload: e.message
      });
    }
  };
};

export const addApiAgent = (
  requestedAccount: RequestedAccountsInfoList
): ThunkAction<void, RootState, null, AdminAction | any> => {
  return async dispatch => {
    try {
      const res: any = await axios.post(
        `http://localhost:1337/api/admin/add-agent`,
        {
          headers: { Authorization: `Bearer ${getCookie("jwt")}` },
          payload: { requestedAccount },
          withCredentials: true
        }
      );
      const data: any = res.data;
      dispatch({
        type: SET_MESSAGE,
        payload: data.message
      });
    } catch (e) {
      dispatch({
        type: SET_ERROR,
        payload: e.message
      });
    }
  };
};

export const deleteApiAgent = (
  requestedAccount: RequestedAccountsInfoList
): ThunkAction<void, RootState, null, AdminAction | any> => {
  return async dispatch => {
    try {
      const res: any = await axios.post(
        `http://localhost:1337/api/admin/delete-agent`,
        {
          headers: { Authorization: `Bearer ${getCookie("jwt")}` },
          payload: { requestedAccount },
          withCredentials: true
        }
      );
      const data: any = res.data;
      dispatch({
        type: SET_MESSAGE,
        payload: data.message
      });
    } catch (e) {
      dispatch({
        type: SET_ERROR,
        payload: e.message
      });
    }
  };
};

export const addUser = (
  user: RequestingUser
): ThunkAction<void, RootState, null, AdminAction | any> => {
  return async dispatch => {
    try {
      const res: any = await axios.post(
        `http://localhost:1337/api/admin/add-user`,
        {
          headers: { Authorization: `Bearer ${getCookie("jwt")}` },
          payload: { user },
          withCredentials: true
        }
      );
      const data: any = res.data;
      dispatch({
        type: SET_MESSAGE,
        payload: data.message
      });
    } catch (e) {
      dispatch({
        type: SET_ERROR,
        payload: e.message
      });
    }
  };
};

export const deleteUser = (
  user: RequestingUser
): ThunkAction<void, RootState, null, AdminAction | any> => {
  return async dispatch => {
    try {
      const res: any = await axios.post(
        `http://localhost:1337/api/admin/delete-user`,
        {
          headers: { Authorization: `Bearer ${getCookie("jwt")}` },
          payload: { user },
          withCredentials: true
        }
      );
      const data: any = res.data;
      dispatch({
        type: SET_MESSAGE,
        payload: data.message
      });
    } catch (e) {
      dispatch({
        type: SET_ERROR,
        payload: e.message
      });
    }
  };
};

/* batch accountsList.accounts to lists of five each for time being */
export const bulkAddAccounts = (
  accountsList: AccountRequestEntity,
  adminId: string
): ThunkAction<void, RootState, null, AdminAction | any> => {
  return async dispatch => {
    try {
      const res: any = await axios.post(
        `http://localhost:1337/api/admin/bulk-add-accounts`,
        {
          headers: { Authorization: `Bearer ${getCookie("jwt")}` },
          payload: { accountsList, adminId },
          withCredentials: true
        }
      );
      const data: any = res.data;
      dispatch({
        type: SET_MESSAGE,
        payload: data.message
      });
    } catch (e) {
      dispatch({
        type: SET_ERROR,
        payload: e.message
      });
    }
  };
};

/* batch accountsList.accounts to lists of five each for time being */
export const bulkDeleteAccounts = (
    accountsList: AccountRequestEntity,
  ): ThunkAction<void, RootState, null, AdminAction | any> => {
    return async dispatch => {
      try {
        const res: any = await axios.post(
          `http://localhost:1337/api/admin/bulk-delete-accounts`,
          {
            headers: { Authorization: `Bearer ${getCookie("jwt")}` },
            payload: { accountsList },
            withCredentials: true
          }
        );
        const data: any = res.data;
        dispatch({
          type: SET_MESSAGE,
          payload: data.message
        });
      } catch (e) {
        dispatch({
          type: SET_ERROR,
          payload: e.message
        });
      }
    };
  };

export const setLoadProgress = (): AdminAction => ({ type: SET_LOAD_PROGRESS })

export const setTotalRequests = (total): AdminAction => ({ type: SET_TOTAL_REQUESTS, payload: total })

export const resetState = (): AdminAction => ({ type: RESET_STATE })