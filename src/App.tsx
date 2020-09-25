import React, { FC } from 'react';
import './App.css';
import { Login, Search, Alert, Weather } from './components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { setAlert } from './store/actions/alertActions';
import { setError } from './store/actions/weatherActions';


const App: FC = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const loading = useSelector((state: RootState) => state.weather.loading);
  const error = useSelector((state: RootState) => state.weather.error);
  const alertMsg = useSelector((state: RootState) => state.alert.message);

  return (
    <Router>
      <div>
        <Search title="Enter city name and press search button" />
        {loading ? <h2> Loading ... </h2> : weatherData && <Weather data={weatherData} />}

        {alertMsg && <Alert message={alertMsg} onClose={() => dispatch(setAlert)}/>}
        {error && <Alert message={error} onClose={() => dispatch(setError())} />}
      </div>
    </Router>
  );
}

export default App;
