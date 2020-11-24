export const GET_USERS = "GET_USERS";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";

export interface UserState {
  users: User[] | [];
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
  deleted: string;
  loginName: string;
  fullName: string;
  nickname: string;
  passwordSh: string;
  isEnabled: string;
  maxChats: string;
  email: string;
  disabledManually: boolean;
  skillIds: number[] | null;
  profileIds: number[];
  lobIds: number[];
  changePwdNextLogin: boolean | null;
  memberOf: MemberOf;
  managerOf: MemberOf[] | null;
  permissionGroups: string[];
  description: string;
  mobileNumber: string;
  employeeId: string;
  maxAsyncChats: string;
  backgndImgUri: string;
  pnCertName: string;
  dateUpdated: Date | null;
  lastPwdChangeDate: Date | null;
  isApiUser: boolean | null;
  userTypeId: number | null;
}

interface MemberOf {
  agentGroupId: string;
  assignmentDate: Date;
}

export interface UsersError {
  cod: string;
  message: string;
}

export interface GetUsersAction {
  type: typeof GET_USERS;
  payload: User[];
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
}

interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}

export type UserAction = GetUsersAction | SetLoadingAction | SetErrorAction;
