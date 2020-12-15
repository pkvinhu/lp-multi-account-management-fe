import React, { FC, useEffect, Fragment } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { useStyles } from './styles';
import { DataDisplay } from '../../../store/table/types';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../../store";
import actions from "../../../store/allActions";
import EnhancedTableToolbar from '../tableToolbar/tableToolbar';
import EnhancedTableHead from '../tableHeader/tableHeader';

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

// function getComparator<T extends keyof DataDisplay>(order: Order, orderBy: T): (a: { [key in T]: number | string }, b: { [key in T]: number | string }) => number {
//     return order === 'desc'
//         ? (a, b) => descendingComparator(a, b, orderBy)
//         : (a, b) => -descendingComparator(a, b, orderBy);
// }

// function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
//     const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
//     stabilizedThis.sort((a, b) => {
//         const order = comparator(a[0], b[0]);
//         if (order !== 0) return order;
//         return a[1] - b[1];
//     });
//     return stabilizedThis.map((el) => el[0]);
// }

function getComparator(order, orderBy) {
    console.log("hit comparator")
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

function stringify(value) {
    return Array.isArray(value) ? value.join(", ") : value;
}

const EnhancedTable: FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const table = useSelector((state: RootState) => state.table);
    const users = useSelector((state: RootState) => state.users);
    const skills = useSelector((state: RootState) => state.skills);
    const profiles = useSelector((state: RootState) => state.profiles);
    const agentGroups = useSelector((state: RootState) => state.agentGroups);
    const { dataDisplay, order, orderBy, rowCount, headCells } = table;

    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const { setOrder, setOrderBy, setSelected } = actions;

    useEffect(() => {
        dispatch(actions.setDataDisplay("users", users.data, skills.map, profiles.map, agentGroups.map))
    }, []);

    const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof DataDisplay) => {
        console.log("HIT REQUEST SORT: ", orderBy, property, order)
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleClick = (event: React.MouseEvent<unknown>, index: number) => {
        dispatch(setSelected(index))
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDense(event.target.checked);
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
                        size={dense ? 'small' : 'medium'}
                        aria-label="enhanced table"
                    >
                        <EnhancedTableHead
                            onRequestSort={handleRequestSort}
                        />
                        <TableBody>
                            {stableSort(dataDisplay, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    // const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, index)}
                                            tabIndex={-1}
                                            key={index}
                                        >
                                            {headCells.map((cell, i) => {
                                                return <TableCell align="right" key={cell.id}>{stringify(row[cell.id])}</TableCell>
                                            })}
                                            {/* <TableCell component="th" id={labelId} scope="row" padding="none">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.calories}</TableCell>
                                            <TableCell align="right">{row.fat}</TableCell>
                                            <TableCell align="right">{row.carbs}</TableCell>
                                            <TableCell align="right">{row.protein}</TableCell> */}
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                                    <TableCell colSpan={6} />
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
            <FormControlLabel
                control={<Switch checked={dense} onChange={handleChangeDense} />}
                label="Dense padding"
            />
        </div>
    );
}

export default EnhancedTable;
