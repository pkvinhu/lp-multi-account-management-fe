// dependencies
import React from 'react';

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

// styles
import { useStyles } from './styles';

const menu = [
    {
        text: 'Home',
        icon: <HomeIcon />
    },
    {
        text: 'Admin',
        icon: <SupervisorAccountIcon />
    },
    {
        text: 'Contact Center',
        icon: <DashboardIcon />
    },
    {
        text: 'Data Viz',
        icon: <EqualizerIcon />
    }
]
const UtilityBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        open={true}
        className={classes.drawer}
      >
        <List className={classes.toolbar}>
          {menu.map((item, index) => (
            <ListItem className={classes.item} button key={index}>
              <ListItemIcon className={classes.icon}>{item.icon}</ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

export default UtilityBar;