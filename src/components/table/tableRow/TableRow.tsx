import React, { FC, useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// components
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";

import EnhancedTableSubRow from "../tableSubRow/TableSubRow";

import DeleteIcon from '@material-ui/icons/Delete';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

// store
import { RootState } from "../../../store";
import actions from "../../../store/allActions";
import { Data } from "../../../store/table/types";
// import { DataDisplay } from "../../../store/table/types";

// styles
import { useStyles } from "../tableBody/styles";

// utils 
import { filterType, humanOrBot, checkRowFromDeleteIconDisable } from "../../../util/components/helpers";
// 
interface EnhancedTableRowProps {
    handleOpen: (id: string | number) => void;
    row: Data;
    index: number;
}

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

const EnhancedTableRow = ({ handleOpen, row, index }: EnhancedTableRowProps) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const state = useSelector((state: RootState) => state);
    const { table, profiles, campaigns, users } = state;
    const { headCells, view } = table;
    const { setSelected } = actions;
    const disabled = checkRowFromDeleteIconDisable(view, row, campaigns.skillsConnectedToCampaignsMap, profiles.roleTypeCountMap, users.skillsToUsersMap, users.profilesToUsersMap);
    const previousView = usePrevious(view);

    useEffect(() => {
        if(previousView !== view) {
            setOpen(false);
        }
    })
    return (
        <React.Fragment>
            <TableRow
                hover
                onClick={() => dispatch(setSelected(index))}
                tabIndex={-1}
                key={index}
                className={classes.row}
            >
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                {headCells.map((cell, i) => {
                    return (
                        <TableCell
                            className={classes.cell}
                            align="right"
                            key={cell.id}
                        >
                            {cell.id === "userTypeId" ? humanOrBot(row[cell.id]) : filterType(row[cell.id])}
                        </TableCell>
                    );
                })}
                <TableCell
                    className={classes.cell}
                    align="right"
                    key={headCells.length}
                >
                    <IconButton onClick={(e) => handleOpen(row.id)} disabled={disabled}><DeleteIcon /></IconButton>
                </TableCell>
            </TableRow>
            <EnhancedTableSubRow row={row} open={open} />
        </React.Fragment>
    )
}

export default EnhancedTableRow;