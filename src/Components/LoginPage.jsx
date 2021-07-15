import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/bootstrap.css";
import "../css/loginCSS.css";
import axios from "axios";
import validator from "validator";
import { useHistory } from "react-router-dom";

function LoginPage() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [showMessge, setShowMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [disable, setDisable] = useState(false);
  const url = "https://rkeneithshopbackend.herokuapp.com/api/login";
  const url1 = "http://localhost:5000/api/login";

  const login = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setDisable(true);
    if (email === "" || password === "") {
      setShowMessage("Non");
      setIsLoading(false);
      setDisable(false);
    } else if (!validator.isEmail(email)) {
      setShowMessage("Email Invalid");
      setIsLoading(false);
      setDisable(false);
    } else {
      axios
        .post(url, {
          email: email,
          password: password,
        })
        .then((response) => {
          // console.log(response.status);

          if (response.data.auth) {
            setIsLoading(false);
            setDisable(false);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.result));
            history.push("/");
          } else if (!response.data.auth) {
            setShowMessage(response.data.msg);
            setIsLoading(false);
            setDisable(false);
          }
        });
    }
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <div id="first">
              <div
                className="myform form "
                style={{ borderRadius: "0px", marginTop: "100px" }}
              >
                <div className="logo mb-3">
                  <div className="col-md-12 text-center">
                    <h1>RKENEITHSHOP</h1>

                    {showMessge && (
                      <div className="alert alert-danger" role="alert">
                        {showMessge}
                      </div>
                    )}
                  </div>
                </div>
                <form>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      style={{ borderRadius: "0px" }}
                      type="email"
                      name="email"
                      className="form-control "
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Password</label>
                    <input
                      style={{ borderRadius: "0px" }}
                      type="password"
                      name="password"
                      id="password"
                      className="form-control  "
                      aria-describedby="emailHelp"
                      placeholder="Enter Password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>

                  <div className="col-md-12 text-center ">
                    <button
                      type="submit"
                      disabled={disable}
                      onClick={login}
                      className=" btn btn-block mybtn btn-primary tx-tfm"
                    >
                      Login
                      {isLoading && (
                        <span
                          style={{ marginLeft: "10px" }}
                          className="spinner-border spinner-border-sm"
                        ></span>
                      )}
                    </button>
                  </div>

                  <div className="form-group">
                    <p className="text-center" style={{ fontSize: "14px" }}>
                      Don't have account?{" "}
                      <Link to="/signup" style={{ color: "#ff674f" }}>
                        Sign up here
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
            {/* <div id="second">
			      <div className="myform form">
                        <div className="logo mb-3">
                           <div className="col-md-12 text-center">
                              <h1 >Signup</h1>
                           </div>
                        </div>
                        <form>
                           <div className="form-group">
                              <label for="exampleInputEmail1">First Name</label>
                              <input type="text"  name="firstname" className="form-control" id="firstname" aria-describedby="emailHelp" placeholder="Enter Firstname"/>
                           </div>
                           <div className="form-group">
                              <label for="exampleInputEmail1">Last Name</label>
                              <input type="text"  name="lastname" className="form-control" id="lastname" aria-describedby="emailHelp" placeholder="Enter Lastname"/>
                           </div>
                           <div className="form-group">
                              <label for="exampleInputEmail1">Email address</label>
                              <input type="email" name="email"  className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                           </div>
                           <div className="form-group">
                              <label for="exampleInputEmail1">Password</label>
                              <input type="password" name="password" id="password"  className="form-control" aria-describedby="emailHelp" placeholder="Enter Password"/>
                           </div>
                           <div className="col-md-12 text-center mb-3">
                              <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm">Get Started For Free</button>
                           </div>
                           <div className="col-md-12 ">
                              <div className="form-group">
                                 <p className="text-center"><a href="#" id="signin">Already have an account?</a></p>
                              </div>
                           </div>
                            </div>
                        </form>
                     </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
