import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import actions from '../../store/allActions';
import EnhancedTable from '../table/tableData/tableData';
import { View } from '../../store/table/types';
import { useStyles } from './styles';
import AppToolbar from '../toolbar/AppToolbar';
import DashboardLoading from './dashboardLoading/dashboardLoading';
import AccountDropDown from './accountDropDown/accountDropDown';

const Dashboard: FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state);
    const account = useSelector((state: RootState) => state.accounts.selectedAccount)
    // const { accounts, users, skills, profiles, agentGroups } = state;
    const dataDisplay = ((state: RootState) => state.table.dataDisplay);

    useEffect(() => {
        dispatch(actions.getAccounts())
    }, [])

    const checkForData = (view: View): boolean => {
        let b = !state.table.loading && !!state[view].data.length && !!dataDisplay.length;
        return b;
    }

    return (
        <div className={classes.root}>
            <AppToolbar />
            <div className={classes.inside}>
                {!account
                    ? (<div className={classes.paper}><AccountDropDown /></div>) :
                    (checkForData(state.table.view)
                        ? <EnhancedTable />
                        : <DashboardLoading />)}
            </div>
        </div>
    )
}

export default Dashboard;