import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { getAccounts } from '../../store/accounts/actions';

const Dashboard: FC = () => {
    const dispatch = useDispatch();
    const accounts = useSelector((state: RootState) => state.accounts.accounts);
    useEffect(() => {
        dispatch(getAccounts())
    }, [])
    return (
        <div>
            Some Dashboard filler
            {accounts.length && accounts.map((e, i) => {
                return <div key={i} >{e}</div>
            })}
        </div>
    )
}

export default Dashboard;