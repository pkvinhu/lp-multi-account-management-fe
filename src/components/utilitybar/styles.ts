import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { CommunicationStayPrimaryLandscape } from "material-ui/svg-icons";

export const useStyles = makeStyles((theme: Theme) => {
  const drawerWidth = "auto";
  const { primary, secondary, success } = theme.palette;
  return createStyles({
    root: {
      display: "flex"
    },
    disabled: {
      opacity: 1
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
      left: 0,
      right: 0
    },
    icon: {
      color: secondary.dark
    },
    iconActive: {
      color: primary.light,
      backgroundColor: secondary.dark
    },
    item: {
      width: "auto",
      "&$disabled": {
        opacity: .85
      }
    },
    toolbar: {
      display: "flex",
      alignItems: "left",
      justifyContent: "center",
      flexDirection: "column",
      padding: theme.spacing(20, 0)
      // necessary for content to be below app bar
    }
  });
});
