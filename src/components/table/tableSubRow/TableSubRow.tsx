import React, { FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// components
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Collapse from "@material-ui/core/Collapse";
import Box from "@material-ui/core/Box";

// store
import { RootState } from "../../../store";
import actions from "../../../store/allActions";

// styles
import { useStyles } from "./styles";

// utils 

interface EnhancedTableSubRowProps {
    open: boolean;
}

const EnhancedTableSubRow = ({ open }: EnhancedTableSubRowProps) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state);
    const cols = state.table.headCells.length + 2;

    return (
            <TableRow>
                <TableCell className={classes.rowCell} colSpan={cols}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            Testing
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
    )
}

export default EnhancedTableSubRow;