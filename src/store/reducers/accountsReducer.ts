import { GET_ACCOUNTS, GetAccountsAction, Accounts } from "../types/accounts";

const initialState: Accounts = {
    accounts: []
}

export default (state = initialState, action: GetAccountsAction): Accounts => {
    switch(action.type) {
        case GET_ACCOUNTS:
            return {
                accounts: action.payload.accounts
            }
        default:
            return state;
    }
}