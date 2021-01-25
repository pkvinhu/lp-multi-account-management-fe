import { GET_CAMPAIGNS, SET_CAMPAIGN_ERROR, SET_CAMPAIGN_LOADING, GetCampaignAction, CampaignsState } from "./types";

const initialState: CampaignsState = {
    data: [],
    skillsConnectedToCampaignsMap: {},
    error: null,
    loading: false
}
export default (state = initialState, action: GetCampaignAction): CampaignsState => {
    switch(action.type) {
        case GET_CAMPAIGNS:
            const { skillsConnectedToCampaignsMap, data } = action.payload;
            return {
                ...state,
                loading: false,
                data,
                skillsConnectedToCampaignsMap
            }
        case SET_CAMPAIGN_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case SET_CAMPAIGN_LOADING:
            return {
                ...state,
                loading: true,
                data: [],
                skillsConnectedToCampaignsMap: {},
                error: null
            }
        default:
            return state;
    }
}

