// dependencies
import React, { FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// components
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";

import DeleteIcon from '@material-ui/icons/Delete';

// store
import { RootState } from "../../../store";
import actions from "../../../store/allActions";

// styles
import { useStyles } from "./styles";

// utils 
import { filterType, emptyRows } from "../../../util/components/helpers";
import DeleteModal from "../deleteModal/DeleteModal";


const EnhancedTableBody = ({ handleDelete }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [modalOpen, setModalStatus] = useState(false);
    const [ deleteId, setDeleteId ] = useState("");
    const state = useSelector((state: RootState) => state);
    const { table } = state;
    const { page, rowsPerPage, dataDisplay, rowCount, headCells, view } = table;
    const { setSelected } = actions;
    const emptyR = emptyRows(rowsPerPage, rowCount, page)

    const handleOpen = (id) => {
        setDeleteId(id)
        setModalStatus(true)
    }
    const handleClose = () => setModalStatus(false);

    return (
        <TableBody>
            {!table.loading && dataDisplay
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
                            <TableCell
                                className={classes.cell}
                                align="right"
                                key={headCells.length}
                            >
                                <IconButton onClick={(e) => handleOpen(row.id)}><DeleteIcon /></IconButton>
                            </TableCell>
                        </TableRow>
                    );
                })}
            {emptyR > 0 && (
                <TableRow
                    className={classes.row}
                    style={{ height: 33 * emptyR }}
                >
                    <TableCell className={classes.cell} colSpan={6} />
                </TableRow>
            )}
            {modalOpen && <DeleteModal id={deleteId} handleClose={handleClose} handleDelete={handleDelete} open={modalOpen} />}
        </TableBody>
    )
}

export default EnhancedTableBody;