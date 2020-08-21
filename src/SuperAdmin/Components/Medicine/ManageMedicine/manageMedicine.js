import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  showMedicineAction,
  deleteMedicineAction,
  sendMedicineDataIDAction,
  updateMedicineAction,
  searchMedicineByNameAction
} from "../../../Actions/AddMedicineAction/addMedicineAction";

import { connect } from "react-redux";
import { showMedicineTypeAction } from "../../../Actions/MedicineActions/medicineAction";
import { showUnitListAction } from "../../../Actions/AddUnitAction/addUnitAction";
import { showCompnayAction } from "../../../Actions/CompnayAction/companyActions";
import { showEmployeeListAction } from "../../../Actions/EmployeeActions/EmployeActions";
import UpdateMedicineClass from "../../../BusinessLogics/UpdateLogics/addMedicineUpdateClass";

class manageMedicine extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      fileArray1: [],
      loading: false,
      selectedID: "",
      searchedMedicineByName: "",
      loading1: true
    };
  }
  componentDidMount() {
    this.props.showMedicineAction(this);
    this.props.showCompnayAction(this);
    this.props.showMedicineTypeAction(this);
    this.props.showEmployeeListAction(this);
    this.props.showUnitListAction(this);
  }
  onChange(e) {
    this.setState({ fileArray1: e.target.files });
  }
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row mt-2">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2 col-xl-2">
                <Link to="/SuperAdmin/AddMedicineView">
                  <button
                    className="btn  mt-2 mb-3"
                    style={{
                      backgroundColor: "#45C203",
                      width: "100%",
                      color: "white",
                      fontSize: "15px",
                      marginLeft: "-15px"
                    }}
                  >
                    + Add Medicine
                  </button>
                </Link>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-10 col-xl-10"></div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-12">
              <div class="card w-100">
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
                        Manage Medicine
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
                            { searchedMedicineByName: e.target.value },
                            () => {
                              this.props.searchMedicineByNameAction(
                                this.state.searchedMedicineByName.toUpperCase()
                              );
                            }
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  {this.props.netError ? (
                    <span
                      style={{
                        fontSize: "20px",
                        color: "red",
                        marginLeft: "500px"
                      }}
                    >
                      {this.props.netError}
                    </span>
                  ) : (
                    ""
                  )}
                  <div className="row mt-4">
                    <div className="col-12">
                      {this.props.addMedicine.length > 0 &&
                      this.state.searchedMedicineByName.length === 0 ? (
                        <table className="table justify-content-center table-responsive-xl table-bordered">
                          <thead
                            style={{ fontSize: "13px", textAlign: "center" }}
                          >
                            <th>Medicine Name</th>
                            <th>Salt</th>
                            <th>No Of Sachet</th>
                            <th>No Of Tablets Per Sachet</th>
                            <th>No Of Tablets</th>
                            <th>Unit</th>
                            <th>Medicine Unit Value</th>
                            <th>Company</th>
                            <th>Employee</th>
                            <th>Medicine Type</th>
                            <th>Image</th>
                            <th>Actions</th>
                          </thead>
                          <tbody>
                            {this.props.addMedicine.map(medicineList => (
                              <tr>
                                <td>
                                  {medicineList.medicineName
                                    ? medicineList.medicineName
                                    : ""}
                                </td>
                                <td>
                                  {medicineList.salt ? medicineList.salt : ""}
                                </td>
                                <td>
                                  {medicineList.noOfSachet
                                    ? medicineList.noOfSachet
                                    : ""}
                                </td>
                                <td>
                                  {medicineList.noOfTabletsPerSachet
                                    ? medicineList.noOfTabletsPerSachet
                                    : ""}
                                </td>
                                <td>
                                  {medicineList.noOfTablets
                                    ? medicineList.noOfTablets
                                    : 0}
                                </td>
                                <td>
                                  {medicineList.medicineUnit.medicineUnitName
                                    ? medicineList.medicineUnit.medicineUnitName
                                    : ""}
                                </td>
                                <td>
                                  {medicineList.medicineUnitValue
                                    ? medicineList.medicineUnitValue
                                    : ""}
                                </td>
                                <td>
                                  {medicineList.company.companyName
                                    ? medicineList.company.companyName
                                    : ""}
                                </td>
                                <td>
                                  {medicineList.employee.userName
                                    ? medicineList.employee.userName
                                    : ""}
                                </td>
                                <td>
                                  {medicineList.medicineType.medicineTypeName
                                    ? medicineList.medicineType.medicineTypeName
                                    : ""}
                                </td>
                                <td>
                                  <img
                                    class="img-thumbnail"
                                    src={
                                      medicineList.medicineImgURL
                                        ? "https://pharmacysys.herokuapp.com" +
                                          medicineList.medicineImgURL[0]
                                        : ""
                                    }
                                    style={{ height: "50px", width: "50px" }}
                                    alt="product"
                                  />
                                </td>
                                <td>
                                  <button
                                    type="button"
                                    class="btn mt-1 ml-2"
                                    data-toggle="modal"
                                    data-target=".bd-example-modal-lg"
                                    style={{
                                      backgroundColor: "#45C203",
                                      color: "white",
                                      width: "100%"
                                    }}
                                    onClick={() => {
                                      this.setState({
                                        selectedID: medicineList._id
                                      });
                                      this.props.sendMedicineDataIDAction(
                                        medicineList._id,
                                        this
                                      );
                                    }}
                                  >
                                    <i class="fa fa-pencil mr-2"></i>
                                  </button>
                                  <button
                                    class="btn btn-danger mt-1 ml-2"
                                    style={{ width: "100%" }}
                                    onClick={() =>
                                      this.props.deleteMedicineAction(
                                        medicineList._id
                                      )
                                    }
                                  >
                                    <i class="fa fa-trash"></i>
                                  </button>
                                </td>
                              </tr>
                            ))}
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
                              marginLeft: "500px",
                              height: "3rem",
                              width: "3rem"
                            }}
                          />
                        )
                      )}
                    </div>
                    <div className="col-12">
                      {this.props.searchMedicine.length > 0 &&
                      this.state.searchedMedicineByName.length > 0 ? (
                        <table className="table justify-content-center table-responsive-xl table-bordered">
                          <thead
                            style={{ fontSize: "13px", textAlign: "center" }}
                          >
                            <th>Medicine Name</th>
                            <th>Salt</th>
                            <th>No Of Sachet</th>
                            <th>No Of Tablets Per Sachet</th>
                            <th>No Of Tablets</th>
                            <th>Unit</th>
                            <th>Medicine Unit Value</th>
                            <th>Company</th>
                            <th>Employee</th>
                            <th>Medicine Type</th>
                            <th>Image</th>
                            <th>Actions</th>
                          </thead>
                          <tbody>
                            {this.props.searchMedicine.map(medicineList => (
                              <tr>
                                <td>
                                  {medicineList.medicineName
                                    ? medicineList.medicineName
                                    : ""}
                                </td>
                                <td>
                                  {medicineList.salt ? medicineList.salt : ""}
                                </td>
                                <td>
                                  {medicineList.noOfSachet
                                    ? medicineList.noOfSachet
                                    : ""}
                                </td>
                                <td>
                                  {medicineList.noOfTabletsPerSachet
                                    ? medicineList.noOfTabletsPerSachet
                                    : ""}
                                </td>
                                <td>
                                  {medicineList.noOfTablets
                                    ? medicineList.noOfTablets
                                    : 0}
                                </td>
                                <td>
                                  {medicineList.medicineUnit.medicineUnitName
                                    ? medicineList.medicineUnit.medicineUnitName
                                    : ""}
                                </td>
                                <td>
                                  {medicineList.medicineUnitValue
                                    ? medicineList.medicineUnitValue
                                    : ""}
                                </td>
                                <td>
                                  {medicineList.company.companyName
                                    ? medicineList.company.companyName
                                    : ""}
                                </td>
                                <td>
                                  {medicineList.employee.userName
                                    ? medicineList.employee.userName
                                    : ""}
                                </td>
                                <td>
                                  {medicineList.medicineType.medicineTypeName
                                    ? medicineList.medicineType.medicineTypeName
                                    : ""}
                                </td>
                                <td>
                                  <img
                                    class="img-thumbnail"
                                    src={
                                      medicineList.medicineImgURL
                                        ? "https://pharmacysys.herokuapp.com" +
                                          medicineList.medicineImgURL[0]
                                        : ""
                                    }
                                    style={{ height: "50px", width: "50px" }}
                                    alt="product"
                                  />
                                </td>
                                <td>
                                  <button
                                    type="button"
                                    class="btn mt-1 ml-2"
                                    data-toggle="modal"
                                    data-target=".bd-example-modal-lg"
                                    style={{
                                      backgroundColor: "#45C203",
                                      color: "white",
                                      width: "100%"
                                    }}
                                    onClick={() => {
                                      this.setState({
                                        selectedID: medicineList._id
                                      });
                                      this.props.sendMedicineDataIDAction(
                                        medicineList._id,
                                        this
                                      );
                                    }}
                                  >
                                    <i class="fa fa-pencil mr-2"></i>
                                  </button>
                                  <button
                                    class="btn btn-danger mt-1 ml-2"
                                    style={{ width: "100%" }}
                                    onClick={() =>
                                      this.props.deleteMedicineAction(
                                        medicineList._id
                                      )
                                    }
                                  >
                                    <i class="fa fa-trash"></i>
                                  </button>
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
                          {this.props.searchError}
                        </span>
                      )}
                    </div>
                  </div>
                  <div
                    class="modal fade bd-example-modal-lg"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalScrollableTitle"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-lg" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5
                            class="modal-title"
                            id="exampleModalScrollableTitle"
                            style={{
                              fontSize: "25px",
                              fontFamily: "Alegreya Sans",
                              color: "#374767",
                              lineHeight: "26px",
                              marginTop: "5px"
                            }}
                          >
                            Update Medicine
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                            style={{ color: "red" }}
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <div className="row">
                            <div className="col-4">
                              <label> Medicine Name</label>
                            </div>
                            <div className="col-8">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Medicine Name"
                                value={this.state.medicineName}
                                disabled={this.state.loading}
                                onChange={e =>
                                  this.setState({
                                    medicineName: e.target.value
                                  })
                                }
                                // defaultValue={this.state.medicineName}
                              />
                            </div>
                          </div>
                          <div className="row mt-2">
                            <div className="col-4">
                              <label>Salt Name</label>
                            </div>
                            <div className="col-8">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Salt Name"
                                disabled={this.state.loading}
                                defaultValue={this.state.salt}
                                onChange={e =>
                                  this.setState({ salt: e.target.value })
                                }
                              />
                            </div>
                          </div>
                          <div className="row mt-2">
                            <div className="col-4">
                              <label>No Of Sachet</label>
                            </div>
                            <div className="col-8">
                              <input
                                type="number"
                                class="form-control"
                                placeholder="No Of Sachet"
                                disabled={this.state.loading}
                                defaultValue={this.state.noOfSachet}
                                onChange={e =>
                                  this.setState({ noOfSachet: e.target.value })
                                }
                              />
                            </div>
                          </div>
                          <div className="row mt-2">
                            <div className="col-4">
                              <label>No Of Tablets per Sachet</label>
                            </div>
                            <div className="col-8">
                              <input
                                type="number"
                                class="form-control"
                                placeholder="No Of Tablets per Sachet"
                                disabled={this.state.loading}
                                defaultValue={this.state.noOfTabletsPerSachet}
                                onChange={e =>
                                  this.setState({
                                    noOfTabletsPerSachet: e.target.value
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="row mt-2">
                            <div className="col-4">
                              <label>No of Tablets</label>
                            </div>
                            <div className="col-8">
                              <input
                                type="number"
                                class="form-control"
                                placeholder="No Of Tablets"
                                disabled={this.state.loading}
                                defaultValue={this.state.noOfTablets}
                                onChange={e =>
                                  this.setState({ noOfTablets: e.target.value })
                                }
                              />
                            </div>
                          </div>
                          <div className="row mt-2">
                            <div className="col-4">
                              <label>Unit</label>
                            </div>
                            <div className="col-8">
                              <select
                                class="form-control"
                                id="sel1"
                                onChange={e =>
                                  this.setState({
                                    medicineUnitID: e.target.value
                                  })
                                }
                                disabled={this.state.loading}
                              >
                                <option>{this.state.medicineUnitID}</option>
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
                          <div className="row mt-2">
                            <div className="col-4">
                              <label>Medicine Unit Value</label>
                            </div>
                            <div className="col-8">
                              <input
                                type="number"
                                class="form-control"
                                placeholder="Medicine Unit Value"
                                disabled={this.state.loading}
                                defaultValue={this.state.medicineUnitValue}
                              />
                            </div>
                          </div>
                          <div className="row mt-2">
                            <div className="col-4">Is Unbox Allowed</div>
                            <div className="col-8">
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
                          <div className="row mt-2">
                            <div className="col-4">
                              <label>Company Name</label>
                            </div>
                            <div className="col-8">
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
                                <option>{this.state.companyID}</option>
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
                          <div className="row mt-2">
                            <div className="col-4">
                              <label>Employee Name</label>
                            </div>
                            <div className="col-8">
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
                                <option>{this.state.employeeID}</option>
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
                          <div className="row mt-2">
                            <div className="col-4">
                              <label>Medicine Type Name</label>
                            </div>
                            <div className="col-8">
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
                                <option>{this.state.medicineTypeID}</option>
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
                          <div className="row mt-2">
                            <div className="col-4">
                              <label>Medicine Image</label>
                            </div>
                            <div className="col-4">
                              <input
                                type="file"
                                class="form-control-file"
                                id="exampleFormControlFile1"
                                onChange={e =>
                                  this.setState({ fileArray1: e.target.files })
                                }
                                disabled={this.state.loading}
                                defaultValue={this.state.fileArray}
                              />
                            </div>
                            <div className="col-4">
                              <img
                                class="img-thumbnail"
                                src={
                                  this.state.fileArray
                                    ? "https://pharmacysys.herokuapp.com" +
                                      this.state.fileArray[0]
                                    : ""
                                }
                                style={{ height: "50px", width: "50px" }}
                                alt="product"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <div className="col-4"></div>
                          <div className="col-4">
                            {
                              (console.log(
                                this.props.updateError,
                                "Api Responce Of Login Data Data"
                              ),
                              this.props.updateError ? (
                                <span
                                  style={{ fontSize: "11px", color: "red" }}
                                >
                                  {this.props.updateError}
                                </span>
                              ) : (
                                ""
                              ))
                            }
                          </div>
                          <div className="col-4">
                            <button
                              type="button"
                              class="btn"
                              style={{
                                backgroundColor: "#45C203",
                                color: "white"
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
                                      this.props.updateMedicineAction(
                                        new UpdateMedicineClass(
                                          this.state.selectedID,
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
                              {this.state.loading && <span></span>}
                              {!this.state.loading && <span>Update</span>}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
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
const mapStateToProops = state => ({
  addMedicine: state.AddMedicineReducer.addMedicine,
  netError: state.AddMedicineReducer.netError,
  updateError: state.AddMedicineReducer.updateError,
  company: state.CompayReducer.company,
  medicineTypeName: state.MedicineReducer.medicineTypeName,
  employee: state.EmployeeReducer.employee,
  addUnit: state.AddUnitReducer.addUnit,
  searchMedicine: state.AddMedicineReducer.searchMedicine,
  searchError: state.AddMedicineReducer.searchError
});
export default connect(mapStateToProops, {
  showMedicineAction,
  deleteMedicineAction,
  sendMedicineDataIDAction,
  showCompnayAction,
  showEmployeeListAction,
  showUnitListAction,
  showMedicineTypeAction,
  updateMedicineAction,
  searchMedicineByNameAction
})(manageMedicine);
