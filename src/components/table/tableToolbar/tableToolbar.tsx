// dependencies
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// components
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import SearchFilter from "../../search/SearchFilter";

// store 
import { RootState } from "../../../store";
import { View } from "../../../store/table/types";
import actions from "../../../store/allActions";

// styles
import { useStyles } from "./styles";

// util
import { getAutoCompleteValues, usePrevious } from "../../../util/components/helpers";

const EnhancedTableToolbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);
  const { skills, profiles, agentGroups, table } = state;
  const { filterCategory, filterValue, headCells, view, dataDisplay } = table;
  const { setPage, setDataDisplay, setTableLoading, setFilterCategory, setFilterValue } = actions;

  const handleChange = (event: unknown, value: View) => {
    if (value !== table.view) {
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
  };

  const handleFilterChange = (event) => {
    const { value } = event.target;
    console.log("HANDLE FILTER CHANGE: ", value)
    if (value !== filterCategory) {
      dispatch(setFilterCategory(value))
    }
  }

  const handleSort = (event) => {
    console.log("hit sort")
    dispatch(setTableLoading(true));
      view === "users"
        ? dispatch(
          setDataDisplay(
            view,
            state[view].data,
            "asc",
            "id",
            filterCategory,
            filterValue,
            skills.map,
            profiles.map,
            agentGroups.map
          )
        )
        : dispatch(
          setDataDisplay(view, state[view].data, "asc", "id", filterCategory, filterValue, skills.map)
        );
      dispatch(setPage(0))
  }

  const handleTagChange = (event, values: any | any[]) => {
    console.log("HANDLE TAG CHANGE: ", values)
    dispatch(setFilterValue(Array.isArray(values) ? values : [values]))
  }

  const includeMap = filterCategory === "profileIds" || filterCategory === "skillIds" || filterCategory === "managerOf" || filterCategory === "skillTransferList";
  
  const getMap = () => {
    if(filterCategory === "profileIds") return profiles.map;
    else if(filterCategory === "skillIds" || filterCategory === "skillTransferList") return skills.map; 
    else if(filterCategory === "managerOf") return agentGroups.map;
  }

  return (
    <Toolbar
      className={classes.toolbar}
    >
      <Tabs
        value={table.view}
        onChange={handleChange}
        centered
        className={classes.root}
      >
        <Tab value="users" label="Users" />
        <Tab value="skills" label="Skills" />
        <Tab value="profiles" label="Profiles" />
        <Tab value="agentGroups" label="Agent Groups" />
      </Tabs>
      <SearchFilter 
        handleFilterChange={handleFilterChange} 
        handleSort={handleSort} 
        handleTagChange={handleTagChange}
        values={
          filterCategory && filterValue ? 
          (includeMap ?
          getAutoCompleteValues(filterCategory, state[view].data, getMap()) :
          getAutoCompleteValues(filterCategory, state[view].data)) : 
          []
        } 
        categories={headCells} 
      />
    </Toolbar>
  );
};

export default EnhancedTableToolbar;
