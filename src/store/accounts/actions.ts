import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { GET_ACCOUNTS, GetAccountsAction, Accounts } from './types';

export const getAccounts = (): ThunkAction<void, RootState, null, GetAccountsAction> => {
    return async dispatch => {
        try {
            let res: any = await fetch('http://localhost:1337/api/accounts');
            res = await res.json();
            console.log("RES FROM ACTION: ", res)
                console.log('THIS IS MY RES: :', res)
                dispatch({
                    type: GET_ACCOUNTS,
                    payload: { accounts: res.accounts }
                })
            // }
        } catch(e) {
            console.log(e);
            dispatch({
                type: GET_ACCOUNTS,
                payload: { accounts: ["there was an error"]}
            })
        }
    }
}