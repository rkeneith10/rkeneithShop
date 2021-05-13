import React, { useEffect } from "react";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import ScriptTag from "react-script-tag";
import { Link, useHistory } from "react-router-dom";

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
                {/* <ul className="dropdown2">
                  <li>
                    <a href="single.html">lorem</a>
                  </li>
                  <li>
                    <a href="single.html">dorem sia</a>
                  </li>
                  <li>
                    <a href="single.html">erik</a>
                  </li>
                  <li>
                    <a href="single.html">ipsum padamans</a>
                  </li>
                  <li>
                    <a href="single.html">behance</a>
                  </li>
                </ul> */}
              </li>
              <li>
                <Link to="/">MEN</Link>
                {/* <ul className="dropdown2">
                  <li>
                    <a href="men.html">Clothing</a>
                  </li>
                  <li>
                    <a href="men.html">Footwear</a>
                  </li>
                  <li>
                    <a href="men.html">Watches</a>
                  </li>
                  <li>
                    <a href="men.html">Accessories</a>
                  </li>
                </ul> */}
              </li>
              <li>
                <Link to="/">WOMEN</Link>
                {/* <ul className="dropdown2">
                  <li>
                    <a href="women.html">Ethnic Wear</a>
                  </li>
                  <li>
                    <a href="women.html">Western Wear</a>
                  </li>
                  <li>
                    <a href="women.html">All Jewellery</a>
                  </li>
                  <li>
                    <a href="women.html">Beauty & Wellness</a>
                  </li>
                </ul> */}
              </li>
              <li>
                <Link to="/">KIDS</Link>
                {/* <ul className="dropdown2">
                  <li>
                    <a href="women.html">Clothing</a>
                  </li>
                  <li>
                    <a href="women.html">Footwear</a>
                  </li>
                  <li>
                    <a href="women.html">Accessories</a>
                  </li>
                </ul> */}
              </li>

              {/* <li>
                <a href="about.html">ABOUT US</a>
              </li>
              <li>
                <a href="404.html">SUPPORT</a>
              </li> */}
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
