import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    autocomplete: { 
      minWidth: 200, 
      maxWidth: 400, 
      margin: "10px",
    },
    checkbox: { 
      marginRight: 8, 
      color: theme.palette.primary.dark,
      '&$select': {
        color: theme.palette.primary.dark,
      }
    },
    chip: {
      backgroundColor: theme.palette.primary.dark,
      color: "white",
      border: "2px solid " + theme.palette.secondary.dark
    },
    chipIcon: {
      // backgroundColor: theme.palette.primary.dark,
      color: "white"
    },
    icon: {
      color: theme.palette.secondary.dark
    },
    paper: {
      border: "1px solid",
      width: "auto",
      display: "flex",
      padding: theme.spacing(1),
      backgroundColor: theme.palette.background.paper
    },
    select: { 
      width: 100, 
      margin: "10px",
    },
    wrapper: { display: "flex" }
  })
);
