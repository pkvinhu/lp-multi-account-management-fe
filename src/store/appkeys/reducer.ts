import {
  AppKeysState,
  GetAppKeysAction,
  GET_APP_KEYS,
  SET_APP_KEYS_ERROR,
  SET_APP_KEYS_LOADING
} from "./types";

const initialState: AppKeysState = {
  data: [],
  error: "",
  loading: false
};

export default (
  state = initialState,
  action: GetAppKeysAction
): AppKeysState => {
  switch (action.type) {
    case GET_APP_KEYS:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case SET_APP_KEYS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case SET_APP_KEYS_LOADING:
      return {
        ...state,
        loading: true,
        data: []
      };
    default:
      return state;
  }
};
