import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import {
  UserPayload,
  User,
  UsersError,
  UserAction,
  SET_LOADING,
  GET_USERS,
  SET_ERROR
} from "./types";
import axios from "axios";

export const getUsers = (): ThunkAction<void, RootState, null, UserAction> => {
  return async dispatch => {
    try {
      let res: any = await axios.get("http://localhost:1337/api/users");
      console.log(res);
      let data: UserPayload[] = res.data;
      dispatch({
        type: GET_USERS,
        payload: res
      });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error.message
      });
    }
  };
};
