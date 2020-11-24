import React, { FC, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { getAccounts } from '../../store/accounts/actions';

const Dashboard: FC = () => {
    const dispatch = useDispatch();
    const accounts = useSelector((state: RootState) => state.accounts.accounts);
    // const [ accounts, setAccount ] = useState([])
    useEffect(() => {
        let bearer = localStorage.getItem("bearer");
        console.log(bearer)
        if(!bearer) {
            window.location.href = "/";
        }
        dispatch(getAccounts())
    }, [!accounts.length])
    return (
        <div>
            Some Dashboard filler
            {accounts.length && accounts.map((e) => {
                return <div>{e}</div>
        })}
        </div>
    )
}

export default Dashboard;