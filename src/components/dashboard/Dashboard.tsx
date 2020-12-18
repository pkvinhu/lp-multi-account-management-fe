import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import actions from '../../store/allActions';
import EnhancedTable from '../table/tableData/TableData';
import { useStyles } from './styles';
import AppToolbar from '../toolbar/AppToolbar';
import DashboardLoading from './dashboardLoading/DashboardLoading';
import AccountDropDown from './accountDropDown/AccountDropDown';

const Dashboard: FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state);
    const account = useSelector((state: RootState) => state.accounts.selectedAccount)

    useEffect(() => {
        dispatch(actions.getAccounts())
    }, [])

    return (
        <div className={classes.root}>
            <AppToolbar />
            <div className={classes.inside}>
                {!account
                    ? (<div className={classes.paper}><AccountDropDown /></div>) :
                    (!state.table.loading
                        ? <EnhancedTable />
                        : <DashboardLoading />)}
            </div>
        </div>
    )
}

export default Dashboard;