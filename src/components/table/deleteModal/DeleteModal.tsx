// dependencies
import React, { FC, Fragment } from "react";
import { useSelector } from "react-redux";

// components
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Button from "@material-ui/core/Button";

// store
import { RootState } from "../../../store";

// styles
import { useStyles } from "./styles";

//util
import { getUserById, capitalize } from "../../../util/components/helpers";

interface DeleteModalProps {
    open: boolean;
    handleClose: () => void;
    handleDelete: (event: any, entityId: any) => void;
    id: string|number;
}

const DeleteModal = ({ open, handleClose, handleDelete, id }: DeleteModalProps) => {
    const classes = useStyles();
    const state = useSelector((state: RootState) => state);
    const { table } = state;
    const { dataDisplay, view } = table;
    const entity = getUserById(id, dataDisplay);

    const handleDeleteAndClose = (e:any) => {
        handleDelete(e, id);
        handleClose();
    }
    
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <MuiDialogTitle className={classes.title}>Delete {capitalize(view)}</MuiDialogTitle>
            <MuiDialogContent dividers className={classes.content}>
                Are you sure you want to delete {view} <b>{entity.fullName || entity.name}</b>? 
                This deletion is permanent and will not be able to be undone. 
                {(view === "users" && entity.skillIds.length) ? (
                <Fragment>
                    <br/>
                    <br/>
                    <b>{capitalize(entity.fullName)}</b> is currently connected to {entity.skillIds.length} {entity.skillIds.length > 1 ? "skills" : "skill"}.
                </Fragment>
                ) : null}
            </MuiDialogContent>
            <MuiDialogActions className={classes.actions}>
                <Button className={classes.secondaryButton} onClick={handleClose}>Cancel</Button>
                <Button className={classes.primaryButton} onClick={handleDeleteAndClose}>Submit</Button>
            </MuiDialogActions>
        </Dialog>
    )
}

export default DeleteModal;