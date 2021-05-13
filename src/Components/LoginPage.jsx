import React from "react";
import { Link } from "react-router-dom";
import "../css/bootstrap.css";
import "../css/loginCSS.css";

function LoginPage() {
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
                  {/* <div className="form-group">
                    <p className="text-center">
                      By signing up you accept our <a href="#">Terms Of Use</a>
                    </p>
                  </div> */}
                  <div className="col-md-12 text-center ">
                    <button
                      type="submit"
                      className=" btn btn-block mybtn btn-primary tx-tfm"
                    >
                      Login
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
