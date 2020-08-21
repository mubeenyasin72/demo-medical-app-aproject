import React, { Component } from "react";
import { Link } from "react-router-dom";

class posInvoice extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid bg-white">
          <div className="row mt-2">
            <div className="col-sm-12 col-md-6 col-lg-2 col-xl-2 mt-3">
              <Link to="/SuperAdmin/NewInvoiceView">
                <button
                  className="btn"
                  style={{
                    backgroundColor: "#53D4FA",
                    width: "100%",
                    color: "white",
                    fontSize: "15px"
                  }}
                >
                  + New Invoice
                </button>
              </Link>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-2 col-xl-2 mt-3">
              <Link to="/SuperAdmin/ManageInvoiceView">
                <button
                  className="btn"
                  style={{
                    backgroundColor: "#3A95E4",
                    width: "100%",
                    color: "white",
                    fontSize: "15px"
                  }}
                >
                  Manage Invoice
                </button>
              </Link>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <p
                style={{
                  fontSize: "18px",
                  fontFamily: "Alegreya Sans",
                  color: "#374767",
                  lineHeight: "26px"
                }}
              >
                New POS Invoice
              </p>
            </div>
            <hr style={{ width: "100%" }} />
          </div>
          <div className="row mt-4">
            <div className="col-sm-12 col-md-6 col-lg-1 col-xl-1">
              <p
                style={{
                  fontSize: "18px",
                  fontFamily: "Alegreya Sans",
                  color: "#374767",
                  lineHeight: "26px",
                  marginTop: "5px"
                }}
              >
                Barcode
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-ls-4 col-xl-4">
              <input
                type="text"
                class="form-control"
                placeholder="Barcode or QRcode scan here"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="col-md-6 col-ls-2 col-xl-2"></div>
            <div className="col-sm-12 col-md-6 col-lg-1 col-xl-1">
              <p
                style={{
                  fontSize: "18px",
                  fontFamily: "Alegreya Sans",
                  color: "#374767",
                  lineHeight: "26px",
                  marginTop: "5px"
                }}
              >
                Barcode
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-ls-4 col-xl-4">
              <input
                type="text"
                class="form-control"
                placeholder="Manual Input barcode"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-sm-12 col-md-6 col-lg-1 col-xl-1">
              <p
                style={{
                  fontSize: "18px",
                  fontFamily: "Alegreya Sans",
                  color: "#374767",
                  lineHeight: "26px",
                  marginTop: "5px"
                }}
              >
                Date
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-ls-4 col-xl-4">
              <input
                type="text"
                class="form-control"
                placeholder="31/01/2020"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="col-md-6 col-ls-2 col-xl-2"></div>
            <div className="col-sm-12 col-md-6 col-lg-1 col-xl-1">
              <p
                style={{
                  fontSize: "18px",
                  fontFamily: "Alegreya Sans",
                  color: "#374767",
                  lineHeight: "26px",
                  marginTop: "5px"
                }}
              >
                Payement Type
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-ls-4 col-xl-4">
              <div class="input-group">
                <select class="custom-select" id="inputGroupSelect04">
                  <option selected>Choose...</option>
                  <option value="1">Cash Paymeny</option>
                  <option value="2">Bank Payment</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-sm-12 col-md-6 col-lg-1 col-xl-1">
              <p
                style={{
                  fontSize: "18px",
                  fontFamily: "Alegreya Sans",
                  color: "#374767",
                  lineHeight: "26px",
                  marginTop: "5px"
                }}
              >
                Customer Name/Phone
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-ls-4 col-xl-4">
              <input
                type="text"
                class="form-control"
                placeholder="Waiking Customer"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="col-md-6 col-ls-2 col-xl-2">
              <button className="btn btn-success">New Customer</button>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg12 col-xl-12">
              <table className="table table-bordered table-sm">
                <thead>
                  <tr>
                    <th>Item Information</th>
                    <th>Batch</th>
                    <th>Ava.Qty</th>
                    <th>Expiry</th>
                    <th>Unit</th>
                    <th>QTY</th>
                    <th>Price</th>
                    <th>Discount%</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="7">
                      <h6 style={{ textAlign: "center" }}>Invoice Detail</h6>
                      <textarea
                        class="form-control"
                        placeholder="Invoice Details"
                        autocomplete="off"
                      ></textarea>
                    </td>
                    <td>
                      <tr>
                        <td style={{ border: "none" }}>
                          <b>Invoice Discount</b>
                        </td>
                      </tr>
                      <hr style={{ width: "112%", marginLeft: "-13px" }} />
                      <tr>
                        <td style={{ border: "none" }}>
                          <b>Total Discount</b>
                        </td>
                      </tr>
                    </td>
                    <td>
                      <tr>
                        <td style={{ border: "none" }}>
                          <p
                            style={{
                              border: "1px solid #EAEAEA",
                              padding: "4px",
                              backgroundColor: "#EAEAEA",
                              textAlign: "right"
                            }}
                          >
                            0.00
                          </p>{" "}
                        </td>
                      </tr>
                      <hr
                        style={{
                          width: "122%",
                          marginLeft: "-13px",
                          marginTop: "-10px"
                        }}
                      />
                      <tr>
                        <td style={{ border: "none" }}>
                          <p
                            style={{
                              border: "1px solid #EAEAEA",
                              padding: "4px",
                              backgroundColor: "#EAEAEA",
                              textAlign: "right"
                            }}
                          >
                            0.00
                          </p>{" "}
                        </td>
                      </tr>
                    </td>
                    <td style={{}}>
                      <button
                        className="btn"
                        style={{
                          backgroundColor: "#53D4FA",
                          color: "white",
                          fontSize: "20px",
                          marginTop: "60px",
                          marginLeft: "20px"
                        }}
                      >
                        +
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td
                      colSpan="8"
                      style={{ textAlign: "right", height: "30px" }}
                    >
                      <b>Tax</b>
                    </td>
                    <td>
                      <p
                        style={{
                          border: "1px solid #EAEAEA",
                          padding: "4px",
                          backgroundColor: "#EAEAEA",
                          textAlign: "right"
                        }}
                      >
                        0.00
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      colSpan="8"
                      style={{ textAlign: "right", height: "30px" }}
                    >
                      <b>Vat</b>
                    </td>
                    <td>
                      <p
                        style={{
                          border: "1px solid #EAEAEA",
                          padding: "4px",
                          backgroundColor: "#EAEAEA",
                          textAlign: "right"
                        }}
                      >
                        0.00
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      colSpan="8"
                      style={{ textAlign: "right", height: "30px" }}
                    >
                      <b>Total Tax</b>
                    </td>
                    <td>
                      <p
                        style={{
                          border: "1px solid #EAEAEA",
                          padding: "4px",
                          backgroundColor: "#EAEAEA",
                          textAlign: "right"
                        }}
                      >
                        0.00
                      </p>
                    </td>
                    <td>
                      <button className="btn btn-warning">
                        <i
                          class="fa fa-arrow-down"
                          style={{ fontSize: "15px" }}
                        ></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td
                      colSpan="8"
                      style={{ textAlign: "right", height: "30px" }}
                    >
                      <b>Grand Total</b>
                    </td>
                    <td>
                      <p
                        style={{
                          border: "1px solid #EAEAEA",
                          padding: "4px",
                          backgroundColor: "#EAEAEA",
                          textAlign: "right"
                        }}
                      >
                        0.00
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      colSpan="8"
                      style={{ textAlign: "right", height: "30px" }}
                    >
                      <b>Previous</b>
                    </td>
                    <td>
                      <p
                        style={{
                          border: "1px solid #EAEAEA",
                          padding: "4px",
                          backgroundColor: "#EAEAEA",
                          textAlign: "right"
                        }}
                      >
                        0.00
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      colSpan="8"
                      style={{ textAlign: "right", height: "30px" }}
                    >
                      <b>Net Total</b>
                    </td>
                    <td>
                      <p
                        style={{
                          border: "1px solid #EAEAEA",
                          padding: "4px",
                          backgroundColor: "#EAEAEA",
                          textAlign: "right"
                        }}
                      >
                        0.00
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button className="btn btn-warning">Full Paid</button>
                      <button
                        className="btn ml-3"
                        style={{ backgroundColor: "#53D4F4", color: "white" }}
                      >
                        <i
                          class="fa fa-calculator"
                          style={{ fontSize: "15px" }}
                        ></i>
                      </button>
                      <button className="btn btn-success ml-3">Submit</button>
                    </td>
                    <td
                      colSpan="7"
                      style={{ textAlign: "right", height: "30px" }}
                    >
                      <b>Due</b>
                    </td>
                    <td>
                      <p
                        style={{
                          border: "1px solid #EAEAEA",
                          padding: "4px",
                          backgroundColor: "#EAEAEA",
                          textAlign: "right"
                        }}
                      >
                        0.00
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      colSpan="8"
                      style={{ textAlign: "right", height: "30px" }}
                    >
                      <b>Change</b>
                    </td>
                    <td>
                      <p
                        style={{
                          border: "1px solid #EAEAEA",
                          padding: "4px",
                          backgroundColor: "#EAEAEA",
                          textAlign: "right"
                        }}
                      >
                        0.00
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default posInvoice;
