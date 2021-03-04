import { SET_TOTAL_REQUESTS, SET_LOAD_PROGRESS, SET_ERROR, SET_MESSAGE, RESET_STATE, AdminState, AdminAction } from "./types";

const initialState: AdminState = {
    loadProgress: 0,
    totalRequests: 0,
    message: "",
    error: ""
}

export default (state = initialState, action: AdminAction): AdminState => {
    switch(action.type) {
        case SET_TOTAL_REQUESTS:
            return {
                ...state,
                totalRequests: action.payload
            }
        case SET_LOAD_PROGRESS:
            return {
                ...state,
                loadProgress: state.loadProgress+1
            }
        case SET_ERROR:
            return {
                ...state,
                message: "",
                error: action.payload
            }
        case SET_MESSAGE:
            return {
                ...state,
                message: action.payload,
                error: ""
            }
        case RESET_STATE:
            return initialState;
        default:
            return state;    
    }
}