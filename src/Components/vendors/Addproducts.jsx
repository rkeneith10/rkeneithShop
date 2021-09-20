import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";
import Sidebar from "./Sidebar";

import "../../css/vendor/select2.min.css";
import "../../css/vendor/sidebar.css";
// import "../../css/vendor/header.css";
import "../../css/vendor/bootstrap.min.css";
import "../../css/vendor/style2.css";
import camera from "../../images/AddCamera_91px.png";

import ScriptTag from "react-script-tag";

const Addproducts = () => {
  const [picture, setPicture] = useState(null);
  const [error, setError] = useState(false);
  const [imgdata, setImagedta] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setePrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const url = "https://rkeneithshopbackend.herokuapp.com/api/addproduct";

  const handleImage = (e) => {
    const selected = e.target.files[0];
    const allowed_type = ["image/png", "image/jpg", "image/jpeg"];

    if (selected && allowed_type.includes(selected.type)) {
      setPicture(selected);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImagedta(reader.result);
      });
      reader.readAsDataURL(selected);
    } else {
      setError(true);
    }
  };

  const addproducts = (e) => {
    e.preventDefault();
    console.log("object");
    const formData = new FormData();
    formData.append("image", imgdata);
    // console.log(formData.append("image", imgdata));
    axios
      .post(url, {
        title: title,
        description: description,
        price: price,
        quantity: quantity,
        image: formData,
      })
      .then((response) => {
        console.log(response);
        console.log("object12");
      });
  };
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
            <div className="col-lg-10" style={{ marginTop: "5px" }}>
              <h4 className="page-title">Add a Product</h4>
            </div>
          </div>

          <form>
            <div className="row" style={{ marginTop: "10px" }}>
              <div className="col-lg-7 ">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>Title</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Title of the product"
                        onChange={(e) => {
                          setTitle(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Price</label>
                      <input
                        className="form-control"
                        type="text"
                        required
                        placeholder="Price of the product"
                        onChange={(e) => {
                          setePrice(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Quantity</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Quantity of product"
                        onChange={(e) => {
                          setQuantity(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>Description</label>
                      <textarea
                        className="form-control"
                        rows="7"
                        placeholder="Description of the product"
                        onChange={(e) => {
                          setDescription(e.target.value);
                        }}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 offset-lg-1">
                <label>Image of the product</label>
                <div
                  style={{
                    height: "200px",
                    width: "250px",
                    border: "1px solid black",
                  }}
                >
                  <div className="">
                    {error && <p className="errorMsg">File not supported</p>}
                    <div className="imagePreview">
                      <>
                        <label
                          htmlFor="fileUpload"
                          className="custonFileUpload"
                        >
                          {!imgdata ? (
                            <img
                              src={camera}
                              alt=""
                              style={{ cursor: "pointer" }}
                            />
                          ) : (
                            <img
                              src={imgdata}
                              alt=""
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                          )}
                        </label>
                        <input
                          type="file"
                          name="image"
                          id="fileUpload"
                          onChange={handleImage}
                        />
                      </>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="m-t-20 text-center">
                <button
                  type="submit"
                  className="btn btn-custom submit-btn"
                  onClick={addproducts}
                >
                  Add Product
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addproducts;
