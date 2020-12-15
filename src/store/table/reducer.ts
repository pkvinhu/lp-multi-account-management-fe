import {
  TableState,
  GetTableAction,
  SET_VIEW,
  SET_DISPLAY_DATA,
  SET_SELECTED,
  SET_ORDER,
  SET_ORDER_BY,
  SET_TABLE_ERROR,
  SET_TABLE_LOADING
} from "./types";

const initialState: TableState = {
  view: "users",
  headCells: [],
  dataDisplay: [],
  numSelected: 0,
  order: "asc",
  orderBy: "id",
  rowCount: 0,
  error: false,
  loading: false
};

export default (state = initialState, action: GetTableAction): TableState => {
    switch(action.type) {
        case SET_DISPLAY_DATA:
            const { data, headCells, rowCount } = action.payload;
            return {
                ...state,
                loading: false,
                error: false,
                dataDisplay: data,
                headCells,
                rowCount
            }   
        case SET_VIEW:
            return {
                ...state,
                dataDisplay: [],
                view: action.payload
            } 
        case SET_SELECTED:
            return {
                ...state,
                numSelected: action.payload
            }
        case SET_ORDER:
            return {
                ...state,
                order: action.payload
            }
        case SET_ORDER_BY:
            return {
                ...state,
                orderBy: action.payload,
                order: "asc" 
            }
        case SET_TABLE_ERROR:
            return {
                ...state,
                error: true
            }
        case SET_TABLE_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}
