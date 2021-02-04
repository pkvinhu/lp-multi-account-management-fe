// dependencies
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// store
import { RootState } from '../../store';
import actions from '../../store/allActions';

// components
import Typography from '@material-ui/core/Typography';

import AccountDropDown from '../dashboard/accountDropDown/AccountDropDown';

// icons
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

// styles
import { useStyles } from './styles';
import { getAccounts } from '../../store/accounts/actions';

const Home: FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state);
    const account = useSelector((state: RootState) => state.accounts.selectedAccount)
    const accounts = useSelector((state: RootState) => state.accounts.data)

    useEffect(() => {
        if(!accounts.length) dispatch(getAccounts())
    }, [])

    return (
        <div className={classes.paperIntro}>
            <div className={classes.welcomeText}>
                <Typography variant="h3">Welcome to the LivePerson Account Management Tool!</Typography>
                <br />
                <Typography variant="h5" >In this tool, we organize all your users, skills, profiles, and agent groups data from multiple accounts</Typography>
                <Typography variant="h5" >and we chart it out so you can access all your accounts from one location.</Typography>
                <Typography variant="h5" >To begin, please select an account below. <InsertEmoticonIcon /></Typography>
                <AccountDropDown styles="lightDropDown" />
            </div>
        </div>
    )
}

export default Home;