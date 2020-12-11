import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import actions from '../../store/allActions';
import EnhancedTable from '../table/tableData/tableData';

const Dashboard: FC = () => {
    const dispatch = useDispatch();
    const accounts = useSelector((state: RootState) => state.accounts);
    const users = useSelector((state: RootState) => state.users);
    const skills = useSelector((state: RootState) => state.skills);
    const profiles = useSelector((state: RootState) => state.profiles)
    const agentGroups = useSelector((state: RootState) => state.agentGroups)
    useEffect(() => {
        dispatch(actions.getAccounts())
    }, [])
    return (
        <div>
            <EnhancedTable />
            Some Dashboard filler
            {accounts.data.length ? accounts.data.map((e, i) => {
                return <div key={i}>{e}</div>
            }) : null}
            {users.data.length ? users.data.map((e, i) => {
               return <div key={i}>{e.fullName}</div> 
            }) : null}
            {skills.data.length ? skills.data.map((e, i) => {
               return <div key={i}>{e.name}</div> 
            }) : null}
            {profiles.data.length ? profiles.data.map((e, i) => {
               return <div key={i}>{e.name}</div> 
            }) : null}
            {agentGroups.data.length ? agentGroups.data.map((e, i) => {
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