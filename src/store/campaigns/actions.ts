import {
  GET_CAMPAIGNS,
  SET_CAMPAIGN_ERROR,
  SET_CAMPAIGN_LOADING,
  GetCampaignAction,
  Campaign,
  CLEAR_CAMPAIGN_DATA
} from "./types";
import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import axios from "axios";
import { getCookie } from "../../util/components/helpers";

export const getCampaigns = (
  account: number | string
): ThunkAction<void, RootState, null, GetCampaignAction | any> => {
  return async dispatch => {
    try {
      const res: any = await axios.get(
        `http://localhost:1337/api/campaigns/${account}`,
        {
          headers: { Authorization: `Bearer ${getCookie("jwt")}` },
          withCredentials: true
        }
      );
      let data: Campaign[] = res.data;
      let skillsConnectedToCampaignsMap = {};
      res.data.forEach((e, i) => {
        e.engagements.forEach((eng, ind) => {
          if (eng.skillId) {
            if (skillsConnectedToCampaignsMap[eng.skillId]) {
              skillsConnectedToCampaignsMap[eng.skillId].push(e.name);
            } else {
              skillsConnectedToCampaignsMap[eng.skillId] = [e.name];
            }
          }
        });
      });
      dispatch({
        type: GET_CAMPAIGNS,
        payload: { data, skillsConnectedToCampaignsMap }
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: SET_CAMPAIGN_ERROR,
        error: err
      });
    }
  };
};

export const setCampaignLoading = (): GetCampaignAction => ({
  type: SET_CAMPAIGN_LOADING
});

export const setCampaignError = (error): GetCampaignAction => ({
  type: SET_CAMPAIGN_ERROR,
  payload: error
});

export const clearCampaignData = (): GetCampaignAction => {
  return {
    type: CLEAR_CAMPAIGN_DATA
  };
};
