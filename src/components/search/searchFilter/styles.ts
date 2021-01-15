import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
      autocomplete: { minWidth: 200, maxWidth: 400, margin: "10px" },
      checkbox: { marginRight: 8 },
      paper: {
        border: '1px solid',
        width: "auto",
        display: "flex",
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
      },
      select: { width: 100, margin: "10px" },
      wrapper: { display: "flex" }
  })
);
