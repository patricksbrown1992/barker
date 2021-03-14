import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import SplashBody from "./splash/splashForm";
import SignUp from "./signUp/signUpForm";
import Login from "./logIn/logInForm";
import { Authorized, ProtectedRoute } from "../util/routeUtil";
import BarkIndex from "../components/barks/barkIndexForm";
import UserShow from '../components/users/userShowForm'
// import Player from "../components/videos/playerContainer";
// import List from "../components/list/listContainer";
const App = () => (
  <>
    <Switch>
      <Authorized path="/signup" component={SignUp} />
      <Authorized path="/login" component={Login} />
      <ProtectedRoute path="/users/:id" component={UserShow} />
      <ProtectedRoute path="/barks" component={BarkIndex} />
      <Authorized exact path="/" component={SplashBody} />
    </Switch>
  </>
);

export default App;
