import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Landing from "./components/layouts/Landing";
import Dashboard from "./components/dashboard/Dashboard";
import "./App.css";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import EditProfile from "./components/profile-form/EditProfile";
import CreateProfile from "./components/profile-form/CreateProfile";
import AddExperience from "./components/profile-form/AddExperience";
import AddEducation from "./components/profile-form/AddEducation";
import Alert from "./components/layouts/Alert";
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/profile/Profile";
import PrivateRoute from "./components/routing/PrivateRoute";

// Posts
import Posts from './components/posts/Posts'
import Post from './components/post/Post'
// Redux
import { Provider } from "react-redux";
import store from "./Store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/profile/:id" component={Profile} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute
                exact
                path="/edit-profile"
                component={EditProfile}
              />
              <PrivateRoute
                exact
                path="/create-profile"
                component={CreateProfile}
              />
              <PrivateRoute
                exact
                path="/add-experience"
                component={AddExperience}
              />
              <PrivateRoute
                exact
                path="/add-education"
                component={AddEducation}
              />
              <PrivateRoute
                exact
                path="/posts"
                component={Posts}
              />
              <PrivateRoute
                exact
                path="/posts/:id"
                component={Post}
              />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
