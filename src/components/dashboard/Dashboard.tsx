import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import actions from '../../store/allActions';
import EnhancedTable from '../table/tableData/tableData';
import { View } from '../../store/table/types';

const Dashboard: FC = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state);
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

    const checkForData = (view: View): boolean => {
        let b = !!state[view].data.length && !!dataDisplay.length;
        return b;
    }

    return (
        <div>
            {checkForData(state.table.view) ? <EnhancedTable /> : null}
            <button onClick={() => dispatch(actions.logout())}>Logout</button>
        </div>
    )
}

export default Dashboard;