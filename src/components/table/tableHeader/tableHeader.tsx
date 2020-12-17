import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { useStyles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import actions from "../../../store/allActions";

// interface EnhancedTableProps {
//   onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
// }

export default function EnhancedTableHead() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const state = useSelector((state: RootState) => state);
  const { table, users, skills, profiles, agentGroups } = state;
  const { order, orderBy, headCells } = table;
  const { setDataDisplay } = actions;

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: string
  ) => {
    const isAsc = orderBy === property && order === "asc";
    if (table.view === "users") {
      dispatch(
        setDataDisplay(
          table.view,
          users.data,
          isAsc ? "desc" : "asc",
          property,
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
          skills.map
        )
      );
    }
  };

  return (
    <TableHead>
      <TableRow>
        {/* <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{ 'aria-label': 'select all desserts' }}
            />
          </TableCell> */}
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
      </TableRow>
    </TableHead>
  );
}
