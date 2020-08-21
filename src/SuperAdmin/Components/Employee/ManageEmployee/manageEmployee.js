import React, { Component } from "react";
import {
  showEmployeeListAction,
  updateEmployeeListAction,
  blockEmployeeActions,
  unblockEmployeeActions,
  searchEmployeeByNameAction
} from "../../../Actions/EmployeeActions/EmployeActions";
import { connect } from "react-redux";
import UpdateEmployeeClass from "../../../BusinessLogics/UpdateLogics/updateEmployeeClass";
class manageEmployee extends Component {
  state = {
    loading1: true,
    edit: false,
    ids: 0,
    loading: false,
    username: "",
    password: "",
    updateID: "",
    upUsername: "",
    searchEmployee: ""
  };

  toggle = () => {
    this.setState({ edit: !this.state.edit });
  };
  componentDidMount() {
    this.props.showEmployeeListAction(this);
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid mb-4">
          <div className="row mt-3 bg-white">
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
                      Manage Employee
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
                        this.setState({ searchEmployee: e.target.value }, () =>
                          this.props.searchEmployeeByNameAction(
                            this.state.searchEmployee.toUpperCase()
                          )
                        )
                      }
                    />
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  {this.props.netError2 ? (
                    <span
                      style={{
                        fontSize: "20px",
                        color: "red",
                        marginLeft: "600px"
                      }}
                    >
                      {this.props.netError2}
                    </span>
                  ) : (
                    ""
                  )}
                  <div className="row bg-white mt-4">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      {this.props.employee.length > 0 &&
                      this.state.searchEmployee.length === 0 ? (
                        <table className="table justify-content-center table-responsive-md table-bordered">
                          <thead>
                            <tr>
                              <th>Employee Name</th>
                              <th>Status</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.props.employee.map(ls => (
                              <tr>
                                <td>{ls.userName ? ls.userName : ""}</td>
                                <td>
                                  {ls.isBlocked === false
                                    ? "UnBlock"
                                    : "Blocked"}
                                </td>
                                <td>
                                  <button
                                    type="button"
                                    class="btn"
                                    data-toggle="modal"
                                    data-target="#employeeManageModal"
                                    style={{
                                      backgroundColor: "#45C203",
                                      color: "white"
                                    }}
                                    onClick={() =>
                                      this.setState({
                                        updateID: ls._id,
                                        upUsername: ls.userName
                                      })
                                    }
                                  >
                                    <i class="fa fa-pencil mr-2"></i>
                                  </button>
                                  {ls.isBlocked === false ? (
                                    <button
                                      class="btn btn-danger ml-2"
                                      onClick={() => {
                                        if (!this.state.loading) {
                                          this.setState(
                                            {
                                              loading: true
                                            },
                                            () => {
                                              this.timer = setTimeout(() => {},
                                              this.state.loading === false);
                                              this.props.blockEmployeeActions(
                                                ls._id,
                                                this
                                              );
                                            }
                                          );
                                        }
                                      }}
                                    >
                                      <i class="fa fa-ban"></i>
                                    </button>
                                  ) : (
                                    <button
                                      class="btn btn-danger ml-2"
                                      onClick={() => {
                                        if (!this.state.loading) {
                                          this.setState(
                                            {
                                              loading: true
                                            },
                                            () => {
                                              this.timer = setTimeout(() => {},
                                              this.state.loading === false);
                                              this.props.unblockEmployeeActions(
                                                ls._id,
                                                this
                                              );
                                            }
                                          );
                                        }
                                      }}
                                    >
                                      <i class="fa fa-unlock"></i>
                                    </button>
                                  )}
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
                              marginLeft: "600px",
                              height: "3rem",
                              width: "3rem"
                            }}
                          />
                        )
                      )}
                    </div>
                    <div className="col-12">
                      {this.props.searcEmployee.length > 0 &&
                      this.state.searchEmployee.length > 0 ? (
                        <table className="table justify-content-center table-responsive-md table-bordered">
                          <thead>
                            <tr>
                              <th>Employee Name</th>
                              <th>Status</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.props.searcEmployee.map(ls => (
                              <tr>
                                <td>{ls.userName ? ls.userName : ""}</td>
                                <td>
                                  {ls.isBlocked === false
                                    ? "UnBlock"
                                    : "Blocked"}
                                </td>
                                <td>
                                  <button
                                    type="button"
                                    class="btn"
                                    data-toggle="modal"
                                    data-target="#employeeManageModal"
                                    style={{
                                      backgroundColor: "#45C203",
                                      color: "white"
                                    }}
                                    onClick={() =>
                                      this.setState({
                                        updateID: ls._id,
                                        upUsername: ls.userName
                                      })
                                    }
                                  >
                                    <i class="fa fa-pencil mr-2"></i>
                                  </button>
                                  {ls.isBlocked === false ? (
                                    <button
                                      class="btn btn-danger ml-2"
                                      onClick={() => {
                                        if (!this.state.loading) {
                                          this.setState(
                                            {
                                              loading: true
                                            },
                                            () => {
                                              this.timer = setTimeout(() => {},
                                              this.state.loading === false);
                                              this.props.blockEmployeeActions(
                                                ls._id,
                                                this
                                              );
                                            }
                                          );
                                        }
                                      }}
                                    >
                                      <i class="fa fa-ban"></i>
                                    </button>
                                  ) : (
                                    <button
                                      class="btn btn-danger ml-2"
                                      onClick={() => {
                                        if (!this.state.loading) {
                                          this.setState(
                                            {
                                              loading: true
                                            },
                                            () => {
                                              this.timer = setTimeout(() => {},
                                              this.state.loading === false);
                                              this.props.unblockEmployeeActions(
                                                ls._id,
                                                this
                                              );
                                            }
                                          );
                                        }
                                      }}
                                    >
                                      <i class="fa fa-unlock"></i>
                                    </button>
                                  )}
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
                    class="modal fade"
                    id="employeeManageModal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                  >
                    <div
                      class="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5
                            class="modal-title"
                            id="exampleModalCenterTitle"
                            style={{
                              fontSize: "25px",
                              fontFamily: "Alegreya Sans",
                              color: "#374767",
                              lineHeight: "26px",
                              marginTop: "5px"
                            }}
                          >
                            Update Employee
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
                          <label
                            style={{
                              fontFamily: "Alegreya Sans",
                              color: "#374767",
                              lineHeight: "26px",
                              marginTop: "5px"
                            }}
                          >
                            Username
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter the userame"
                            defaultValue={this.state.upUsername}
                            onChange={e =>
                              this.setState({ userName: e.target.value })
                            }
                          />
                          <label
                            style={{
                              fontFamily: "Alegreya Sans",
                              color: "#374767",
                              lineHeight: "26px",
                              marginTop: "5px"
                            }}
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            class="form-control"
                            placeholder="Enter the password"
                            onChange={e =>
                              this.setState({ password: e.target.value })
                            }
                          />
                        </div>
                        <div class="modal-footer">
                          <div className="col-6"></div>
                          <div className="col-6">
                            <button
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
                                      this.props.updateEmployeeListAction(
                                        new UpdateEmployeeClass(
                                          this.state.updateID,
                                          this.state.userName,
                                          this.state.password
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
                              {!this.state.loading && <span>Update</span>}
                            </button>
                          </div>
                          <div>
                            {this.props.updateError ? (
                              <span
                                style={{
                                  fontSize: "11px",
                                  color: "red",
                                  marginLeft: "200px",
                                  marginRight: "100px"
                                }}
                              >
                                {this.props.updateError}
                              </span>
                            ) : (
                              ""
                            )}
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

const mapStateToProps = state => ({
  employee: state.EmployeeReducer.employee,
  netError2: state.EmployeeReducer.netError2,
  updateError: state.EmployeeReducer.updateError,
  searcEmployee: state.EmployeeReducer.searcEmployee,
  searchError: state.EmployeeReducer.searchError
});

export default connect(mapStateToProps, {
  showEmployeeListAction,
  updateEmployeeListAction,
  blockEmployeeActions,
  unblockEmployeeActions,
  searchEmployeeByNameAction
})(manageEmployee);
