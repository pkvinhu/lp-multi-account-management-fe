import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    inside: {
      margin: 0,
      top: "50%",
      bottom: "50%",
    },
    paper: {
        width: '100%',
        margin: theme.spacing(15, "auto"),
      },
  })
);
