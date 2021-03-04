import { UserDataDisplay } from "../table/types";

export const GET_USERS = "GET_USERS";
export const SET_USER_LOADING = "SET_USER_LOADING";
export const SET_USER_ERROR = "SET_USER_ERROR";
export const CLEAR_USER_DATA = "CLEAR_USER_DATA";

export interface UserState {
  data: User[];
  skillsToUsersMap: {};
  profilesToUsersMap: {};
  loading: boolean;
  error: UsersError | null;
}

export interface BasicUser {
  deleted: boolean;
  loginName: string;
  pid: string;
  id: number;
}

export interface User extends UserDataDisplay {
  deleted: string;
  nickname: string;
  passwordSh: string;
  isEnabled: string;
  disabledManually?: boolean;
  lobIds?: number[] ;
  changePwdNextLogin?: boolean;
  memberOf: MemberOf;
  permissionGroups?: string[];
  pictureUrl?: string ;
  pictureId?: string;
  description?: string;
  mobileNumber?: string;
  employeeId?: string;
  maxAsyncChats?: string;
  backgndImgUri?: string;
  pnCertName?: string;
  lastPwdChangeDate?: Date;
  // userTypeId: number;
  allowedAppKeys?: string;
  resetMfaSecret?: boolean;
}

export interface MemberOf {
  agentGroupId: string;
  assignmentDate: Date;
}

export interface GenericError {
  time: string;
  message: string;
  internalCode: number;
  responseStatus: string;
}
export interface UsersError extends GenericError {
  fields: string[];
}

export interface GetUsersAction {
  type: typeof GET_USERS;
  payload: UsersDataPayload;
}

export interface UsersDataPayload {
  data: User[];
  skillsToUsersMap: any;
  profilesToUsersMap: any;
}

interface SetLoadingAction {
  type: typeof SET_USER_LOADING;
}

interface SetErrorAction {
  type: typeof SET_USER_ERROR;
  payload: UsersError;
}

interface ClearDataAction {
  type: typeof CLEAR_USER_DATA;
}

export type UserAction = GetUsersAction | SetLoadingAction | SetErrorAction | ClearDataAction;
