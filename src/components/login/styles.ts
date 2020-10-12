import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    appbar: {
        borderBottom: "10px solid orange",
    },
    toolbar: {
        fontFamily: "'Merriweather', serif",
        color: "black",
        fontSize: '2em',
        backgroundColor: 'white'
    },
    left_arrow: {
        fontSize: '2rem',
        color: 'black'
    },
    login_button: {
        width: '85px',
        fontFamily: "'Merriweather', serif",
        color: "black",
        fontSize: '1.1em',
        display: 'flex',
        justifyContent: 'space-between'
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
      }
}));

export default useStyles;