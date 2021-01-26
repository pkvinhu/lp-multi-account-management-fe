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

const DashboardLoading = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state);
    const { users, skills, profiles, agentGroups, appKeys, campaigns, table } = state;
    const { setTableLoading } = actions;
    const account = useSelector((state: RootState) => state.accounts.selectedAccount)
    const { getUsers, getSkills, getProfiles, getAgentGroups, getAppKeys, getCampaigns } = actions;

    useEffect(() => {
        Promise.resolve(() => console.log("...loading data"))
            .then(u)
            .then(s)
            .then(p)
            .then(ag)
            .then(c)
            .then(ak)
            .catch(e => console.log(e))
    }, [])

    const u = async () => { 
        console.log(errorWrapper())
        if (!users.data.length || !errorWrapper()) {
            console.log("hit")
            await dispatch(getUsers(account)) 
        }
    }

    const s = async () => { 
        console.log(errorWrapper(), users.error)
        if (!skills.data.length || !errorWrapper()) {
            console.log("hit")
            await dispatch(getSkills(account)) 
        }
    }

    const p = async () => { 
        console.log(errorWrapper(), skills.error)
        if (!profiles.data.length || !errorWrapper()) await dispatch(getProfiles(account)) 
    }

    const ag = async () => { 
        if (!agentGroups.data.length || !errorWrapper()) await dispatch(getAgentGroups(account)) 
    }
    
    const c = async () => { 
        if (!appKeys.data.length || !errorWrapper()) await dispatch(getAppKeys(account)) 
    }

    const ak = async () => { 
        if (!campaigns.data.length || !errorWrapper()) await dispatch(getCampaigns(account)) 
    }

    // const chainError = (err) => {
    //     return Promise.reject(err)
    // }

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