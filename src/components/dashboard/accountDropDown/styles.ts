import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    darkDropDown: {
      color: theme.palette.secondary.dark,
      icon: {
        color: theme.palette.secondary.dark
      }
    },
    formControl: {
      minWidth: 120,
      maxWidth: 300,
      margin: "0px 30px"
    },
    lightDropDown: {
      color: theme.palette.secondary.light,
      icon: {
        color: theme.palette.secondary.light
      }
    }
  })
);
