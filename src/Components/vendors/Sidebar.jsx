import React from "react";
import { Link } from "react-router-dom";
// import "../../css/vendor/fontawesome.min.css";
import "../../css/vendor/bootstrap.min.css";
import ScriptTag from "react-script-tag";
//import "../../css/vendor/style2.css";

import home from "../../images/Home_23px.png";
import addproduct from "../../images/AddList_23px.png";
import list from "../../images/List_23px.png";

const Sidebar = () => {
  return (
    <div>
      <ScriptTag type="text/javascript" src="../../js/app.js" />
      <ScriptTag type="text/javascript" src="../../js/bootstrap.min.js" />
      <ScriptTag type="text/javascript" scr="../../js/jquery-3.2.1.min.js" />
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner ">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title">Menu</li>
              <li>
                <a href="/">
                  <img src={home} alt="" style={{ color: "#fff" }} />{" "}
                  <span>Home</span>
                </a>
              </li>
              {/* 
              <li className="submenu patient">
                <a href="#">
                  <i className="fa fa-wheelchair"></i> <span>Patients</span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="/">Ajouter patient</a>
                  </li>
                  <li>
                    <a href="/">Tous les patients</a>
                  </li>
                </ul>
              </li> */}

              <li>
                <Link to="/addproducts">
                  <img src={addproduct} alt="" /> <span>Add products</span>
                </Link>
              </li>

              <li>
                <a href="/">
                  <img src={list} alt="" /> <span>List products</span>
                </a>
              </li>

              <li>
                <a href="/">
                  <img src={list} alt="" /> <span>List of sales</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
