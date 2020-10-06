import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
    appbar: {
        borderBottom: "10px solid orange",
        backgroundColor: "white"
    },
    toolbar: {
        fontFamily: "'Merriweather', serif",
        color: "black",
        fontSize: '2em'
    },
    left_arrow: {
        fontSize: 50,
        color: 'black'
    },
    login_button: {
        fontFamily: "'Merriweather', serif",
        color: "black",
        fontSize: '2em',
        display: 'flex',
        justifyContent: 'center'
    }
}));

const Login: FC = () => {
    const classes = useStyles();

    return (
        <div>
            <AppBar className={classes.appbar} position="fixed">
                <Toolbar className={classes.toolbar}>
                    LivePerson Account Management
                </Toolbar>
            </AppBar>
            <div className="login-container">
                <div className='lp-svg'></div>
                <div className={classes.login_button}>
                    Login
                <Icon className={classes.left_arrow}>east</Icon>
                </div>
                
            </div>
        </div>
    )
}

export default Login;