import React from "react";
import products from "../data/products";
import Footer from "./Footer";
import { useParams } from "react-router-dom";

import "../css/bootstrap.css";
import "../css/nav.css";
import "../css/style.css";

const DetailProducts = (props) => {
  const { id } = useParams();
  const product = products.find((x) => x.id === parseInt(id));
  const relatedProduct = products.filter((p) => p.id !== parseInt(id));

  return (
    <div>
      <div className="single">
        <div className="container">
          <div className="row">
            <div className="col-md-9 ">
              <div className="single-left-left">
                <img
                  src={product.url}
                  alt=""
                  style={{ width: "250px", height: "300px" }}
                />
                <div className="clearfix"></div>
              </div>

              <div className="single-left-right">
                <div className="single-left-info" style={{ marginTop: "30px" }}>
                  <h3>{product.title}</h3>
                  <p className="detailsparagraph">{product.description}</p>

                  <p style={{ fontSize: "13px", color: "#7e7f84" }}>
                    Price:
                    <span style={{ fontSize: "19px", color: "#f45a40" }}>
                      ${product.id * 100}
                    </span>
                  </p>
                  <button className="btn btn-keneith">Add to cart</button>
                </div>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
          {/* <hr style={{ width: "80%", border: "1 solid #7e7f84" }} /> */}

          {/* kjsjdsk */}

          <div class="related" style={{ marginTop: "22px" }}>
            <p
              style={{ color: "#f45a40", fontWeight: "bold", fontSize: "20px" }}
            >
              RELATED PRODUCTS
            </p>
            <div class="related-grids">
              {relatedProduct.splice(0, 5).map((r, index) => (
                <div class="related-grid" key={index}>
                  <div class="col-md-9 related-left">
                    <div class="col-md-3 related-left-left">
                      <img src={r.url} alt="" />
                    </div>
                    <div class="col-md-9 related-left-right">
                      <p style={{ color: "#f45a40", fontSize: "20px" }}>
                        {r.title}
                      </p>
                      <p>{r.description}</p>
                    </div>
                    <div class="clearfix"> </div>
                  </div>
                  <div class="col-md-3 related-right">
                    <p style={{ fontSize: "13px", color: "#7e7f84" }}>
                      Price:
                      <span style={{ fontSize: "19px", color: "#f45a40" }}>
                        ${r.id * 100}
                      </span>
                    </p>
                    <button className="btn btn-keneith">Add to cart</button>
                  </div>
                  <div class="clearfix"> </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailProducts;
