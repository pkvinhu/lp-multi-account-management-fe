import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      display: "flex",
      justifyContent: "center"
    },
    rowCell: {
      paddingBottom: 0,
      paddingTop: 0
    }
  })
);
