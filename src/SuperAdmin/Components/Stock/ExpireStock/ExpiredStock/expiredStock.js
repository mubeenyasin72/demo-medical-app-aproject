import React, { Component } from "react";
import { connect } from "react-redux";
import {
  showExpiredStockListAction,
  outOfStockAction
} from "../../../../Actions/StockActions/stockActions";
class expiredStock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      searchStock: ""
    };
  }
  componentDidMount() {
    this.props.showExpiredStockListAction(this);
  }
  render() {
    return (
      <React.Fragment>
        <div className="row mt-3">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-6 mt-2">
                    <p
                      style={{
                        fontFamily: "Alegreya Sans",
                        fontSize: "20px",
                        lineHeight: "15px",
                        color: "#374767",
                        textAlign: "Left"
                      }}
                    >
                      Out Stock Medicine
                    </p>
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
                          this.props.outOfStockAction(
                            this.state.searchStock.toUpperCase()
                          );
                        })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="card-body">
                {this.props.expiredStockMsg ? (
                  <span
                    style={{
                      fontSize: "20px",
                      color: "red",
                      marginLeft: "510px"
                    }}
                  >
                    {this.props.expiredStockMsg}
                  </span>
                ) : (
                  ""
                )}
                {this.props.expiredStockList.length > 0 &&
                this.state.searchStock.length === 0 ? (
                  <table className="table justify-content-center table-responsive-md table-bordered table-bordered table-hover mt-2">
                    <thead style={{ fontSize: "13px", textAlign: "center" }}>
                      <tr></tr>
                      <th>Medicine</th>
                      <th>Medicine Name</th>
                      <th>Salt</th>
                      <th>No.OfSachet</th>
                      <th>No.Of Tablets Per Sachet</th>
                      <th>No.Of Tablets</th>
                      <th>Medicine Unit Value</th>
                    </thead>
                    <tbody style={{ fontSize: "13px", textAlign: "center" }}>
                      {this.props.expiredStockList.map(expiredStockList => (
                        <tr>
                          <td>
                            <img
                              class="img-thumbnail"
                              src={
                                expiredStockList.medicine.medicineImgURL
                                  ? "https://pharmacysys.herokuapp.com" +
                                    expiredStockList.medicine.medicineImgURL[0]
                                  : ""
                              }
                              style={{ height: "50px", width: "50px" }}
                              alt="product"
                            />
                          </td>
                          <td>
                            {expiredStockList.medicine.medicineName
                              ? expiredStockList.medicine.medicineName
                              : ""}
                          </td>
                          <td>
                            {expiredStockList.medicine.salt
                              ? expiredStockList.medicine.salt
                              : ""}
                          </td>
                          <td>
                            {expiredStockList.medicine.noOfSachet
                              ? expiredStockList.medicine.noOfSachet
                              : ""}
                          </td>
                          <td>
                            {expiredStockList.medicine.noOfTabletsPerSachet
                              ? expiredStockList.medicine.noOfTabletsPerSachet
                              : ""}
                          </td>
                          <td>
                            {expiredStockList.medicine.noOfTablets
                              ? expiredStockList.medicine.noOfTablets
                              : ""}
                          </td>
                          <td>
                            {expiredStockList.medicine.medicineUnitValue
                              ? expiredStockList.medicine.medicineUnitValue
                              : ""}
                          </td>
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
                        marginLeft: "600px",
                        height: "3rem",
                        width: "3rem"
                      }}
                    />
                  )
                )}
              </div>
              <div className="col-12">
                {this.props.outOfStock.length > 0 &&
                this.state.searchStock.length > 0 ? (
                  <table className="table justify-content-center table-responsive-md table-bordered table-bordered table-hover mt-2">
                    <thead style={{ fontSize: "13px", textAlign: "center" }}>
                      <th>Medicine</th>
                      <th>Medicine Name</th>
                      <th>Salt</th>
                      <th>No.OfSachet</th>
                      <th>No.Of Tablets Per Sachet</th>
                      <th>No.Of Tablets</th>
                      <th>Medicine Unit Value</th>
                    </thead>
                    <tbody style={{ fontSize: "13px", textAlign: "center" }}>
                      {this.props.outOfStock.map(expiredStockList => (
                        <tr>
                          <td>
                            <img
                              class="img-thumbnail"
                              src={
                                expiredStockList.medicine.medicineImgURL
                                  ? "https://pharmacysys.herokuapp.com" +
                                    expiredStockList.medicine.medicineImgURL[0]
                                  : ""
                              }
                              style={{ height: "50px", width: "50px" }}
                              alt="product"
                            />
                          </td>
                          <td>
                            {expiredStockList.medicine.medicineName
                              ? expiredStockList.medicine.medicineName
                              : ""}
                          </td>
                          <td>
                            {expiredStockList.medicine.salt
                              ? expiredStockList.medicine.salt
                              : ""}
                          </td>
                          <td>
                            {expiredStockList.medicine.noOfSachet
                              ? expiredStockList.medicine.noOfSachet
                              : ""}
                          </td>
                          <td>
                            {expiredStockList.medicine.noOfTabletsPerSachet
                              ? expiredStockList.medicine.noOfTabletsPerSachet
                              : ""}
                          </td>
                          <td>
                            {expiredStockList.medicine.noOfTablets
                              ? expiredStockList.medicine.noOfTablets
                              : ""}
                          </td>
                          <td>
                            {expiredStockList.medicine.medicineUnitValue
                              ? expiredStockList.medicine.medicineUnitValue
                              : ""}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <span
                    style={{
                      marginLeft: "500px",
                      fontFamily: "Alegreya Sans",
                      fontSize: "20px",
                      lineHeight: "15px",
                      color: "#374767"
                    }}
                  >
                    {this.props.SearchOutStockError}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  expiredStockMsg: state.StockReducer.expiredStockMsg,
  expiredStockList: state.StockReducer.expiredStockList,
  outOfStock: state.StockReducer.outOfStock,
  SearchOutStockError: state.StockReducer.SearchOutStockError
});
export default connect(mapStateToProps, {
  showExpiredStockListAction,
  outOfStockAction
})(expiredStock);
