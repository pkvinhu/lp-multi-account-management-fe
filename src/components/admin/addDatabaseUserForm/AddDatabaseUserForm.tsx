// dependencies
import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';

// components
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// styles
import { useStyles } from './styles';

interface AddDatabaseUserFormProps {
    title: string;
    description: string;
}

const AddDatabaseUserForm = ({ title, description }: AddDatabaseUserFormProps) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    // const state = useSelector((state: RootState) => state);
    const location = useLocation();
    const history = useHistory();

    const handleChange = (e: any) => {
        console.log(e.target.value)
    }

    return (
        <div>
            <Typography variant="h3">{title}</Typography>
            <Typography variant="body1">{description}</Typography>
            <FormControl>

            </FormControl>
        </div>
    )
}

export default AddDatabaseUserForm;