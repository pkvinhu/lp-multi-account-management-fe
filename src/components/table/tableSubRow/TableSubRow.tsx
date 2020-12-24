import React, { FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// components
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Collapse from "@material-ui/core/Collapse";
import Box from "@material-ui/core/Box";
import Chip from '@material-ui/core/Chip';

// store
import { RootState } from "../../../store";
import actions from "../../../store/allActions";
import { Data } from "../../../store/table/types";

// styles
import { useStyles } from "./styles";

// utils 
import { capitalize } from "@material-ui/core";

interface EnhancedTableSubRowProps {
    open: boolean;
    row: Data | any;
}

const subRowMap = {
    "users": {
        appKeys: true,
        short: ["nickname", "employeeId", "isEnabled", "dateCreated", "dateUpdated"]
    },
    "skills": {
        description: true,
        short: ["maxWaitTime", "fallbackWhenAllAgentsAreAway", "dateUpdated"]
    },
    "profiles": {
        description: true,
        short: ["dateUpdated"]
    },
    "agentGroups": {
        short: ["isEnabled", "dateUpdated"]
    }
}

const EnhancedTableSubRow = ({ row, open }: EnhancedTableSubRowProps) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state);
    const keys = useSelector((state: RootState) => state.appKeys.data);
    const { view, headCells } = state.table;
    const isApiUser = view === "users" && row.isApiUser ? true : false;
    const columns = state.table.headCells.length + 2;
    // const cols = headCells.length / 2;
    const sub = Object.keys(subRowMap[view]);

    return (
        <TableRow>
            <TableCell className={classes.rowCell} colSpan={columns}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box margin={1} className={classes.box}>
                        {sub.map((e, i) => {
                            if (e === "description") {
                                return <TableCell key={i} className={open ? classes.rowCellOpen : classes.rowCell}><Chip className={classes.chip} label="Description" /><div className={classes.flexPad}>{row[e]}</div></TableCell>
                            } else if (e === "appKeys") {
                                return (
                                    isApiUser ?
                                        (<TableCell className={open ? classes.rowCellOpen : classes.rowCell} >
                                            <Chip className={classes.chip} label="API Keys" />
                                            {keys.map((each, ind) => {
                                                if (row.allowedAppKeys === each.keyId) {
                                                    return (
                                                        <div className={classes.block}>
                                                            <div className={classes.flexPad}><Chip className={classes.chip2} label="Name" /><div className={classes.flexPad}>{each.appName}</div></div>
                                                            {each.appDescription && <div className={classes.flexPad}><Chip className={classes.chip2} label="Description" /><div className={classes.flexPad}>{each.appDescription}</div></div>}
                                                            <hr />
                                                            <div className={classes.flexPad}><Chip className={classes.chip2} label="Key" /><div className={classes.flexPad}>{each.keyId}</div></div>
                                                            <div className={classes.flexPad}><Chip className={classes.chip2} label="Key Secret" /><div className={classes.flexPad}>{each.appSecret}</div></div>
                                                            <div className={classes.flexPad}><Chip className={classes.chip2} label="Token" /><div className={classes.flexPad}>{each.token}</div></div>
                                                            <div className={classes.flexPad}><Chip className={classes.chip2} label="Token Secret" /><div className={classes.flexPad}>{each.tokenSecret}</div></div>
                                                        </div>
                                                    )
                                                }
                                            })}
                                        </TableCell>
                                        ) : <TableCell className={open ? classes.rowCellOpen : classes.rowCell} ><Chip className={classes.chip} label="API Keys" /><div className={classes.flexPad}>None</div></TableCell>
                                )
                            }
                            else if (e === "short") {
                                return (
                                    <TableCell className={open ? classes.rowCellOpen : classes.rowCell}>
                                        <div className={classes.block}>
                                            {subRowMap[view][e].map((each, ind) => {
                                                return (<div className={classes.flexPad} key={ind}><Chip className={classes.chip2} label={capitalize(each)} /><div className={classes.flexPad}>{typeof row[each] === "boolean" ? String(row[each]) : row[each]}</div></div>)
                                            })}
                                        </div>
                                    </ TableCell>
                                )
                            }
                        })}
                    </Box>
                </Collapse>
            </TableCell>
        </TableRow>
    )
}

export default EnhancedTableSubRow;