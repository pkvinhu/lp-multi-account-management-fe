import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import actions from '../../store/allActions';
import EnhancedTable from '../table/tableData/tableData';
import { View } from '../../store/table/types';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress'
import { useStyles } from './styles';
import EnhancedTableToolbar from '../table/tableToolbar/tableToolbar';

const Dashboard: FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state);
    // const { accounts, users, skills, profiles, agentGroups } = state;
    const dataDisplay = ((state: RootState) => state.table.dataDisplay);

    useEffect(() => {
        Promise.resolve(() => dispatch(actions.getAccounts()))
            .then(() => dispatch(actions.getUsers()))
            .then(() => dispatch(actions.getSkills()))
            .then(() => dispatch(actions.getProfiles()))
            .then(() => dispatch(actions.getAgentGroups()))
            .catch(err => console.log(err))
    }, [])

    const checkForData = (view: View): boolean => {
        let b = !!state[view].data.length && !!dataDisplay.length;
        return b;
    }

    return (
        <div className={classes.root}>
            <div className={classes.inside}>
                {checkForData(state.table.view) ? <EnhancedTable /> : (<Paper className={classes.paper}><EnhancedTableToolbar /><LinearProgress /></Paper>)}
                <Button onClick={() => dispatch(actions.logout())}>Logout</Button>
            </div>
        </div>
    )
}

export default Dashboard;