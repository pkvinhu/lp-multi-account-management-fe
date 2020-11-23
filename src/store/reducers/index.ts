import alertReducer from './alertReducer';
import weatherReducer from './weatherReducer';
import accountsReducer from './accountsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    weather: weatherReducer,
    alert: alertReducer, 
    accounts: accountsReducer
});

export default rootReducer;