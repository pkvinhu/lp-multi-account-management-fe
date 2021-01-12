// dependencies
import React from "react";
import { useSelector, useDispatch } from "react-redux";

// components
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

// store 
import { RootState } from "../../../store";
import { View } from "../../../store/table/types";
import actions from "../../../store/allActions";

// styles
import { useStyles } from "./styles";
import SearchFilter from "../../search/SearchFilter";
import { getAutoCompleteValues } from "../../../util/components/helpers";

const EnhancedTableToolbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);
  const { skills, profiles, agentGroups, table } = state;
  const { filterCategory, filterValue, headCells, view } = table;
  const { setPage, setDataDisplay, setTableLoading, setFilterCategory } = actions;

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
            filterCategory,
            filterValue,
            skills.map,
            profiles.map,
            agentGroups.map
          )
        )
        : dispatch(
          setDataDisplay(value, state[value].data, "asc", "id", filterCategory, filterValue, skills.map)
        );
      dispatch(setPage(0))
    }
  };

  const handleFilterChange = (event) => {
    const { value } = event.target;
    if (value !== filterCategory) {
      dispatch(setFilterCategory(value))
    }
  }

  const handleSort = (event) => {
    
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
      <SearchFilter handleFilterChange={handleFilterChange} handleSort={handleSort} values={filterCategory && filterValue ? getAutoCompleteValues(filterCategory, state[view].data) : []} categories={headCells} />
    </Toolbar>
  );
};

export default EnhancedTableToolbar;
