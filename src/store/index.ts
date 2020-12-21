import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from './middleware/logger';
import monitorReducerEnhancer from './enhancers/monitorReducer';
import accountsReducer from './accounts/reducer';
import usersReducer from './users/reducer';
import skillsReducer from './skills/reducer';
import profilesReducer from './profiles/reducer';
import authReducer from './auth/reducer';
import agentGroupsReducer from './agentGroups/reducer';
import tableReducer from './table/reducer';
import appKeysReducer from './appkeys/reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    accounts: accountsReducer,
    users: usersReducer,
    skills: skillsReducer,
    profiles: profilesReducer,
    agentGroups: agentGroupsReducer,
    table: tableReducer,
    appKeys: appKeysReducer,
    auth: authReducer
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