import React, { Component } from "react";
import "../DashBoard/dashboardadmin.css";
class dashboardBar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row mt-5">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div className="row ">
                <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1">
                  <i
                    class="fa fa-globe mt-4"
                    style={{ fontSize: "70px", color: "green" }}
                  ></i>
                </div>
                <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
                  <h4>Dashboard</h4>
                  <p>Home</p>
                </div>
                <div className="col-sm-5 col-md-6 col-xl-6 col-lg-6"></div>
                <div className="col-sm-4 col-md-3 col-lg-3 col-xl-3 mt-3 ">
                  <div className="row">
                    <div className="col-sm-6 col-md-12 col-lg-12 col-xl-12">
                      <div
                        className="row box-dashboard"
                        style={{
                          border: "1px solid gray",
                          padding: "0px 10px 0px 0px",
                          marginLeft: "20px"
                        }}
                      >
                        <div className="col-sm-2 col-lg-2 col-xl-2 mt-2">
                          <a href="/">
                            <i
                              class="fa fa-home ml-2 mt-5"
                              style={{ color: "gray" }}
                            ></i>
                          </a>
                        </div>
                        <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2 mt-2  mr-2 mt-5">
                          <a href="/">Home</a>
                        </div>
                        <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2 mt-2 forward-slash mt-5">
                          <p>/</p>
                        </div>
                        <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2 mt-2">
                          <h6 style={{ color: "green" }}>
                            <b>Dashboard</b>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr style={{ width: "100%" }} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default dashboardBar;
