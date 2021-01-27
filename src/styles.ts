import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    App: {
      display: "flex",
      justifyContent: "center",
      marginLeft: "auto",
      marginRight: "auto",
      zIndex: -1,
      height: "100%",
      width: "100%",
      top: "0%",
      left: "0%",
      position: "fixed",
      backgroundColor: theme.palette.secondary.dark,
      overflow: "scroll"

    },
    loginContainer: {
      padding: "15px",
      marginTop: "80%",
      height: "auto",
      width: "auto",
      display: "flex",
      justifyContent: "flex-start",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "rgb(253, 253, 253)"
    },

    loginText: {
      padding: "15px 0px"
    },
    lpSvg: {
      width: "250px",
      height: "250px",
      objectFit: "contain",
      backgroundRepeat: "no-repeat",
      backgroundImage: "url('./assets/lp-logo.svg')"
    }
  })
);
