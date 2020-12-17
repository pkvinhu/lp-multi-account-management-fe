import React, { FC, useEffect } from "react";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { useStyles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import actions from "../../../store/allActions";

const EnhancedTableBody: FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state);
    const { page, rowsPerPage, dataDisplay, rowCount, headCells } = state.table;
    const { setSelected } = actions;

    //   const isSelected = (name: string) => selected.indexOf(name) !== -1;

  const filterType = (value) => Array.isArray(value) ? value.join(", ") : typeof value === "boolean"  ? value ? "Yes" : "No" : value;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rowCount - page * rowsPerPage);

    return (
        <TableBody>
              {dataDisplay
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow
                      hover
                      onClick={() => dispatch(setSelected(index))}
                      tabIndex={-1}
                      key={index}
                      className={classes.row}
                    >
                      {headCells.map((cell, i) => {
                        return (
                          <TableCell
                            className={classes.cell}
                            align="right"
                            key={cell.id}
                          >
                            {filterType(row[cell.id])}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  className={classes.row}
                  style={{ height: 33 * emptyRows }}
                >
                  <TableCell className={classes.cell} colSpan={6} />
                </TableRow>
              )}
            </TableBody>
    )
}

export default EnhancedTableBody;