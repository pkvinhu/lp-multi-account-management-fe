// dependencies
import React, { FC, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory, useParams } from 'react-router-dom';

// store
import { RootState } from '../../store';
import actions from '../../store/allActions';
import { getLoadingAction } from '../../util/components/getActions';

// components
import EnhancedTable from '../table/tableData/TableData';
import DashboardLoading from './dashboardLoading/DashboardLoading';

// styles
import { useStyles } from './styles';
import { setDataLoadingForAccount } from '../../util/components/dispatches';
import { checkError, usePrevious } from '../../util/components/helpers';

const Dashboard: FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state);
    const account = useSelector((state: RootState) => state.accounts.selectedAccount)
    const { accounts, table, users, skills, profiles, agentGroups, appKeys, campaigns } = state;
    const { view, loading } = table;
    const { selectedAccount, data } = accounts;
    const { setTableLoading, deleteEntity } = actions;
    const location = useLocation();
    const history = useHistory();
    const { accountId, id } = useParams();

    useEffect(() => {
        if (accounts.data.length && account !== accountId) {
            // console.log(accountId, account)
            if (accountId) {
                setDataLoadingForAccount(accountId, dispatch, location, history)
            }
            else if (account) {
                setDataLoadingForAccount(account, dispatch, location, history)
            }
            else if (accounts.data[0].accountId !== account) {
                setDataLoadingForAccount(accounts.data[0].accountId, dispatch, location, history)
            }
        }
    }, [accounts.data, accountId])

    const handleDelete = (event, entity: any) => {
        const act = getLoadingAction(view);
        Promise.resolve(() => console.log("...handle delete"))
            .then(() => {
                if (view !== "profiles") {
                    dispatch(deleteEntity(selectedAccount, view, String(entity.id)))
                } else {
                    let lastModified = Date.parse(entity.dateUpdated);
                    dispatch(deleteEntity(selectedAccount, view, String(entity.id), lastModified))
                }
            })
            .then(() => dispatch(act()))
            .then(() => dispatch(setTableLoading(true)))
            .catch(e => console.log(e))
    }

    if(accounts.loading) return (<div></div>)

    return (
        <div >
            {account && !loading && (<EnhancedTable handleDelete={handleDelete} />)}
            {account && loading && (<DashboardLoading />)}
        </div>

    )
}

export default Dashboard;