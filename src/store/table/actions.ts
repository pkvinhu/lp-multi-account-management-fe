import {
  Order,
  View,
  DataDisplay,
  Data,
  GetTableAction,
  SET_VIEW,
  SET_DISPLAY_DATA,
  SET_SELECTED,
  SET_ORDER,
  SET_ORDER_BY,
  SET_TABLE_ERROR,
  SET_TABLE_LOADING,
  DataDisplayState,
  SetView,
  SetSelected,
  SetOrder,
  SetOrderBy,
  SetTableError,
  SetTableLoading
} from "./types";
import {
  getHeadCellsForUsers,
  getHeadCellsForProfiles,
  getHeadCellsForSkills,
  getHeadCellsForAgentGroups,
  getDisplayForUsers,
  getDisplayForProfiles,
  getDisplayForSkills,
  getDisplayForAgentGroups
} from "../util/tableHelpers";

export const setDataDisplay = (
  skillsMap: any,
  profilesMap: any,
  agentGroupsMap: any,
  view: View,
  data: Data | any
): GetTableAction => {
  let payload: DataDisplayState = {
    data: [],
    headCells: [],
    rowCount: 0
  };
  switch (view) {
    case "users":
      payload.data = getDisplayForUsers(skillsMap, profilesMap, data);
      payload.headCells = getHeadCellsForUsers();
    case "profiles":
      payload.data = getDisplayForProfiles(data);
      payload.headCells = getHeadCellsForProfiles();
    case "skills":
      payload.data = getDisplayForSkills(skillsMap, data);
      payload.headCells = getHeadCellsForSkills();
    case "agentGroups":
      payload.data = getDisplayForAgentGroups(data);
      payload.headCells = getHeadCellsForAgentGroups();
  }
  payload.rowCount = payload.data.length;
  return {
    type: SET_DISPLAY_DATA,
    payload
  };
};

export const setView = (view: View): SetView => {
  return {
    type: SET_VIEW,
    payload: view
  };
};

export const setSelected = (selectedIndex: number): SetSelected => {
  return {
    type: SET_SELECTED,
    payload: selectedIndex
  };
};

export const setOrder = (order: Order): SetOrder => {
  return {
    type: SET_ORDER,
    payload: order
  };
};

export const setOrderBy = (field: keyof DataDisplay): SetOrderBy => {
  return {
    type: SET_ORDER_BY,
    payload: field
  };
};

export const setTableError = (): SetTableError => {
  return { type: SET_TABLE_ERROR };
};

export const setTableLoading = (): SetTableLoading => {
  return { type: SET_TABLE_LOADING };
};
