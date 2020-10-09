import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Css/JobsList.css";

class JobsList extends Component {
  render() {
    return (
      <div className="JobsList">
        <div className="banner-job">
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
        </div>
        <JobsListMain />
      </div>
    );
  }
}

class JobsListMain extends Component {
  render() {
    var hotJobs = [
      { name: "Graphics Designer @ AOK Security", img: "11.png" },
      { name: "CTO @ Volja Events & Entertainment", img: "4.png" },
      { name: "Project Manager @ Dominos Pizza", img: "3.png" },
      { name: "Human Resource Manager @ Dropbox Inc", img: "2.png" },
      { name: "CTO @ Volja Events & Entertainment", img: "4.png" },
      { name: "Project Manager @ Dominos Pizza", img: "3.png" },
      { name: "Human Resource Manager @ Dropbox Inc", img: "2.png" },
      { name: "Human Resource Manager @ Dropbox Inc", img: "2.png" },
      { name: "CTO @ Volja Events & Entertainment", img: "4.png" },
      { name: "Project Manager @ Dominos Pizza", img: "3.png" },
    ];
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-md-2"
              style={{ backgroundColor: "#eceaea", padding: "15px" }}
            >
              <div>
                <h1>Filters</h1>
                <div
                  class=""
                  style={{ cursor: "pointer", color: "black" }}
                  data-toggle="collapse"
                  data-target="#categories"
                >
                  <div style={{ overflow: "hidden" }}>
                    <h4 style={{ float: "left" }}>
                      Categories <span style={{ fontSize: "30px" }}>+</span>
                    </h4>
                  </div>
                </div>

                <div id="categories" class="collapse">
                  <div style={{ padding: "5px" }}>
                    <a href="#">Software (129)</a>
                    <br />
                    <a href="#">Architecture (8342)</a>
                    <br />
                    <a href="#">UI & UX Designer (782)</a>
                    <br />
                    <a href="#">Telecommunication (5247)</a>
                    <br />
                    <a href="#">Civil Engineer (634)</a>
                    <br />
                    <a href="#">Chemical Engineer (453)</a>
                    <br />
                    <a href="#">Program Development (7986)</a>
                    <br />
                    <a href="#">Mechanical Engineer (742)</a>
                    <br />
                    <a href="#">Industrial Engineer (149)</a>
                    <br />
                    <a href="#">
                      Show more{" "}
                      <i class="fa fa-caret-down" aria-hidden="true"></i>{" "}
                    </a>
                  </div>
                </div>
                <div
                  class=""
                  style={{ cursor: "pointer", color: "black" }}
                  data-toggle="collapse"
                  data-target="#date-posted"
                >
                  <div style={{ overflow: "hidden" }}>
                    <h4 style={{ float: "left" }}>
                      Date Posted <span style={{ fontSize: "30px" }}>+</span>
                    </h4>
                  </div>
                </div>

                <div id="date-posted" class="collapse">
                  <div style={{ padding: "5px" }}>
                    <input type="checkbox" name="today" id="today" /> Today{" "}
                    <br />
                    <input type="checkbox" name="7Days" id="7Dyas" /> 7 Days{" "}
                    <br />
                    <input type="checkbox" name="30Days" id="30Dyas" /> 30 Days{" "}
                    <br />
                  </div>
                </div>
                <div
                  class=""
                  style={{ cursor: "pointer", color: "black" }}
                  data-toggle="collapse"
                  data-target="#salary-range"
                >
                  <div style={{ overflow: "hidden" }}>
                    <h4 style={{ float: "left" }}>
                      Salary Range <span style={{ fontSize: "30px" }}>+</span>
                    </h4>
                  </div>
                </div>

                <div id="salary-range" class="collapse">
                  <div style={{ padding: "5px" }}>
                    5,000 - 10,00,000/-
                    <input
                      type="range"
                      name="salary"
                      onChange={(e) => {
                        console.log(e.target.value);
                      }}
                      id="salary"
                      min="5000"
                      max="1000000"
                    />
                  </div>
                </div>
                <div
                  style={{ cursor: "pointer", color: "black" }}
                  data-toggle="collapse"
                  data-target="#etype"
                >
                  <div style={{ overflow: "hidden" }}>
                    <h5 style={{ float: "left" }}>
                      Employment Type{" "}
                      <span style={{ fontSize: "30px" }}>+</span>
                    </h5>
                  </div>
                </div>

                <div id="etype" class="collapse">
                  <div style={{ padding: "5px" }}>
                    <input type="checkbox" name="Full-Time" id="Full-Time" />{" "}
                    Full Time <br />
                    <input type="checkbox" name="Part" id="Part" /> Part Time{" "}
                    <br />
                    <input
                      type="checkbox"
                      name="Intern"
                      id="Intern"
                    /> Intern <br />
                  </div>
                </div>
                <div
                  style={{ cursor: "pointer", color: "black" }}
                  data-toggle="collapse"
                  data-target="#exp"
                >
                  <div style={{ overflow: "hidden" }}>
                    <h5 style={{ float: "left" }}>
                      Experience Level{" "}
                      <span style={{ fontSize: "30px" }}>+</span>
                    </h5>
                  </div>
                </div>

                <div id="exp" class="collapse">
                  <div style={{ padding: "5px" }}>
                    <input type="checkbox" name="Training" id="Training" />{" "}
                    Training <br />
                    <input
                      type="checkbox"
                      name="Entry-Level"
                      id="Entry-Level"
                    />{" "}
                    Entry Level <br />
                    <input
                      type="checkbox"
                      name="Top-Level"
                      id="Top-Level"
                    />{" "}
                    Top Level <br />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-10"
              style={{
                backgroundColor: "white",
                // margin: "25px",
                padding: "25px",
              }}
            >
              <h3 style={{ fontWeight: "300" }}>Showing 1-10 of 65,712 ads</h3>
              <hr/>
              {hotJobs.map((e) => (
                <HotJobs title={e.name} img={e.img} />
              ))}
              <ul class="pagination" style={{float : "right"}}>
                <li class="page-item">
                  <a class="page-link" href="#">
                    Previous
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li><li class="page-item">
                  <a class="page-link" href="#">
                    .....
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link disabled" href="#" aria-disabled>
                    640
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </div>
            {/* <div
              className="col-md-2"
              style={{ backgroundColor: "#eceaea" }}
            ></div> */}
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
              <Link
                to="/job-desc"
                class=""
                style={{ color: "#00a651", textDecoration: "none" }}
              >
                {this.props.title}
              </Link>
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

export default JobsList;
