import React, { useState, useEffect } from "react";

import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";

import "../css/bootstrap.css";
import "../css/nav.css";
import "../css/style.css";
import axios from "axios";

const DetailProducts = (props) => {
  const { id } = useParams();
  // const product = products.find((x) => x.id === parseInt(id));
  // const relatedProduct = products.filter((p) => p.id !== parseInt(id));

  const [quantity, setQuantity] = useState("");
  const [cart, setCart] = useState([]);

  const [singleproduct, setSingleProduct] = useState([]);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = "https://rkeneithshopbackend.herokuapp.com/api/singleproduct";
  const url1 = "http://localhost:5000/api/singleproduct";
  useEffect(() => {
    getOneProduct();
    relatedproducts();
  }, []);

  const getOneProduct = () => {
    axios.get(`${url}/${id}`).then((response) => {
      const product = response.data.single;
      setSingleProduct(product);
      setLoading(true);
    });
  };

  const relatedproducts = () => {
    axios
      .get(`https://rkeneithshopbackend.herokuapp.com/api/relatedproduct/${id}`)
      .then((response) => {
        const relatedproduct = response.data.relatedProduct;
        setRelated(relatedproduct);
      });
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.table(cart);
  };

  const handleChange = (e) => {
    const selectedNumber = e.target.value;
    setQuantity(selectedNumber);
  };

  return (
    <div>
      {!loading ? (
        <div style={{ margin: "0 auto", marginRight: "auto", width: "200px" }}>
          <ReactLoading type={"spin"} color={"gray"} height={150} width={150} />
        </div>
      ) : (
        <div className="single">
          <div className="container">
            <div className="row">
              <div className="col-md-9 ">
                <div className="single-left-left">
                  <img
                    src={singleproduct.imageUrl}
                    alt=""
                    style={{ width: "200px", height: "230px" }}
                  />
                  <div className="clearfix"></div>
                </div>

                <div className="single-left-right">
                  <div
                    className="single-left-info"
                    style={{ marginTop: "30px" }}
                  >
                    <h3>{singleproduct.title}</h3>
                    <p className="detailsparagraph">
                      {singleproduct.description}
                    </p>
                    <p style={{ fontSize: "13px", color: "#7e7f84" }}>
                      Price:
                      <span style={{ fontSize: "19px", color: "#f45a40" }}>
                        ${singleproduct.price}
                      </span>
                    </p>

                    <p>
                      Quantity:{" "}
                      {/* <select value={quantity} onChange={handleChange}>
                        <option value="1" selected>
                          1
                        </option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select> */}
                    </p>

                    <button
                      className="btn btn-addToCard"
                      style={{ marginRight: "20px" }}
                      // onClick={() => addToCart(product)}
                    >
                      Add to cart
                    </button>

                    <Link
                      to={{
                        pathname: `/checkout/${singleproduct._id}`,
                        state: {
                          priceTotale: singleproduct.price,
                        },
                      }}
                    >
                      <button
                        className="btn btn-keneith"
                        onClick={localStorage.setItem(
                          "price",
                          singleproduct.price
                        )}
                      >
                        Buy Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-3"></div>
            </div>
            {/* <hr style={{ width: "80%", border: "1 solid #7e7f84" }} /> */}

            {/* kjsjdsk */}
            {/* 
          <div className="related" style={{ marginTop: "30px" }}>
            <p
              style={{ color: "#f45a40", fontWeight: "bold", fontSize: "20px" }}
            >
              RELATED PRODUCTS
            </p>
            <div className="related-grids">
              {related.splice(0, 5).map((r, index) => (
                <div className="related-grid" key={index}>
                  <div className="col-md-9 ">
                    <Link to={`/product/${r._id}`}>
                      <div className="col-md-3 related-left-left">
                        <img src={r.imageUrl} alt="" />
                      </div>
                    </Link>
                    <div className="col-md-9 related-left-right">
                      <p style={{ color: "#f45a40", fontSize: "20px" }}>
                        {r.title}
                      </p>
                      <p>{r.description}</p>

                      <p style={{ fontSize: "13px", color: "#7e7f84" }}>
                        Price:
                        <span style={{ fontSize: "19px", color: "#f45a40" }}>
                          ${r.price}
                        </span>
                      </p>
                    </div>
                    <div className="clearfix"> </div>
                  </div>

                  <div class="clearfix"> </div>
                </div>
              ))}
            </div>
          </div> */}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default DetailProducts;
