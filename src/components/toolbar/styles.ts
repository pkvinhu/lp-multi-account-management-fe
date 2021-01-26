import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme:Theme) => {
    const { primary, secondary } = theme.palette;
    return createStyles({
        appbar: {
            borderBottom: "10px solid " + primary.main,
        },
        actionsContainer: {
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center"
        },
        button: {
            backgroundColor: primary.main,
            color: secondary.dark,
            "&:hover": {
                borderBottom: '4px solid black'
            }
        },
        toolbar: {
            color: secondary.dark,
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: "space-between"
        },
    })
});