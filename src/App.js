import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Menu from "./Components/Menu";
import Home from "./Components/Home";
// import NewProducts from "./Components/NewProducts";
import Footer from "./Components/Footer";
import LoginPage from "./Components/LoginPage";
import SignupPage from "./Components/SignupPage";
import DetailProducts from "./Components/DetailProducts";

function App(props) {
  return (
    <div>
      {props.location.pathname === "/login" ||
      props.location.pathname === "/signup" ? (
        ""
      ) : (
        <Menu />
      )}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/product/:id" component={DetailProducts} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
