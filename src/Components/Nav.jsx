import React from "react";
import LOGO from "../Images/logo.png";
import "../Css/Nav.css";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div className="navbar-top-main">
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light"
          style={{ fontWeight: "", textTransform: "uppercase" }}
        >
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <a
              className="navbar-brand"
              href="#"
              style={{ paddingRight: "15px" }}
            >
              <img src={LOGO} />
            </a>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <Link
                    className="nav-link"
                    to="/"
                    style={{ color: "#00a651", padding: "15px 12px" }}
                  >
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/jobs-list">
                    JOBS LIST
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/job-desc">
                    JOB details
                  </Link>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    RESUME
                  </a>
                </li>
                <li className="nav-item dropdown active">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                    <a className="dropdown-item" href="#">
                      Post Resume
                    </a>
                    <a className="dropdown-item" href="#">
                      Job Post
                    </a>
                    <a className="dropdown-item" href="#">
                      Edit Resume
                    </a>
                    <a className="dropdown-item" href="#">
                      Profile details
                    </a>
                    <a className="dropdown-item" href="#">
                      Bookmarks
                    </a>
                    <a className="dropdown-item" href="#">
                      Applied jobs
                    </a>
                    <a className="dropdown-item" href="#">
                      Close account
                    </a>
                    <a className="dropdown-item" href="#">
                      Job signup
                    </a>
                    <a className="dropdown-item" href="#">
                      Job Signin
                    </a>
                  </div>
                </li>
              </ul>
              <div className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    <i style={{ color: "#28a745" }} className="fa fa-user "></i>
                  </a>
                </li>
                <li className="nav-item active">
                  <a
                    className="nav-link"
                    href="#"
                    style={{ textTransform: "none" }}
                    data-toggle="modal"
                    data-target="#sigmup"
                  >
                    Sign In / Register
                  </a>
                  {/* <!-- The Modal --> */}
                  <div className="modal fade" id="sigmup">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          {/* <!-- Modal Header --> */}
                          <div className="modal-header">
                            <h4 className="modal-title">Login</h4>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                            >
                              &times;
                            </button>
                          </div>

                          {/* <!-- Modal body --> */}
                          <div className="modal-body">Signup</div>

                          {/* <!-- Modal footer --> */}
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-danger"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    <button
                      className="btn"
                      style={{ marginTop: "-8px" }}
                      data-toggle="modal"
                      data-target="#postajob"
                    >
                      Post Your Job
                    </button>

                    {/* <!-- The Modal --> */}
                    <div className="modal fade" id="postajob">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          {/* <!-- Modal Header --> */}
                          <div className="modal-header">
                            <h4 className="modal-title">JOB Heading</h4>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                            >
                              &times;
                            </button>
                          </div>

                          {/* <!-- Modal body --> */}
                          <div className="modal-body">JOB DETAILS</div>

                          {/* <!-- Modal footer --> */}
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-danger"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
