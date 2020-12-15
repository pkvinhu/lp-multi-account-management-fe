import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import actions from '../../store/allActions';
import EnhancedTable from '../table/tableData/tableData';
import { View, Data } from '../../store/table/types';

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

    const handleClick = (event: unknown, view: View) => {
        if(view === "users") {
            dispatch(actions.setDataDisplay(view, users.data, skills.map, profiles.map, agentGroups.map));
        }
        else if (view === "skills") {
            dispatch(actions.setDataDisplay(view, skills.data))
        }
        else if (view === "profiles") {
            dispatch(actions.setDataDisplay(view, profiles.data))
        }
        else if (view === "agentGroups") {
            dispatch(actions.setDataDisplay(view, agentGroups.data))
        }
    }

    return (
        <div>
            {users.data.length && profiles.data.length && skills.data.length && agentGroups.data.length ? <EnhancedTable /> : null}
            <button onClick={(e) => handleClick(e, "users")}>Get Users</button>
            <button onClick={(e) => handleClick(e, "skills")}>Get Skills</button>
            <button onClick={(e) => handleClick(e, "profiles")}>Get Profiles</button>
            <button onClick={(e) => handleClick(e, "agentGroups")}>Get Agent Groups</button>
            <button onClick={() => dispatch(actions.logout())}>Logout</button>        
        </div>
    )
}

export default Dashboard;