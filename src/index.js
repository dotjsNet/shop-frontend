import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import reducer, { initialState } from "states/reducer.js";
import { StateProvider } from "states/StateProvider";

import "assets/css/nucleo-icons.css";
import "assets/scss/jaystore-react.scss?v=1.2.0";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import Checkout from "views/checkout/Checkout.js";
import * as serviceWorker from "./serviceWorker.js";
import Login from "views/auth/Login.js";
import Register from "views/auth/Register.js";

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <BrowserRouter>
      <Switch>
        <Route path="/components" render={(props) => <Index {...props} />} />
        <Route
          path="/landing-page"
          render={(props) => <LandingPage {...props} />}
        />
        <Route
          path="/register-page"
          render={(props) => <RegisterPage {...props} />}
        />
        <Route
          path="/profile-page"
          render={(props) => <ProfilePage {...props} />}
        />
        <Route path="/checkout" render={(props) => <Checkout {...props} />} />
        <Route path="/login" render={(props) => <Login {...props} />} />
        <Route path="/register" render={(props) => <Register {...props} />} />
        <Redirect from="/" to="/components" />
      </Switch>
    </BrowserRouter>
  </StateProvider>,

  document.getElementById("root")
);

serviceWorker.unregister();
