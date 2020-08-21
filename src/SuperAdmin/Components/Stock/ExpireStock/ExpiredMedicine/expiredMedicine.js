import React, { Component } from "react";
import {
  showExpiredMedicineListAction,
  expiredMedicineStockAction
} from "../../../../Actions/StockActions/stockActions";
import { connect } from "react-redux";
class expiredMedicine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading1: true,
      searchMedicine: ""
    };
  }
  componentDidMount() {
    this.props.showExpiredMedicineListAction(this);
  }
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-12">
            <div className="card mt-3">
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
                      Date Expired Medicine
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
                        this.setState(
                          { searchMedicine: e.target.value },
                          () => {
                            this.props.expiredMedicineStockAction(
                              this.state.searchMedicine.toUpperCase()
                            );
                          }
                        )
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="row ">
                  <div className="col-12">
                    {this.props.expiredMedicineMsg ? (
                      <span
                        style={{
                          fontSize: "20px",
                          color: "red",
                          marginLeft: "510px"
                        }}
                      >
                        {this.props.expiredMedicineMsg}
                      </span>
                    ) : (
                      ""
                    )}
                    {this.props.expiredMedicine.length > 0 &&
                    this.state.searchMedicine.length === 0 ? (
                      <table className="table justify-content-center table-responsive-md table-bordered table-bordered table-hover mt-2">
                        <thead
                          style={{ fontSize: "13px", textAlign: "center" }}
                        >
                          <tr></tr>
                          <th>In Date</th>
                          <th>Expire Date</th>
                          <th>Medicine</th>
                          <th>Medicine Name</th>
                          <th>Salt</th>
                          <th>Purchase Price Per Box</th>
                          <th>Sale Price Per Box</th>
                          <th>No.Of Boxes</th>
                          <th>Total Tabs In All Stocks</th>
                          <th>Stock Status</th>
                        </thead>
                        <tbody
                          style={{ fontSize: "13px", textAlign: "center" }}
                        >
                          {this.props.expiredMedicine.map(
                            expiredMedicineList => (
                              <tr>
                                <td>
                                  {expiredMedicineList.inDate
                                    ? String(expiredMedicineList.inDate).split(
                                        "T"
                                      )[0]
                                    : ""}
                                </td>
                                <td>
                                  {expiredMedicineList.expiryDate
                                    ? String(
                                        expiredMedicineList.expiryDate
                                      ).split("T")[0]
                                    : ""}
                                </td>
                                <td>
                                  <img
                                    class="img-thumbnail"
                                    src={
                                      expiredMedicineList.medicine
                                        .medicineImgURL
                                        ? "https://pharmacysys.herokuapp.com" +
                                          expiredMedicineList.medicine
                                            .medicineImgURL[0]
                                        : ""
                                    }
                                    style={{ height: "50px", width: "50px" }}
                                    alt="product"
                                  />
                                </td>
                                <td>
                                  {expiredMedicineList.medicine.medicineName
                                    ? expiredMedicineList.medicine.medicineName
                                    : ""}
                                </td>
                                <td>
                                  {expiredMedicineList.medicine.salt
                                    ? expiredMedicineList.medicine.salt
                                    : ""}
                                </td>
                                <td>
                                  {expiredMedicineList.purchasePricePerBox
                                    ? expiredMedicineList.purchasePricePerBox
                                    : ""}
                                </td>
                                <td>
                                  {expiredMedicineList.salePricePerBox
                                    ? expiredMedicineList.salePricePerBox
                                    : ""}
                                </td>
                                <td>
                                  {expiredMedicineList.noOfBoxes
                                    ? expiredMedicineList.noOfBoxes
                                    : ""}
                                </td>
                                <td>
                                  {expiredMedicineList.TotalTabsInAllStocks
                                    ? expiredMedicineList.TotalTabsInAllStocks
                                    : ""}
                                </td>
                                <td>
                                  {expiredMedicineList.stockStatus
                                    ? expiredMedicineList.stockStatus
                                    : ""}
                                </td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    ) : (
                      this.state.loading1 && (
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
                    {this.props.expiredMedStock.length > 0 &&
                    this.state.searchMedicine.length > 0 ? (
                      <table className="table justify-content-center table-responsive-md table-bordered table-bordered table-hover mt-2">
                        <thead
                          style={{ fontSize: "13px", textAlign: "center" }}
                        >
                          <tr></tr>
                          <th>In Date</th>
                          <th>Expire Date</th>
                          <th>Medicine</th>
                          <th>Medicine Name</th>
                          <th>Salt</th>
                          <th>Purchase Price Per Box</th>
                          <th>Sale Price Per Box</th>
                          <th>No.Of Boxes</th>
                          <th>Total Tabs In All Stocks</th>
                          <th>Stock Status</th>
                        </thead>
                        <tbody
                          style={{ fontSize: "13px", textAlign: "center" }}
                        >
                          {this.props.expiredMedStock.map(
                            expiredMedicineList => (
                              <tr>
                                <td>
                                  {expiredMedicineList.inDate
                                    ? String(expiredMedicineList.inDate).split(
                                        "T"
                                      )[0]
                                    : ""}
                                </td>
                                <td>
                                  {expiredMedicineList.expiryDate
                                    ? String(
                                        expiredMedicineList.expiryDate
                                      ).split("T")[0]
                                    : ""}
                                </td>
                                <td>
                                  <img
                                    class="img-thumbnail"
                                    src={
                                      expiredMedicineList.medicine
                                        .medicineImgURL
                                        ? "https://pharmacysys.herokuapp.com" +
                                          expiredMedicineList.medicine
                                            .medicineImgURL[0]
                                        : ""
                                    }
                                    style={{ height: "50px", width: "50px" }}
                                    alt="product"
                                  />
                                </td>
                                <td>
                                  {expiredMedicineList.medicine.medicineName
                                    ? expiredMedicineList.medicine.medicineName
                                    : ""}
                                </td>
                                <td>
                                  {expiredMedicineList.medicine.salt
                                    ? expiredMedicineList.medicine.salt
                                    : ""}
                                </td>
                                <td>
                                  {expiredMedicineList.purchasePricePerBox
                                    ? expiredMedicineList.purchasePricePerBox
                                    : ""}
                                </td>
                                <td>
                                  {expiredMedicineList.salePricePerBox
                                    ? expiredMedicineList.salePricePerBox
                                    : ""}
                                </td>
                                <td>
                                  {expiredMedicineList.noOfBoxes
                                    ? expiredMedicineList.noOfBoxes
                                    : ""}
                                </td>
                                <td>
                                  {expiredMedicineList.TotalTabsInAllStocks
                                    ? expiredMedicineList.TotalTabsInAllStocks
                                    : ""}
                                </td>
                                <td>
                                  {expiredMedicineList.stockStatus
                                    ? expiredMedicineList.stockStatus
                                    : ""}
                                </td>
                              </tr>
                            )
                          )}
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
                        {this.props.searchExpiredMedError}
                      </span>
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
  expiredMedicine: state.StockReducer.expiredMedicine,
  expiredMedicineMsg: state.StockReducer.expiredMedicineMsg,
  expiredMedStock: state.StockReducer.expiredMedStock,
  searchExpiredMedError: state.StockReducer.searchExpiredMedError
});
export default connect(mapStateToProps, {
  showExpiredMedicineListAction,
  expiredMedicineStockAction
})(expiredMedicine);
