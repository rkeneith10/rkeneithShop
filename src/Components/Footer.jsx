import React from "react";
import { Link } from "react-router-dom";

import "../css/bootstrap.css";
import "../css/nav.css";
import "../css/style.css";
import "../css/mycss.css";

function Footer() {
  // const handleMessage = (e) => {
  //   e.preventDefalut();
  // };
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="col-md-3 stores-grid">
            <div className="stores">
              <h3>Our Stores</h3>
              <ul>
                <li>Feel free to visit all the stores or contact us.</li>
                <li>F66, Champin, </li>
                <li>Cap-Haitien, Haiti </li>
                <li>(509) 3839-6075</li>

                <span>
                  <li class="drive">65, RUe Chareron </li>
                  <li>Port-au-Prince, Haiti</li>
                  <li>(509) 3839-6075 </li>
                </span>
              </ul>
            </div>
            <div className="social-icons white-icons">
              <ul>
                <li>
                  <a href="#" className="facebook"></a>
                </li>
                <li>
                  <a href="#" className="twitter"></a>
                </li>
                <li>
                  <a href="#" className="chrome"></a>
                </li>
                <li>
                  <a href="#" className="vimeo"></a>
                </li>
                <li>
                  <a href="#" className="rss"></a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-3 blog">
            <h3>Blog posts</h3>
            <a href="#"> Lorem ipsum dolor sit amet.</a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
              auctor elit.
            </p>
            <a href="#">Brand new shoes on the way!</a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
              auctor elit.
            </p>
            <a href="#">Summer sales are coming!</a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
              auctor elit.
            </p>
          </div>

          <div className="col-md-3 support">
            <h3>Support</h3>
            <div class="support-grids">
              <div className="support-left">
                <ul>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Payment</a>
                  </li>
                  <li>
                    <a href="#">Refunds</a>
                  </li>
                  <li>
                    <a href="#">Track Order</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Privacy & Security</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Press</a>
                  </li>
                  <li>
                    <a href="#">Corporate Information</a>
                  </li>
                </ul>
              </div>
              {/* <div className="support-left support-right">
                <ul>
                  <li>
                    <a href="#">Sizing</a>
                  </li>
                  <li>
                    <a href="#">Ordering</a>
                  </li>
                  <li>
                    <a href="#">Shipping</a>
                  </li>
                  <li>
                    <a href="#">Return Policy</a>
                  </li>
                  <li>
                    <a href="#">Affiliates</a>
                  </li>
                  <li>
                    <a href="#">Find A Store </a>
                  </li>
                  <li>
                    <a href="#">Site Map</a>
                  </li>
                  <li>
                    <a href="#">Sign Up & Save</a>
                  </li>
                </ul>
              </div> */}
              <div className="clearfix"> </div>
            </div>
          </div>
          <div className="col-md-3 contact">
            <h3>Contact us</h3>
            <form>
              <input
                type="text"
                value="your e-mail..."
                onfocus="this.value = '';"
                onblur="if (this.value == '') {this.value = 'your e-mail...';}"
                required=""
              />
              <textarea
                value="your text...:"
                onfocus="if(this.value == 'your text...') this.value='';"
                onblur="if(this.value == '') this.value='your text...';"
              >
                your text...
              </textarea>
              <input
                type="submit"
                // onClick={handleMessage}
                value="Send MESSAGE"
              />
            </form>
          </div>
          <div className="clearfix"> </div>
          <div className="copyright">
            <p>
              Copyright &copy;{" "}
              <strong>
                <span>RKENEITHSHOP</span>
              </strong>
              . All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
