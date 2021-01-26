import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
        backgroundColor: theme.palette.primary.light + " !important"
    },
    sortLabel: {
      "&:hover": {
        color: theme.palette.primary.dark
      }
    }
  })
);

