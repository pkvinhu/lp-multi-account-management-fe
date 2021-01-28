import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paperIntro: {
      width: "100%",
      margin: theme.spacing(40, "auto")
    },
    welcomeText: {
      fontFamily: "'Merriweather', serif",
      color: theme.palette.primary.light
    }
  })
);
