import React, { FC, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../../store";
import actions from "../../../store/allActions";
import EnhancedTableToolbar from '../tableToolbar/tableToolbar';
import EnhancedTableHead from '../tableHeader/tableHeader';

const EnhancedTable: FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state);
    const { table, users, skills, profiles, agentGroups } = state;
    const { dataDisplay, order, orderBy, rowCount, headCells } = table;

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const { setOrder, setOrderBy, setSelected, setDataDisplay } = actions;

    useEffect(() => {
        dispatch(
            setDataDisplay(
                "users",
                users.data,
                "asc",
                "id",
                skills.map,
                profiles.map,
                agentGroups.map
            )
        )
    }, []);

    const handleRequestSort = (event: React.MouseEvent<unknown>, property: string) => {
        const isAsc = orderBy === property && order === 'asc';
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
            )
        } else {
            dispatch(
                setDataDisplay(
                    table.view, 
                    state[table.view].data, 
                    isAsc ? "desc" : "asc", 
                    property, 
                    skills.map
                )
            )
        }
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    //   const isSelected = (name: string) => selected.indexOf(name) !== -1;

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rowCount - page * rowsPerPage);

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <EnhancedTableToolbar />
                <TableContainer>
                    <Table
                        className={classes.table}
                        aria-labelledby="Contact Center Management"
                        size='medium'
                        aria-label="enhanced table"
                    >
                        <EnhancedTableHead
                            onRequestSort={handleRequestSort}
                        />
                        <TableBody>
                            {dataDisplay
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    return (
                                        <TableRow
                                            hover
                                            onClick={() => dispatch(actions.setSelected(index))}
                                            tabIndex={-1}
                                            key={index}
                                            className={classes.row}
                                        >
                                            {headCells.map((cell, i) => {
                                                return <TableCell className={classes.cell} align="right" key={cell.id}>{Array.isArray(row[cell.id]) ? row[cell.id].join(", ") : row[cell.id]}</TableCell>
                                            })}
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow className={classes.row} style={{ height: (33) * emptyRows }}>
                                    <TableCell className={classes.cell} colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rowCount}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    );
}

export default EnhancedTable;
