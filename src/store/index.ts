import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { weatherReducer, alertReducer, accountsReducer } from './reducers';

const rootReducer = combineReducers({
    weather: weatherReducer,
    alert: alertReducer, 
    accounts: accountsReducer
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;