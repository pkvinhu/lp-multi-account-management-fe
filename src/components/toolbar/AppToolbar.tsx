// dependencies
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom";

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
    const state = useSelector((state: RootState) => state);
    const auth = useSelector((state: RootState) => state.auth.loggedIn);
    const { loading, data, error } = useSelector((state: RootState) => state.accounts);
    const account = useSelector((state: RootState) => state.accounts.selectedAccount);
    const { selectAccount, getAccounts } = actions;
    const location = useLocation();

    useEffect(() => {
        // console.log("Toolbar: ", auth, data)
        if(auth && location.pathname !== "/" && location.pathname !== "/home" && loading) dispatch(getAccounts())
    }, [])
    
    return (
        <AppBar className={classes.appbar} position="fixed">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h3">LivePerson Account Management</Typography>
                    <div className={classes.actionsContainer}>
                        {/* {loading && <div></div>}
                        {error && <div></div>} */}
                    {location.pathname !== "/" && location.pathname !== "/home" && !loading && !error ? <AccountDropDown styles="darkDropDown"/> : null}
                    {auth && <Button className={clsx(classes.button)} onClick={() => dispatch(actions.logout())}>Logout</Button>}
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default AppToolbar;