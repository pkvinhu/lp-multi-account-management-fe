// dependencies
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// components
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

// styles
import { useStyles } from "../styles";

// store
import { RootState } from '../../../store';
import actions from "../../../store/allActions";

// util
import { usePrevious } from '../../../util/components/helpers';

const AccountDropDown: FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state);
    const account = useSelector((state: RootState) => state.accounts.selectedAccount)
    const { selectAccount, setUserLoading, setSkillsLoading, setProfileLoading, setAgentGroupsLoading, setAppKeysLoading, setCampaignLoading, setTableLoading, setFilterCategory, setFilterValue } = actions;
    const { view, dataDisplay } = state.table;
    const previousView = usePrevious(view);
    const previousAccount = usePrevious(account);
  
    useEffect(() => {
        if(previousView !== view || previousAccount !== account) {
            dispatch(setFilterCategory(""));
            dispatch(setFilterValue([]))
        }
    })

    const handleChange = (event) => {
        const { value } = event.target;
        if (value !== account) {
            Promise.resolve(() => console.log("....clearing"))
                .then(() => dispatch(selectAccount(event.target.value)))
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
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">Account</InputLabel>
            <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                value={account}
                onChange={handleChange}
                
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
    )
}

export default AccountDropDown;