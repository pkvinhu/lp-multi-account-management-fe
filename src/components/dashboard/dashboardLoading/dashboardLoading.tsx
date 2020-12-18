import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from "../styles";
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress'
import EnhancedTableToolbar from '../../table/tableToolbar/TableToolbar';
import { RootState } from '../../../store';
import actions from "../../../store/allActions";

const DashboardLoading: FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state);
    const { users, skills, profiles, agentGroups, table } = state;
    const { setTableLoading } = actions;
    const account = useSelector((state: RootState) => state.accounts.selectedAccount)

    useEffect(() => {
        Promise.resolve(() => console.log("....retrieving"))
            .then(() => dispatch(actions.getUsers(account)))
            .then(() => dispatch(actions.getSkills(account)))
            .then(() => dispatch(actions.getProfiles(account)))
            .then(() => dispatch(actions.getAgentGroups(account)))
            .catch(err => console.log(err))
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