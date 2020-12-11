import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import {
  Skill,
  SkillAction,
  SET_SKILLS_LOADING,
  GET_SKILLS,
  SET_SKILLS_ERROR
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
      let data: Skill[] = res.data;
      let map = {};
      res.data.forEach((e, i) => { map[e.id] = e.name });
      dispatch({
        type: GET_SKILLS,
        payload: { data, map }
      });
    } catch (error) {
      console.log(error);
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
    }
}
