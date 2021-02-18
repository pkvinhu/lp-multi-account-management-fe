// dependencies
import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import parse from 'html-react-parser';

// components
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';

// styles
import { useStyles } from './styles';

interface TextField {
    name: string;
    label: string;
    handleChangeFn: any;
    type: string;
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
    uploadCsv?: boolean;
    formFields: FormFields;
    changeHandlerMap: any;
}

const AdminForm = ({ title, description, handleChange, textFields = [], uploadCsv = false, formFields, changeHandlerMap }: AdminFormProps) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    // const state = useSelector((state: RootState) => state);
    const location = useLocation();
    const history = useHistory();
    console.log(description)

    const createMarkup = () => {
        return { __html: `<div>${description}</div>`}
    }

    return (
        <div>
            <Typography variant="h4">{title}</Typography>
            <br />
            <Typography variant="body1" dangerouslySetInnerHTML={createMarkup()}></Typography>
            <FormControl className={classes.formControl}>
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
                    {textFields.length ? <Button className={classes.button}>Submit</Button> : null}
                </div>
            </FormControl>
        </div>
    )
}

export default AdminForm;