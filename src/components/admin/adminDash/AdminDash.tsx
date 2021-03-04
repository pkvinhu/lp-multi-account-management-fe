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

import AdminForm from '../adminForm/AdminForm';

// styles
import { useStyles } from './styles';

// config
import adminFormData from "../../../config/adminFormData.json";

// utils
import { usePrevious } from "../../../util/components/helpers";

let tabs = [
    { value: "add-account", label: "Add Account", access: "user" },
    { value: "delete-account", label: "Delete Account", access: "user" },
    { value: "add-user", label: "Add User", access: "superuser" },
    { value: "all-users", label: "All Users", access: "superuser" },
    { value: "request-accounts", label: "Request Accounts", access: "lpa" },
]

const AdminDashboard: FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [view, setView] = useState("add-account");
    const [lpId, setId] = useState("")
    const [brandName, setBrand] = useState("")
    const [loginName, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [isSuperUser, setSuperUser] = useState(false)
    const [errors, setErrors] = useState([] as any);
    const state = useSelector((state: RootState) => state);
    const { admin } = state;
    const { addApiAgent, checkApiAgentExistence, deleteApiAgent, getAccounts, selectAccount, resetState, setTotalRequests, setLoadProgress, addUser } = actions;
    const location = useLocation();
    const history = useHistory();
    const previousView = usePrevious(view);

    let formFields = {
        lpId,
        brandName,
        loginName,
        password,
        email,
        isSuperUser
    }

    let changeHandlers = {
        setId, setBrand, setLogin, setPassword, setEmail, setSuperUser
    }

    const handleChange = (e: any, value: string) => {
        console.log(value)
        if (value !== view) {
            dispatch(resetState())
            setView(value)
            resetForm()
        }
    }

    const handleFieldChange = (e: any, fn: any) => {
        console.log(e.target.value)
        fn(e.target.value)
    }

    const resetForm = () => {
        setId("");
        setBrand("");
        setLogin("");
        setPassword("");
        setSuperUser(false);
        // dispatch(resetState())
    }

    const handleAddAccount = async () => {
        await dispatch(setTotalRequests(2))
        const account = { lpId, brand: brandName };
        const apiAgent = { username: loginName, password }
        const requested = { account, apiAgent }
        try {
            let data = await dispatch(checkApiAgentExistence(requested))
            await dispatch(setLoadProgress())
            if (!data.error) {
                data = await dispatch(addApiAgent(requested))
                await dispatch(setLoadProgress())
            }
            if (!data.error) {
                await dispatch(getAccounts())
                // history.push(`/dashboard/${lpId}`)
            }
        }
        catch (error) {
            setErrors([...errors, admin.error]);
        }
        clearNotifications();
    }

    const handleDeleteAccount = async () => {
        dispatch(setTotalRequests(1))
        const account = { lpId, brand: brandName };
        const apiAgent = { username: loginName, password }
        const requested = { account, apiAgent }
        try {
            let data = await dispatch(deleteApiAgent(requested))
            dispatch(setLoadProgress())
            console.log(data)
            if (!data.error) {
                await dispatch(getAccounts())
                await dispatch(selectAccount(""))
                resetForm()
            }
        }
        catch (error) {
            setErrors([...errors, admin.error]);
        }
        clearNotifications();
    }

    const handleAddUser = async () => {
        dispatch(setTotalRequests(1))
        const requestingUser = { loginName, email, isSuperUser }
        try {
            let data = await dispatch(addUser(requestingUser));
        } catch (error) {
            setErrors([...errors, admin.error]);
        }
        clearNotifications();
    }

    const clearNotifications = () => {
        setTimeout(() => {
            dispatch(resetState())
        }, 4000)
    }

    let submitHandlers = {
        handleAddAccount,
        handleDeleteAccount,
        handleAddUser
    }

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
                    {adminFormData[view] && <AdminForm {...adminFormData[view].props} handleChange={handleFieldChange} formFields={formFields} changeHandlerMap={changeHandlers} submitHandlerMap={submitHandlers} />}
                </Paper>
            </Paper>
        </Box>
    )
}

export default AdminDashboard;