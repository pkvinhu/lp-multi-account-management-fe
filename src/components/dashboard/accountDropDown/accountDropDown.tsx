import React, { FC, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "../styles";
import { RootState } from "../../../store";
import actions from "../../../store/allActions";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

const AccountDropDown: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);
  const account = useSelector(
    (state: RootState) => state.accounts.selectedAccount
  );
  const {
    selectAccount,
    setUserLoading,
    setSkillsLoading,
    setProfileLoading,
    setAgentGroupsLoading,
    setAppKeysLoading,
    setCampaignLoading,
    setTableLoading,
  } = actions;
  // const textInput = useRef(account);

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
        .catch((err) => console.log(err));
    }
  };

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
          return (
            <MenuItem value={e.accountId} key={e.accountId}>
              <em>{`${e.accountId} - ${e.accountName}`}</em>
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default AccountDropDown;
