import React, { FC, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import actions from "../../../store/allActions";
import EnhancedTableToolbar from "../tableToolbar/tableToolbar";
import EnhancedTableHead from "../tableHeader/tableHeader";
import EnhancedTableBody from "../tableBody/tableBody";

const EnhancedTable: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);
  const { table, users, skills, profiles, agentGroups } = state;
  const { page, rowsPerPage, rowCount } = table;
  const { setPage, setRowsPerPage, setDataDisplay } = actions;

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
    );
  }, []);

  const handleChangePage = (event: unknown, newPage: number) => {
    dispatch(setPage(newPage));
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setRowsPerPage(parseInt(event.target.value, 10)));
    dispatch(setPage(0));
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="Contact Center Management"
            size="medium"
            aria-label="enhanced table"
          >
            <EnhancedTableHead />
            <EnhancedTableBody />
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
};

export default EnhancedTable;
