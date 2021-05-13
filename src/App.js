import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Menu from "./Components/Menu";
import Banner from "./Components/Banner";
import NewProducts from "./Components/NewProducts";
import Footer from "./Components/Footer";
import LoginPage from "./Components/LoginPage";
import SignupPage from "./Components/SignupPage";

function App(props) {
  return (
    <div>
      {props.location.pathname === "/login" ||
      props.location.pathname === "/signup" ? (
        ""
      ) : (
        <Menu />
      )}
      {props.location.pathname === "/login" ||
      props.location.pathname === "/signup" ? (
        ""
      ) : (
        <Banner />
      )}
      {props.location.pathname === "/login" ||
      props.location.pathname === "/signup" ? (
        ""
      ) : (
        <NewProducts />
      )}
      {props.location.pathname === "/login" ||
      props.location.pathname === "/signup" ? (
        ""
      ) : (
        <Footer />
      )}

      <Switch>
        <Route strict path="/login" component={LoginPage} />
        <Route strict path="/signup" component={SignupPage} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
