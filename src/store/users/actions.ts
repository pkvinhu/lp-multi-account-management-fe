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

export const getUsers = (): ThunkAction<
  void,
  RootState,
  null,
  UserAction | any
> => {
  return async dispatch => {
    try {
      let res: any = await axios.get(
        "http://localhost:1337/api/users/29778756"
      );
      console.log(res);
      let data: UserPayload[] = res.data;
      dispatch({
        type: GET_USERS,
        payload: data
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: SET_ERROR,
        payload: error.message
      });
    }
  };
};

export const setLoading = (): UserAction => {
  return {
    type: SET_LOADING,
  }
}
