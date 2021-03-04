import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    actions: {
        margin: 0,
        padding: theme.spacing(1),
    },
    content: {
        padding: theme.spacing(2),
        paddingBottom: "50px"
    },
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid " + theme.palette.secondary.dark,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    },
    primaryButton: {
        backgroundColor: theme.palette.primary.main,
        "&:hover": {
            border: '4px solid black'
        }
    },
    secondaryButton: {
        backgroundColor: theme.palette.secondary.main,
        "&:hover": {
            border: '4px solid black'
        }
    },
    title: {
        margin: 0,
        padding: theme.spacing(2),
    }
  })
);
