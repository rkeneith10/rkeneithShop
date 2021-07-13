import React, { useEffect, useState } from "react";
import "../css/bootstrap.css";
import "../css/nav.css";
import "../css/style.css";
import { Link } from "react-router-dom";
import axios from "axios";

function TemplateProduct({ product }) {
  return (
    <div>
      <Link to={`/product/${product._id}`} style={{ textDecoration: "none" }}>
        <div className="card" style={{ borderRadius: "0px" }}>
          <img
            className="card-img-top"
            style={{ height: "200px" }}
            src={product.imageUrl}
            alt=""
          />
          <div className="card-body">
            <p className="">{product.title}</p>
            {/* <p className="card-text">{product.description}</p> */}
            <p style={{ color: "#f45a40", fontSize: "16px," }}>
              $ {product.price}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default TemplateProduct;
