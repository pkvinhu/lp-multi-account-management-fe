import teal from "@material-ui/core/colors/teal";
import orange from "@material-ui/core/colors/orange";
import grey from "@material-ui/core/colors/grey";
import blueGrey from "@material-ui/core/colors/blueGrey";

export default {
  MuiButton: {
    root: {
      hover: {
        "&:hover": {
          backgroundColor: "#b2dfdb !important"
        }
      }
    }
  },
  MuiDrawer: {
    paper: {
      zIndex: 1000,
      backgroundColor: orange[400]
    }
  },
  MuiListItem: {
    gutters: {
      paddingLeft: 15,
      paddingRight: 15
    }
  },
  MuiListItemIcon: {
    root: {
      minWidth: 0,
      borderRadius: "50%",
      '&$selected': {
        color: "white"
      },
      '&:hover': {
        backgroundColor: "white",
        border: ".5px solid " + blueGrey[900]
      },
      padding: 5
    }
  },
  MuiTab: {
    root: {
      color: grey[500],
      "&$selected": {
        color: orange[900],
        fontWeight: 900
      }
    }
  },
  MuiTabs: {
    indicator: {
      backgroundColor: orange[900]
    }
  },
  MuiTableCell: {
    root: {
      maxWidth: 120,
      minWidth: 50
    }
  }
};
