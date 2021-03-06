import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import {
  Skill,
  SkillAction,
  SET_SKILLS_LOADING,
  GET_SKILLS,
  SET_SKILLS_ERROR,
  CLEAR_SKILLS_DATA
} from "./types";
import axios from "axios";
import { getCookie } from "../../util/components/helpers";

export const getSkills = (
  account: string | number
): ThunkAction<void, RootState, null, SkillAction | any> => {
  return async dispatch => {
    try {
      let res: any = await axios.get(
        `http://localhost:1337/api/skills/${account}`,
        {
          headers: { Authorization: `Bearer ${getCookie("jwt")}` },
          withCredentials: true
        }
      );
      let data: Skill[] = res.data;
      let map = {};
      res.data.forEach((e, i) => {
        map[e.id] = e.name;
      });
      dispatch({
        type: GET_SKILLS,
        payload: { data, map }
      });
    } catch (error) {
      dispatch({
        type: SET_SKILLS_ERROR,
        payload: error
      });
    }
  };
};

export const setSkillsLoading = (): SkillAction => {
  return {
    type: SET_SKILLS_LOADING
  };
};

export const setSkillsError = (error): SkillAction => {
  return {
    type: SET_SKILLS_ERROR,
    payload: error
  };
};

export const clearSkillsData = (): SkillAction => {
  return {
    type: CLEAR_SKILLS_DATA
  };
};
