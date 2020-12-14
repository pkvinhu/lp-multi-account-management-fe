export const GET_USERS = "GET_USERS";
export const SET_USER_LOADING = "SET_USER_LOADING";
export const SET_USER_ERROR = "SET_USER_ERROR";

export interface UserState {
  data: User[];
  loading: boolean;
  error: UsersError | null;
}

export interface BasicUser {
  deleted: boolean;
  loginName: string;
  pid: string;
  id: number;
}

export interface User {
  id: string;
  pid?: string;
  deleted: string;
  loginName: string;
  fullName: string;
  nickname: string;
  passwordSh: string;
  isEnabled: string;
  maxChats: string;
  email: string;
  disabledManually?: boolean;
  skillIds?: number[];
  profileIds: number[];
  lobIds?: number[] ;
  changePwdNextLogin?: boolean;
  memberOf: MemberOf;
  managerOf?: MemberOf[];
  permissionGroups?: string[];
  pictureUrl?: string ;
  pictureId?: string;
  description?: string;
  mobileNumber?: string;
  employeeId?: string;
  maxAsyncChats?: string;
  backgndImgUri?: string;
  pnCertName?: string;
  dateCreated?: Date;
  dateUpdated?: Date;
  lastPwdChangeDate?: Date;
  isApiUser?: boolean;
  userTypeId?: number;
  allowedAppKeys?: string;
  lpaCreatedUser?: boolean;
  resetMfaSecret?: boolean;
}

export interface MemberOf {
  agentGroupId: string;
  assignmentDate: Date;
}

export interface UsersError {
  fields: string[];
  time: string;
  message: string;
  internalCode: number;
  responseStatus: string;
}

export interface GetUsersAction {
  type: typeof GET_USERS;
  payload: User[];
}

interface SetLoadingAction {
  type: typeof SET_USER_LOADING;
}

interface SetErrorAction {
  type: typeof SET_USER_ERROR;
  payload: UsersError;
}

export type UserAction = GetUsersAction | SetLoadingAction | SetErrorAction;
