// dependencies
import React from "react";
import { useSelector, useDispatch } from "react-redux";

// components
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";

import SearchPopper from "../../search/searchPopper/SearchPopper";

// store 
import { RootState } from "../../../store";
import { View } from "../../../store/table/types";
import actions from "../../../store/allActions";

// styles
import { useStyles } from "./styles";

// util

let tabs = [
  { value: "users", label: "Users"},
  { value: "skills", label: "Skills"},
  { value: "profiles", label: "Profiles"},
  { value: "agentGroups", label: "Agent Groups"},
]

const EnhancedTableToolbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);
  const { skills, profiles, agentGroups, table } = state;
  const { filterCategory, filterValue, view } = table;
  const { setPage, setDataDisplay, setTableLoading, setFilterCategory, setFilterValue } = actions;

  const handleChange = (event: unknown, value: View) => {
    if (value !== table.view) {
      dispatch(setTableLoading(true));
      reloadData(value)
    }
  };

  const handleFilterReset = (event: any, value: View) => {
    if (filterCategory || filterValue.length) {
      dispatch(setFilterCategory(""));
      dispatch(setFilterValue([]));
      reloadData(value);
    }
  }

  const reloadData = (value: View) => {
    dispatch(setTableLoading(true));
      value === "users"
        ? dispatch(
          setDataDisplay(
            value,
            state[value].data,
            "asc",
            "id",
            "",
            [],
            skills.map,
            profiles.map,
            agentGroups.map
          )
        )
        : dispatch(
          setDataDisplay(value, state[value].data, "asc", "id", "", [], skills.map)
        );
      dispatch(setPage(0))
  }

  return (
    <Toolbar
      className={classes.toolbar}
    >
      <Tabs
        value={table.view}
        onChange={handleChange}
      >
        {tabs.map((t, i) => {
          return (<Tab key={i} value={t.value} label={t.label} />)
        })}
      </Tabs>
      <div className={classes.buttonContainer}>
        <SearchPopper />
        <Button className={classes.button} onClick={(e) => handleFilterReset(e, view)} >RESET</Button>
      </div>
    </Toolbar>
  );
};

export default EnhancedTableToolbar;
