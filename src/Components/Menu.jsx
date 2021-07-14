import React, { useState, useEffect } from "react";
import $ from "jquery";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { MDBIcon } from "react-icons/fa";
import user from "../images/User_20px.png";
import logout from "../images/Shutdown_20px.png";
import order from "../images/Box_20px.png";

import "../css/bootstrap.css";
import "../css/nav.css";
import "../css/style.css";
import imageMenu from "../images/menu.png";
import imgicon from "../images/Male User_32px.png";
import Shopping_Cart_32px from "../images/Shopping_Cart_32px.png";
import axios from "axios";

const handelMenu = () => {
  $(" ul.nav").slideToggle("slow", function () {});
};

const Menu = () => {
  const [profil, setProfil] = useState();
  const history = useHistory();
  const logoutUser = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  const infoprofile = () => {
    const url = "https://rkeneithshopbackend.herokuapp.com/api/profileInfo";
    axios.get(url).then((response) => {
      setProfil(response.data.profileinfo);
      console.log(response.data.profileinfo);
    });
  };

  useEffect(() => {
    infoprofile();
  }, []);
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
                    {!localStorage.getItem("token") ? (
                      <Link to="/login">
                        <img src={imgicon} alt="" />
                      </Link>
                    ) : (
                      <div className="dropdown">
                        <Link
                          className=""
                          href="#"
                          id="userDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <img src={imgicon} alt="" />
                          <span style={{ marginLeft: "4px" }}>rkeneith</span>
                        </Link>
                        <div
                          style={{ marginTop: "10px" }}
                          className="dropdown-menu dropdown-menu-right"
                          aria-labelledby="userDropdown"
                        >
                          <Link className="dropdown-item" to="profile.html">
                            <img src={user} alt="" /> Profile
                          </Link>

                          <Link className="dropdown-item" to="profile.html">
                            <img src={order} alt="" /> Orders
                          </Link>

                          <Link class="dropdown-item" onClick={logoutUser}>
                            <img src={logout} alt="" /> Logout
                          </Link>
                        </div>
                      </div>
                    )}
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
