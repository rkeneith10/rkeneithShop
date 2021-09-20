import React, { useState, useEffect } from "react";
import { useParams, Redirect, useHistory } from "react-router-dom";
import MC_Button from "../../images/MC_button.png";
import Footer from "./Footer";
import axios from "axios";
import {} from "react-router-dom";

import "../../css/bootstrap.css";
import "../../css/nav.css";
import "../../css/style.css";

function CheckOut(props) {
  const { id } = useParams();
  //const product = products.find((x) => x.id === parseInt(id));

  const [product, setProduct] = useState([]);
  const history = useHistory();
  const url = "https://rkeneithshopbackend.herokuapp.com/api/singleproduct";
  const url1 = "http://localhost:5000/api/singleproduct";
  const urlprofil = "https://rkeneithshopbackend.herokuapp.com/api/profileInfo";
  const urlprofil1 = "http://localhost:5000/api/profileInfo";

  const paymenturl1 = "http://localhost:5000/api/payment";
  const paymenturl = "https://rkeneithshopbackend.herokuapp.com/api/payment";

  const [profil, setProfil] = useState([]);

  useEffect(() => {
    getOneProduct();
    infoprofile();
  }, []);

  const getOneProduct = () => {
    axios.get(`${url}/${id}`).then((response) => {
      setProduct(response.data.single);
    });
  };

  const infoprofile = () => {
    const token = localStorage.getItem("token");

    axios
      .get(urlprofil, { headers: { "x-access-token": token } })
      .then((response) => {
        const info = response.data.profileinfo;
        setProfil(info);
        // console.log(profil[1]);
        // console.log("Login" + profil.lastName);
      });
  };
  const theclick = () => {
    console.log("click");
    axios
      .post(paymenturl, {
        amount: localStorage.getItem("price"),
        orderId: Math.floor(Math.random() * 1000),
      })
      .then((response) => {
        if (response.data.success) {
          // history.push(response.data.link);
          window.location.href = response.data.link;
          //console.log(response.data.link);
        } else if (!response.data.success) {
          console.log("error");
        }
      });
  };

  const { priceTotale } = props.location.state;

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
                      src={product.imageUrl}
                      alt=""
                      style={{ width: "150px", height: "150px" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <h4>{product.title}</h4>
                    <p>{product.description}</p>

                    <p style={{ fontSize: "15px", color: "#7e7f84" }}>
                      Price:
                      <span
                        style={{
                          fontSize: "15px",
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        ${!priceTotale ? product.price : priceTotale}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <br />

              <div className="checkoutCard1">
                <h3>Ship to:</h3>

                <hr style={{ width: "90%", border: "1px solid #f0f0f0" }} />

                {localStorage.getItem("token") ? (
                  <div>
                    <p
                      style={{ fontSize: "17px", fontWeight: "bold" }}
                    >{`${profil.lastName} ${profil.firstName}`}</p>
                    <p style={{ fontSize: "14px" }}>{profil.adress}</p>
                    <p style={{ fontSize: "14px" }}>{profil.phoneNumber}</p>
                  </div>
                ) : (
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
                  </div>
                )}
                <div style={{ marginLeft: "20px" }}>
                  <img
                    onClick={() => theclick()}
                    src={MC_Button}
                    alt=""
                    style={{ width: "90px", height: "35px" }}
                  />
                </div>
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