// dependencies
import React, { FC, useEffect } from 'react';
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
import { loadDataForAccount, setDataLoadingForAccount } from '../../util/components/dispatches';
import { checkError } from '../../util/components/helpers';

const Dashboard: FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state);
    const account = useSelector((state: RootState) => state.accounts.selectedAccount)
    const { accounts, table, users, skills, profiles, agentGroups, appKeys, campaigns } = state;
    const { view, loading } = table;
    const { selectedAccount } = accounts;
    const { setTableLoading, deleteEntity, selectAccount, getAccounts } = actions;
    const location = useLocation();
    const history = useHistory();
    const { accountId, id } = useParams();

    useEffect(() => {
        if (!accounts.data.length) {
            Promise.resolve(dispatch(getAccounts()))
                .then(() => {
                    let acc = accountId ? accountId : accounts.data[0].accountId;
                    dispatch(setTableLoading(true))
                    setDataLoadingForAccount(acc, dispatch, location, history)
                })
                .catch(e => console.log(e))
        }
        else if (accounts.data.length) {
            if (accountId) {
                dispatch(setTableLoading(true))
                setDataLoadingForAccount(accountId, dispatch, location, history)
            }
            else if (!account) {
                dispatch(setTableLoading(true))
                setDataLoadingForAccount(accounts.data[0].accountId, dispatch, location, history)
            }
        }

    }, [])

    const checkForData: boolean = !!users.data.length && !!skills.data.length && !!profiles.data.length && !!agentGroups.data.length && !!appKeys.data.length && !!campaigns.data.length;

    const errorWrapper = (): boolean => {
        return checkError(users.error, skills.error, profiles.error, agentGroups.error, campaigns.error, appKeys.error)
    }

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

    return (
        <div >
            {account && !loading && (<EnhancedTable handleDelete={handleDelete} />)}
            {account && loading && (<DashboardLoading />)}
        </div>

    )
}

export default Dashboard;