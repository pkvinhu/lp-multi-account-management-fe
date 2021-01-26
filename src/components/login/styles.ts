import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
    left_arrow: {
        fontSize: '2rem',
        color: 'black'
    },
    login_button: {
        width: 'auto',
        fontFamily: "'Merriweather', serif",
        color: "black",
        fontSize: '1.1em',
        display: 'flex',
        padding: '5px 15px',
        justifyContent: 'space-between',
        borderRadius: '5px',
        "&:hover": {
            backgroundColor: theme.palette.primary.main
        }
    },
    login_container: {
        padding: '15px',
        marginTop: '80%',
        height: 'auto',
        width: 'auto',
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgb(253, 253, 253)',
        cursor: "pointer"
      }
    })
);