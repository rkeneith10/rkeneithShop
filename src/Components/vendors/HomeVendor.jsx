import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ScriptTag from "react-script-tag";

import "../../css/vendor/select2.min.css";
// import "../../css/vendor/sidebar.css";
// import "../../css/vendor/header.css";
import "../../css/vendor/bootstrap.min.css";
import "../../css/vendor/style2.css";

const HomeVendor = () => {
  return (
    <div>
      <ScriptTag type="text/javascript" src="../../js/app.js" />
      <ScriptTag type="text/javascript" src="../../js/bootstrap.min.js" />
      <ScriptTag type="text/javascript" scr="../../js/jquery-3.2.1.min.js" />
      <Header />
      <Sidebar />
      <div className="page-wrapper col-lg-10 offset-lg-2">
        <div className="content">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div className="dash-widget">
                <span className="dash-widget-bg1">
                  <i class="fa fa-user-md" aria-hidden="true"></i>
                </span>
                <div className="dash-widget-info text-right">
                  <h3>12</h3>
                  <span className="widget-title1">Articles </span>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div className="dash-widget">
                <span className="dash-widget-bg1">
                  <i class="fa fa-user-md" aria-hidden="true"></i>
                </span>
                <div className="dash-widget-info text-right">
                  <h3>12</h3>
                  <span className="widget-title1">Articles </span>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div className="dash-widget">
                <span className="dash-widget-bg1">
                  <i class="fa fa-user-md" aria-hidden="true"></i>
                </span>
                <div className="dash-widget-info text-right">
                  <h3>12</h3>
                  <span className="widget-title1">Articles </span>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div className="dash-widget">
                <span className="dash-widget-bg1">
                  <i class="fa fa-user-md" aria-hidden="true"></i>
                </span>
                <div className="dash-widget-info text-right">
                  <h3>12</h3>
                  <span className="widget-title1">Articles </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeVendor;
