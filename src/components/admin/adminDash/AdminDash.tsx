// dependencies
import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';

// store
import { RootState } from '../../../store';
import actions from '../../../store/allActions';

// components
import Box from '@material-ui/core/Box';
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import AddAccountForm from '../addAccountForm/AddAccountForm';
import AddDatabaseUserForm from '../addDatabaseUserForm/AddDatabaseUserForm';
import RequestAccountsForm from '../requestAccountsForm/RequestAccountsForm';
import DeleteAccountForm from '../deleteAccountForm/DeleteAccountForm';

// styles
import { useStyles } from './styles';

// config
import { adminFormData } from "../../../config/adminFormData.js";

let tabs = [
    { value: "add-account", label: "Add Account", access: "user" },
    { value: "delete-account", label: "Delete Account", access: "user" },
    { value: "add-user", label: "Add User", access: "superuser" },
    { value: "request-accounts", label: "Request Accounts", access: "lpa" },
]

const AdminDashboard: FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [ view, setView] = useState("add-account");
    const state = useSelector((state: RootState) => state);
    const { } = actions;
    const location = useLocation();
    const history = useHistory();

    const handleChange = (e: any, value: string) => {
        console.log(value)
        setView(value)
    }
    // const handleClick = async (event: any) => {
    //     event.preventDefault();
    //         // url: 'http://localhost:1337/api/accounts'
    //         // method: 'post',
    //         // data: {
    //         //     password: string,
    //         //     accounts: [{
    //         //             account: { lpId: string, brand: string },
    //         //             apiAgent: { username: string, password: string }
    //         //         }]
    //         //     requestingUser: { loginName: string, email: string }
    //         // }
    // }

    return (
        <Box className={classes.root}>
            <Paper className={classes.paper}>
                <Toolbar
                    className={classes.toolbar}
                >
                    <Tabs
                        value={view}
                        onChange={handleChange}
                        className={classes.tabs}
                    >
                        {tabs.map((t, i) => {
                            return (<Tab key={i} value={t.value} label={t.label} />)
                        })}
                    </Tabs>
                </Toolbar>
                <Paper className={classes.formBody}>
                    {view === "add-account" && (<AddAccountForm title={adminFormData[view].title} description={adminFormData[view].description} />)}
                    {view === "delete-account" && (<DeleteAccountForm title={adminFormData[view].title} description={adminFormData[view].description} />)}
                    {view === "add-user" && (<AddDatabaseUserForm title={adminFormData[view].title} description={adminFormData[view].description} />)}
                    {view === "request-accounts" && (<RequestAccountsForm title={adminFormData[view].title} description={adminFormData[view].description} />)}
                </Paper>
                {/* <button onClick={handleClick} >Add Users</button> */}
            </Paper>
        </Box>
    )
}

export default AdminDashboard;