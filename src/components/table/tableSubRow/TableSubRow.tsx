import React, { FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// components
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Collapse from "@material-ui/core/Collapse";
import Box from "@material-ui/core/Box";
import Chip from '@material-ui/core/Chip';

import AppPrivilegesPopper from "../appPrivilegesPopper/AppPrivilegesPopper";

// store
import { RootState } from "../../../store";
// import actions from "../../../store/allActions";
import { Data } from "../../../store/table/types";

// styles
import { useStyles } from "./styles";

// utils 
import { capitalize } from "../../../util/components/helpers";

// config 
import subRowMap from "../../../config/subRowMap.json";

interface EnhancedTableSubRowProps {
    open: boolean;
    row: Data | any;
}

const EnhancedTableSubRow = ({ row, open }: EnhancedTableSubRowProps) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state);
    const keys = useSelector((state: RootState) => state.appKeys.data);
    const { view, headCells } = state.table;
    const isApiUser = view === "users" && row.isApiUser ? true : false;
    let keysFound = false;
    const columns = headCells.length + 2;
    // const cols = headCells.length / 2;
    const sub = Object.keys(subRowMap[view]);

    return (
        <TableRow>
            <TableCell className={classes.rowCell} colSpan={columns}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box margin={1} className={classes.box}>
                        {sub.map((e, i) => {
                            if (e === "description") {
                                return <div key={i} className={open ? classes.rowCellOpen : classes.rowCell}><Chip className={classes.chip} label="Description" /><div className={classes.flexPad}>{row[e]}</div></div>
                            } else if (e === "appKeys") {
                                return (
                                    isApiUser ?
                                        (<div className={open ? classes.rowCellOpen : classes.rowCell} key={i}>
                                            <Chip className={classes.chip} label="API Keys" />
                                            {keys.map((each, ind) => {
                                                if (row.allowedAppKeys === each.keyId) {
                                                    keysFound = true;
                                                    return (
                                                        <div key={ind} className={classes.block}>
                                                            <div className={classes.flexPad}><Chip className={classes.chip2} label="Name" /><div className={classes.flexPad}>{each.appName}</div></div>
                                                            {each.appDescription && <div className={classes.flexPad}><Chip className={classes.chip2} label="Description" /><div className={classes.flexPad}>{each.appDescription}</div></div>}
                                                            <hr />
                                                            {subRowMap.appKeys.data.map((k, i) => {
                                                                return (<div key={i} className={classes.flexPad}><Chip className={classes.chip2} label={k.label} /><div className={classes.flexPad}>{each[k.value]}</div></div>)
                                                            })}
                                                            <div key={i} className={classes.flexPad}><AppPrivilegesPopper privileges={each.privileges}/></div>
                                                        </div>
                                                    )
                                                }
                                            })}
                                            {!keysFound && (<div className={classes.flexPad}>None</div>)}
                                        </div>
                                        ) : <div key={i} className={open ? classes.rowCellOpen : classes.rowCell} ><Chip className={classes.chip} label="API Keys" /><div className={classes.flexPad}>None</div></div>
                                )
                            }
                            else if (e === "short") {
                                return (
                                    <div key={i} className={open ? classes.rowCellOpen : classes.rowCell}>
                                        <div className={classes.block}>
                                            {subRowMap[view][e].map((each, ind) => {
                                                return (<div className={classes.flexPad} key={ind}><Chip className={classes.chip2} label={capitalize(each)} /><div className={classes.flexPad}>{typeof row[each] === "boolean" ? String(row[each]) : row[each]}</div></div>)
                                            })}
                                        </div>
                                    </ div>
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