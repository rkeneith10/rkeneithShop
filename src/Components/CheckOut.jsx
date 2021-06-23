import React, { useState } from "react";
import products from "../data/products";
import { useParams } from "react-router-dom";
import MC_Button from "../images/MC_button.png";
import Footer from "./Footer";

import "../css/bootstrap.css";
import "../css/nav.css";
import "../css/style.css";

function CheckOut() {
  const { id } = useParams();
  const product = products.find((x) => x.id === parseInt(id));
  const theclick = () => {
    console.log("The Click");
  };

  const [quantity, setQuantity] = useState("");

  return (
    <div>
      <div className="single">
        <div className="container">
          <h3>RKENEITHSHOP Ckeckout</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="checkoutCard">
                <div className="row">
                  <div className="col-md-4">
                    <img
                      src={product.url}
                      alt=""
                      style={{ width: "150px", height: "150px" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <h5>{product.title}</h5>
                    <p>
                      Quantity:{" "}
                      <select
                        value={quantity}
                        onChange={(e) => {
                          const selectedNumber = e.target.value;
                          setQuantity(selectedNumber);
                        }}
                      >
                        <option value="1" selected>
                          1
                        </option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                    </p>

                    <p style={{ fontSize: "13px", color: "#7e7f84" }}>
                      Price:$
                      <span style={{ fontSize: "19px", color: "#" }}>
                        {quantity !== 1
                          ? product.id * quantity * 100
                          : product.id * 100}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <br />

              <div className="checkoutCard1">
                <h3>Ship to:</h3>

                <hr style={{ width: "90%", border: "1px solid #f0f0f0" }} />

                <form>
                  <div className="form-group">
                    <div className="col-md-6 btm">
                      <label>First Name</label>
                      <input
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="col-md-6 btm">
                      <label>Last Name</label>
                      <input className="form-control" placeholder="Last Name" />
                    </div>{" "}
                    <div className="col-md-6 btm">
                      <label>Email</label>
                      <input className="form-control" placeholder="Email" />
                    </div>
                    <div className="col-md-6 btm">
                      <label>Confirm Email</label>
                      <input
                        className="form-control"
                        placeholder="Confirm Email"
                      />
                    </div>
                    <div className="col-md-6 btm">
                      <label>Adress</label>
                      <input className="form-control" placeholder="Adress" />
                    </div>
                    <div className="col-md-6 btm">
                      <label>Phone Number</label>
                      <input
                        className="form-control"
                        type="Number"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                      <img
                        onClick={() => theclick()}
                        src={MC_Button}
                        alt=""
                        style={{ width: "90px", height: "35px" }}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CheckOut;
