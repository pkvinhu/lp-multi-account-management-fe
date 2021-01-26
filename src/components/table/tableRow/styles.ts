import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => {
  const { secondary, primary } = theme.palette;
  return createStyles({
    cell: {
      // fontSize: "12px"
    },
    iconButton: {
      color: secondary.dark + " !important",
      "&:hover": {
        backgroundColor: "white !important",
        border: "1px solid " + primary.dark + " !important"
      }
    },
    iconButtonDisabled: {
      color: secondary.main + " !important"
    },
    row: {
      border: "1px solid " + theme.palette.secondary.main,
      "&:hover": {
        backgroundColor: secondary.light + " !important"
      }
    }
  });
});
