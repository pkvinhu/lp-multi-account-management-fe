import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rowCell: { 
        paddingBottom: 0, 
        paddingTop: 0,
    }
  })
);
