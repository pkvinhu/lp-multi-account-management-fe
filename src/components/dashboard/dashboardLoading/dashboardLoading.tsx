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
// import { wait } from '../../../util/components/sleeper';

const DashboardLoading: FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state);
    const { users, skills, profiles, agentGroups, table } = state;
    const { setTableLoading } = actions;
    const account = useSelector((state: RootState) => state.accounts.selectedAccount)

    useEffect(() => {
        Promise.resolve(() => console.log("...loading data"))
            .then(async () => {if(!users.data.length) await dispatch(actions.getUsers(account))})
            .then(async () => {if(!skills.data.length) await dispatch(actions.getSkills(account))})
            .then(async () => {if(!profiles.data.length) await dispatch(actions.getProfiles(account))})
            .then(async () => {if(!agentGroups.data.length) await dispatch(actions.getAgentGroups(account))})
            .catch(e => console.log(e))
    }, [])

    const checkForData = (): boolean => {
        let b = table.loading && !!users.data.length && !!skills.data.length && !!profiles.data.length && !!agentGroups.data.length;
        return b;
    }

    return (
        <Paper className={classes.paper}>
            {checkForData() ?
                dispatch(setTableLoading(false))
                : null
            }
            <EnhancedTableToolbar />
            <LinearProgress />
        </Paper>
    )
}

export default DashboardLoading;