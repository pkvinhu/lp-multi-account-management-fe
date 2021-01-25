// dependencies
import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// components
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import ErrorModal from '../../errors/errorModal/ErrorModal';

// styles
import { useStyles } from "./styles";

// store
import { RootState } from '../../../store';
import actions from "../../../store/allActions";

// util
import { usePrevious, checkError } from '../../../util/components/helpers';

interface AccountDropDownProps {
    styles: string;
}

const AccountDropDown = ({ styles }: AccountDropDownProps) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [modalOpen, setModalStatus] = useState(false);
    const state = useSelector((state: RootState) => state);
    const account = useSelector((state: RootState) => state.accounts.selectedAccount);
    const { table, users, skills, profiles, agentGroups, campaigns, appKeys } = state;
    const { selectAccount, setUserLoading, setSkillsLoading, setProfileLoading, setAgentGroupsLoading, setAppKeysLoading, setCampaignLoading, setTableLoading, setFilterCategory, setFilterValue, setUserError, setSkillsError, setProfileError, setAgentGroupsError, setCampaignError, setAppKeysError } = actions;
    const { view, dataDisplay } = table;
    const previousView = usePrevious(view);
    const previousAccount = usePrevious(account);
  
    useEffect(() => {
        if(previousView !== view || previousAccount !== account) {
            dispatch(setFilterCategory(""));
            dispatch(setFilterValue([]))
        }

        if(errorWrapper()) {
            setModalStatus(true);
        }
    })

    const errorWrapper = (): boolean => {
        return checkError(users.error, skills.error, profiles.error, agentGroups.error, campaigns.error, appKeys.error)
    }

    const handleClose = () => {
        Promise.resolve(() => console.log("....clearing"))
                .then(() => dispatch(selectAccount("")))
                .then(() => dispatch(setUserError(null)))
                .then(() => dispatch(setSkillsError(null)))
                .then(() => dispatch(setProfileError(null)))
                .then(() => dispatch(setAgentGroupsError(null)))
                .then(() => dispatch(setAppKeysError(null)))
                .then(() => dispatch(setCampaignError(null)))
                .then(() => setModalStatus(false))
                .catch((err) => console.log(err))
        
    }

    const handleChange = (event) => {
        const { value } = event.target;
        let e = errorWrapper()
        let acc = e ? account : value;
        dispatch(selectAccount(""))
        dispatch(setTableLoading(false))
        if (value !== account || e) {
            setModalStatus(false)
            Promise.resolve(() => console.log("....clearing"))
                .then(() => dispatch(selectAccount(acc)))
                .then(() => dispatch(setUserLoading()))
                .then(() => dispatch(setSkillsLoading()))
                .then(() => dispatch(setProfileLoading()))
                .then(() => dispatch(setAgentGroupsLoading()))
                .then(() => dispatch(setAppKeysLoading()))
                .then(() => dispatch(setCampaignLoading()))
                .then(() => dispatch(setTableLoading(true)))
                .catch((err) => console.log(err))
        }
    }

    return (
        <React.Fragment>
        <FormControl className={classes.formControl}>
            <InputLabel className={classes[styles]} id="demo-controlled-open-select-label">Account</InputLabel>
            <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                value={account}
                onChange={handleChange}
                classes={{ root: classes[styles], icon: classes[styles] }}
                /*ref={textInput}*/
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {state.accounts.data.map((e, i) => {
                    return <MenuItem value={e.accountId} key={e.accountId}><em>{`${e.accountId} - ${e.accountName}`}</em></MenuItem>
                })}
            </Select>
        </FormControl>
        {errorWrapper() && <ErrorModal open={modalOpen} handleChange={handleChange} handleClose={handleClose} />}
        </React.Fragment>
    )
}

export default AccountDropDown;