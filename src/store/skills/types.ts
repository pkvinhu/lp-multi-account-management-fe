import { SkillDataDisplay } from "../table/types";
import { GenericError } from "../users/types";

export const GET_SKILLS = "GET_SKILLS";
export const SET_SKILLS_ERROR = "SET_SKILLS_ERROR";
export const SET_SKILLS_LOADING = "SET_SKILLS_LOADING";

export interface SkillsState {
  data: Skill[];
  map: any;
  error: SkillsError | null;
  loading: boolean;
}

export interface CreateSkillPayload extends Skill {
    defaultPostChatSurveyId?: string;
    defaultOfflineSurveyId?: string;
    defaultAgentSurveyId?: string;
    dateCreated?: string;
    agentGroupId?: string;
    priority?: number;
    splitPercentage?: number;
    wrapUpTime?: number;
    slaDefaultResponseTime?: number;
    slaUrgentResponseTime?: number;
    slaFirstTimeResponseTime?: number;
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

  export interface Skill extends SkillDataDisplay {
    description: string;
    workingHoursId: string;
    specialOccasionId: string;
    maxWaitTime: number;
    deleted: boolean;
    lobIds: string[];
    skillRoutingConfiguration: RoutingConfig[];
  }

  export interface SkillsError extends GenericError {}

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