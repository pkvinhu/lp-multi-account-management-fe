import React, { FC } from 'react';
import loginStyles from './styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
const baseURL: string = "http://localhost:1337";

const Login: FC = () => {
    const classes = loginStyles();
    const handleLogin = (): void => {
        window.open(`${baseURL}/api/login`, "_self");
    }
    
    return (
        <div>
            <AppBar className={classes.appbar} position="fixed">
                <Toolbar className={classes.toolbar}>
                    LivePerson Account Management
                </Toolbar>
            </AppBar>
            <Paper className={classes.login_container}>
                <div className='lp-svg'></div>
                <div className={classes.login_button} onClick={handleLogin}>
                    Login  
                <Icon className={classes.left_arrow}>east</Icon>
                </div>
            </Paper>
        </div>
    )
}

export default Login;