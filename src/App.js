import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Menu from "./Components/clients/Menu";
import Home from "./Components/clients/Home";
// import NewProducts from "./Components/NewProducts";
import Footer from "./Components/clients/Footer";
import LoginPage from "./Components/clients/LoginPage";
import SignupPage from "./Components/clients/SignupPage";
import DetailProducts from "./Components/clients/DetailProducts";
import CheckOut from "./Components/clients/CheckOut";
import ScrollToTop from "./Components/clients/ScrollToTop";
import Profile from "./Components/clients/Profile";
import HomeVendor from "./Components/vendors/HomeVendor";
import Addproducts from "./Components/vendors/Addproducts";

function App(props) {
  return (
    <div>
      <ScrollToTop />
      {/* {props.location.pathname === "/login" ||
      props.location.pathname === "/signup" ? (
        ""
      ) : (
        <Menu />
      )} */}

      {props.location.pathname === "/login" ||
      props.location.pathname === "/signup" ? (
        ""
      ) : props.location.pathname === "/vendor" ||
        props.location.pathname === "/addproducts" ? (
        ""
      ) : (
        <Menu />
      )}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/product/:id" component={DetailProducts} />
        <Route path="/checkout/:id" component={CheckOut} />
        <Route path="/profil" component={Profile} />
        <Route path="/vendor" component={HomeVendor} />
        <Route path="/addproducts" component={Addproducts} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
