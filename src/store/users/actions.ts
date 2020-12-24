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

export const getUsers = (
  account: string | number
): ThunkAction<void, RootState, null, UserAction | any> => {
  return async dispatch => {
    try {
      let res: any = await axios.get(
        `http://localhost:1337/api/users/${account}`
      );
      let data: User[] = res.data;
      let skillsToUsersMap = {};
      let profilesToUsersMap = {};
      data.forEach((e, i) => {
        e.skillIds.length &&
          e.skillIds.forEach((sk, ind) => {
              if (skillsToUsersMap[sk]) {
                skillsToUsersMap[sk].push(e.fullName);
              } else {
                skillsToUsersMap[sk] = [e.fullName];
              }
          });
        e.profileIds.length &&
          e.profileIds.forEach((p, i) => {
            if (profilesToUsersMap[p]) {
              profilesToUsersMap[p].push(e.fullName);
            } else {
              profilesToUsersMap[p] = [e.fullName];
            }
          })
      });
      dispatch({
        type: GET_USERS,
        payload: { data, skillsToUsersMap, profilesToUsersMap }
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
    type: SET_USER_LOADING
  };
};
