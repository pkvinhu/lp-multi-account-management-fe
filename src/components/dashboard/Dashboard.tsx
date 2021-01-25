// dependencies
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// store
import { RootState } from '../../store';
import actions from '../../store/allActions';
import { getLoadingAction } from '../../util/components/getActions';

// components
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import EnhancedTable from '../table/tableData/TableData';
import AppToolbar from '../toolbar/AppToolbar';
import DashboardLoading from './dashboardLoading/DashboardLoading';
import AccountDropDown from './accountDropDown/AccountDropDown';

// styles
import { useStyles } from './styles';

const Dashboard: FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state);
    const account = useSelector((state: RootState) => state.accounts.selectedAccount)
    const { accounts, table, users, skills, profiles, agentGroups, campaigns, appKeys } = state;
    const { view, loading } = table;
    const { selectedAccount } = accounts;
    const { setTableLoading, deleteEntity } = actions;

    useEffect(() => {
        dispatch(actions.getAccounts())
    }, [])

    const handleDelete = (event, entity: any) => {
        const act = getLoadingAction(view);
        Promise.resolve(() => console.log("...handle delete"))
        .then(() => {
            if(view !== "profiles") {
                dispatch(deleteEntity(selectedAccount, view, String(entity.id)))
            } else {
                let lastModified = Date.parse(entity.dateUpdated);
                // console.log(lastModified)
                dispatch(deleteEntity(selectedAccount, view, String(entity.id), lastModified))
            }
        })
        .then(() => dispatch(act()))
        .then(() => dispatch(setTableLoading(true)))
        .catch(e => console.log(e)) 
    }

    return (
        <div className={classes.root}>
            <AppToolbar />
            <div className={classes.inside}>
                {!account
                    && (
                    <div className={classes.paperIntro}>
                        <div className={classes.welcomeText}>
                        <h1 >Welcome to the LivePerson Account Management Tool!</h1>
                        <h3 >In this tool, we organize all your users, skills, profiles, and agent groups data from multiple accounts</h3>
                        <h3 >and we chart it out so you can access all your accounts from one location.</h3>
                        <h3 >To begin, please select an account below. <InsertEmoticonIcon/></h3>
                        <AccountDropDown styles="lightDropDown" />
                        </div>
                        </div>
                    )
                }
                {account && !loading && (<EnhancedTable handleDelete={handleDelete}/>)}
                {account && loading && (<DashboardLoading />)}
            </div>
        </div>
    )
}

export default Dashboard;