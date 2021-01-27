// dependencies
import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import { Login, Dashboard, UserForm, AppToolbar, UtilityBar, Home } from "./components";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

// store
import { RootState } from "./store";

// utils
import actions from "./store/allActions";

// styles
import { useStyles } from "./styles";
import "./App.css"

const App: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth.loggedIn);
  const { checkAuth, getAccounts } = actions;

  useEffect(() => {
    dispatch(checkAuth());
    dispatch(getAccounts())
  }, []);

  const renderLogin = ({ match }) => {
    return <Login />;
  }

  const renderHome = ({ match }) => {
    return <Home />;
  }

  const renderDashboard = ({ match }) => {
    // console.log(match.params)
    return <Dashboard />;
  }
  
  const renderForm = ({ match }) => {
    return <UserForm />;
  }

  return (
    <Router>
      <Switch>
      <div className={classes.App}>
        <AppToolbar />
        <Route exact path="/">
          {auth ? <Redirect to="/home" /> : <Login />}
        </Route>
        <Route path="/login" render={renderLogin}>
          <Redirect to="/" />
        </Route>
        {auth ? (
          <div>
            <Route exact path="/home" render={renderHome} />
            <Route path="/userForm" render={renderForm} />
            <Route exact path="/dashboard" render={renderDashboard} />
            <Route exact path="/dashboard/:accountId" render={renderDashboard} />
            <Route path="/dashboard/:accountId/user/:userId" render={renderForm} />
          </div>
        ) : null}
        {/* <Route render={() => <Redirect to="/" />} /> */}
        {auth && <UtilityBar />}
      </div>
      </Switch>
    </Router>
  );
};

export default App;
