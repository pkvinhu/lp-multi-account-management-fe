import React, { FC, useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// components
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

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
import { useStyles } from "./styles";

// utils 
import { filterType, humanOrBot, checkRowFromDeleteIconDisable, usePrevious } from "../../../util/components/helpers";
// 
interface EnhancedTableRowProps {
    handleOpen: (id: string | number) => void;
    row: Data;
    index: number;
}

const EnhancedTableRow = ({ handleOpen, row, index }: EnhancedTableRowProps) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const state = useSelector((state: RootState) => state);
    const { table, profiles, campaigns, users } = state;
    const { headCells, view, page, dataDisplay } = table;
    const { setSelected } = actions;
    const disabled = checkRowFromDeleteIconDisable(view, row, campaigns.skillsConnectedToCampaignsMap, profiles.roleTypeCountMap, users.skillsToUsersMap, users.profilesToUsersMap);
    const previousView = usePrevious(view);
    const previousPage = usePrevious(page);
    const previousData = usePrevious(dataDisplay);

    useEffect(() => {
        if (previousView !== view || previousPage !== page || previousData !== dataDisplay) {
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
                classes={{ root: classes.row }}
            >
                <TableCell>
                    <IconButton classes={{ root: classes.iconButton }} aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                {headCells.map((cell, i) => {
                    return (
                        <TableCell
                            align="right"
                            key={cell.id}
                        >
                            <Typography variant="body2">{cell.id === "userTypeId" ? humanOrBot(row[cell.id]) : filterType(row[cell.id])}</Typography>
                        </TableCell>
                    );
                })}
                <TableCell
                    align="right"
                    key={headCells.length}
                >
                    <IconButton classes={{ root: classes.iconButton, disabled: classes.iconButtonDisabled }} onClick={(e) => handleOpen(row.id)} disabled={disabled}><DeleteIcon /></IconButton>
                </TableCell>
            </TableRow>
            <EnhancedTableSubRow row={row} open={open} />
        </React.Fragment>
    )
}

export default EnhancedTableRow;