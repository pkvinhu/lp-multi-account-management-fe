import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import {
  User,
  UserAction,
  SET_USER_LOADING,
  GET_USERS,
  SET_USER_ERROR
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
      let data: User[] = res.data;
      dispatch({
        type: GET_USERS,
        payload: data
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: SET_USER_ERROR,
        payload: error
      });
    }
  };
};

export const setUserLoading = (): UserAction => {
  return {
    type: SET_USER_LOADING,
  }
}
