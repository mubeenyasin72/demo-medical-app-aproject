import React, { Component } from "react";
import { Link } from "react-router-dom";
class todaySale extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row mt-2 ">
            <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
              <Link to="/SuperAdmin/NewInvoiceView">
                <button
                  className="btn w-100"
                  style={{
                    backgroundColor: "#45C203",
                    color: "white",
                    fontSize: "15px",
                    fontFamily: "Open Sans",
                    lineHeight: "20px",
                    padding: "12px"
                  }}
                >
                  <b>+ New Invoice</b>
                </button>
              </Link>
            </div>
            <div className="col-md-8 col-lg-8 col-xl-8"></div>
          </div>
          <div className="card mt-4">
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
                Today Report
              </p>
            </div>
            <div className="card-body">
              <div className="row mt-1">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <table className="table table-bordered table-md">
                    <thead>
                      <tr>
                        <th>SL.</th>
                        <th>Invoice No</th>
                        <th>Invoice ID</th>
                        <th>Customer Name</th>
                        <th>Date</th>
                        <th>Total Ammount</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <a href="#">1011</a>
                        </td>
                        <td>
                          <a href="#">5591375866</a>
                        </td>
                        <td>
                          <a href="#">Waiking Customer</a>
                        </td>
                        <td>20-10-2020</td>
                        <td>$112.8</td>
                        <td>
                          <a
                            href="#"
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
                            href="#"
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
                            href="#"
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
                            href="#"
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

export default todaySale;
