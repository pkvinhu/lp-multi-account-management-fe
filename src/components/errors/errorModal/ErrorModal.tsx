// dependencies
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// components
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// store
import { RootState } from "../../../store";

// styles
import { useStyles } from "./styles";
import actions from "../../../store/allActions";

// util

interface ErrorModalProps {
    open: boolean;
    handleChange: (event: any) => void;
    handleClose: () => void;
}

const ErrorModal = ({ open, handleChange, handleClose }: ErrorModalProps) => {
    const classes = useStyles();
    // const dispatch = useDispatch()
    const state = useSelector((state: RootState) => state);
    
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <MuiDialogTitle className={classes.title}><Typography variant="h5">Bearer For Account Expired</Typography></MuiDialogTitle>
            <MuiDialogContent dividers className={classes.content}>
            <Typography variant="body2">
                It looks like the bearer token for the account you are requesting information may have expired. 
                Perhaps you attempted logging in with your API Agent credentials from a separate location. If you would like to refresh the token, please choose the option below. 
                Otherwise, if you cancel out of this popup, we can take you back to the Welcome Page where you can select another account view.
            </Typography>
            </MuiDialogContent>
            <MuiDialogActions className={classes.actions}>
                <Button className={classes.secondaryButton} onClick={handleClose}>Cancel</Button>
                <Button className={classes.primaryButton} onClick={(e) => handleChange(e)}>Refresh Token</Button>
            </MuiDialogActions>
        </Dialog>
    )
}

export default ErrorModal;