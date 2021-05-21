import React from "react";
import "../css/bootstrap.css";
import "../css/nav.css";
import "../css/style.css";
import { Link } from "react-router-dom";

function TemplateProduct({ product }) {
  return (
    <div>
      <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
        <div className="card" style={{ borderRadius: "0px" }}>
          <img className="card-img-top" src={product.url} alt="" />
          <div className="card-body">
            <p className="">{product.title}</p>
            <p className="card-text">{product.description}</p>
            <p style={{ color: "#f45a40", fontSize: "16px," }}>
              $ {product.id * 100}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default TemplateProduct;
