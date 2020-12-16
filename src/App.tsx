import React, { FC, useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { Login, Dashboard, UserForm } from "./components";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { checkAuth } from "./store/auth/actions";

const App: FC = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector((state: RootState) => state.auth.loggedIn);
  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  return (
    <Router>
      <div className="App">
        <div className="polygon"></div>
        <div className="polygon2"></div>
        <Route path="/">
          {authenticated ? <Redirect to="/dashboard" /> : <Login />}
        </Route>
        <Route path="/login">
          <Redirect to="/" />
        </Route>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/userForm" component={UserForm} />
        {authenticated ? (
          <div>
            <Route path="/dashboard" component={Dashboard} />
          </div>
        ) : null}
        <Route render={() => <Redirect to="/" />} />
      </div>
    </Router>
  );
};

export default App;
