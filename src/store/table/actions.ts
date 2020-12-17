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
  SetTableLoading,
  SetPage,
  SET_PAGE,
  SetRowsPerPage,
  SET_ROWS_PER_PAGE
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
  order: Order,
  orderBy: string,
  skillsMap?: any,
  profilesMap?: any,
  agentGroupsMap?: any
): GetTableAction => {
  let payload: DataDisplayState = {
    data: [],
    headCells: [],
    rowCount: 0,
    view,
    order,
    orderBy
  };
  switch (view) {
    case "users":
      payload.data = getDisplayForUsers(
        skillsMap,
        profilesMap,
        agentGroupsMap,
        data,
        view,
        order,
        orderBy
      );
      payload.headCells = getHeadCellsForUsers();
      break;
    case "profiles":
      payload.data = getDisplayForProfiles(data, view, order, orderBy);
      payload.headCells = getHeadCellsForProfiles();
      break;
    case "skills":
      payload.data = getDisplayForSkills(data, skillsMap, view, order, orderBy);
      payload.headCells = getHeadCellsForSkills();
      break;
    case "agentGroups":
      payload.data = getDisplayForAgentGroups(data, view, order, orderBy);
      payload.headCells = getHeadCellsForAgentGroups();
      break;
  }
  payload.rowCount = payload.data.length;
  return {
    type: SET_DISPLAY_DATA,
    payload
  };
};

export const setView = (view: View): SetView => ({
  type: SET_VIEW,
  payload: view
});

export const setSelected = (selectedIndex: number): SetSelected => ({
  type: SET_SELECTED,
  payload: selectedIndex
});

export const setOrder = (order: Order): SetOrder => ({
  type: SET_ORDER,
  payload: order
});

export const setOrderBy = (field: keyof DataDisplay): SetOrderBy => ({
  type: SET_ORDER_BY,
  payload: field
});

export const setPage = (page: number): SetPage => ({
  type: SET_PAGE,
  payload: page
});

export const setRowsPerPage = (rows: number): SetRowsPerPage => ({
  type: SET_ROWS_PER_PAGE,
  payload: rows
});

export const setTableError = (): SetTableError => ({ type: SET_TABLE_ERROR });

export const setTableLoading = (): SetTableLoading => ({
  type: SET_TABLE_LOADING
});
