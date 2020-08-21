import React, { Component } from "react";
import "./addStockMedicine.css";
import Form from "./StockForm/stockAddForm";
import { Link } from "react-router-dom";
class addStock extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <div className="row">
                <div className="col-12">
                  <Link to="/SuperAdmin/StockReportView">
                    <button
                      className="btn stock-report-btn w-100  mt-3"
                      style={{
                        backgroundColor: "#B2DFDB",
                        fontSize: "15px",
                        color: "#374767"
                      }}
                    >
                      Stock Report
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-8"></div>
          </div>
          <div className="row mt-5">
            <div className="col-12">
              <Form />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default addStock;
