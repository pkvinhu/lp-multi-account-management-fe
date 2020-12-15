import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import actions from '../../store/allActions';
import EnhancedTable from '../table/tableData/tableData';
import { View, Data } from '../../store/table/types';

const Dashboard: FC = () => {
    const dispatch = useDispatch();
    // const accounts = useSelector((state: RootState) => state.accounts);
    // const users = useSelector((state: RootState) => state.users);
    // const skills = useSelector((state: RootState) => state.skills);
    // const profiles = useSelector((state: RootState) => state.profiles)
    // const agentGroups = useSelector((state: RootState) => state.agentGroups)
    const state = useSelector((state:RootState) => state);
    const { accounts, users, skills, profiles, agentGroups } = state;
    const dataDisplay = ((state: RootState) => state.table.dataDisplay);

    useEffect(() => {
        Promise.resolve(() => dispatch(actions.getAccounts()))
        .then(() => dispatch(actions.getUsers()))
        .then(() => dispatch(actions.getSkills()))
        .then(() => dispatch(actions.getProfiles()))
        .then(() => dispatch(actions.getAgentGroups()))
        .catch(err => console.log(err))
    }, [])

    const handleClick = (event: unknown, view: View) => {
        if (view === "users") {
            dispatch(actions.setDataDisplay(view, users.data, "asc", "id", skills.map, profiles.map, agentGroups.map));
        }
        else {
            dispatch(actions.setDataDisplay(view, state[view].data, "asc", "id", skills.map))
        }
    }

    const checkForData = (view: View): boolean => {
        let b = !!state[view].data.length && !!dataDisplay.length;
        return b;
    }

    return (
        <div>
            {checkForData(state.table.view) ? <EnhancedTable /> : null}
            <button onClick={(e) => handleClick(e, "users")}>Get Users</button>
            <button onClick={(e) => handleClick(e, "skills")}>Get Skills</button>
            <button onClick={(e) => handleClick(e, "profiles")}>Get Profiles</button>
            <button onClick={(e) => handleClick(e, "agentGroups")}>Get Agent Groups</button>
            <button onClick={() => dispatch(actions.logout())}>Logout</button>
        </div>
    )
}

export default Dashboard;