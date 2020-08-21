import React, { Component } from "react";
import "../GUIPOS/guiPosInvoice.css";
import Footer from "../GUIPOS/FooterGuiPos/guiFooter";
import { Link } from "react-router-dom";
class guiPos extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row mt-2">
            <div className=" col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 mt-3">
              {/* <Link to="/SuperAdmin/NewInvoiceView"> */}
              <button
                className="btn w-100"
                style={{
                  backgroundColor: "#37A000",
                  color: "white",
                  fontSize: "15px",
                  fontFamily: "Open Sans",
                  lineHeight: "20px",
                  padding: "12px"
                }}
              >
                + New Invoice
              </button>
              {/* </Link> */}
            </div>
            <div className=" col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 mt-3">
              {/* <Link to="/SuperAdmin/GUIPOSView"> */}
              <button
                className="btn w-100"
                style={{
                  backgroundColor: "#B2DFDB",
                  color: "Black",
                  fontSize: "15px",
                  fontFamily: "Open Sans",
                  lineHeight: "20px",
                  padding: "12px"
                }}
              >
                Today's Sale
              </button>
              {/* </Link> */}
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <div
                    class="input-group mb-3"
                    style={{ border: "2px solid #45C203" }}
                  >
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search Product By"
                    />
                    <div class="input-group-append">
                      <div class="input-group" style={{ width: "100%" }}>
                        <select class="custom-select" id="inputGroupSelect04">
                          <option selected>Choose...</option>
                          <option value="1">10</option>
                          <option value="2">50</option>
                          <option value="3">100</option>
                        </select>
                      </div>
                      <span
                        class="input-group-text"
                        style={{
                          fontSize: "20px",
                          backgroundColor: "#45C203",
                          color: "white",
                          padding: "0px 40px",
                          border: "none"
                        }}
                      >
                        <i class="fa fa-search"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4 mb-4">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <div
                    className="flex-container guiPos-design"
                    style={{ height: "500px", backgroundColor: "#f1f3f6" }}
                  >
                    <div>
                      <img
                        src={require("../../Assets/Images/product.png")}
                        alt="logo"
                        style={{ width: "100px", height: "100px" }}
                      />
                      <h6 style={{ textAlign: "center" }}>Nimocon 500</h6>
                    </div>
                    <div>
                      <img
                        src={require("../../Assets/Images/product.png")}
                        alt="logo"
                        style={{ width: "100px", height: "100px" }}
                      />
                      <h6 style={{ textAlign: "center" }}>Nimocon 500</h6>
                    </div>
                    <div>
                      <img
                        src={require("../../Assets/Images/product.png")}
                        alt="logo"
                        style={{ width: "100px", height: "100px" }}
                      />
                      <h6 style={{ textAlign: "center" }}>Nimocon 500</h6>
                    </div>
                    <div>
                      <img
                        src={require("../../Assets/Images/product.png")}
                        alt="logo"
                        style={{ width: "100px", height: "100px" }}
                      />
                      <h6 style={{ textAlign: "center" }}>Nimocon 500</h6>
                    </div>
                    <div>
                      <img
                        src={require("../../Assets/Images/product.png")}
                        alt="logo"
                        style={{ width: "100px", height: "100px" }}
                      />
                      <h6 style={{ textAlign: "center" }}>Nimocon 500</h6>
                    </div>
                    <div>
                      <img
                        src={require("../../Assets/Images/product.png")}
                        alt="logo"
                        style={{ width: "100px", height: "100px" }}
                      />
                      <h6 style={{ textAlign: "center" }}>Nimocon 500</h6>
                    </div>
                    <div>
                      <img
                        src={require("../../Assets/Images/product.png")}
                        alt="logo"
                        style={{ width: "100px", height: "100px" }}
                      />
                      <h6 style={{ textAlign: "center" }}>Nimocon 500</h6>
                    </div>
                    <div>
                      <img
                        src={require("../../Assets/Images/product.png")}
                        alt="logo"
                        style={{ width: "100px", height: "100px" }}
                      />
                      <h6 style={{ textAlign: "center" }}>Nimocon 500</h6>
                    </div>
                    <div>
                      <img
                        src={require("../../Assets/Images/product.png")}
                        alt="logo"
                        style={{ width: "100px", height: "100px" }}
                      />
                      <h6 style={{ textAlign: "center" }}>Nimocon 500</h6>
                    </div>
                    <div>
                      <img
                        src={require("../../Assets/Images/product.png")}
                        alt="logo"
                        style={{ width: "100px", height: "100px" }}
                      />
                      <h6 style={{ textAlign: "center" }}>Nimocon 500</h6>
                    </div>
                    <div>
                      <img
                        src={require("../../Assets/Images/product.png")}
                        alt="logo"
                        style={{ width: "100px", height: "100px" }}
                      />
                      <h6 style={{ textAlign: "center" }}>Nimocon 500</h6>
                    </div>
                    <div>
                      <img
                        src={require("../../Assets/Images/product.png")}
                        alt="logo"
                        style={{ width: "100px", height: "100px" }}
                      />
                      <h6 style={{ textAlign: "center" }}>Nimocon 500</h6>
                    </div>
                    <div>
                      <img
                        src={require("../../Assets/Images/product.png")}
                        alt="logo"
                        style={{ width: "100px", height: "100px" }}
                      />
                      <h6 style={{ textAlign: "center" }}>Nimocon 500</h6>
                    </div>
                    <div>
                      <img
                        src={require("../../Assets/Images/product.png")}
                        alt="logo"
                        style={{ width: "100px", height: "100px" }}
                      />
                      <h6 style={{ textAlign: "center" }}>Nimocon 500</h6>
                    </div>
                    <div>
                      <img
                        src={require("../../Assets/Images/product.png")}
                        alt="logo"
                        style={{ width: "100px", height: "100px" }}
                      />
                      <h6 style={{ textAlign: "center" }}>Nimocon 500</h6>
                    </div>
                    <div>
                      <img
                        src={require("../../Assets/Images/product.png")}
                        alt="logo"
                        style={{ width: "100px", height: "100px" }}
                      />
                      <h6 style={{ textAlign: "center" }}>Nimocon 500</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="row">
                <div className="col-md-5 col-lg-5 col-xl-5">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Barcode or QRcode Scan Here"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="col-md-1 col-lg-1 col-xl-1">
                  <p>OR</p>
                </div>
                <div className="col-md-5 col-lg-5 col-xl-5">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Barcode or QRcode Scan Here"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 col-lg-8 col-xl-8">
                  <input
                    type="text"
                    class="form-control mt-3"
                    placeholder="Waiking Customer"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="col-md-4 col-lg-4 col-xl-4">
                  <button
                    className="btn mt-3"
                    style={{
                      backgroundColor: "#45C203",
                      color: "white",
                      fontSize: "15px"
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <table className="table table-sm table-bordered">
                    <thead>
                      <tr>
                        <th>Item Imformation</th>
                        <th>Batch</th>
                        <th>Expiry</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Dic %</th>
                        <th>Total</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4"></div>
                <div className="col-md-3 col-lg-3 col-xl-3">
                  <p
                    style={{
                      fontSize: "14px",
                      fontFamily: "Open Sans",
                      lineHeight: "20px",
                      color: "#344767",
                      textAlign: "right"
                    }}
                  >
                    Invoice Discount:
                  </p>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3">
                  <input
                    type="number"
                    class="form-control"
                    placeholder="00.0"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2"></div>
              </div>
              <div className="row mt-4">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4"></div>
                <div className="col-md-3 col-lg-3 col-xl-3">
                  <p
                    style={{
                      fontSize: "14px",
                      fontFamily: "Open Sans",
                      lineHeight: "20px",
                      color: "#344767",
                      textAlign: "right"
                    }}
                  >
                    Total Discount:
                  </p>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3">
                  <h5>
                    <span
                      class="badge"
                      style={{
                        border: "1px solid #f1f3f6",
                        padding: "10px 65px",
                        backgroundColor: "#f1f3f6"
                      }}
                    >
                      00.0
                    </span>
                  </h5>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2"></div>
              </div>
              <div className="row mt-4">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4"></div>
                <div className="col-md-3 col-lg-3 col-xl-3">
                  <p
                    style={{
                      fontSize: "14px",
                      fontFamily: "Open Sans",
                      lineHeight: "20px",
                      color: "#344767",
                      textAlign: "right"
                    }}
                  >
                    Tax:
                  </p>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3">
                  <h5>
                    <span
                      class="badge"
                      style={{
                        border: "1px solid #f1f3f6",
                        padding: "10px 65px",
                        backgroundColor: "#f1f3f6"
                      }}
                    >
                      00.0
                    </span>
                  </h5>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2"></div>
              </div>
              <div className="row mt-4">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4"></div>
                <div className="col-md-3 col-lg-3 col-xl-3">
                  <p
                    style={{
                      fontSize: "14px",
                      fontFamily: "Open Sans",
                      lineHeight: "20px",
                      color: "#344767",
                      textAlign: "right"
                    }}
                  >
                    Vat:
                  </p>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3">
                  <h5>
                    <span
                      class="badge"
                      style={{
                        border: "1px solid #f1f3f6",
                        padding: "10px 65px",
                        backgroundColor: "#f1f3f6"
                      }}
                    >
                      00.0
                    </span>
                  </h5>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2"></div>
              </div>
              <div className="row mt-4">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4"></div>
                <div className="col-md-3 col-lg-3 col-xl-3">
                  <p
                    style={{
                      fontSize: "14px",
                      fontFamily: "Open Sans",
                      lineHeight: "20px",
                      color: "#344767",
                      textAlign: "right"
                    }}
                  >
                    Total Tax:
                  </p>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3">
                  <h5>
                    <span
                      class="badge"
                      style={{
                        border: "1px solid #f1f3f6",
                        padding: "10px 65px",
                        backgroundColor: "#f1f3f6"
                      }}
                    >
                      00.0
                    </span>
                  </h5>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2"></div>
              </div>
              <div className="row mt-4">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4"></div>
                <div className="col-md-3 col-lg-3 col-xl-3">
                  <p
                    style={{
                      fontSize: "14px",
                      fontFamily: "Open Sans",
                      lineHeight: "20px",
                      color: "#344767",
                      textAlign: "right"
                    }}
                  >
                    Grand Total:
                  </p>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3">
                  <h5>
                    <span
                      class="badge"
                      style={{
                        border: "1px solid #f1f3f6",
                        padding: "10px 65px",
                        backgroundColor: "#f1f3f6"
                      }}
                    >
                      00.0
                    </span>
                  </h5>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2"></div>
              </div>
              <div className="row mt-4">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4"></div>
                <div className="col-md-3 col-lg-3 col-xl-3">
                  <p
                    style={{
                      fontSize: "14px",
                      fontFamily: "Open Sans",
                      lineHeight: "20px",
                      color: "#344767",
                      textAlign: "right"
                    }}
                  >
                    Previous:
                  </p>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3">
                  <h5>
                    <span
                      class="badge"
                      style={{
                        border: "1px solid #f1f3f6",
                        padding: "10px 65px",
                        backgroundColor: "#f1f3f6"
                      }}
                    >
                      00.0
                    </span>
                  </h5>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2"></div>
              </div>
              <div className="row mt-4">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4"></div>
                <div className="col-md-3 col-lg-3 col-xl-3">
                  <p
                    style={{
                      fontSize: "14px",
                      fontFamily: "Open Sans-700",
                      lineHeight: "20px",
                      color: "#344767",
                      textAlign: "right"
                    }}
                  >
                    Changes
                  </p>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3">
                  <h5>
                    <span
                      class="badge"
                      style={{
                        border: "1px solid #f1f3f6",
                        padding: "10px 65px",
                        backgroundColor: "#f1f3f6"
                      }}
                    >
                      00.0
                    </span>
                  </h5>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2"></div>
              </div>
              <div className="row">
                <div className="col-12">
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default guiPos;
