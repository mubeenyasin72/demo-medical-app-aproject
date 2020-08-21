import React, { Component } from "react";
import { showCompnayAction } from "../../../../Actions/CompnayAction/companyActions";
import { showMedicineTypeAction } from "../../../../Actions/MedicineActions/medicineAction";
import { showEmployeeListAction } from "../../../../Actions/EmployeeActions/EmployeActions";
import { addMedicineAction } from "../../../../Actions/AddMedicineAction/addMedicineAction";
import { connect } from "react-redux";
import AddMedicineClass from "../../../../BusinessLogics/addMedicineClass";
import { showUnitListAction } from "../../../../Actions/AddUnitAction/addUnitAction";
class newMedForm extends Component {
  state = {
    medicineName: "",
    salt: "",
    noOfSachet: "",
    noOfTabletsPerSachet: "",
    noOfTablets: "",
    medicineUnitID: "",
    medicineUnitValue: "",
    isUnboxAllowed: false,
    companyID: "",
    employeeID: "",
    medicineTypeID: "",
    selectedFile: null,
    fileArray: [],
    loading: false,
    ID: null,
    imgUrl: "",
    // errorMsg: this.props.netError2 ? this.props.netError2 : ""
    errorMsg: ""
  };

  componentDidMount() {
    this.props.showCompnayAction(this);
    this.props.showMedicineTypeAction(this);
    this.props.showEmployeeListAction(this);
    this.props.showUnitListAction(this);
  }
  render() {
    let url = "";
    if (this.state.fileArray.length > 0) {
      url = URL.createObjectURL(this.state.fileArray[0]);
    }
    console.log(this.state.errorMsg, "This Is In The Body of Add Medicine");
    {
    }
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div class="card w-100">
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
                    Add New Medicine
                  </h4>
                </div>
                <div class="card-body">
                  <div className="col-12">
                    <div class="row">
                      <div class="col">
                        <div className="row">
                          <div className="col">
                            <label>Medicine Name</label>
                          </div>
                        </div>
                        <input
                          type="text"
                          class="form-control"
                          placeholder=""
                          onChange={e =>
                            this.setState({ medicineName: e.target.value })
                          }
                          disabled={this.state.loading}
                        />
                      </div>
                      <div class="col">
                        <div className="row">
                          <div className="col">
                            <label>Salt Name</label>
                          </div>
                        </div>
                        <input
                          type="text"
                          class="form-control"
                          placeholder=""
                          onChange={e =>
                            this.setState({ salt: e.target.value })
                          }
                          disabled={this.state.loading}
                        />
                      </div>
                    </div>{" "}
                    <div class="row">
                      <div class="col">
                        <div className="row">
                          <div className="col">
                            <label>No Of Sachet</label>
                          </div>
                        </div>
                        <input
                          type="number"
                          class="form-control"
                          placeholder=""
                          onChange={e =>
                            this.setState({ noOfSachet: e.target.value })
                          }
                          disabled={this.state.loading}
                        />
                      </div>
                      <div class="col">
                        <div className="row">
                          <div className="col">
                            <label>No Of Tablets Per Sachet</label>
                          </div>
                        </div>
                        <input
                          type="number"
                          class="form-control"
                          placeholder=""
                          onChange={e =>
                            this.setState({
                              noOfTabletsPerSachet: e.target.value
                            })
                          }
                          disabled={this.state.loading}
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <div className="row">
                          <div className="col">
                            <label>No Of Tablets</label>
                          </div>
                        </div>
                        <input
                          type="number"
                          class="form-control"
                          placeholder=""
                          onChange={e =>
                            this.setState({ noOfTablets: e.target.value })
                          }
                          disabled={this.state.loading}
                        />
                      </div>
                      <div class="col">
                        <div className="row">
                          <div className="col">
                            <label>Unit</label>
                          </div>
                        </div>
                        <div class="form-group">
                          <select
                            class="form-control"
                            id="sel1"
                            onChange={e =>
                              this.setState({ medicineUnitID: e.target.value })
                            }
                            disabled={this.state.loading}
                          >
                            <option selected>Select Unit</option>
                            {this.props.addUnit.length > 0
                              ? this.props.addUnit.map(unitList => (
                                  <option value={unitList._id}>
                                    {unitList.medicineUnitName
                                      ? unitList.medicineUnitName
                                      : ""}
                                  </option>
                                ))
                              : ""}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <div className="row">
                          <div className="col">
                            <label>Medicine Unit Value</label>
                          </div>
                        </div>
                        <div class="form-group">
                          <input
                            type="number"
                            class="form-control"
                            placeholder=""
                            onChange={e =>
                              this.setState({
                                medicineUnitValue: e.target.value
                              })
                            }
                            disabled={this.state.loading}
                          />
                        </div>
                      </div>
                      <div class="col">
                        <div className="row">
                          <div className="col">
                            <label>Is Unbox Allowed</label>
                          </div>
                        </div>
                        <div class="form-group">
                          <select
                            class="form-control"
                            id="sel1"
                            disabled={this.state.loading}
                          >
                            <option selected>Select Status</option>
                            <option
                              onClick={() => {
                                this.setState({ isUnboxAllowed: true });
                              }}
                            >
                              True
                            </option>
                            <option
                              onClick={() => {
                                this.setState({ isUnboxAllowed: false });
                              }}
                            >
                              False
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <div className="row">
                          <div className="col">
                            <label>Company Name</label>
                          </div>
                        </div>
                        <div class="form-group">
                          <select
                            class="form-control"
                            id="sel1"
                            onChange={e =>
                              this.setState({
                                companyID: e.currentTarget.value
                              })
                            }
                            disabled={this.state.loading}
                          >
                            <option>Select Compnay Name</option>
                            {this.props.company.length > 0
                              ? this.props.company.map(companyData => (
                                  <option value={companyData._id}>
                                    {companyData.companyName
                                      ? companyData.companyName
                                      : ""}
                                  </option>
                                ))
                              : ""}
                          </select>
                        </div>
                      </div>
                      <div className="col">
                        <div className="row">
                          <div className="col">
                            <label>Employee Name</label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <select
                              class="form-control"
                              id="sel1"
                              onChange={e =>
                                this.setState({
                                  employeeID: e.currentTarget.value
                                })
                              }
                              disabled={this.state.loading}
                            >
                              <option>Select Employee Name</option>
                              {this.props.employee.length > 0
                                ? this.props.employee.map(employeeList => (
                                    <option value={employeeList._id}>
                                      {employeeList.userName
                                        ? employeeList.userName
                                        : ""}
                                    </option>
                                  ))
                                : ""}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="row">
                          <div className="col">
                            <label>Medicine Type Name</label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <select
                              class="form-control"
                              id="sel1"
                              onChange={e =>
                                this.setState({
                                  medicineTypeID: e.currentTarget.value
                                })
                              }
                              disabled={this.state.loading}
                            >
                              <option>Select Medicine Name </option>
                              {this.props.medicineTypeName.length > 0
                                ? this.props.medicineTypeName.map(
                                    medicineType => (
                                      <option value={medicineType._id}>
                                        {medicineType.medicineTypeName
                                          ? medicineType.medicineTypeName
                                          : ""}
                                      </option>
                                    )
                                  )
                                : ""}
                            </select>
                          </div>
                        </div>
                        <div className="row">
                          <div
                            className="col mt-3"
                            style={{
                              marginLeft: "45px",
                              marginBottom: "-15px"
                            }}
                          >
                            {this.props.netError2 ? (
                              <span
                                style={{
                                  fontSize: "10px",
                                  color: "red"
                                }}
                              >
                                {this.props.netError2}
                              </span>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col mt-4">
                            <button
                              className="btn new-med-save-1"
                              style={{
                                backgroundColor: "#45C203",
                                color: "white",
                                width: "50%",
                                marginLeft: "0px"
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
                                      this.props.addMedicineAction(
                                        new AddMedicineClass(
                                          this.state.medicineName,
                                          this.state.salt,
                                          this.state.noOfSachet,
                                          this.state.noOfTabletsPerSachet,
                                          this.state.noOfTablets,
                                          this.state.medicineUnitID,
                                          this.state.medicineUnitValue,
                                          this.state.isUnboxAllowed,
                                          this.state.companyID,
                                          this.state.employeeID,
                                          this.state.medicineTypeID
                                        ),
                                        this.state.fileArray,
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
                      <div className="col">
                        <div className="row">
                          <div className="col">
                            <label>Medicine Image</label>
                          </div>
                        </div>
                        <div className="row ">
                          <div className="col">
                            <input
                              type="file"
                              class="form-control-file"
                              id="exampleFormControlFile1"
                              accept="image/gif, image/jpeg, image/png"
                              onChange={e =>
                                this.setState({ fileArray: e.target.files })
                              }
                              disabled={this.state.loading}
                            />
                          </div>
                          <div className="col" style={{ height: "100px" }}>
                            <img
                              class="img-thumbnail"
                              src={url}
                              style={{ height: "100px", width: "100px" }}
                              alt="img"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-4 mb-3"></div>
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
  company: state.CompayReducer.company,
  medicineTypeName: state.MedicineReducer.medicineTypeName,
  employee: state.EmployeeReducer.employee,
  addUnit: state.AddUnitReducer.addUnit,
  netError2: state.AddMedicineReducer.netError2
});

export default connect(mapStateToProps, {
  showCompnayAction,
  showMedicineTypeAction,
  showEmployeeListAction,
  addMedicineAction,
  showUnitListAction
})(newMedForm);
