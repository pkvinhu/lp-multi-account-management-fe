import teal from "@material-ui/core/colors/teal";
import orange from "@material-ui/core/colors/orange";
import grey from "@material-ui/core/colors/grey";

export default {
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
  MuiButton: {
    root: {
      hover: {
        "&:hover": {
          backgroundColor: "#b2dfdb !important"
        }
      }
    }
  },
  MuiTableCell: {
    root: {
      width: 100
    }
  }
};
