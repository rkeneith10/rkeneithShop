import React from "react";
import { Link } from "react-router-dom";

import "../css/bootstrap.css";
import "../css/nav.css";
import "../css/style.css";
import "../css/mycss.css";

function Footer() {
  return (
    <div>
      <div className="pied">
        <div className="container" style={{ paddingTop: "25px" }}>
          <div className="col-sm-3 ">
            {/* <img src="../img/logo.jpg" style="width: 100%;height: 130px;"/> */}
            <h3>RKENEITHSHOP</h3>
          </div>

          <div className="col-sm-3" style={{ color: "#fff" }}>
            <ul>
              <li className="lien">
                <Link to="/">HOME</Link>
              </li>
              <li className="lien">
                <Link to="/">MEN</Link>
              </li>
              <li className="lien">
                <Link to="/">WOMEN</Link>
              </li>
              <li className="lien">
                <Link to="/">KIDS</Link>
              </li>
            </ul>

            <hr className="separateur" />
          </div>

          <div className="col-sm-3">
            <ul>
              <li className="lien">
                <a href="#">Facebook</a>
              </li>
              <li className="lien">
                <a href="#">Twitter</a>
              </li>
            </ul>
          </div>

          <div className="col-sm-3">
            <h4 className="text-center">CONTACT US</h4>
            <center>
              <input
                type="text"
                name="email1"
                id="input1"
                placeholder="Your Email"
                className="form-control"
                style={{
                  backgroundColor: "transparent",
                  borderRadius: "0px",
                  marginBottom: "10px",
                }}
              />
              {/* <input
                  type="text"
                  name="email1"
                  id="input2"
                  placeholder="Antre adres elektwonik ou"
                  className="form-control"
                  style={{
                    backgroundColor: "transparent",
                    borderRadius: "0px",
                    marginBottom: "10px",
                  }}
                /> */}
              <textarea
                name="email1"
                id="input2"
                placeholder="Antre adres elektwonik ou"
                className="form-control"
                style={{
                  backgroundColor: "transparent",
                  borderRadius: "0px",
                  marginBottom: "10px",
                }}
              ></textarea>

              <input
                type="submit"
                name="enskri"
                value="Enskri"
                style={{
                  backgroundColor: "#ff674f",
                  fontWeight: "bold",
                  color: "#fff",
                  borderRadius: "0px",
                  border: "none",
                  padding: "10px 20px 10px 20px",
                }}
              />
            </center>
          </div>
        </div>
      </div>

      <div
        className="container-fluid"
        style={{
          backgroundColor: "#2a2d34",
          height: "65px",
          borderTop: " 0.5px solid #fff",
        }}
      >
        <center>
          <p style={{ lineHeight: "65px", color: "#fff" }}>
            © Copyright Konnen Dwa ou 2018
          </p>
        </center>
      </div>
    </div>
  );
}

export default Footer;
