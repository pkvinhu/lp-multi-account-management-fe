import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import actions from '../../store/allActions';
import EnhancedTable from '../table/tableData/TableData';
import { useStyles } from './styles';
import AppToolbar from '../toolbar/AppToolbar';
import DashboardLoading from './dashboardLoading/DashboardLoading';
import AccountDropDown from './accountDropDown/AccountDropDown';
import { getLoadingAction } from '../../util/components/getActions';

const Dashboard: FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state);
    const account = useSelector((state: RootState) => state.accounts.selectedAccount)
    const { accounts, table } = state;
    const { view } = table;
    const { selectedAccount } = accounts;
    const { setTableLoading, deleteEntity } = actions;

    useEffect(() => {
        dispatch(actions.getAccounts())
    }, [])

    const handleDelete = (event, entityId: any) => {
        const act = getLoadingAction(view);
        Promise.resolve(() => console.log("...handle delete"))
        .then(() => dispatch(deleteEntity(selectedAccount, view, String(entityId))))
        .then(() => dispatch(act()))
        .then(() => dispatch(setTableLoading(true)))
        .catch(e => console.log(e)) 
    }

    return (
        <div className={classes.root}>
            <AppToolbar />
            <div className={classes.inside}>
                {!account
                    ? (<div className={classes.paper}><AccountDropDown /></div>) :
                    (!state.table.loading
                        ? <EnhancedTable handleDelete={handleDelete}/>
                        : <DashboardLoading />)}
            </div>
        </div>
    )
}

export default Dashboard;