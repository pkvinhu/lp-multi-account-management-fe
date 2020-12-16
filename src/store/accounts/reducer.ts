import { GET_ACCOUNTS, Accounts, SELECT_ACCOUNT, AccountsAction, CATCH_ERROR } from "./types";

const initialState: Accounts = {
    data: [],
    selectedAccount: "",
    error: ""
}

export default (state = initialState, action: AccountsAction): Accounts => {
    switch(action.type) {
        case GET_ACCOUNTS:
            return {
                ...state,
                data: action.payload
            }
        case SELECT_ACCOUNT:
            return {
                ...state,
                selectedAccount: action.payload
            }
        case CATCH_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}