// dependencies
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// components
import Popper from '@material-ui/core/Popper';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import SearchFilter from "../searchFilter/SearchFilter";

// styles
import { useStyles } from './styles';

// store
import { RootState } from "../../../store";
import actions from "../../../store/allActions";

// util
import { getAutoCompleteValues } from "../../../util/components/helpers";

const SearchPopper = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const state = useSelector((state: RootState) => state);
  const { skills, profiles, agentGroups, table } = state;
  const { filterCategory, filterValue, headCells, view } = table;
  const { setPage, setDataDisplay, setTableLoading, setFilterCategory, setFilterValue } = actions;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleFilterChange = (event) => {
    const { value } = event.target;
    // console.log("HANDLE FILTER CHANGE: ", value)
    if (value !== filterCategory) {
      dispatch(setFilterCategory(value))
    }
  }

  const handleSort = (event) => {
    // console.log("hit sort")
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
    // console.log("HANDLE TAG CHANGE: ", event.target, values)
    dispatch(setFilterValue(Array.isArray(values) ? values : [values]))
  }

  const includeMap = filterCategory === "profileIds" || filterCategory === "skillIds" || filterCategory === "managerOf" || filterCategory === "skillTransferList";

  const getMap = () => {
    if (filterCategory === "profileIds") return profiles.map;
    else if (filterCategory === "skillIds" || filterCategory === "skillTransferList") return skills.map;
    else if (filterCategory === "managerOf") return agentGroups.map;
  }

  const open = Boolean(anchorEl);

  return (
    <div>
      <Button onClick={handleClick}>
        <Icon>sort</Icon>
      </Button>
      <Popper open={open} anchorEl={anchorEl} placement="left-start" className={classes.popper}>
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
      </Popper>
    </div>
  );
}
export default SearchPopper;