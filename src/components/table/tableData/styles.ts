import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    cell: {
      fontSize: "12px",
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    row: {},
    table: {
      minWidth: 750,
      maxWidth: "70%"
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
  }),
);