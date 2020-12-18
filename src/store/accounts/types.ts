export const GET_ACCOUNTS = "GET_ACCOUNTS";
export const SELECT_ACCOUNT = "SELECT_ACCOUNT";
export const CATCH_ERROR = "CATCH_ERROR";

export interface Accounts {
  data: (string | number)[];
  selectedAccount: string;
  error: string;
}

interface GetAccountsAction {
  type: typeof GET_ACCOUNTS;
  payload: string[];
}

interface SelectAccountAction {
  type: typeof SELECT_ACCOUNT;
  payload: string;
}

interface CatchError {
  type: typeof CATCH_ERROR;
  payload: string;
}

export type AccountsAction =
  | GetAccountsAction
  | CatchError
  | SelectAccountAction;
