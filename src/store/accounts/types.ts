import { string } from "prop-types";

export const GET_ACCOUNTS = "GET_ACCOUNTS";

export interface Accounts {
  accounts: string[]  
}

export interface GetAccountsAction {
    type: typeof GET_ACCOUNTS;
    payload: Accounts;
}

