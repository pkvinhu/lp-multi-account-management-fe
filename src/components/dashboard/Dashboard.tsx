import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { getAccounts } from '../../store/accounts/actions';
import { getUsers } from '../../store/users/actions';
import { getSkills } from '../../store/skills/actions';
import { logout } from '../../store/auth/actions';

const Dashboard: FC = () => {
    const dispatch = useDispatch();
    const accounts = useSelector((state: RootState) => state.accounts.accounts);
    const users = useSelector((state: RootState) => state.users.users);
    const skills = useSelector((state: RootState) => state.skills.skills);
    useEffect(() => {
        dispatch(getAccounts())
    }, [])
    return (
        <div>
            Some Dashboard filler
            {accounts.length && accounts.map((e, i) => {
                return <div key={i}>{e}</div>
            })}
            {users.length && users.map((e, i) => {
               return <div key={i}>{e.fullName}</div> 
            }) }
            {skills.length && skills.map((e, i) => {
               return <div key={i}>{e.name}</div> 
            }) }
            <button onClick={() => dispatch(getUsers())}>Get Users</button>
            <button onClick={() => dispatch(getSkills())}>Get Skills</button>
            <button onClick={() => dispatch(logout())}>Logout</button>        
        </div>
    )
}

export default Dashboard;