import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      color: theme.palette.primary.dark
    },
    popper: {
        backgroundColor: "blue"
    }
  })
);