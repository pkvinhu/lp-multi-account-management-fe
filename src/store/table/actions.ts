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
  SET_ROWS_PER_PAGE,
  SetFilterCategory,
  SET_FILTER_CATEGORY,
  SetFilterValue,
  SET_FILTER_VALUE,
  CLEAR_TABLE_DATA
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
} from "../../util/store/tableHelpers";
import axios from "axios";
import { RootState } from "..";
import { ThunkAction } from "redux-thunk";
import { getCookie } from "../../util/components/helpers";

export const setDataDisplay = (
  view: View,
  data: Data | any,
  order: Order,
  orderBy: string,
  filterCategory: string,
  filterValue: string[],
  skillsMap?: any,
  profilesMap?: any,
  agentGroupsMap?: any,
  appKeys?: any
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
        order,
        orderBy,
        appKeys,
        filterCategory,
        filterValue
      );

      payload.headCells = getHeadCellsForUsers();
      break;
    case "profiles":
      payload.data = getDisplayForProfiles(
        data,
        order,
        orderBy,
        filterCategory,
        filterValue
      );
      payload.headCells = getHeadCellsForProfiles();
      break;
    case "skills":
      payload.data = getDisplayForSkills(
        data,
        skillsMap,
        order,
        orderBy,
        filterCategory,
        filterValue
      );
      payload.headCells = getHeadCellsForSkills();
      break;
    case "agentGroups":
      payload.data = getDisplayForAgentGroups(
        data,
        order,
        orderBy,
        filterCategory,
        filterValue
      );
      payload.headCells = getHeadCellsForAgentGroups();
      break;
  }
  payload.rowCount = payload.data.length;
  return {
    type: SET_DISPLAY_DATA,
    payload
  };
};

export const deleteEntity = (
  account: string,
  view: View,
  entityId: string,
  lastModified?: string | number
): ThunkAction<void, RootState, null, GetTableAction | any> => {
  return async dispatch => {
    try {
      console.log("FROM STORE ACTION DELETE: ", view, account, entityId);
      const res = await axios.delete(
        `http://localhost:1337/api/${view}/${account}/${entityId}${
          lastModified ? `/${lastModified}` : ""
        }`,
        {
          headers: { Authorization: `Bearer ${getCookie("jwt")}` },
          withCredentials: true
        }
      );
      console.log(res);
    } catch (err) {
      dispatch({ type: SET_TABLE_ERROR });
    }
    return;
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

export const setFilterCategory = (category: string): SetFilterCategory => ({
  type: SET_FILTER_CATEGORY,
  payload: category
});

export const setFilterValue = (value: string[]): SetFilterValue => ({
  type: SET_FILTER_VALUE,
  payload: value
});

export const setTableError = (): SetTableError => ({ type: SET_TABLE_ERROR });

export const setTableLoading = (bool: boolean): SetTableLoading => ({
  type: SET_TABLE_LOADING,
  payload: bool
});

export const clearTableData = (): GetTableAction => ({
  type: CLEAR_TABLE_DATA
});
