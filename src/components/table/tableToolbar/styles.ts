import { makeStyles, Theme, createStyles, lighten } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      color: theme.palette.primary.dark
    },
    buttonContainer: {
      display: "flex"
    },
    highlight:
      theme.palette.type === "light"
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85)
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark
          },
    tab: {
      color: theme.palette.secondary.dark
    },
    tabSelected: {
      color: theme.palette.secondary.main
    },
    title: {
      flex: "1 1 100%"
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: theme.palette.secondary.main + " !important"
    }
  })
);
