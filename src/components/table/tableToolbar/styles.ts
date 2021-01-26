import { makeStyles, Theme, createStyles, lighten } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => {
  const { primary, secondary, text } = theme.palette;
  return createStyles({
    button: {
      color: primary.dark
    },
    buttonContainer: {
      display: "flex"
    },
    highlight:
      theme.palette.type === "light"
        ? {
            color: secondary.main,
            backgroundColor: lighten(secondary.light, 0.85)
          }
        : {
            color: text.primary,
            backgroundColor: secondary.dark
          },
    title: {
      flex: "1 1 100%"
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: secondary.main + " !important"
    }
  })
});
