export const GET_SKILLS = "GET_SKILLS";
export const SET_SKILLS_ERROR = "SET_SKILLS_ERROR";
export const SET_SKILLS_LOADING = "SET_SKILLS_LOADING";

export interface SkillsState {
  skills: Skill[];
  error: SkillsError | null;
  loading: boolean;
}

export interface CreateSkillPayload {
    id: string;
    deleted: boolean;
    name: string | null;
    description: string | null;
    skillOrder: number | null;
    maxWaitTime: number | null;
    defaultPostChatSurveyId: string | null;
    defaultOfflineSurveyId: string | null;
    defaultAgentSurveyId: string | null;
    dateCreated: string | null;
    dateUpdated: string | null;
    skillRoutingConfiguration: RoutingConfig[] | null;
    agentGroupId: string | null;
    priority: number | null;
    splitPercentage: number | null;
    wrapUpTime: number | null;
    slaDefaultResponseTime: number | null;
    slaUrgentResponseTime: number | null;
    slaFirstTimeResponseTime: number | null;
    lobIds: number[] | null;
    canTransfer: boolean | null;
    skillTransferList: string[] | null;
    workingHoursId: string | null;
    specialOccasionId: string | null;
    postConversationSurveyAppInstallAssociationId: string | null;
    autoCloseInSeconds: number | null;
    transferToAgentMaxWaitInSeconds: number | null;
    fallbackSkill: string | null;
    fallbackWhenAllAgentsAreAway: boolean | null;
    agentSurveyForMsgTimeoutInMinutes: number | null;
    agentSurveyForMsgId: string | null;
  }

  interface RoutingConfig {
    priority: number;
    splitPercentage: number;
    agentGroupId: number;
  }

  export interface Skill {
    id: string;
    skillOrder: number;
    description: string;
    workingHoursId: string;
    specialOccasionId: string;
    name: string;
    maxWaitTime: number;
    deleted: boolean;
    dateUpdated: string;
    canTransfer: boolean;
    skillTransferList: string[];
    lobIds: string[];
    skillRoutingConfiguration: RoutingConfig[];
  }

  export interface SkillsError {
    time: string;
    message: string;
    internalCode: number;
    responseStatus: string;
  }

  interface GetSkillsAction {
    type: typeof GET_SKILLS;
    payload: Skill[];
  }

  interface SetSkillsError {
    type: typeof SET_SKILLS_ERROR;
    payload: SkillsError;
  }

  interface SetSkillsLoading {
    type: typeof SET_SKILLS_LOADING;
  }

  export type SkillAction = GetSkillsAction | SetSkillsError | SetSkillsLoading;