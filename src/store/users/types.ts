export const GET_USERS = "GET_USERS";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";

export interface UserState {
  users: UserPayload[];
  loading: boolean;
  error: string;
}

export interface User {
  deleted: boolean;
  loginName: string;
  pid: string;
  id: number;
}

export interface UserPayload {
  id: string;
  pid: string | null;
  deleted: string;
  loginName: string;
  fullName: string;
  nickname: string;
  passwordSh: string;
  isEnabled: string;
  maxChats: string;
  email: string;
  disabledManually: boolean | null;
  skillIds: number[] | null;
  profileIds: number[];
  lobIds: number[] | null;
  changePwdNextLogin: boolean | null;
  memberOf: MemberOf;
  managerOf: MemberOf[] | null;
  permissionGroups: string[] | null;
  pictureUrl: string | null;
  pictureId: string | null;
  description: string | null;
  mobileNumber: string | null;
  employeeId: string | null;
  maxAsyncChats: string | null;
  backgndImgUri: string | null;
  pnCertName: string | null;
  dateCreated: string | null;
  dateUpdated: Date | null;
  lastPwdChangeDate: Date | null;
  isApiUser: boolean | null;
  userTypeId: number | null;
  allowedAppKeys: string | null;
  lpaCreatedUser: boolean | null;
  resetMfaSecret: boolean | null;
}

interface MemberOf {
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
  payload: UserPayload[];
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
}

interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: UsersError;
}

export type UserAction = GetUsersAction | SetLoadingAction | SetErrorAction;
