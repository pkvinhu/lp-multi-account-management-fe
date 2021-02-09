import {
  makeStyles,
  Theme,
  createStyles,
  ListItemSecondaryAction
} from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => {
  const { primary, secondary } = theme.palette;
  return createStyles({
    chip: {
      padding: "0px 10px",
      margin: "5px",
      minWidth: "200px",
      fontSize: "12px",
      backgroundColor: secondary.dark,
      color: "white",
      borderRadius: "50px",
      "&:hover": {
        color: secondary.dark,
        border: "2px solid " + secondary.dark
      }
    },
    link: {
        color: "white"
    },
    paper: {
      padding: "20px",
      backgroundColor: secondary.dark,
      maxHeight: 200,
      minWidth: 400,
      overflow: "scroll"
    }
  });
});
