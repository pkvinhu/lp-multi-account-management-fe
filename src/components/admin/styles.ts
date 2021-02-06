import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => {
  const { primary, secondary } = theme.palette;
  return createStyles({
    paper: {
        width: "100%",
        margin: theme.spacing(15, "auto")
      },
  })
});