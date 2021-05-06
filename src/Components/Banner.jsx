import React from "react";
import ScriptTag from "react-script-tag";
import { Link } from "react-router-dom";

import "../css/bootstrap.css";
import "../css/nav.css";
import "../css/style.css";

function Banner() {
  <ScriptTag
    isHydrating={true}
    type="text/javascript"
    src="../js/responsiveslides.min.js"
  />;
  return (
    <div>
      <div className="banner">
        <div id="top" className="callbacks_container">
          <div className=" banner-bg banner-img2">
            <div className="container">
              <div className="banner-info">
                <h2>
                  RKENEITH.<span>SHOP</span>
                </h2>
                <p>
                  Inspired by Brasil’s bold colors and matching up to football’s
                  on-pitch playmakers, these kicks Brasil’s are ready to stand
                  out.
                </p>
                <Link to="/">Start Shopping</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
