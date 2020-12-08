import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import actions from '../../store/allActions';

const Dashboard: FC = () => {
    const dispatch = useDispatch();
    const accounts = useSelector((state: RootState) => state.accounts.accounts);
    const users = useSelector((state: RootState) => state.users.users);
    const skills = useSelector((state: RootState) => state.skills.skills);
    const profiles = useSelector((state: RootState) => state.profiles.profiles)
    const agentGroups = useSelector((state: RootState) => state.agentGroups.agentGroups)
    useEffect(() => {
        dispatch(actions.getAccounts())
    }, [])
    return (
        <div>
            Some Dashboard filler
            {accounts.length ? accounts.map((e, i) => {
                return <div key={i}>{e}</div>
            }) : null}
            {users.length ? users.map((e, i) => {
               return <div key={i}>{e.fullName}</div> 
            }) : null}
            {skills.length ? skills.map((e, i) => {
               return <div key={i}>{e.name}</div> 
            }) : null}
            {profiles.length ? profiles.map((e, i) => {
               return <div key={i}>{e.name}</div> 
            }) : null}
            {agentGroups.length ? agentGroups.map((e, i) => {
               return <div key={i}>{e.name}</div> 
            }) : null}
            <button onClick={() => dispatch(actions.getUsers())}>Get Users</button>
            <button onClick={() => dispatch(actions.getSkills())}>Get Skills</button>
            <button onClick={() => dispatch(actions.getProfiles())}>Get Profiles</button>
            <button onClick={() => dispatch(actions.getAgentGroups())}>Get Agent Groups</button>
            <button onClick={() => dispatch(actions.logout())}>Logout</button>        
        </div>
    )
}

export default Dashboard;