// dependencies
import React, { FC, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory, useParams } from 'react-router-dom';
import axios from "axios";

// store
import { RootState } from '../../store';
import actions from '../../store/allActions';

// components

// styles
import { useStyles } from './styles';

const Dashboard: FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state);
    const { } = actions;
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {

    }, [])

    const handleClick = async (event: any) => {
        event.preventDefault();
        const response = await axios('http://localhost:1337/api/accounts', {
            method: 'post',
            data: {
                password: "Partners1234!",
                accounts: [
                    {
                        account: { lpId: '13026445', brand: 'Kevin Hu' },
                        apiAgent: { username: "API Agent", password: "lppassword123" }
                    },
                    {
                        account: { lpId: '29778756', brand: 'Amneet Sandhu' },
                        apiAgent: { username: "API Agent", password: "lppassword123" }
                    },
                    {
                        account: { lpId: '44760929', brand: 'Dhruv Tejani' },
                        apiAgent: { username: "API Agent", password: "lppassword123" }
                    },
                    {
                        account: { lpId: '83759378', brand: 'Demetrios' },
                        apiAgent: { username: "API Agent", password: "lppassword123" }
                    },
                    {
                        account: { lpId: '3137094', brand: 'Pauline Wong' },
                        apiAgent: { username: "API Agent", password: "lppassword123" }
                    },
                ],
                requestingUser: {
                    username: "LPA-khu",
                    email: "khu@liveperson.com"
                }
            }
        })
        console.log(response.data);
    }

    return (
        <div className={classes.paper}>
            Admin
            <button onClick={handleClick} >Add Users</button>
        </div>

    )
}

export default Dashboard;