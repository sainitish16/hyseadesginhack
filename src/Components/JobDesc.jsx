import React, { Component } from "react";
import '../Css/JobDesc.css';

class JobDesc extends Component {
  render() {
    return (
      <div className="JobDesc">
        {/* <div className="banner-job">
          <div className="banner-overlay"></div>
          <div className="container text-center">
            <h1 className="title">Work to become, not to acquire.</h1>
            <h3>
              Choose a job you love, and you will never have to work a day in
              your life.
            </h3>

            <div className="input-group mb-3 container">
              <input
                type="text"
                className="form-control input-lg"
                placeholder="Type your keyword.."
                aria-label="Type your keyword.."
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn btn-light dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Category
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Software Development
                    </a>
                    <a className="dropdown-item" href="#">
                      Digital Management
                    </a>
                    <a className="dropdown-item" href="#">
                      Data Analyst
                    </a>
                    <a className="dropdown-item" href="#">
                      Graphics Designer
                    </a>
                    <a className="dropdown-item" href="#">
                      Service
                    </a>
                  </div>
                </div>
              </div>
              <div className="input-group-append">
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn btn-light dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Location
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Hyderabad
                    </a>
                    <a className="dropdown-item" href="#">
                      Mumbai
                    </a>
                    <a className="dropdown-item" href="#">
                      Pune
                    </a>
                    <a className="dropdown-item" href="#">
                      Delhi
                    </a>
                    <a className="dropdown-item" href="#">
                      Chennai
                    </a>
                  </div>
                </div>
                <span className="btn btn-success">Search</span>
              </div>
            </div>
            <div style={{ padding: "10px" }}>
              <a href="#" title="Facebook" className="social-media-icons">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" title="Twitter" className="social-media-icons">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#" title="Google Plus" className="social-media-icons">
                <i className="fa fa-google-plus"></i>
              </a>
              <a href="#" title="Youtube" className="social-media-icons">
                <i className="fa fa-youtube"></i>
              </a>
            </div>
          </div>
        </div> */}
        <div className="container">
          <HotJobs title="Human Resource Manager @ Dropbox Inc" img="2.png" />
          <div class="section job-description">
            <div class="description-info">
              <h1>Description</h1>
              <p>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </span>
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni।
              </p>
            </div>
            <div class="responsibilities">
              <h1>Key Responsibilities:</h1>
              <p>
                -Execute all visual design stages of website design from concept
                to final hand-off to development-Create print advertisements,
                social media advertisements, client collateral &amp; digital
                resizes according to Client demands With direction of the
                Creative team, input into new design ideas for client
                branding-Update &amp; keep all agency collateral materials,
                including keeping records of Client's logos, fonts, images, etc.{" "}
              </p>
            </div>
            <div class="requirements">
              <h1>Minimum Requirements</h1>
              <ul>
                <li>Bachelor's Degree</li>
                <li>
                  2-5 years of relevant experience ( or equivalent educational
                  experience)
                </li>
                <li>
                  Experience developing in Wordpress and other web design
                  platforms
                </li>
                <li>HTML, CSS and JavaScript experience a plus</li>
                <li>
                  In depth knowledge &amp; technical experience of Photoshop,
                  Illustrator, InDesign, Adobe PDF, Keynote, PowerPoint,
                  Microsoft Word &amp; Excel
                </li>
                <li>
                  Exceptional eye for design, deep understanding of creativity
                  and ability to recognize fresh approaches to Advertising{" "}
                </li>
                <li>
                  Must be fluent in Spanish; working written and spoken
                  proficiency
                </li>
                <li>
                  **All applicants must be eligible to work in the U.S. without
                  sponsorship
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class HotJobs extends React.Component {
  render() {
    return (
      <div className="container-fluid ads" style={{ padding: "15px" }}>
        <div className="row">
          <div className="col-md-2">
            <a href="#" className="img-ad">
              <img
                src={require("../Images/jobs/" + this.props.img)}
                alt="Image"
                class="img-fluid"
              />
            </a>
          </div>
          <div className="col-md-8" style={{ marginLeft: "-45px" }}>
            <span style={{ color: "#00a651" }} className="ad-title">
              <a
                href="#"
                class=""
                style={{ color: "#00a651", textDecoration: "none" }}
              >
                {this.props.title}
              </a>
            </span>
            <br />
            <div style={{ marginTop: "10px" }}>
              <a href="#" className="ad-details">
                <i class="fa fa-map-marker" aria-hidden="true"></i> San
                Francisco, CA, US{" "}
              </a>
              <a href="#" className="ad-details">
                <i class="fa fa-clock-o" aria-hidden="true"></i> Full Time
              </a>
              <a href="#" className="ad-details">
                <i class="fa fa-money" aria-hidden="true"></i> $25,000 - $35,000
              </a>
              <a href="#" className="ad-details">
                <i class="fa fa-tags" aria-hidden="true"></i> HR/Org.
                Development
              </a>
            </div>
          </div>
          <div className="col-lg-2" style={{ float: "right" }}>
            <div class="button" style={{ marginTop: "15px" }}>
              <a href="#" class="btn btn-success w-100">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JobDesc;
