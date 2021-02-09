import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => {
  const { primary, secondary, info } = theme.palette;
  return createStyles({
    formBody: {
      height: 800,
      padding: 75,
      backgroundColor: secondary.light + " !important"
    },
    paper: {
      width: 1000,
      height: "100%",
      margin: theme.spacing(15, "auto")
    },
    root: {
      minWidth: 1400,
      maxWidth: '100%',
      maxHeight: "80%",
      paddingTop: 15,
      paddingBottom: 15
    },
    tabs: {
      backgroundColor: secondary.light + " !important",
      borderRadius: 10
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: primary.main + " !important"
    }
  });
});
