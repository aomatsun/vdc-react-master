import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";
import 'assets/stylesheets/block-library-style.min.css';
import 'assets/stylesheets/contact-form-styless.css';
// import 'assets/stylesheets/revslider-rs6.css';
import 'assets/stylesheets/dashicons.min.css';
import 'assets/stylesheets/bootstrap/bootstrap.min.css';
import 'assets/stylesheets/animate.min.css';
import 'assets/stylesheets/magnific-popup/magnific-popup.css';
import 'assets/stylesheets/font-awesome/css/font-awesome.min.css';
// import 'assets/stylesheets/style.css';
// import 'assets/stylesheets/js_composer.css';
import "assets/stylesheets/custom.css";
// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
// import ProfilePage from "views/ProfilePage/ProfilePage.js";
// import LoginPage from "views/LoginPage/LoginPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      {/* <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} /> */}
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
