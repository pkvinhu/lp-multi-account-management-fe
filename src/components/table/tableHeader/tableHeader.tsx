// dependencies
import React from "react";
import { useSelector, useDispatch } from "react-redux";

// components
import TableHead from "@material-ui/core/TableHead";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

// store
import { RootState } from "../../../store";
import actions from "../../../store/allActions";

// styles 
import { useStyles } from "./styles";

export default function EnhancedTableHead() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const state = useSelector((state: RootState) => state);
  const { table, users, skills, profiles, agentGroups } = state;
  const { order, orderBy, headCells, filterCategory, filterValue } = table;
  const { setDataDisplay } = actions;

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: string
  ) => {
    const isAsc:boolean = orderBy === property && order === "asc";
    if (table.view === "users") {
      dispatch(
        setDataDisplay(
          table.view,
          users.data,
          isAsc ? "desc" : "asc",
          property,
          filterCategory,
          filterValue,
          skills.map,
          profiles.map,
          agentGroups.map
        )
      );
    } else {
      dispatch(
        setDataDisplay(
          table.view,
          state[table.view].data,
          isAsc ? "desc" : "asc",
          property,
          filterCategory,
          filterValue,
          skills.map
        )
      );
    }
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell />
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="right"
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={(e) => handleRequestSort(e, headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell
            key={headCells.length}
            align="right"
          >
            <TableSortLabel>
              Delete User?
            </TableSortLabel>
          </TableCell>
      </TableRow>
    </TableHead>
  );
}
