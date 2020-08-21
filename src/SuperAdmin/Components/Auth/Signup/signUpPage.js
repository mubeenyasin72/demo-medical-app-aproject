import React, { Component } from "react";
import "./adminSignup.css";
import SigupClass from "../../../BusinessLogics/adminSignupClass";
import { connect } from "react-redux";
import { adminSignupAction } from "../../../Actions/AuthActions/AuthActions";
class signUpPage extends Component {
  state = {
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    loading: false,
    errors: {
      firstName: "",
      lastName: "",
      userName: "",
      password: ""
    },
    loading: false
  };
  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    let State = this.state;

    switch (name) {
      case "firstName":
        errors.firstName =
          value.length < 3 ? "FirstName must be 3 characters long!" : "";
        State.firstName = value;
        break;
      case "lastName":
        errors.lastName =
          value.length < 3 ? "LastName must be 3 characters long!" : "";
        State.lastName = value;
        break;
      case "userName":
        errors.userName =
          value.length < 5 ? "Username must be 5 characters long!" : "";
        State.userName = value;
        break;
      case "password":
        errors.password =
          value.length < 8 ? "Password must be 8 characters long!" : "";

        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
    this.setState({ State, [name]: value });
  };
  sendData = e => {
    this.props.parentfunction((this.state.values = e));
  };
  render() {
    const { errors } = this.state;
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row mt-5">
            <div className="col-lg-3 col-md-1 col-sm-0"></div>
            <div className="col-lg-6 col-md-10 col-sm-12 bg-white">
              <div
                class="card "
                style={{ width: "100%", border: "1px solid #45C203" }}
              >
                <div class="card-body">
                  <div className="row mt-3">
                    <div className="col-sm-12 col-md-12 col-lg-2 col-xl-2">
                      <i
                        class="fa fa-sign-in"
                        style={{ fontSize: "80px", color: "#45C203" }}
                      ></i>
                    </div>
                    <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8">
                      <h5
                        class="card-title"
                        style={{
                          textAlign: "left",
                          fontFamily: "Alegreya Sans",
                          color: "#374767",
                          fontSize: "24px",
                          lineHeight: "26px",
                          fontWeight: "500px"
                        }}
                      >
                        SignUp Page
                      </h5>
                      <p
                        style={{
                          textAlign: "left",
                          fontFamily: "Alegreya Sans",
                          color: "#374767",
                          fontSize: "15px",
                          lineHeight: "26px"
                        }}
                      >
                        Please enter your SignUp information.
                      </p>
                    </div>
                    <hr style={{ width: "100%", backgroundColor: "#45C203" }} />
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <input
                        type="text"
                        name="firstName"
                        class="form-control"
                        placeholder="firstName"
                        style={{ width: "100%" }}
                        onChange={this.handleChange}
                        disabled={this.state.loading}
                      />
                      {errors.firstName.length > 0 && (
                        <span
                          className="error"
                          style={{ fontSize: "11px", color: "red" }}
                        >
                          {errors.firstName}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <input
                        type="text"
                        name="lastName"
                        class="form-control"
                        placeholder="lastName"
                        style={{ width: "100%" }}
                        onChange={this.handleChange}
                        disabled={this.state.loading}
                      />
                      {errors.lastName.length > 0 && (
                        <span
                          className="error"
                          style={{ fontSize: "11px", color: "red" }}
                        >
                          {errors.lastName}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <input
                        type="text"
                        name="userName"
                        class="form-control"
                        placeholder="Enter username"
                        style={{ width: "100%" }}
                        onChange={this.handleChange}
                        disabled={this.state.loading}
                      />
                      {errors.userName.length > 0 && (
                        <span
                          className="error"
                          style={{ fontSize: "11px", color: "red" }}
                        >
                          {errors.userName}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <input
                        type="password"
                        name="password"
                        class="form-control"
                        placeholder="Enter password"
                        style={{ width: "100%" }}
                        onChange={this.handleChange}
                        disabled={this.state.loading}
                      />
                      {errors.password.length > 0 && (
                        <span
                          className="error"
                          style={{ fontSize: "11px", color: "red" }}
                        >
                          {errors.password}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <div class="form-check">
                        <label class="form-check-label" for="check1">
                          <input
                            type="checkbox"
                            class="form-check-input login-checkbox-input"
                            id="check1"
                            name="option1"
                            value="something"
                          />
                          <div class="login-checkbox-label-text">
                            <small
                              style={{
                                textAlign: "left",
                                fontFamily: "Alegreya Sans",
                                color: "#374767",
                                fontSize: "15px",
                                lineHeight: "26px"
                              }}
                            >
                              I agree with the terms and policy
                            </small>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-3 col-lg-3 col-xl-3"></div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                      {this.props.resMsg ? (
                        <span
                          style={{
                            fontSize: "11px",
                            color: "red",
                            marginLeft: "150px"
                          }}
                        >
                          {this.props.resMsg}
                        </span>
                      ) : (
                        ""
                      )}
                      <button
                        className="btn"
                        style={{
                          fontFamily: "Alegreya Sans",
                          width: "100%",
                          color: "white",
                          backgroundColor: "#45C203"
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
                                this.props.adminSignupAction(
                                  new SigupClass(
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

                        {this.state.loading && <span>Adding User</span>}
                        {!this.state.loading && <span>Signup</span>}
                      </button>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3"></div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-1 col-lg-1 col-xl-1"></div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                      <p
                        style={{
                          textAlign: "left",
                          fontFamily: "Alegreya Sans",
                          color: "#374767",
                          fontSize: "15px",
                          lineHeight: "26px"
                        }}
                      >
                        Are you already a member?
                      </p>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                      <a
                        href="/"
                        style={{
                          textAlign: "left",
                          fontFamily: "Alegreya Sans",
                          color: "#374767",
                          fontSize: "15px",
                          lineHeight: "26px"
                        }}
                      >
                        <b>SignIn</b>
                      </a>
                    </div>
                    <div className="col-md-1 col-lg-1 col-xl-1"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-1 col-sm-0"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToPropos = state => ({
  resMsg: state.AuthReducer.resMsg
});

export default connect(mapStateToPropos, { adminSignupAction })(signUpPage);
