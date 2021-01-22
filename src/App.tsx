// dependencies
import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import { Login, Dashboard, UserForm } from "./components";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

// store
import { RootState } from "./store";

// utils
import { checkAuth } from "./store/auth/actions";

// styles
import { useStyles } from "./styles";
import "./App.css";

const App: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const authenticated = useSelector((state: RootState) => state.auth.loggedIn);
  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  return (
    <Router>
      <div className="App">
        <div className={classes.polygon}></div>
        <div className={classes.polygon2}></div>
        <Route path="/">
          {authenticated ? <Redirect to="/dashboard" /> : <Login />}
        </Route>
        <Route path="/login">
          <Redirect to="/" />
        </Route>
        {authenticated ? (
          <div>
            <Route path="/userForm" component={UserForm} />
            <Route path="/dashboard" component={Dashboard} />
          </div>
        ) : null}
        <Route render={() => <Redirect to="/" />} />
      </div>
    </Router>
  );
};

export default App;
