// dependencies
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

// components
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// icons
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ListItemIcon from '@material-ui/core/ListItemIcon';

// store
import { RootState } from "../../store";
import actions from "../../store/allActions";

// styles
import { useStyles } from './styles';

const menu = [
  {
    text: 'Home',
    icon: <HomeIcon />,
    link: '/home'
  },
  {
    text: 'Admin',
    icon: <SupervisorAccountIcon />,
    link: '/admin'
  },
  {
    text: 'Contact Center',
    icon: <DashboardIcon />,
    link: '/dashboard'
  },
  {
    text: 'Data Viz',
    icon: <EqualizerIcon />,
    link: '/data'
  }
]
const UtilityBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const accounts = useSelector((state: RootState) => state.accounts.data)
  const account = useSelector((state: RootState) => state.accounts.selectedAccount)
  const { getAccounts } = actions;

  const acc = account ? account : accounts.length ? accounts[0].accountId : "";

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        open={true}
        className={classes.drawer}
      >
        <List className={classes.toolbar}>
          {menu.map((item, index) => (
            <ListItem disabled={location.pathname.startsWith(item.link)} classes={{ root: classes.item, disabled: classes.disabled }} button key={index}>
              <Link to={item.text === "Contact Center" ? `${item.link}/${acc}` : item.link}>
                <ListItemIcon className={location.pathname.startsWith(item.link) ? classes.iconActive : classes.icon} >{item.icon}</ListItemIcon>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

export default UtilityBar;