import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { GET_ACCOUNTS, Accounts, AccountsAction, SELECT_ACCOUNT, CATCH_ERROR } from "./types";
import axios from "axios";

export const getAccounts = (): ThunkAction<
  void,
  RootState,
  null,
  AccountsAction | any
> => {
  return async dispatch => {
    try {
      let res: any = await axios.get("http://localhost:1337/api/accounts");
      console.log("THIS IS MY RES: :", res);
      let data: Accounts = res.data;
      dispatch({
        type: GET_ACCOUNTS,
        payload: data
      });
    } catch (e) {
      dispatch({
        type: CATCH_ERROR,
        payload: e.message
      });
    }
  };
};

export const selectAccount = (acct:string): ThunkAction<
void,
RootState,
null,
AccountsAction | any
> => {
    return async dispatch => {
        dispatch({
            type: SELECT_ACCOUNT,
            payload: acct
        })
    }
}
