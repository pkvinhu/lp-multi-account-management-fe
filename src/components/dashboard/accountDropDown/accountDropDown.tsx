// dependencies
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";

// components
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import ErrorModal from "../../errors/errorModal/ErrorModal";

// styles
import { useStyles } from "./styles";

// store
import { RootState } from "../../../store";
import actions from "../../../store/allActions";

// util
import { usePrevious, checkError } from "../../../util/components/helpers";
import {
  setDataLoadingForAccount,
  sweepErrors,
  clearAllDataFields,
} from "../../../util/components/dispatches";

interface AccountDropDownProps {
  styles: string;
}

const AccountDropDown = ({ styles }: AccountDropDownProps) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [modalOpen, setModalStatus] = useState(false);
  const state = useSelector((state: RootState) => state);
  const account = useSelector(
    (state: RootState) => state.accounts.selectedAccount
  );
  const {
    table,
    users,
    skills,
    profiles,
    agentGroups,
    campaigns,
    appKeys,
    accounts,
  } = state;
  const {
    selectAccount,
    setFilterCategory,
    setFilterValue,
    setTableLoading,
    getAccounts,
  } = actions;
  const { view } = table;
  const previousView = usePrevious(view);
  const previousAccount = usePrevious(account);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (!accounts.data) dispatch(getAccounts());
    if (previousView !== view || previousAccount !== account) {
      dispatch(setFilterCategory(""));
      dispatch(setFilterValue([]));
    }
    if (errorWrapper()) {
      setModalStatus(true);
    }
  });

  const errorWrapper = (): boolean => {
    return checkError(
      users.error,
      skills.error,
      profiles.error,
      agentGroups.error,
      campaigns.error,
      appKeys.error
    );
  };

  const handleClose = () => {
    sweepErrors(dispatch, history, setModalStatus);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    let e = errorWrapper();
    let acc = e ? account : value;
    dispatch(setTableLoading(false));
    dispatch(selectAccount(""));
    if (value !== account || e) {
      setModalStatus(false);
      if (!acc) {
        clearAllDataFields(dispatch, history);
      } else {
        history.push(`/dashboard/${acc}`);
        setDataLoadingForAccount(acc, dispatch, location, history);
      }
    }
  };

  return (
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <InputLabel
          className={classes[styles]}
          id="demo-controlled-open-select-label"
        >
          Account
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          value={account}
          onChange={handleChange}
          classes={{ root: classes[styles], icon: classes[styles] }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {accounts.data.map((e, i) => {
            return (
              <MenuItem value={e.accountId} key={e.accountId}>
                <em>{`${e.accountId} - ${e.accountName}`}</em>
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      {errorWrapper() && (
        <ErrorModal
          open={modalOpen}
          handleChange={handleChange}
          handleClose={handleClose}
        />
      )}
    </React.Fragment>
  );
};

export default AccountDropDown;
