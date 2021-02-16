import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => {
  const { primary, secondary, info } = theme.palette;
  return createStyles({
    button: {
      margin: 20,
      backgroundColor: primary.main,
      color: secondary.dark,
      "&:hover": {
        borderBottom: "4px solid black"
      }
    },
    checkbox: {
      marginRight: 8, 
      color: theme.palette.primary.dark,
      '&$select': {
        color: theme.palette.primary.dark,
      }
    },
    checkboxLabel: {
      display: "flex"
      // padding: theme.spacing(5, 0)
    },
    form: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    formControl: {
      width: "100%",
        margin: "50px auto"
    },
    input: {
      width: 250,
      margin: theme.spacing(1, 0)
    },
    type: {
      alignContent: "center",
      alignItems: "center",
      marginTop: "auto",
      marginBottom: "auto"
    }
  });
});
