import React, { Component } from "react";
import { Link } from "react-router-dom";
import EmployeeClass from "../../../BusinessLogics/employeeClass";
import { addEmplyeeActions } from "../../../Actions/EmployeeActions/EmployeActions";
import ManageEmployee from "../ManageEmployee/manageEmployee";
import { connect } from "react-redux";
class addEmployee extends Component {
  state = {
    userName: "",
    password: "",
    validUsaerName: false,
    validPassword: false,
    validity: false,
    loading: false,
    errors: {
      userName: "",
      password: ""
    }
  };
  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    let State = this.state;

    switch (name) {
      case "userName":
        console.log("This is State");
        errors.userName =
          value.length < 5 ? "Username must be 5 characters long!" : "";
        value.length < 5
          ? this.setState({ validUsaerName: false })
          : this.setState({ validUsaerName: true });
        State.userName = value;
        break;
      case "password":
        errors.password =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        value.length < 8
          ? this.setState({ validPassword: false })
          : this.setState({ validPassword: true });
        State.password = value;
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
    this.setState({ State, [name]: value });
  };
  render() {
    const { errors } = this.state;
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div class="card">
            <div className="card-header">
              <h6
                style={{
                  fontSize: "25px",
                  fontFamily: "Alegreya Sans",
                  color: "#374767",
                  lineHeight: "26px",
                  marginTop: "5px"
                }}
              >
                Add Employee
              </h6>
            </div>
            <div class="card-body" style={{ marginTop: "-20px" }}>
              <div className="row mt-3 bg-white">
                <div
                  className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 "
                  style={{ marginLeft: "180px" }}
                >
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2 col-xl-2">
                      <h6
                        style={{
                          fontSize: "18px",
                          fontFamily: "Alegreya Sans",
                          color: "#374767",
                          lineHeight: "26px",
                          marginTop: "5px"
                        }}
                      >
                        Username
                      </h6>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 ">
                      <input
                        type="text"
                        name="userName"
                        class="form-control"
                        placeholder=""
                        style={{ width: "100%" }}
                        value={this.state.userName}
                        onChange={this.handleChange}
                        disabled={this.state.loading}
                      />
                    </div>
                    <div className="col-lg-7 col-xl-7"></div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      {errors.userName.length > 0 && (
                        <span
                          style={{
                            fontSize: "11px",
                            color: "red",
                            marginLeft: "200px"
                          }}
                        >
                          {errors.userName}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2 col-xl-2">
                      <h6
                        style={{
                          fontSize: "18px",
                          fontFamily: "Alegreya Sans",
                          color: "#374767",
                          lineHeight: "26px",
                          marginTop: "5px"
                        }}
                      >
                        Password
                      </h6>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 ">
                      <input
                        type="password"
                        name="password"
                        class="form-control"
                        placeholder=""
                        value={this.state.password}
                        style={{ width: "100%" }}
                        onChange={this.handleChange}
                        disabled={this.state.loading}
                      />
                    </div>
                    <div className="col-lg-6 col-xl-6"></div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      {errors.password.length > 0 && (
                        <span
                          style={{
                            fontSize: "11px",
                            color: "red",
                            marginLeft: "200px"
                          }}
                        >
                          {errors.password}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-4 col-lg-3 col-xl-3"></div>

                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mt-4">
                      {this.props.netError ? (
                        <span
                          style={{
                            fontSize: "11px",
                            color: "red",
                            marginLeft: "90px"
                          }}
                        >
                          {this.props.netError}
                        </span>
                      ) : (
                        ""
                      )}
                      <button
                        className="btn"
                        style={{
                          backgroundColor: "#45C203",
                          color: "white",
                          fontSize: "15px",
                          width: "70%"
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
                                this.props.addEmplyeeActions(
                                  new EmployeeClass(
                                    this.state.userName,
                                    this.state.password
                                  ),
                                  this
                                );
                              }
                            );
                          }
                        }}
                        loading={this.state.loading}
                        // class="btn btn-block"
                        disabled={
                          !this.state.validUsaerName ||
                          !this.state.validPassword
                        }
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
                    <div className="col-md-8 col-lg-9 col-xl-9"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12">
              <ManageEmployee />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  netError: state.EmployeeReducer.netError
});
export default connect(mapStateToProps, { addEmplyeeActions })(addEmployee);
