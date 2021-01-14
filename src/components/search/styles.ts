import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
      autocomplete: { width: 250 },
      checkbox: { marginRight: 8 },
      select: { width: 100 },
      wrapper: { display: "flex" }
  })
);
