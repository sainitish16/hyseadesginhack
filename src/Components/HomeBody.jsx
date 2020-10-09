import React from "react";
import "../Css/HomeBody.css";
import StepImg1 from "../Images/icons/1.png";
import StepImg2 from "../Images/icons/2.png";
import StepImg3 from "../Images/icons/3.png";
import StepImg4 from "../Images/icons/4.png";
import StepImg5 from "../Images/icons/5.png";
import StepImg6 from "../Images/icons/6.png";
import StepImg7 from "../Images/icons/7.png";
import StepImg8 from "../Images/icons/8.png";
import StepImg9 from "../Images/icons/9.png";
import StepImg10 from "../Images/icons/10.png";
import StepImg11 from "../Images/icons/11.png";
import StepImg12 from "../Images/icons/12.png";
import JOBSIMG3 from "../Images/jobs/hysea_logo_web.jpg";
import { Link } from "react-router-dom";

class HomeBody extends React.Component {
  render() {
    return (
      <div>
        <div className="banner-job">
          <div className="banner-overlay"></div>
          <div className="container text-center">
            <h1 className="title">The Easiest Way to Get Your New Job</h1>
            <h3>We offer 12000 jobs vacation right now</h3>

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
                    Job location
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Location 1
                    </a>
                    <a className="dropdown-item" href="#">
                      Location 2
                    </a>
                    <a className="dropdown-item" href="#">
                      Location 3
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
        <Step1 />
        <Step2 />
        <Step3 />
        <Step4 />
        <Step5 />
      </div>
    );
  }
}

class Step1 extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="step1 category-items">
          <ul class="category-list">
            <li class="category-item">
              <a href="#">
                <div class="category-icon">
                  <img src={StepImg1} alt="images" class="img-fluid" />
                </div>
                <span class="category-title">Accounting/Finance</span>
                <span class="category-quantity">(1298)</span>
              </a>
            </li>
            <li class="category-item">
              <a href="#">
                <div class="category-icon">
                  <img src={StepImg2} alt="images" class="img-fluid" />
                </div>
                <span class="category-title">Education/Training</span>
                <span class="category-quantity">(76212)</span>
              </a>
            </li>
            <li class="category-item">
              <a href="#">
                <div class="category-icon">
                  <img src={StepImg3} alt="images" class="img-fluid" />
                </div>
                <span class="category-title">Engineer/Architects</span>
                <span class="category-quantity">(212)</span>
              </a>
            </li>
            <li class="category-item">
              <a href="#">
                <div class="category-icon">
                  <img src={StepImg4} alt="images" class="img-fluid" />
                </div>
                <span class="category-title">Garments/Textile</span>
                <span class="category-quantity">(972)</span>
              </a>
            </li>
            <li class="category-item">
              <a href="#">
                <div class="category-icon">
                  <img src={StepImg5} alt="images" class="img-fluid" />
                </div>
                <span class="category-title">HR/Org. Development</span>
                <span class="category-quantity">(1298)</span>
              </a>
            </li>
            <li class="category-item">
              <a href="#">
                <div class="category-icon">
                  <img src={StepImg6} alt="images" class="img-fluid" />
                </div>
                <span class="category-title">Design/Creative</span>
                <span class="category-quantity">(76212)</span>
              </a>
            </li>
            <li class="category-item">
              <a href="#">
                <div class="category-icon">
                  <img src={StepImg7} alt="images" class="img-fluid" />
                </div>
                <span class="category-title">Research/Consultancy</span>
                <span class="category-quantity">(1298)</span>
              </a>
            </li>
            <li class="category-item">
              <a href="#">
                <div class="category-icon">
                  <img src={StepImg8} alt="images" class="img-fluid" />
                </div>
                <span class="category-title">Medical/Pharma</span>
                <span class="category-quantity">(76212)</span>
              </a>
            </li>
            <li class="category-item">
              <a href="#">
                <div class="category-icon">
                  <img src={StepImg9} alt="images" class="img-fluid" />
                </div>
                <span class="category-title">Music &amp; Arts</span>
                <span class="category-quantity">(212)</span>
              </a>
            </li>
            <li class="category-item">
              <a href="#">
                <div class="category-icon">
                  <img src={StepImg10} alt="images" class="img-fluid" />
                </div>
                <span class="category-title">Marketing/Sales</span>
                <span class="category-quantity">(1298)</span>
              </a>
            </li>
            <li class="category-item">
              <a href="#">
                <div class="category-icon">
                  <img src={StepImg11} alt="images" class="img-fluid" />
                </div>
                <span class="category-title">Production/Operation</span>
                <span class="category-quantity">(124)</span>
              </a>
            </li>
            <li class="category-item">
              <a href="#">
                <div class="category-icon">
                  <img src={StepImg12} alt="images" class="img-fluid" />
                </div>
                <span class="category-title">Miscellaneous</span>
                <span class="category-quantity">(972)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

class Step2 extends React.Component {
  render() {
    var recentJobs = [
      {name : "Graphics Designer @ AOK Security",  img : "11.png"},
      {name : "CTO @ Volja Events & Entertainment",  img : "4.png"},
      {name : "Project Manager @ Dominos Pizza",  img : "3.png"},
      {name : "Human Resource Manager @ Dropbox Inc",  img : "2.png"},
    ]
    var hotJobs = [
      {name : "Project Manager @ Dominos Pizza",  img : "3.png"},
      {name : "Graphics Designer @ AOK Security",  img : "11.png"},
      {name : "CTO @ Volja Events & Entertainment",  img : "4.png"},
      {name : "Human Resource Manager @ Dropbox Inc",  img : "2.png"},
    ]
    var popularJobs = [
      {name : "Human Resource Manager @ Dropbox Inc",  img : "2.png"},
      {name : "Graphics Designer @ AOK Security",  img : "11.png"},
      {name : "Project Manager @ Dominos Pizza",  img : "3.png"},
      {name : "CTO @ Volja Events & Entertainment",  img : "4.png"},
    ]
    return (
      <div className="container">
        <div className="step2">
          <div>
            <h4 style={{ float: "left", paddingBottom: "0px" }}>Latest Jobs</h4>
            <ul class="nav nav-tabs" style={{ float: "right" }}>
              <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#home">
                  Hot Jobs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#menu1">
                  Recent Jobs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#menu2">
                  Popular Jobs
                </a>
              </li>
            </ul>
          </div>
          <hr style={{ marginTop: "52px" }} />
          <div class="tab-content" style={{ padding: "0px 15px 15px 15px" }}>
            <div id="home" class="container tab-pane active">
              <div className="ads-main">
                {hotJobs.map((e) => (
                  <HotJobs title={e.name} img={e.img} />
                ))}
              </div>
            </div>
            <div id="menu1" class="container tab-pane fade">
              {recentJobs.map((e) => (
                <HotJobs title={e.name} img={e.img} />
              ))}
            </div>
            <div id="menu2" class="container tab-pane fade">
              {popularJobs.map((e) => (
                <HotJobs title={e.name} img={e.img} />
              ))}
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
                src={require("../Images/jobs/"+this.props.img)}
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

class Step3 extends React.Component {
  render() {
    return (
      <div
        className="step3 container"
        style={{ marginTop: "55px", height: "450px" }}
      >
        <div
          className="Workshop-Traning"
          style={{ backgroundColor: "white", padding: "20px 25px 20px" }}
        >
          <div style={{ overflow: "hidden" }}>
            <h3 style={{ float: "left" }}>Workshop Traning</h3>
            <a href="#" className="btn btn-light" style={{ float: "right" }}>
              See All
            </a>
          </div>
          <hr />
          <div>
            <div className="row">
              <div className="col-md-6">
                <div
                  style={{
                    border: "1px solid #e6e6e6",
                    padding: "25px",
                  }}
                >
                  <img src={require("../Images/Page1/5.png")} alt="" />
                  <h4 className="workshop-trainig-title">
                    <a href="#" style={{ textDecoration: "none" }}>
                      {" "}
                      Business Process Management Training
                    </a>
                  </h4>
                  <p style={{ fontSize: "16px" }}>
                    Course Duration: 3 Month ( Sat, Mon, Fri)
                  </p>
                  <p>
                    Course instructor: Kim Jon ley <br /> Course Amount: $200
                  </p>
                </div>
                <div
                  style={{
                    backgroundColor: "#f6f6f6",
                    padding: "10px",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ paddingLeft: "25px", float: "left" }}>
                    7 Jan 10:10 pm
                  </div>
                  <div style={{ float: "right" }}>
                    <i class="fa fa-map-marker"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  style={{
                    border: "1px solid #e6e6e6",
                    padding: "25px",
                  }}
                >
                  <img src={require("../Images/Page1/6.png")} alt="" />
                  <h4 className="workshop-trainig-title">
                    <a href="#" style={{ textDecoration: "none" }}>
                      {" "}
                      Employee Motivation and Engagement
                    </a>
                  </h4>
                  <p style={{ fontSize: "16px" }}>
                    Course Duration: 3 Month ( Sat, Mon, Fri)
                  </p>
                  <p>
                    Course instructor: Kim Jon ley <br /> Course Amount: $200
                  </p>
                </div>
                <div
                  style={{
                    backgroundColor: "#f6f6f6",
                    padding: "10px",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ paddingLeft: "25px", float: "left" }}>
                    7 Jan 10:10 pm
                  </div>
                  <div style={{ float: "right" }}>
                    <i class="fa fa-map-marker"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Step4 extends React.Component {
  render() {
    return (
      <div className="container">
        <div
          style={{
            backgroundColor: "white",
            textAlign: "center",
            padding: "45px",
          }}
        >
          <div className="row">
            <div className="col-md-4">
              <img
                src={require("../Images/Page1/31.png")}
                alt="Image Live jobs"
              />
              <h2 style={{ color: "green" }}>3,412</h2>
              <h3>Live Jobs</h3>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </div>
            <div className="col-md-4">
              <img
                src={require("../Images/Page1/32.png")}
                alt="Image Live jobs"
              />
              <h2 style={{ color: "green" }}>12,043</h2>
              <h3>Total Company</h3>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </div>
            <div className="col-md-4">
              <img
                src={require("../Images/Page1/33.png")}
                alt="Image Live jobs"
              />
              <h2 style={{ color: "green" }}>5,798,298</h2>
              <h3>Total Candidate</h3>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Step5 extends React.Component {
  render() {
    return (
      <div
        className="container-fluid download-app-play-main"
        style={{ marginTop: "55px" }}
      >
        <div className="container" style={{ textAlign: "center",padding: "55px 0 90px" }}>
          <h2>Download on App Store</h2>
          <br />
          <div>
            <div className="row">
              <div className="col-md-4" style={{ overflow : "hidden"}}>
                <a href="#" class="download-app" style={{textDecoration : "none"}}>
                  <img src={require("../Images/icons/16.png")} style={{float : "left"}} alt="Image" class="img-fluid" />
                  <span class="pull-left" style={{color : "white"}}>
                    <span>available on</span>
                    <strong>Google Play</strong>
                  </span>
                </a>
              </div>
              <div className="col-md-4" style={{ overflow : "hidden"}}>
                <a href="#" class="download-app" style={{textDecoration : "none"}}>
                  <img src={require("../Images/icons/17.png")} style={{float : "left"}} alt="Image" class="img-fluid" />
                  <span class="pull-left" style={{color : "white"}}>
                    <span>available on</span>
                    <strong>App Store</strong>
                  </span>
                </a>
              </div>
              <div className="col-md-4" style={{ overflow : "hidden"}}>
                <a href="#" class="download-app" style={{textDecoration : "none"}}>
                  <img src={require("../Images/icons/18.png")} style={{float : "left"}} alt="Image" class="img-fluid" />
                  <span class="pull-left" style={{color : "white"}}>
                    <span>available on</span>
                    <strong>Windows Store</strong>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeBody;
