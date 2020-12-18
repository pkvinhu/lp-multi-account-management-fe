import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from "../styles";
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress'
import EnhancedTableToolbar from '../../table/tableToolbar/tableToolbar';
import { RootState } from '../../../store';
import actions from "../../../store/allActions";

const DashboardLoading: FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state);
    const { table } = state;
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

    return (
        <Paper className={classes.paper}>
            {(table.loading && state[table.view].data.length) ?
                setTimeout(() => {
                    console.log("from set timeout")
                    dispatch(setTableLoading(false))
                }, 1000)
                : null
            }
            <EnhancedTableToolbar />
            <LinearProgress />
        </Paper>
    )
}

export default DashboardLoading;