import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme:Theme) => 
    createStyles({
        appbar: {
            borderBottom: "10px solid orange",
        },
        actionsContainer: {
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center"
        },
        button: {
            backgroundColor: '#fad19c',
            "&:hover": {
                borderBottom: '4px solid black'
            }
        },
        toolbar: {
            fontFamily: "'Merriweather', serif",
            color: "black",
            fontSize: '2em',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: "space-between"
        },
    })
);