import React from "react";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

import "../css/bootstrap.css";
import "../css/nav.css";
import "../css/style.css";
import imageMenu from "../images/menu.png";
import imgicon from "../images/Male User_32px.png";
import Shopping_Cart_32px from "../images/Shopping_Cart_32px.png";

const handelMenu = () => {
  $(" ul.nav").slideToggle("slow", function () {});
};

const Menu = () => {
  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="header-top">
            <div className="header-logo">
              <Link to="/">
                <h5>RKENEITHSHOP</h5>
              </Link>
            </div>
            <div className="header-right">
              <ul>
                <li className="checkout">
                  <div className="iconAccount">
                    <Link to="/login">
                      <img src={imgicon} alt="" />
                    </Link>
                  </div>
                </li>

                <li>
                  <Link>
                    <img src={Shopping_Cart_32px} alt="" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="clearfix"> </div>
          </div>

          <div className="top-nav">
            <span className="menu" onClick={handelMenu}>
              <img src={imageMenu} alt="" />
            </span>
            <ul className="nav">
              <li className="dropdown1">
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/">MEN</Link>
              </li>
              <li>
                <Link to="/">WOMEN</Link>
              </li>
              <li>
                <Link to="/">KIDS</Link>
              </li>
            </ul>
          </div>
          <div className="search">
            <form>
              <input type="text" placeholder="Search..." />
            </form>
          </div>

          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
