import React, { FC } from 'react';

// components
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

// styles 
import { useStyles } from './styles';
import clsx from 'clsx';

// static
const baseURL: string = "http://localhost:1337";

const Login: FC = () => {
    const classes = useStyles();

    const handleLogin = (): void => {
        window.open(`${baseURL}/api/login`, "_self");
    }
    
    return (
        <div>
            <Paper className={classes.login_container}>
                <div className='lp-svg'></div>
                <Button className={clsx(classes.login_button)} onClick={handleLogin}>
                    Login  
                <Icon className={classes.left_arrow}>east</Icon>
                </Button>
            </Paper>
        </div>
    )
}

export default Login;