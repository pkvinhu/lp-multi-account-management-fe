import { User, MemberOf } from "../users/types";
import { Profile } from "../profiles/types";
import { Skill } from "../skills/types";
import { AgentGroup } from "../agentGroups/types";

export const SET_VIEW = "GET_VIEW";
export const SET_DISPLAY_DATA = "SET_DISPLAY_DATA";
export const SET_SELECTED = "SET_SELECTED";
export const SET_ORDER = "SET_ORDER";
export const SET_ORDER_BY = "SET_ORDER_BY";
export const SET_TABLE_ERROR = "SET_TABLE_ERROR";
export const SET_TABLE_LOADING = "SET_TABLE_LOADING";

export type Order = "asc" | "desc";
export type View = "users" | "profiles" | "skills" | "agentGroups";

export interface TableState {
  view: View;
  headCells: HeadCell[];
  dataDisplay: DataDisplay[];
  numSelected: number;
  order: Order;
  orderBy: keyof DataDisplay | null;
  rowCount: number;
  error: boolean;
  loading: boolean;
}

export interface DataDisplayState {
    data: DataDisplay[];
    headCells: HeadCell[];
    rowCount: number;
}

export interface UserHeadCell {
  disablePadding: boolean;
  id: keyof UserDataDisplay;
  label: string;
  numeric: boolean;
}
export interface SkillHeadCell {
  disablePadding: boolean;
  id: keyof SkillDataDisplay;
  label: string;
  numeric: boolean;
}

export interface ProfileHeadCell {
  disablePadding: boolean;
  id: keyof ProfileDataDisplay;
  label: string;
  numeric: boolean;
}

export interface AgentGroupHeadCell {
  disablePadding: boolean;
  id: keyof AgentGroupDataDisplay;
  label: string;
  numeric: boolean;
}

export interface UserDataDisplay {
  id: string;
  pid: string | null;
  loginName: string;
  fullName: string;
  maxChats: string;
  email: string;
  skillIds: number[] | string | null;
  profileIds: number[] | string;
  managerOf: MemberOf[] | null;
  dateCreated: Date | null;
  dateUpdated: Date | null;
  isApiUser: boolean | null;
  lpaCreatedUser: boolean | null;
}

export interface SkillDataDisplay {
  id: string;
  skillOrder: number;
  name: string;
  dateUpdated: string;
  canTransfer: boolean;
  skillTransferList: string[];
}

export interface ProfileDataDisplay {
  roleTypeName: string;
  name: string;
  id: number;
  dateUpdated: string;
  isAssignedToLPA: boolean;
}

export interface AgentGroupDataDisplay {
  name: string;
  parentGroupId: number | null;
  id: number;
  dateUpdated: string | null;
}

export interface SetView {
  type: typeof SET_VIEW;
  payload: View;
}

export interface SetDisplayData {
  type: typeof SET_DISPLAY_DATA;
  payload: DataDisplayState;
}

export interface SetSelected {
  type: typeof SET_SELECTED;
  payload: number;
}

export interface SetOrder {
  type: typeof SET_ORDER;
  payload: Order;
}

export interface SetOrderBy {
  type: typeof SET_ORDER_BY;
  payload: keyof DataDisplay;
}

export interface SetTableError {
  type: typeof SET_TABLE_ERROR;
}

export interface SetTableLoading {
    type: typeof SET_TABLE_LOADING;
}

export type GetTableAction =
  | SetView
  | SetDisplayData
  | SetSelected
  | SetOrder
  | SetOrderBy
  | SetTableError
  | SetTableLoading;

export type DataDisplay =
  | UserDataDisplay
  | SkillDataDisplay
  | ProfileDataDisplay
  | AgentGroupDataDisplay;

export type HeadCell =
  | UserHeadCell
  | SkillHeadCell
  | ProfileHeadCell
  | AgentGroupHeadCell;
  
export type Data = 
  | User[]
  | Skill[]
  | Profile[]
  | AgentGroup[];
