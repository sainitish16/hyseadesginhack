import React from "react";
import '../Css/Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div
        className="footer container-fluid"
        style={{ padding: "75px", fontWeight: "300" }}
      >
        <footer>
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-sm-6">
                <div class="footer-widget">
                  <h3>Quik Links</h3>
                  <ul>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">All Cities</a>
                    </li>
                    <li>
                      <a href="#">Help &amp; Support</a>
                    </li>
                    <li>
                      <a href="#">Advertise With Us</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-3 col-sm-6">
                <div class="footer-widget">
                  <h3>How to place fast</h3>
                  <ul>
                    <li>
                      <a href="#">How to place fast</a>
                    </li>
                    <li>
                      <a href="#">Membership</a>
                    </li>
                    <li>
                      <a href="#">Banner Advertising</a>
                    </li>
                    <li>
                      <a href="#">Promote your ad</a>
                    </li>
                    <li>
                      <a href="#">Jobs Delivers</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-3 col-sm-6">
                <div class="footer-widget social-widget">
                  <h3>Follow us on</h3>
                  <ul>
                    <li>
                      <a href="#">
                        <i class="fa fa-facebook-official"></i>Facebook
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-twitter-square"></i>Twitter
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-google-plus-square"></i>Google+
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-youtube-play"></i>youtube
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-3 col-sm-6">
                <div class="footer-widget news-letter">
                  <h3>Newsletter</h3>
                  <p>Jobs is Worldest leading Portal platform that brings!</p>

                  <form action="#">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Your email id"
                    />
                    <br/>
                    <button type="submit" class="btn btn-success">
                      Sign Up
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
