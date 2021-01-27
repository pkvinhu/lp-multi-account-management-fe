// dependencies
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// store 
import { RootState } from '../../../store';
import actions from "../../../store/allActions";

// components
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress'

import EnhancedTableToolbar from '../../table/tableToolbar/TableToolbar';

// styles
import { useStyles } from "../styles";

// util
import { checkError } from '../../../util/components/helpers';
import { loadDataForAccount } from '../../../util/components/dispatches';

const DashboardLoading = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state);
    const { users, skills, profiles, agentGroups, appKeys, campaigns, table } = state;
    const { setTableLoading } = actions;
    const account = useSelector((state: RootState) => state.accounts.selectedAccount)

    useEffect(() => {
        loadDataForAccount(
            users.data.length,
            skills.data.length,
            profiles.data.length,
            agentGroups.data.length,
            appKeys.data.length,
            campaigns.data.length,
            errorWrapper,
            dispatch,
            account
        )
    }, [])

    const errorWrapper = (): boolean => {
        return checkError(users.error, skills.error, profiles.error, agentGroups.error, campaigns.error, appKeys.error)
    }

    const checkForData: boolean = table.loading && !!users.data.length && !!skills.data.length && !!profiles.data.length && !!agentGroups.data.length && !!appKeys.data.length && !!campaigns.data.length;

    return (
        <Paper className={classes.paper}>
            {checkForData ?
                dispatch(setTableLoading(false))
                : null
            }
            <EnhancedTableToolbar />
            <LinearProgress />
        </Paper>
    )
}

export default DashboardLoading;