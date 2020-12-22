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
export const SET_ROWS_PER_PAGE = "SET_ROWS_PER_PAGE";
export const SET_PAGE = "SET_PAGE";
export const DELETE_ENTITY = "DELETE_ENTITY";

export type Order = "asc" | "desc";
export type View = "users" | "profiles" | "skills" | "agentGroups";

export interface TableState {
  view: View;
  headCells: HeadCell[];
  dataDisplay: DataDisplay[];
  numSelected: number;
  order: Order;
  orderBy: string;
  rowCount: number;
  page: number;
  rowsPerPage: number;
  error: boolean;
  loading: boolean;
}

export interface DataDisplayState {
  data: DataDisplay[];
  headCells: HeadCell[];
  rowCount: number;
  view: View;
  order: Order;
  orderBy: string;
}

export interface HeadCellTemplate {
  disablePadding: boolean;
  label: string;
  numeric: boolean;
}

export interface UserHeadCell extends HeadCellTemplate {
  id: keyof UserDataDisplay;
}
export interface SkillHeadCell extends HeadCellTemplate {
  id: keyof SkillDataDisplay;
}

export interface ProfileHeadCell extends HeadCellTemplate {
  id: keyof ProfileDataDisplay;
}

export interface AgentGroupHeadCell extends HeadCellTemplate {
  id: keyof AgentGroupDataDisplay;
}

export interface UserDataDisplay {
  id: string;
  userTypeId: number|string;
  pid?: string;
  loginName: string;
  fullName: string;
  maxChats: string;
  email: string;
  skillIds?: (number|string)[];
  profileIds: (number|string)[];
  managerOf?: MemberOf[];
  dateCreated?: Date;
  dateUpdated?: Date;
  isApiUser?: boolean;
  lpaCreatedUser?: boolean;
}

export interface SkillDataDisplay {
  id: string;
  skillOrder: number;
  name: string;
  dateUpdated?: string;
  canTransfer: boolean;
  skillTransferList: string[];
}

export interface ProfileDataDisplay {
  roleTypeName: string;
  name: string;
  id: number;
  dateUpdated?: string;
  isAssignedToLPA: boolean;
}

export interface AgentGroupDataDisplay {
  name: string;
  parentGroupId?: number;
  id: number;
  dateUpdated?: string;
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

export interface SetPage {
  type: typeof SET_PAGE;
  payload: number;
}

export interface SetRowsPerPage {
  type: typeof SET_ROWS_PER_PAGE;
  payload: number;
}

export interface SetTableError {
  type: typeof SET_TABLE_ERROR;
}

export interface SetTableLoading {
  type: typeof SET_TABLE_LOADING;
  payload: boolean;
}

export interface DeleteEntity {
  type: typeof DELETE_ENTITY;
  payload: string;
}

export type GetTableAction =
  | SetView
  | SetDisplayData
  | SetSelected
  | SetOrder
  | SetOrderBy
  | SetPage
  | SetRowsPerPage
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

export type Entity = User | Skill | Profile | AgentGroup;

export type Data = (User | Skill | Profile | AgentGroup)[];
