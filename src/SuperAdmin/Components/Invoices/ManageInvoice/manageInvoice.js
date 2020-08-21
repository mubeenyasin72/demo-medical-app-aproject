import React, { Component } from "react";
import { Link } from "react-router-dom";
class manageInvoice extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="row mt-2">
                <div className="col-2">
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
                <div className="col-2">
                  <Link to="/SuperAdmin/GUIPOSView">
                    <button
                      className="btn"
                      style={{
                        backgroundColor: "#3A95E4",
                        width: "100%",
                        color: "white",
                        fontSize: "15px"
                      }}
                    >
                      POS Invoice
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-header">
              <p
                style={{
                  fontFamily: "Alegreya Sans",
                  fontSize: "20px",
                  lineHeight: "15px",
                  color: "#374767",
                  textAlign: "Left"
                }}
              >
                Manage Invoice
              </p>
            </div>
            <div className="card-body">
              <div className="row ">
                <div className="col-12 mt-4">
                  <table class="table table-bordered table-responsive-md bg-white">
                    <thead>
                      <tr>
                        <th>SL.</th>
                        <th>Invoice No</th>
                        <th>Customer Name</th>
                        <th>Date</th>
                        <th>Total Ammount</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>1000</td>
                        <td>Walking Customer</td>
                        <td>2019-11-12</td>
                        <td>23.75</td>
                        <td>
                          <a
                            href="/"
                            style={{
                              backgroundColor: "#37A000",
                              padding: "5px",
                              border: "1px solid #37A000",
                              borderRadius: "5px"
                            }}
                          >
                            <i
                              class="fa fa-window-restore"
                              style={{ fontSize: "20px", color: "white" }}
                            ></i>
                          </a>
                          <a
                            href="/"
                            style={{
                              backgroundColor: "#FFB61E",
                              padding: "5px",
                              border: "1px solid #FFB61E",
                              borderRadius: "5px",
                              marginLeft: "10px"
                            }}
                          >
                            <i
                              class="fa fa-fax"
                              style={{ fontSize: "20px", color: "white" }}
                            ></i>
                          </a>
                          <a
                            href="/"
                            style={{
                              backgroundColor: "#62D0F1",
                              padding: "5px",
                              border: "1px solid #62D0F1",
                              borderRadius: "5px",
                              marginLeft: "10px"
                            }}
                          >
                            <i
                              class="fa fa-pencil "
                              style={{ fontSize: "20px", color: "white" }}
                            ></i>
                          </a>
                          <a
                            href="/"
                            style={{
                              backgroundColor: "#E5343D",
                              padding: "5px",
                              border: "1px solid #E5343D",
                              borderRadius: "5px",
                              marginLeft: "10px"
                            }}
                          >
                            <i
                              class="fa fa-trash"
                              style={{ fontSize: "20px", color: "white" }}
                            ></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>1000</td>
                        <td>Walking Customer</td>
                        <td>2019-11-12</td>
                        <td>23.75</td>
                        <td>
                          <a
                            href="/"
                            style={{
                              backgroundColor: "#37A000",
                              padding: "5px",
                              border: "1px solid #37A000",
                              borderRadius: "5px"
                            }}
                          >
                            <i
                              class="fa fa-window-restore"
                              style={{ fontSize: "20px", color: "white" }}
                            ></i>
                          </a>
                          <a
                            href="/"
                            style={{
                              backgroundColor: "#FFB61E",
                              padding: "5px",
                              border: "1px solid #FFB61E",
                              borderRadius: "5px",
                              marginLeft: "10px"
                            }}
                          >
                            <i
                              class="fa fa-fax"
                              style={{ fontSize: "20px", color: "white" }}
                            ></i>
                          </a>
                          <a
                            href="/"
                            style={{
                              backgroundColor: "#62D0F1",
                              padding: "5px",
                              border: "1px solid #62D0F1",
                              borderRadius: "5px",
                              marginLeft: "10px"
                            }}
                          >
                            <i
                              class="fa fa-pencil "
                              style={{ fontSize: "20px", color: "white" }}
                            ></i>
                          </a>
                          <a
                            href="/"
                            style={{
                              backgroundColor: "#E5343D",
                              padding: "5px",
                              border: "1px solid #E5343D",
                              borderRadius: "5px",
                              marginLeft: "10px"
                            }}
                          >
                            <i
                              class="fa fa-trash"
                              style={{ fontSize: "20px", color: "white" }}
                            ></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>1000</td>
                        <td>Walking Customer</td>
                        <td>2019-11-12</td>
                        <td>23.75</td>
                        <td>
                          <a
                            href="/"
                            style={{
                              backgroundColor: "#37A000",
                              padding: "5px",
                              border: "1px solid #37A000",
                              borderRadius: "5px"
                            }}
                          >
                            <i
                              class="fa fa-window-restore"
                              style={{ fontSize: "20px", color: "white" }}
                            ></i>
                          </a>
                          <a
                            href="/"
                            style={{
                              backgroundColor: "#FFB61E",
                              padding: "5px",
                              border: "1px solid #FFB61E",
                              borderRadius: "5px",
                              marginLeft: "10px"
                            }}
                          >
                            <i
                              class="fa fa-fax"
                              style={{ fontSize: "20px", color: "white" }}
                            ></i>
                          </a>
                          <a
                            href="/"
                            style={{
                              backgroundColor: "#62D0F1",
                              padding: "5px",
                              border: "1px solid #62D0F1",
                              borderRadius: "5px",
                              marginLeft: "10px"
                            }}
                          >
                            <i
                              class="fa fa-pencil "
                              style={{ fontSize: "20px", color: "white" }}
                            ></i>
                          </a>
                          <a
                            href="/"
                            style={{
                              backgroundColor: "#E5343D",
                              padding: "5px",
                              border: "1px solid #E5343D",
                              borderRadius: "5px",
                              marginLeft: "10px"
                            }}
                          >
                            <i
                              class="fa fa-trash"
                              style={{ fontSize: "20px", color: "white" }}
                            ></i>
                          </a>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td>1</td>
                        <td>1000</td>
                        <td>Walking Customer</td>
                        <td>2019-11-12</td>
                        <td>23.75</td>
                        <td>
                          <a
                            href="/"
                            style={{
                              backgroundColor: "#37A000",
                              padding: "5px",
                              border: "1px solid #37A000",
                              borderRadius: "5px"
                            }}
                          >
                            <i
                              class="fa fa-window-restore"
                              style={{ fontSize: "20px", color: "white" }}
                            ></i>
                          </a>
                          <a
                            href="/"
                            style={{
                              backgroundColor: "#FFB61E",
                              padding: "5px",
                              border: "1px solid #FFB61E",
                              borderRadius: "5px",
                              marginLeft: "10px"
                            }}
                          >
                            <i
                              class="fa fa-fax"
                              style={{ fontSize: "20px", color: "white" }}
                            ></i>
                          </a>
                          <a
                            href="/"
                            style={{
                              backgroundColor: "#62D0F1",
                              padding: "5px",
                              border: "1px solid #62D0F1",
                              borderRadius: "5px",
                              marginLeft: "10px"
                            }}
                          >
                            <i
                              class="fa fa-pencil "
                              style={{ fontSize: "20px", color: "white" }}
                            ></i>
                          </a>
                          <a
                            href="/"
                            style={{
                              backgroundColor: "#E5343D",
                              padding: "5px",
                              border: "1px solid #E5343D",
                              borderRadius: "5px",
                              marginLeft: "10px"
                            }}
                          >
                            <i
                              class="fa fa-trash"
                              style={{ fontSize: "20px", color: "white" }}
                            ></i>
                          </a>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td>1</td>
                        <td>1000</td>
                        <td>Walking Customer</td>
                        <td>2019-11-12</td>
                        <td>23.75</td>
                        <td>
                          <a
                            href="/"
                            style={{
                              backgroundColor: "#37A000",
                              padding: "5px",
                              border: "1px solid #37A000",
                              borderRadius: "5px"
                            }}
                          >
                            <i
                              class="fa fa-window-restore"
                              style={{ fontSize: "20px", color: "white" }}
                            ></i>
                          </a>
                          <a
                            href="/"
                            style={{
                              backgroundColor: "#FFB61E",
                              padding: "5px",
                              border: "1px solid #FFB61E",
                              borderRadius: "5px",
                              marginLeft: "10px"
                            }}
                          >
                            <i
                              class="fa fa-fax"
                              style={{ fontSize: "20px", color: "white" }}
                            ></i>
                          </a>
                          <a
                            href="/"
                            style={{
                              backgroundColor: "#62D0F1",
                              padding: "5px",
                              border: "1px solid #62D0F1",
                              borderRadius: "5px",
                              marginLeft: "10px"
                            }}
                          >
                            <i
                              class="fa fa-pencil "
                              style={{ fontSize: "20px", color: "white" }}
                            ></i>
                          </a>
                          <a
                            href="/"
                            style={{
                              backgroundColor: "#E5343D",
                              padding: "5px",
                              border: "1px solid #E5343D",
                              borderRadius: "5px",
                              marginLeft: "10px"
                            }}
                          >
                            <i
                              class="fa fa-trash"
                              style={{ fontSize: "20px", color: "white" }}
                            ></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default manageInvoice;
