import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    App: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      marginLeft: "auto",
      marginRight: "auto",
      height: "100%",
      width: "80%",
      alignContent: "center",
      alignItems: "center"
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
    },
    polygon: {
      zIndex: -1,
      top: "0%",
      left: "0%",
      position: "fixed",
      width: "100%",
      height: "100%",
      backgroundColor: theme.palette.secondary.dark,
      backgroundSize: "cover",
    //   clipPath:
    //     "polygon(100% 0%, 100% 98%, -50% 35%, 100% 50%, -75% -50%, 75% 200%, 95% 40%)"
    },
    polygon2: {
      zIndex: -1,
      top: "5%",
      left: "0%",
      position: "fixed",
      width: "100%",
      height: "100%",
      backgroundColor: theme.palette.primary.dark,
      backgroundSize: "cover",
      clipPath: "polygon(100% 70%, 100% 98%)"
    }
  })
);
