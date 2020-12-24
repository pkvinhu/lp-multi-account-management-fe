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
import { Data } from "../../../store/table/types";

// styles
import { useStyles } from "./styles";
import { capitalize } from "@material-ui/core";

// utils 

interface EnhancedTableSubRowProps {
    open: boolean;
    row: Data | any;
}

const subRowMap = {
    "users": {
        appKeys: true,
        nickname: true,
        employeeId: true,
        isEnabled: true,
        dateCreated: true,
        dateUpdated: true
    },
    "skills": {
        description: true,
        maxWaitTime: true,
        fallbackWhenAllAgentsAreAway: true,
        dateUpdated: true
    },
    "profiles": {
        description: true,
        dateUpdated: true
    },
    "agentGroups": {
        isEnabled: true,
        dateUpdated: true
    }
}

const EnhancedTableSubRow = ({ row, open }: EnhancedTableSubRowProps) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state);
    const keys = useSelector((state: RootState) => state.appKeys.data);
    const { view } = state.table;
    const isApiUser = view === "users" && row.isApiUser ? true : false;
    const cols = view === "agentGroups" || (view === "users" && !isApiUser) ? state.table.headCells.length + 2 : (state.table.headCells.length + 2) / 2;
    const sub = Object.keys(subRowMap[view]);

    return (
        <TableRow>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Box margin={1} className={classes.box}>
                    {sub.map((e, i) => {
                        if (e === "description") {
                            return <TableCell className={classes.rowCell} colSpan={cols}>Description: {row[e]}</TableCell>
                        } else if (e === "appKeys" && isApiUser) {
                            return (
                                <TableCell className={classes.rowCell} colSpan={cols}>API Keys:
                                        {keys.map((each, i) => {
                                    if (row.allowedAppKeys === each.keyId) {
                                        return (
                                            <React.Fragment>
                                                <div>Name: {each.appName}</div>
                                                {each.appDescription && <div>Description: {each.appDescription}</div>}
                                                <hr />
                                                <div>Key: {each.keyId}</div>
                                                <div>Secret: {each.appSecret}</div>
                                                <div>Token: {each.token}</div>
                                                <div>Token Secret: {each.tokenSecret}</div>
                                            </React.Fragment>
                                        )
                                    }
                                })}
                                </TableCell>
                            )
                        } 
                        // else {
                        //     return (
                        //         <div>{capitalize(e)}: {row[e]}</div>
                        //     )
                        // }
                    })}
                </Box>
            </Collapse>
        </TableRow>
    )
}

export default EnhancedTableSubRow;