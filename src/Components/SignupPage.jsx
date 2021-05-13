import React from "react";
import { Link } from "react-router-dom";
import "../css/bootstrap.css";
import "../css/loginCSS.css";

function SignupPage() {
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
                    <h1>RKENEITHSHOP </h1>
                  </div>
                </div>
                <form>
                  <div className="form-group">
                    <label for="exampleInputEmail1">First Name</label>
                    <input
                      style={{ borderRadius: "0px" }}
                      type="text"
                      name="firstName"
                      className="form-control "
                      id="firstName"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Last Name</label>
                    <input
                      style={{ borderRadius: "0px" }}
                      type="text"
                      name="lastName"
                      className="form-control "
                      id="lastName"
                      placeholder="Enter your last name"
                    />
                  </div>
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
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Telephone</label>
                    <input
                      style={{ borderRadius: "0px" }}
                      type="number"
                      name="telephone"
                      className="form-control "
                      id="telephone"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Adresse</label>
                    <input
                      style={{ borderRadius: "0px" }}
                      type="text"
                      name="adresse"
                      className="form-control "
                      id="adresse"
                      placeholder="Enter your Adress"
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
                    />
                  </div>

                  <div className="col-md-12 text-center ">
                    <button className=" btn btn-block mybtn btn-primary tx-tfm">
                      Signup
                    </button>
                  </div>

                  <div className="form-group">
                    <p className="text-center" style={{ fontSize: "14px" }}>
                      Purchasing for work?{" "}
                      <Link
                        to="/signup"
                        id="signup"
                        style={{ color: "#ff674f" }}
                      >
                        Create a business account
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

export default SignupPage;
