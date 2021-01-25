export const GET_CAMPAIGNS = "GET_CAMPAIGNS";
export const SET_CAMPAIGN_ERROR = "SET_CAMPAIGN_ERROR";
export const SET_CAMPAIGN_LOADING = "SET_CAMPAIGN_LOADING";

export interface CampaignsState {
    data: Campaign[];
    skillsConnectedToCampaignsMap: any;
    error: string | null;
    loading: boolean;
}

export interface Campaign {
    id: number;
    name: string;
    description: string;
    engagements: Engagement[];
}

// we can get more info but only getting engagements field 
// for now to check if skills can be deleted
interface Engagement {
    deleted: boolean;
    id: number;
    name: string;
    description: string;
    modifiedDate: Date;
    createdDate: Date;
    channel: number;
    type: number;
    onsiteLocations: number[];
    visitorBehaviors: number[];
    enabled: boolean;
    language: string;
    position: Position;
    displayInstances: any[]; // since this is long and arduous, will write out if we need these values
    skillId: number; // we need this
    skillName: string; // and this
    timeInQueue: number;
    followMePages: number;
    followMeTime: number;
    windowId: number;
    isPopOut: boolean;
    isUnifiedWindow: boolean;
    useSystemRouting: boolean;
    allowUnauthMsg: boolean;
    zones: number[];
    subType: number;
    source: number;
    availabilityPolicy: number;
    availabilityPolicyForMessaging: number;
    renderingType: number;
    conversationType: number;
}

interface Position {
    left: number;
    top: number;
    type: number;
}

// interface Instance {
//     events: { click: Click };
//     presentation: { 
//         background: Background;
//         border: Border;
//         // ..
//     };
// }

// interface Click {
//     enabled: boolean;
//     target: string;
// }

// interface Background {
//     color: string;
// }
// interface Border {
//     radius: number;
//     width: number;
//     color: string;
// }

export interface GetCampaigns {
    type: typeof GET_CAMPAIGNS;
    payload: { 
        data: Campaign[];
        skillsConnectedToCampaignsMap: any;
    } 
}

export interface SetCampaignError {
    type: typeof SET_CAMPAIGN_ERROR;
    payload: string;
}

export interface SetCampaignLoading {
    type: typeof SET_CAMPAIGN_LOADING;
}

export type GetCampaignAction = GetCampaigns | SetCampaignError | SetCampaignLoading;