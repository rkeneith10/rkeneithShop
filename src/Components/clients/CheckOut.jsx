import React, { useState, useEffect } from "react";
import { useParams, Redirect, useHistory } from "react-router-dom";

import Footer from "./Footer";
import validator from "validator";
import axios from "axios";
import {} from "react-router-dom";

import "../../css/bootstrap.css";
import "../../css/nav.css";
import "../../css/style.css";

import MC_Button from "../../images/MC_button.png";
import contact from "../../images/Contacts_22px.png";
import marker from "../../images/Marker_22px.png";
import email from "../../images/SecuredLetter_22px.png";
import phone from "../../images/Touchscreen_22px.png";

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
  const [thaclick, setThaclick] = useState(true);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showMessage, setShowMessage] = useState("");

  useEffect(() => {
    getOneProduct();
    infoprofile();
  }, []);

  const getOneProduct = () => {
    axios.get(`${url1}/${id}`).then((response) => {
      setProduct(response.data.single);
    });
  };

  const infoprofile = () => {
    const token = localStorage.getItem("token");

    axios
      .get(urlprofil1, { headers: { "x-access-token": token } })
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
      .post(paymenturl1, {
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

  const theclick1 = () => {
    console.log("click1");
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      confirmEmail === "" ||
      adress === "" ||
      phoneNumber === ""
    ) {
      setShowMessage("Fill all the field");
    } else if (!validator.isEmail(email)) {
      setShowMessage("This Email is not valid");
    } else if (email !== confirmEmail) {
      setShowMessage("Confirm your email");
    } else {
      axios
        .post(paymenturl1, {
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
    }
  };

  return (
    <div>
      <div className="single">
        <div className="container">
          <h3>RKENEITHSHOP Ckeckout1</h3>
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
                        {localStorage.getItem("price")}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <br />

              <div>
                {localStorage.getItem("token") ? (
                  <div className="checkoutCard1">
                    <h3>Ship to:</h3>

                    <hr style={{ width: "90%", border: "1px solid #f0f0f0" }} />

                    <div>
                      <p style={{ fontSize: "17px", fontWeight: "bold" }}>
                        <span style={{ marginRight: "8px" }}>
                          <img src={contact} alt="" />
                        </span>
                        {`${profil.lastName} ${profil.firstName}`}
                      </p>
                      <p style={{ fontSize: "13px" }}>
                        <span style={{ marginRight: "8px" }}>
                          <img src={marker} alt="" />
                        </span>
                        {profil.adress}
                      </p>
                      <p style={{ fontSize: "14px" }}>
                        <span style={{ marginRight: "8px" }}>
                          <img src={email} alt="" />
                        </span>
                        {profil.email}
                      </p>
                      <p style={{ fontSize: "14px" }}>
                        <span style={{ marginRight: "8px" }}>
                          <img src={phone} alt="" />
                        </span>
                        +509 {profil.phoneNumber}
                      </p>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                      <img
                        onClick={() => theclick()}
                        src={MC_Button}
                        alt=""
                        style={{
                          width: "90px",
                          height: "35px",
                          cursor: "pointer",
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="checkoutCard2">
                    <h3>Ship to:</h3>
                    {showMessage && (
                      <div className="alert alert-danger" role="alert">
                        {showMessage}
                      </div>
                    )}
                    <hr style={{ width: "90%", border: "1px solid #f0f0f0" }} />
                    <div className="form-group">
                      <div className="col-md-6 btm">
                        <label>First Name</label>
                        <input
                          className="form-control"
                          placeholder="First Name"
                          onChange={(e) => {
                            setFirstName(e.target.value);
                          }}
                        />
                      </div>
                      <div className="col-md-6 btm">
                        <label>Last Name</label>
                        <input
                          className="form-control"
                          placeholder="Last Name"
                          onChange={(e) => {
                            setLastName(e.target.value);
                          }}
                        />
                      </div>{" "}
                      <div className="col-md-6 btm">
                        <label>Email</label>
                        <input
                          className="form-control"
                          placeholder="Email"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </div>
                      <div className="col-md-6 btm">
                        <label>Confirm Email</label>
                        <input
                          className="form-control"
                          placeholder="Confirm Email"
                          onChange={(e) => {
                            setConfirmEmail(e.target.value);
                          }}
                        />
                      </div>
                      <div className="col-md-6 btm">
                        <label>Adress</label>
                        <input
                          className="form-control"
                          placeholder="Adress"
                          onChange={(e) => {
                            setAdress(e.target.value);
                          }}
                        />
                      </div>
                      <div className="col-md-6 btm">
                        <label>Phone Number</label>
                        <input
                          className="form-control"
                          type="Number"
                          placeholder="Phone Number"
                          onChange={(e) => {
                            setPhoneNumber(e.target.value);
                          }}
                        />
                      </div>
                      <div style={{ marginLeft: "20px", marginTop: "25px" }}>
                        <img
                          onClick={() => theclick1()}
                          src={MC_Button}
                          alt=""
                          style={{
                            width: "90px",
                            height: "35px",
                            cursor: "pointer",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                )}
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
