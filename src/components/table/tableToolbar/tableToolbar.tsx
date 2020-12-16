import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useStyles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { View } from "../../../store/table/types";
import actions from "../../../store/allActions";

const EnhancedTableToolbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);
  const { skills, profiles, agentGroups, table } = state;
  const { setDataDisplay, setTableLoading } = actions;
  const handleChange = (event: unknown, value: View) => {
    // let args = [value, state[value].data, "asc", "id", skills.map]
    // if (value === "users") args = args.concat([profiles.map, agentGroups.map])
    dispatch(setTableLoading());
    value === "users"
      ? dispatch(
          setDataDisplay(
            value,
            state[value].data,
            "asc",
            "id",
            skills.map,
            profiles.map,
            agentGroups.map
          )
        )
      : dispatch(
          setDataDisplay(value, state[value].data, "asc", "id", skills.map)
        );
  };

  return (
    <Toolbar
      /*className={clsx(classes.root, {
      [classes.highlight]: numSelected > 0,
    })}*/
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
    </Toolbar>
  );
};

export default EnhancedTableToolbar;
