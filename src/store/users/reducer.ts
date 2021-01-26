import {
  UserState,
  UserAction,
  GET_USERS,
  SET_USER_ERROR,
  SET_USER_LOADING
} from "./types";

const initialState: UserState = {
  data: [],
  skillsToUsersMap: {},
  profilesToUsersMap: {},
  loading: false,
  error: null
};

export default (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case GET_USERS:
      const { skillsToUsersMap, profilesToUsersMap, data } = action.payload;
      return {
        ...state,
        data,
        skillsToUsersMap,
        profilesToUsersMap,
        loading: false
      };
    case SET_USER_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case SET_USER_LOADING:
      return {
        ...state,
        loading: true,
        data: [],
        error: null
      };
    default:
      return state;
  }
};
