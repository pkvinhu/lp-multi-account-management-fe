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
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    },
    primaryButton: {
        backgroundColor: '#fad19c',
        "&:hover": {
            border: '4px solid black'
        }
    },
    secondaryButton: {
        backgroundColor: 'lightgrey',
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
