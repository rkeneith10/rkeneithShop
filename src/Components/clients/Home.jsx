import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import TemplateProduct from "./TemplateProduct";
import ReactLoading from "react-loading";
import axios from "axios";

import "../../css/bootstrap.css";
import "../../css/nav.css";
import "../../css/style.css";

function Banner() {
  const [products, setproducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = "https://rkeneithshopbackend.herokuapp.com/api/allproducts";
  const url1 = "http://localhost:5000/api/allproducts";

  const token = localStorage.getItem("token");

  useEffect(() => {
    getAllProducts();
    tchek();
  }, []);
  const tchek = () => {
    if (token) {
      console.log("Token in the browser");
    }
  };

  const getAllProducts = () => {
    axios.get(url).then((response) => {
      const allProducts = response.data.all;
      setproducts(allProducts);
      setLoading(true);
    });
  };
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
      <div className="container">
        <div className="col-md-12">
          <h3
            style={{ textAlign: "center", color: "gray", fontWeight: "bold" }}
          >
            Shop by Category
          </h3>
          <p
            style={{ textAlign: "center", color: "gray", marginBottom: "30px" }}
          >
            Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet
          </p>
        </div>
        <div className="row">
          {!loading ? (
            <div style={{ marginLeft: "auto", marginRight: "auto" }}>
              <ReactLoading
                type={"spin"}
                color={"gray"}
                height={150}
                width={150}
              />
            </div>
          ) : (
            products.map((product, index) => (
              <div
                className="col-lg-3 col-md-4 col-sm-6 col-6"
                key={index}
                style={{ marginBottom: "20px" }}
              >
                <TemplateProduct product={product} />
              </div>
            ))
          )}
          {/* {products.map((product, index) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 col-6"
              key={index}
              style={{ marginBottom: "20px" }}
            >
              <TemplateProduct product={product} />
            </div>
          ))} */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Banner;
