import { makeStyles, Theme, createStyles } from "@material-ui/core";
import { fontSize } from "@material-ui/system";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    block: {
      display: "block",
      padding: "0px 15px",
      minWidth: "200px"
    },
    box: {
      display: "flex",
      justifyContent: "space-between",
      padding: "0px 50px"
    },
    chip: {
      backgroundColor: "orange",
      padding: "0px 10px",
      margin: "5px",
      minWidth: "200px",
      fontSize: "12px"
    },
    chip2: {
      backgroundColor: "lightgrey",
      padding: "0px 10px",
      margin: "5px",
      minWidth: "200px",
      fontSize: "12px"
    },
    flexPad: {
        display: "flex",
        padding: "0px 15px",
        margin: "10px",
        minWidth: "200px"
    },
    rowCell: {
      paddingBottom: 0,
      paddingTop: 0,
    //   display: "flex"
    },
    rowCellOpen: {
      padding: "20px",
      display: "flex",
      justifyContent: "flex-end",
      fontSize: "12px"
    }
  })
);
