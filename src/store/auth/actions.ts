import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { CHECK_AUTH, CheckAuthAction, Auth, SET_AUTH_ERROR } from "./types";
import axios from "axios";

export const checkAuth = (): ThunkAction<
  void,
  RootState,
  null,
  CheckAuthAction | any
> => {
  return async dispatch => {
    try {
      const res: Auth | any = await axios.get(
        "http://localhost:1337/api/login/checkAuth"
      );
      dispatch({
        type: CHECK_AUTH,
        payload: res.data.loggedIn
      });
    } catch (error) {
      dispatch({
        type: CHECK_AUTH,
        payload: false
      });
    }
  };
};

export const logout = (): ThunkAction<
void,
RootState,
null,
CheckAuthAction | any
> => {
  return async dispatch => {
    try {
        await axios.get(
            "http://localhost:1337/api/login/logout"
          );
          dispatch({
            type: CHECK_AUTH,
            payload: false
          })
          window.location.href = "/";
        } catch(e) {
          dispatch({
            type: SET_AUTH_ERROR,
            payload: e.message
          })
        }
      }
  
}
