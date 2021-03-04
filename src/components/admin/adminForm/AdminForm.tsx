// dependencies
import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import parse from 'html-react-parser';

// components
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import Alert from '@material-ui/lab/Alert';
import LinearProgress from '@material-ui/core/LinearProgress';

// styles
import { useStyles } from './styles';

// store
import { RootState } from "../../../store";
import { Box } from '@material-ui/core';

interface TextField {
    name: string;
    label: string;
    handleChangeFn: any;
    type: string;
}

interface SubmitObj {
    single: string;
    bulk: string;
}

interface FormFields {
    loginName: string;
    password: string;
    lpId: string;
    brandName: string;
    isSuperUser: boolean;
}

interface AdminFormProps {
    title: string;
    description: string;
    handleChange: (e: any, fn: any) => void;
    textFields?: TextField[];
    submitHandlers: SubmitObj;
    uploadCsv?: boolean;
    formFields: FormFields;
    changeHandlerMap: any;
    submitHandlerMap: any;
}

const AdminForm = ({ title, description, handleChange, textFields = [], submitHandlers, uploadCsv = false, formFields, changeHandlerMap, submitHandlerMap }: AdminFormProps) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state);
    const { admin } = state;
    const location = useLocation();
    const history = useHistory();
    console.log(description)

    const createMarkup = () => {
        return { __html: `<div>${description}</div>` }
    }

    let loadProgress = admin.loadProgress / admin.totalRequests * 100;

    return (
        <div>
            <Typography variant="h4">{title}</Typography>
            <br />
            <Typography variant="body1" dangerouslySetInnerHTML={createMarkup()}></Typography>
            <FormControl className={classes.formControl}>
                {admin.totalRequests ? (
                    < Box display="flex" alignItems="center">
                        <Box width="100%" mr={1}>
                            <LinearProgress variant="determinate" value={loadProgress} />
                        </Box>
                        <Box minWidth={35}>
                            <Typography variant="body2" color="textSecondary">{`${loadProgress}%`}</Typography>
                        </Box>
                    </Box>) : null}
                {admin.error && <Alert severity="error">{admin.error}</Alert>}
                {admin.message && <Alert severity="success">{admin.message}</Alert>}
                <div className={classes.form}>
                    {textFields.length ? textFields.map((field, ind) => {
                        const { name, label, handleChangeFn, type } = field;
                        return (
                            <React.Fragment key={ind}>
                                {field && type === "input" &&
                                    (<TextField value={formFields[name]} label={label} onChange={(e) => handleChange(e, changeHandlerMap[handleChangeFn])} className={classes.input} />)
                                }
                                {field && type === "checkbox" && (
                                    <div className={classes.checkboxLabel}>
                                        <Typography variant="body2" className={classes.type}>{label}</Typography>
                                        <Checkbox value={formFields[name]} onChange={(e) => handleChange(e, changeHandlerMap[handleChangeFn])} className={classes.checkbox} />
                                    </div>
                                )}
                            </React.Fragment>
                        )
                    }) : null}
                    {textFields.length ? <Button className={classes.button} onClick={submitHandlerMap[submitHandlers.single]}>Submit</Button> : null}
                </div>
            </FormControl>
        </div >
    )
}

export default AdminForm;