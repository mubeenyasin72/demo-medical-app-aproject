import React, { Component } from "react";
import Card from "..//../..//BasicComponents/CardSuperAdmin/cardSuperAdmin";
import Chart from "../../Charts/customerChart";
import "./cardMainBodyDashboard.css";
class cardMainBody extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row mt-5 main-dashboard-design">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div className="row ">
                <div className="col-sm-8 col-md-6 col-lg-3 col-xl-3">
                  <Card className="card-sizing">
                    <div className="row">
                      <div className="col-sm-6">
                        <img
                          src={require("..//..//Assets/pos_invoice.png")}
                          style={{ width: "70px" }}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-3"></div>
                      <a
                        href="/SuperAdmin/POSInvoiceView"
                        style={{
                          textAlign: "center",
                          marginTop: "20px",
                          fontSize: "17px",
                          textDecoration: "none",
                          color: "#45C203"
                        }}
                      >
                        Create POS Invoice
                      </a>
                    </div>
                  </Card>
                </div>
                <div className="col-sm-8 col-md-6 col-lg-3 col-xl-3">
                  <Card>
                    <div className="row">
                      <div className="col-sm-6">
                        <img
                          src={require("..//..//Assets/invoice (1).png")}
                          style={{ width: "50px" }}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-3"></div>
                      <a
                        href="/SuperAdmin/NewInvoiceView"
                        style={{
                          textAlign: "center",
                          marginTop: "20px",
                          fontSize: "17px",
                          textDecoration: "none",
                          color: "#45C203"
                        }}
                      >
                        Create New Invoice
                      </a>
                    </div>
                  </Card>
                </div>
                <div className="col-sm-8 col-md-6 col-lg-3 col-xl-3">
                  <Card>
                    <div className="row">
                      <div className="col-sm-6">
                        <img
                          src={require("..//..//Assets/product.png")}
                          style={{ width: "50px" }}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-3"></div>
                      <a
                        href="/SuperAdmin/AddMedicineView"
                        style={{
                          textAlign: "center",
                          marginTop: "20px",
                          fontSize: "17px",
                          textDecoration: "none",
                          color: "#45C203"
                        }}
                      >
                        Add Medicine
                      </a>
                    </div>
                  </Card>
                </div>
                <div className="col-sm-8 col-md-6 col-lg-3 col-xl-3">
                  <Card>
                    <div className="row">
                      <div className="col-sm-6">
                        <img
                          src={require("..//..//Assets/customer.png")}
                          style={{ width: "50px" }}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-3"></div>
                      <a
                        href="/SuperAdmin/AddEmployeeView"
                        style={{
                          textAlign: "center",
                          marginTop: "20px",
                          fontSize: "17px",
                          textDecoration: "none",
                          color: "#45C203"
                        }}
                      >
                        Add Employee
                      </a>
                    </div>
                  </Card>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-sm-8 col-md-6 col-lg-3 col-xl-3">
                  <Card>
                    <div className="row">
                      <div className="col-sm-6">
                        <img
                          src={require("..//..//Assets/sale.png")}
                          style={{ width: "50px" }}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-3"></div>
                      <a
                        href="/SuperAdmin/combineAllGst"
                        style={{
                          textAlign: "center",
                          marginTop: "20px",
                          fontSize: "17px",
                          textDecoration: "none",
                          color: "#45C203"
                        }}
                      >
                        Discont %
                      </a>
                    </div>
                  </Card>
                </div>
                <div className="col-sm-8 col-md-6 col-lg-3 col-xl-3">
                  <Card>
                    <div className="row">
                      <div className="col-sm-6">
                        <img
                          src={require("..//..//Assets/purchase.png")}
                          style={{ width: "50px" }}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-3"></div>
                      <a
                        href="/SuperAdmin/ExpireStockMedicineView"
                        style={{
                          textAlign: "center",
                          marginTop: "20px",
                          fontSize: "17px",
                          textDecoration: "none",
                          color: "#45C203"
                        }}
                      >
                        Expired Medicine{" "}
                      </a>
                    </div>
                  </Card>
                </div>
                <div className="col-sm-8 col-md-3 col-lg-3 col-xl-3">
                  <Card>
                    <div className="row">
                      <div className="col-sm-6">
                        <img
                          src={require("..//..//Assets/stock.png")}
                          style={{ width: "50px" }}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-3"></div>
                      <a
                        href="/SuperAdmin/StockReportView"
                        style={{
                          textAlign: "center",
                          marginTop: "20px",
                          fontSize: "17px",
                          textDecoration: "none",
                          color: "#45C203"
                        }}
                      >
                        Avalible Stock
                      </a>
                    </div>
                  </Card>
                </div>
                <div className="col-sm-8 col-md-6 col-lg-3 col-xl-3">
                  <Card>
                    <div className="row">
                      <div className="col-sm-6">
                        <img
                          src={require("..//..//Assets/account.png")}
                          style={{ width: "50px" }}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-3"></div>
                      <a
                        href="/SuperAdmin/TodaySaleView"
                        style={{
                          textAlign: "center",
                          marginTop: "20px",
                          fontSize: "17px",
                          textDecoration: "none",
                          color: "#45C203"
                        }}
                      >
                        Today Report
                      </a>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default cardMainBody;
