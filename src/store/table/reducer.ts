import {
  TableState,
  GetTableAction,
  SET_VIEW,
  SET_DISPLAY_DATA,
  SET_SELECTED,
  SET_ORDER,
  SET_ORDER_BY,
  SET_TABLE_ERROR,
  SET_TABLE_LOADING,
  SET_PAGE,
  SET_ROWS_PER_PAGE,
  SET_FILTER_CATEGORY,
  SET_FILTER_VALUE
} from "./types";

const initialState: TableState = {
  view: "users",
  headCells: [],
  dataDisplay: [],
  filterCategory: "",
  filterValue: [],
  numSelected: 0,
  order: "asc",
  orderBy: "id",
  rowCount: 0,
  page: 0,
  rowsPerPage: 10,
  error: false,
  loading: false
};

export default (state = initialState, action: GetTableAction): TableState => {
  switch (action.type) {
    case SET_DISPLAY_DATA:
      const {
        data,
        headCells,
        rowCount,
        view,
        order,
        orderBy
      } = action.payload;
      return {
        ...state,
        loading: false,
        error: false,
        dataDisplay: data,
        headCells,
        rowCount,
        view,
        order,
        orderBy
      };
    case SET_VIEW:
      return {
        ...state,
        dataDisplay: [],
        view: action.payload
      };
    case SET_SELECTED:
      return {
        ...state,
        numSelected: action.payload
      };
    case SET_ORDER:
      return {
        ...state,
        order: action.payload
      };
    case SET_ORDER_BY:
      return {
        ...state,
        orderBy: action.payload
      };
    case SET_PAGE:
      return {
        ...state,
        page: action.payload
      };
    case SET_ROWS_PER_PAGE:
      return {
        ...state,
        rowsPerPage: action.payload
      };
    case SET_FILTER_CATEGORY:
      return {
        ...state,
        filterCategory: action.payload,
        filterValue: []
      }
    case SET_FILTER_VALUE:
      return {
        ...state,
        filterValue: action.payload
      }
    case SET_TABLE_ERROR:
      return {
        ...state,
        error: true
      };
    case SET_TABLE_LOADING:
      return {
        ...state,
        loading: action.payload,
        dataDisplay: []
      };
    default:
      return state;
  }
};
