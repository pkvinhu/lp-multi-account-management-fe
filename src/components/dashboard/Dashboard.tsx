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
        dispatch(actions.getAccounts());
        dispatch(actions.getUsers());
        dispatch(actions.getSkills());
        dispatch(actions.getProfiles());
        dispatch(actions.getAgentGroups());
    }, [])
    return (
        <div>
            {users.data.length && profiles.data.length && skills.data.length && agentGroups.data.length ? <EnhancedTable /> : null}
            <button onClick={() => dispatch(actions.getUsers())}>Get Users</button>
            <button onClick={() => dispatch(actions.getSkills())}>Get Skills</button>
            <button onClick={() => dispatch(actions.getProfiles())}>Get Profiles</button>
            <button onClick={() => dispatch(actions.getAgentGroups())}>Get Agent Groups</button>
            <button onClick={() => dispatch(actions.logout())}>Logout</button>        
        </div>
    )
}

export default Dashboard;