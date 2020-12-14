export const GET_SKILLS = "GET_SKILLS";
export const SET_SKILLS_ERROR = "SET_SKILLS_ERROR";
export const SET_SKILLS_LOADING = "SET_SKILLS_LOADING";

export interface SkillsState {
  data: Skill[];
  map: any;
  error: SkillsError | null;
  loading: boolean;
}

export interface CreateSkillPayload {
    id: string;
    deleted: boolean;
    name?: string;
    description?: string;
    skillOrder?: number;
    maxWaitTime?: number;
    defaultPostChatSurveyId?: string;
    defaultOfflineSurveyId?: string;
    defaultAgentSurveyId?: string;
    dateCreated?: string;
    dateUpdated?: string;
    skillRoutingConfiguration?: RoutingConfig[];
    agentGroupId?: string;
    priority?: number;
    splitPercentage?: number;
    wrapUpTime?: number;
    slaDefaultResponseTime?: number;
    slaUrgentResponseTime?: number;
    slaFirstTimeResponseTime?: number;
    lobIds?: number[];
    canTransfer?: boolean;
    skillTransferList?: string[];
    workingHoursId?: string;
    specialOccasionId?: string;
    postConversationSurveyAppInstallAssociationId?: string;
    autoCloseInSeconds?: number;
    transferToAgentMaxWaitInSeconds?: number;
    fallbackSkill?: string;
    fallbackWhenAllAgentsAreAway?: boolean;
    agentSurveyForMsgTimeoutInMinutes?: number;
    agentSurveyForMsgId?: string;
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
    payload: { data: Skill[], map: any };
  }

  interface SetSkillsError {
    type: typeof SET_SKILLS_ERROR;
    payload: SkillsError;
  }

  interface SetSkillsLoading {
    type: typeof SET_SKILLS_LOADING;
  }

  export type SkillAction = GetSkillsAction | SetSkillsError | SetSkillsLoading;