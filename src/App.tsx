// dependencies
import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import {
  Login,
  Dashboard,
  UserForm,
  AppToolbar,
  UtilityBar,
  Home,
  AdminDash,
} from "./components";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

// store
import { RootState } from "./store";

// utils
import actions from "./store/allActions";

// styles
import { useStyles } from "./styles";
import "./App.css";

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ component: Component, ...rest }) {
  const auth = useSelector((state: RootState) => state.auth.loggedIn);
  return (
    <Route
      {...rest}
      render={(props) => {
        console.log(props.location);
        return auth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
}

const App: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);
  const auth = useSelector((state: RootState) => state.auth.loggedIn);
  const loading = useSelector((state: RootState) => state.auth.loading);
  const accounts = useSelector((state: RootState) => state.accounts.data);
  const { checkAuth, getAccounts } = actions;

  useEffect(() => {
    dispatch(checkAuth());
    // dispatch(getAccounts())
  }, [auth]);

  const renderEmptyPath = ({ match }) => {
    return auth ? <Redirect from="/" to="/home" /> : <Login />;
  };
  const renderLogin = ({ match }) => {
    return auth ? <Redirect from="/login" to="/home" /> : <Login />;
  };

  const renderHome = ({ match }) => {
    return <Home />;
  };

  const renderDashboard = ({ match }) => {
    console.log(match);
    return <Dashboard />;
  };

  // const renderForm = ({ match }) => {
  //   return <UserForm />;
  // };
  if (loading) return <div></div>;
  return (
    <Router>
      <Switch>
        <div className={classes.App}>
          <AppToolbar />
          <Route exact path="/" render={renderEmptyPath} />
          <Route path="/login" render={renderLogin} />
          <div>
            {auth && (
              <React.Fragment>
                <UtilityBar />
                <PrivateRoute exact path="/home" component={Home} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                {/* <Dashboard />
              <Redirect to={`/dashboard/${accounts.length ? accounts[0].accountId : ""}`} /> 
            </PrivateRoute>*/}
                <PrivateRoute
                  path="/dashboard/:accountId"
                  component={Dashboard}
                />
                <PrivateRoute
                  path="/dashboard/:accountId/user/:userId"
                  component={UserForm}
                />
              </React.Fragment>
            )}
            <PrivateRoute path="/admin" component={AdminDash} />
            {/* <PrivateRoute path="/data" component={Data}/> */}
          </div>
          {/* <Route render={() => <Redirect to={auth?"/home":"/login"} />} /> */}
        </div>
      </Switch>
    </Router>
  );
};

export default App;
