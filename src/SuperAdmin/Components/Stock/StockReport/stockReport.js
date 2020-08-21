import React, { Component } from "react";
import {
  showStockListAction,
  searchStockAction
} from "../../../Actions/StockActions/stockActions";
import { connect } from "react-redux";

class stockReport extends Component {
  state = {
    loading: true,
    searchStock: ""
  };
  componentDidMount() {
    this.props.showStockListAction(this);
  }
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid bg-white">
          <div className="row mt-4">
            <div className="card w-100">
              <div className="card-header">
                <div className="row">
                  <div className="col-6 mt-2">
                    <h4
                      style={{
                        fontFamily: "Alegreya Sans",
                        fontSize: "25px",
                        lineHeight: "15px",
                        color: "#374767",
                        textAlign: "Left"
                      }}
                    >
                      Avalible Stock
                    </h4>
                  </div>
                  <div className="col-3"></div>
                  <div className="col-3">
                    <input
                      class="form-control mr-sm-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      style={{ width: "100%" }}
                      onChange={e =>
                        this.setState({ searchStock: e.target.value }, () => {
                          this.props.searchStockAction(this.state.searchStock);
                        })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="card-body">
                {this.props.msgError ? (
                  <span
                    style={{
                      fontSize: "20px",
                      color: "red",
                      marginLeft: "550px"
                    }}
                  >
                    {this.props.msgError}
                  </span>
                ) : (
                  ""
                )}
                <div className="row mt-3">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    {this.props.addStock.length > 0 ? (
                      <table className="table table-responsive-xl table-bordered table-md">
                        <thead
                          style={{ fontSize: "12px", textAlign: "center" }}
                        >
                          <th>In Date</th>
                          <th>Expiry Date</th>
                          <th>Purchase Price Per Box</th>
                          <th>Sale Price Per Box</th>
                          <th>No Of Boxes</th>
                          <th>No Of Extra Tabs</th>
                          <th>Total Tabs In All Stocks</th>
                          <th>Stock Status</th>
                        </thead>
                        <tbody>
                          {this.props.addStock.map(ls => (
                            <tr>
                              <td>
                                {ls.inDate
                                  ? String(ls.inDate).split("T")[0]
                                  : ""}
                              </td>
                              <td>
                                {ls.expiryDate
                                  ? String(ls.expiryDate).split("T")[0]
                                  : ""}
                              </td>
                              <td>
                                {ls.purchasePricePerBox
                                  ? ls.purchasePricePerBox
                                  : ""}
                              </td>
                              <td>
                                {ls.salePricePerBox ? ls.salePricePerBox : ""}
                              </td>
                              <td>{ls.noOfBoxes ? ls.noOfBoxes : ""}</td>
                              <td>{ls.noOfExtraTabs}</td>
                              <td>
                                {ls.TotalTabsInAllStocks
                                  ? ls.TotalTabsInAllStocks
                                  : ""}
                              </td>
                              <td>{ls.stockStatus ? ls.stockStatus : ""}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      this.state.loading && (
                        <i
                          class="spinner-border spinner-border-lg text-center"
                          role="status"
                          style={{
                            textAlign: "center",
                            color: "#45C203",
                            marginLeft: "600px"
                          }}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  addStock: state.StockReducer.addStock,
  msgError: state.StockReducer.msgError
});
export default connect(mapStateToProps, {
  showStockListAction,
  searchStockAction
})(stockReport);
