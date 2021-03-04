import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 1400,
      maxWidth: '100%',
      maxHeight: "80%",
      paddingTop: 15,
      paddingBottom: 15
    },
    paper: {
      width: "100%",
      margin: theme.spacing(15, "auto"),
    },
    table: {
      minWidth: 750
    },
    visuallyHidden: {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: 1,
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      top: 20,
      width: 1,
    },
  })
);

