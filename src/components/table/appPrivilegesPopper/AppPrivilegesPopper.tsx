// dependencies
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// components
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Chip from '@material-ui/core/Chip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

// styles
import { useStyles } from './styles';

// store
import { RootState } from "../../../store";
import { Privilege } from '../../../store/appkeys/types';

// util
import appKeyPrivileges from "../../../config/appKeyPrivileges.json";

interface AppPrivilegesPopperProps {
    privileges: Privilege[]
}

const AppPrivilegesPopper = ({ privileges }: AppPrivilegesPopperProps) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const state = useSelector((state: RootState) => state);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);

    return (
        <div>
            <Chip className={classes.chip} onClick={handleClick} label="Toggle For Privileges"/>
            <Popper open={open} anchorEl={anchorEl} placement="top-end">
                <Paper className={classes.paper}>
                    {privileges.map((p, i) => {
                        if (appKeyPrivileges[p.data]) {
                            return (
                                <Typography key={i} color="secondary">
                                    <Link className={classes.link} underline="hover" href={"https://developers.liveperson.com/" + appKeyPrivileges[p.data].docs_endpoint}>
                                        {appKeyPrivileges[p.data].name}
                                    </Link>
                                </Typography>
                            )
                        }
                    })}
                </Paper>
            </Popper>

        </div>
    );
}
export default AppPrivilegesPopper;