import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(4, 6, 5),
    },
    closeButton: {
      // cursor: "pointer",
      float: "right",
      marginTop: "5px",
      width: "20px",
    },
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    formCenter: {
      margin: "auto",
      width: "800px",
    },
    textFieldCenter: {
      width: "50%;",
      margin: "auto",
      display: "block",
    },
    buttonCenter: {
      margin: "auto",
      display: "block",
    },
    formControl: {
      margin: "auto",
      width: "50%;",
      display: "block",
    },
    title: { textAlign: "center" },
    icon: {
      borderRadius: "50%",
      width: 16,
      height: 16,
      boxShadow:
        "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
      backgroundColor: "#f5f8fa",
      backgroundImage:
        "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
      "$root.Mui-focusVisible &": {
        outline: "2px auto rgba(19,124,189,.6)",
        outlineOffset: 2,
      },
      "input:hover ~ &": {
        backgroundColor: "#ebf1f5",
      },
      "input:disabled ~ &": {
        boxShadow: "none",
        background: "rgba(206,217,224,.5)",
      },
    },
    checkedIcon: {
      backgroundColor: "#137cbd",
      backgroundImage:
        "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
      "&:before": {
        width: 16,
        height: 16,
        backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
        content: '""',
      },
      "input:hover ~ &": {
        backgroundColor: "#106ba3",
      },
    },
  })
);
const classes = useStyles();
export { classes };
