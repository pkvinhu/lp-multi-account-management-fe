import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from './middleware/logger';
import monitorReducerEnhancer from './enhancers/monitorReducer';
import alertReducer from './reducers/alertReducer';
import weatherReducer from './reducers/weatherReducer';
import accountsReducer from './accounts/reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    weather: weatherReducer,
    alert: alertReducer, 
    accounts: accountsReducer
});

const configureStore = (preloadedState: any) => {
    const middlewares = [thunkMiddleware, loggerMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const enhancers = [middlewareEnhancer, monitorReducerEnhancer];
    const composedEnhancers = composeWithDevTools({});

    const store = createStore(
        rootReducer,
        preloadedState,
        composedEnhancers(...enhancers)
    );

    return store;
}

export type RootState = ReturnType<typeof rootReducer>;

export default configureStore;