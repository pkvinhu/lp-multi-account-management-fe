import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import {
  Skill,
  SkillAction,
  SET_SKILLS_LOADING,
  GET_SKILLS,
  GET_ERROR
} from "./types";
import axios from "axios";

export const getSkills = (): ThunkAction<
  void,
  RootState,
  null,
  SkillAction | any
> => {
  return async dispatch => {
    try {
      let res: any = await axios.get(
        "http://localhost:1337/api/skills/29778756"
      );
      console.log(res);
      let data: Skill[] = res.data;
      dispatch({
        type: GET_SKILLS,
        payload: data
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_ERROR,
        payload: error.message
      });
    }
  };
};

export const setSkillsLoading = (): SkillAction => {
    return {
        type: SET_SKILLS_LOADING
    }
}
