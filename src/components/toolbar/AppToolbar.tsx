import React, { FC } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useStyles } from './styles';
import clsx from 'clsx';

import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import actions from '../../store/allActions';

const AppToolbar: FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const auth = useSelector((state: RootState) => state.auth.loggedIn);

    return (
        <AppBar className={classes.appbar} position="fixed">
                <Toolbar className={clsx(classes.toolbar)}>
                    LivePerson Account Management
                    {auth && <Button className={clsx(classes.button)} onClick={() => dispatch(actions.logout())}>Logout</Button>}
                </Toolbar>
            </AppBar>
    )
}

export default AppToolbar;