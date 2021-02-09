import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => {
  const { primary, secondary } = theme.palette;
  return createStyles({
    darkDropDown: {
      color: secondary.dark,
      icon: {
        color: secondary.dark
      }
    },
    formControl: {
      minWidth: 120,
      maxWidth: 300,
      margin: "0px 30px"
    },
    lightDropDown: {
      color: secondary.light,
      icon: {
        color: secondary.light
      }
    },
    link: {
      textDecoration: "none",
      color: secondary.dark
    }
  })
});
