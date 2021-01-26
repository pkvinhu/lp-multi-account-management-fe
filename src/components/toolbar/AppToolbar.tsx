// dependencies
import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AccountDropDown from '../dashboard/accountDropDown/AccountDropDown';

// store
import { RootState } from '../../store';
import actions from '../../store/allActions';

// styles
import { useStyles } from './styles';
import clsx from 'clsx';

const AppToolbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const auth = useSelector((state: RootState) => state.auth.loggedIn);
    const account = useSelector((state: RootState) => state.accounts.selectedAccount);

    return (
        <AppBar className={classes.appbar} position="fixed">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h3">LivePerson Account Management</Typography>
                    <div className={classes.actionsContainer}>
                    {account ? <AccountDropDown styles="darkDropDown"/> : null}
                    {auth && <Button className={clsx(classes.button)} onClick={() => dispatch(actions.logout())}>Logout</Button>}
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default AppToolbar;