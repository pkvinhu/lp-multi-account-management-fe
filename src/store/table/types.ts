import { User } from '../users/types';
import { Profile } from '../profiles/types';
import { Skill } from '../skills/types';
import { AgentGroup } from '../agentGroups/types';

export const SET_VIEW = "GET_VIEW";
export const SET_HEAD_CELLS = "SET_HEAD_CELLS";
export const SET_DISPLAY_DATA = "SET_DISPLAY_DATA";
export const SET_SELECTED = "SET_SELECTED";
export const SET_ORDER = "SET_ORDER";
export const SET_ORDER_BY = "SET_ORDER_BY";
export const SET_ROW_COUNT = "SET_ROW_COUNT";
export const SET_TABLE_ERROR = "SET_TABLE_ERROR";

export type Order = "asc" | "desc";
export type View = "users" | "profiles" | "skills" | "agentGroups";

export interface TableState {
    view: View;
    headCells: HeadCell[];
    dataDisplay: Data[]; 
    numSelected: number;
    order: Order;
    orderBy: string;
    rowCount: number;
    error: boolean;
}

interface UserHeadCell {
  disablePadding: boolean;
  id: keyof User;
  label: string;
  numeric: boolean;
}

interface SkillHeadCell {
    disablePadding: boolean;
    id: keyof Skill;
    label: string;
    numeric: boolean;
}

interface ProfileHeadCell {
    disablePadding: boolean;
    id: keyof Profile;
    label: string;
    numeric: boolean;
}

interface AgentGroupHeadCell {
    disablePadding: boolean;
    id: keyof AgentGroup;
    label: string;
    numeric: boolean;
}

export type Data = User | Skill | Profile | AgentGroup;
export type HeadCell = UserHeadCell | SkillHeadCell | ProfileHeadCell | AgentGroupHeadCell;