export const GET_ACCOUNTS = "GET_ACCOUNTS";
export const SELECT_ACCOUNT = "SELECT_ACCOUNT";
export const CATCH_ERROR = "CATCH_ERROR";

export interface Accounts {
  data: Account[];
  selectedAccount: string;
  error: string;
}

export interface Account {
  accountId: string;
  accountName: string;
}

interface GetAccountsAction {
  type: typeof GET_ACCOUNTS;
  payload: Account[];
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
