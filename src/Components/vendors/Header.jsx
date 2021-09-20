import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../../css/vendor/header.css";

import ScriptTag from "react-script-tag";

import menu from "../../images/Menu_50px.png";

const Header = () => {
  return (
    <div>
      <ScriptTag type="text/javascript" src="../../js/app.js" />
      <ScriptTag type="text/javascript" src="../../js/bootstrap.min.js" />
      <ScriptTag type="text/javascript" scr="../../js/jquery-3.2.1.min.js" />
      <div className="headervendor">
        <div className="header-left">
          <Link href="#">
            <h5 style={{ marginTop: "15px" }}>RKENEITH</h5>
          </Link>
        </div>
        <Link className="tbars" id="toggle_btn">
          {/* <img src={menu} alt="menu" /> */}
        </Link>
        <a id="mobile_btn" className="mobile_btn float-left" href="#sidebar">
          <img src={menu} alt="menu" />
        </a>
        <ul className="nav user-menu float-right">
          <li className="nav-item dropdown has-arrow">
            <Link
              to="#"
              className="dropdown-toggle nav-link user-link"
              data-toggle="dropdown"
            >
              <span className="user-img">
                <img className="rounded-circle" src="" width="24" alt="Admin" />
                <span className="status online"></span>
              </span>
              <span>0</span>
            </Link>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to="">
                Modifier mot de passe
              </Link>
              <Link className="dropdown-item" to="">
                Deconnexion
              </Link>
            </div>
          </li>
        </ul>
        <div className="dropdown mobile-user-menu float-right">
          <Link
            to="#"
            className="dropdown-toggle"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa fa-user-circle"></i>
          </Link>
          <div className="dropdown-menu dropdown-menu-right">
            <Link className="dropdown-item" to="">
              Modifier mot de passe
            </Link>
            <Link className="dropdown-item" to="">
              Deconnexion
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
