import React, { Component } from "react";
import "./stockAddForm.css";
import AddStockClass from "../../../../BusinessLogics/addStockClass";
import { connect } from "react-redux";
import { addStockAction } from "../../../../Actions/StockActions/stockActions";
import { showVendorAction } from "../../../../Actions/VendorActions/VenderActions";
import { showMedicineAction } from "../../../../Actions/AddMedicineAction/addMedicineAction";
class stockAddForm extends Component {
  state = {
    expiryDate: "",
    venderID: "",
    medicineID: "",
    purchasePricePerBox: 0,
    salePricePerBox: 0,
    noOfBoxes: 0,
    noOfExtraTabs: 0,
    loading: false
  };
  componentDidMount() {
    this.props.showMedicineAction(this);
    this.props.showVendorAction(this);
  }
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="card w-100">
              <div className="card-header">
                <h4
                  style={{
                    fontFamily: "Alegreya Sans",
                    fontSize: "25px",
                    lineHeight: "15px",
                    color: "#374767",
                    textAlign: "Left"
                  }}
                >
                  Add Stock
                </h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-3"></div>
                  <div className="col-6">
                    <div class="form-group">
                      <label for="exampleInputEmail1">Expiry Date</label>
                      <input
                        type="date"
                        class="form-control"
                        placeholder=""
                        onChange={e =>
                          this.setState({ expiryDate: e.target.value })
                        }
                        disabled={this.state.loading}
                      />
                      <div class="form-group">
                        <label for="sel1">Select Vendor:</label>
                        <select
                          class="form-control"
                          id="sel1"
                          onChange={e =>
                            this.setState({ venderID: e.target.value })
                          }
                          disabled={this.state.loading}
                        >
                          <option>Select</option>
                          {this.props.addVender.length > 0
                            ? this.props.addVender.map(vederList => (
                                <option value={vederList._id}>
                                  {vederList.vendorName
                                    ? vederList.vendorName
                                    : ""}
                                </option>
                              ))
                            : ""}
                        </select>
                      </div>
                      <div class="form-group">
                        <label for="sel1">Select Medicine:</label>
                        <select
                          class="form-control"
                          id="sel1"
                          onChange={e =>
                            this.setState({ medicineID: e.target.value })
                          }
                          disabled={this.state.loading}
                        >
                          <option>Select</option>
                          {this.props.addMedicine.length > 0
                            ? this.props.addMedicine.map(medicine => (
                                <option value={medicine._id}>
                                  {medicine.medicineName
                                    ? medicine.medicineName
                                    : ""}
                                </option>
                              ))
                            : ""}
                        </select>
                      </div>
                      <label for="exampleInputEmail1">
                        Purchase Price Per Box
                      </label>
                      <input
                        type="number"
                        class="form-control"
                        placeholder=""
                        onChange={e =>
                          this.setState({ purchasePricePerBox: e.target.value })
                        }
                        disabled={this.state.loading}
                      />
                      <label for="exampleInputEmail1">
                        Sale Price Per Box{" "}
                      </label>
                      <input
                        type="number"
                        class="form-control"
                        placeholder=""
                        onChange={e =>
                          this.setState({ salePricePerBox: e.target.value })
                        }
                        disabled={this.state.loading}
                      />
                      <label for="exampleInputEmail1">No. Of Boxes</label>
                      <input
                        type="number"
                        class="form-control"
                        placeholder=""
                        onChange={e =>
                          this.setState({ noOfBoxes: e.target.value })
                        }
                        disabled={this.state.loading}
                      />
                      <label for="exampleInputEmail1">No. Of Extra Tabs</label>
                      <input
                        type="number"
                        class="form-control"
                        placeholder=""
                        onChange={e =>
                          this.setState({ noOfExtraTabs: e.target.value })
                        }
                        disabled={this.state.loading}
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-12">
                    {this.props.addDataError ? (
                      <span
                        style={{
                          fontSize: "10px",
                          color: "red",
                          marginLeft: "450px"
                        }}
                      >
                        {this.props.addDataError}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-4"></div>

                  <div className="col-6">
                    <button
                      className="btn add-stock-btn-1 mb-4"
                      style={{
                        backgroundColor: "#45C203",
                        color: "white",
                        width: "50%"
                      }}
                      onClick={() => {
                        if (!this.state.loading) {
                          this.setState(
                            {
                              loading: true
                            },
                            () => {
                              this.timer = setTimeout(() => {},
                              this.state.loading === false);
                              this.props.addStockAction(
                                new AddStockClass(
                                  this.state.expiryDate,
                                  this.state.venderID,
                                  this.state.medicineID,
                                  this.state.purchasePricePerBox,
                                  this.state.salePricePerBox,
                                  this.state.noOfBoxes,
                                  this.state.noOfExtraTabs
                                ),
                                this
                              );
                            }
                          );
                        }
                      }}
                      class="btn btn-block"
                      disabled={this.state.loading}
                    >
                      {this.state.loading && (
                        <i
                          class="spinner-border text-dark spinner-border-sm"
                          role="status"
                        />
                      )}
                      {!this.state.loading && <span>Add</span>}
                    </button>
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
  addVender: state.VenderReducer.addVender,
  addMedicine: state.AddMedicineReducer.addMedicine,
  addDataError: state.StockReducer.addDataError
});

export default connect(mapStateToProps, {
  addStockAction,
  showVendorAction,
  showMedicineAction
})(stockAddForm);
