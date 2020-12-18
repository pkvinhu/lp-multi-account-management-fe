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
      bottom: "50%"
    },
    paper: {
      width: "100%",
      margin: theme.spacing(15, "auto")
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300
    },
    chips: {
      display: "flex",
      flexWrap: "wrap"
    },
    chip: {
      margin: 2
    },
    noLabel: {
      marginTop: theme.spacing(3)
    },
    select: {
      width: "200px",
      margin: theme.spacing(15, "auto")
    }
  })
);
