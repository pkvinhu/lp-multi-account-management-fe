import React, { FC, useState, FormEvent } from 'react';
import { setAlert } from '../../store/actions/alertActions'; 
import { getWeather, setLoading } from '../../store/actions/weatherActions';
import { useDispatch } from 'react-redux';


interface SearchProps
 {
    title: string;
}

const Search: FC<SearchProps> = ({title}) => {
    const dispatch = useDispatch();
    const [city, setCity] = useState('');

    const changeHandler = (e: FormEvent<HTMLInputElement>) => {
        setCity(e.currentTarget.value);
    }

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(city.trim() === '') {
            return dispatch(setAlert('City is required!'))
        }

        dispatch(setLoading());
        dispatch(getWeather(city));
    }
    return (
        <div className="hero is-light has-text-centered">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">{title}</h1>
                    <form className="py-5">
                        <input 
                        type="text"
                        placeholder="Enter city name"
                        value={city}
                        onChange={changeHandler}
                        />
                        <button onSubmit={submitHandler}>Click me</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Search;