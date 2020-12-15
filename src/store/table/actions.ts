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
  view: View,
  data: Data | any,
  skillsMap?: any,
  profilesMap?: any,
  agentGroupsMap?: any
): GetTableAction => {
  let payload: DataDisplayState = {
    data: [],
    headCells: [],
    rowCount: 0
  };
  console.log(view)
  switch (view) {
    case "users":
      payload.data = getDisplayForUsers(skillsMap, profilesMap, agentGroupsMap, data);
      payload.headCells = getHeadCellsForUsers();
      break;
    case "profiles":
      payload.data = getDisplayForProfiles(data);
      payload.headCells = getHeadCellsForProfiles();
      break;
    case "skills":
      payload.data = getDisplayForSkills(skillsMap, data);
      payload.headCells = getHeadCellsForSkills();
      break;
    case "agentGroups":
      payload.data = getDisplayForAgentGroups(data);
      payload.headCells = getHeadCellsForAgentGroups();
      break;
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
  console.log("hit setorder:", order)
  return {
    type: SET_ORDER,
    payload: order
  };
};

export const setOrderBy = (field: keyof DataDisplay): SetOrderBy => {
  console.log("hit setorderby:", field)
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
