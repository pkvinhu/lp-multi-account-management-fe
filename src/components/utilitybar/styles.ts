import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => {
    const drawerWidth = "auto";
    return createStyles({
        root: {
            display: 'flex',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
            left: 0,
            right: 0
        },
        item: {
            width: "auto"
        },
        toolbar: {
            display: 'flex',
            alignItems: 'left',
            justifyContent: 'center',
            flexDirection: "column",
            padding: theme.spacing(20, 0)
            // necessary for content to be below app bar
        },
    })
});