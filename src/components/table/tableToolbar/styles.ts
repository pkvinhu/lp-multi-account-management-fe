import { makeStyles, Theme, createStyles, lighten } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "rgb(253, 253, 253)",
      textColor: "rgb(253, 253, 253)",
    },
    highlight:
      theme.palette.type === "light"
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    title: {
      flex: "1 1 100%",
    },
    toolbar: {
      display: "flex",
      justifyContent: "center",
    },
    tabs: {
      textColor: "rgb(253, 253, 253)",
    },
  })
);
