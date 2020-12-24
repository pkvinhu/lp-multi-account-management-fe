// dependencies
import React, { FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// components
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import DeleteModal from "../deleteModal/DeleteModal";
import EnhancedTableRow from "../tableRow/TableRow";

// store
import { RootState } from "../../../store";
import actions from "../../../store/allActions";

// styles
import { useStyles } from "./styles";

// utils 
import { emptyRows } from "../../../util/components/helpers";


const EnhancedTableBody = ({ handleDelete }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [modalOpen, setModalStatus] = useState(false);
    const [deleteId, setDeleteId] = useState("");
    const state = useSelector((state: RootState) => state);
    const { table } = state;
    const { page, rowsPerPage, dataDisplay, rowCount } = table;
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
                    return <EnhancedTableRow key={index} handleOpen={handleOpen} row={row} index={index}/>
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