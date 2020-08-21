import React, { Component } from "react";
import "./loginAdminPage.css";
import { connect } from "react-redux";
import { adminLoginAction } from "../../../Actions/AuthActions/AuthActions";
import LoginClass from "../../../BusinessLogics/adminLoginClass";
import { Redirect } from "react-router-dom";
import { getSuperAdminData } from "../../../../LocalStorage/superAdminLocalStorage";
class loginPage extends Component {
  constructor(props) {
    super(props);
    const token = getSuperAdminData();
    let loggedIn = true;
    if (token === null) {
      loggedIn = false;
    }
    this.state = {
      userName: "",
      password: "",
      loading: false,
      success: "",
      loggedIn
    };
  }

  render() {
    console.log(this.state.userName, "This Is Main State Data");
    console.log(this.state.password, "This Is Main State Data");
    if (this.state.loggedIn) {
      return <Redirect to="/Dashboard" />;
    }
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row mt-4">
            <div className="col-md-2 col-lg-2 col-xl-2"></div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 bg-white">
              <div
                class="card card12345"
                style={{ width: "100%", border: "1px solid #45C203" }}
              >
                <div class="card-body">
                  <div className="row mt-3">
                    <div className="col-sm-12 col-md-12 col-lg-2 col-xl-2">
                      <i
                        class="fa fa-unlock-alt"
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
                        Login Page
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
                        Please enter your login information.
                      </p>
                    </div>
                    <hr style={{ width: "100%", backgroundColor: "#45C203" }} />
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <label
                        style={{
                          textAlign: "left",
                          fontFamily: "Alegreya Sans",
                          color: "#374767",
                          fontSize: "18px",
                          lineHeight: "26px",
                          fontWeight: "300px"
                        }}
                      >
                        Username
                      </label>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={e =>
                          this.setState({ userName: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <label
                        style={{
                          textAlign: "left",
                          fontFamily: "Alegreya Sans",
                          color: "#374767",
                          fontSize: "18px",
                          lineHeight: "26px"
                        }}
                      >
                        Password
                      </label>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Enter Password"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={e =>
                          this.setState({ password: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-3 col-lg-3 col-xl-3"></div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                      {this.props.loginResMsg ? (
                        <span
                          style={{
                            fontSize: "11px",
                            color: "red",
                            marginLeft: "60px"
                          }}
                        >
                          {this.props.loginResMsg}
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
                                this.props.adminLoginAction(
                                  new LoginClass(
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

                        //   onClickCapture={(e)=>this.sendData(e="Dashboard")}
                      >
                        {this.state.loading && (
                          <i
                            class="spinner-border text-dark spinner-border-sm"
                            role="status"
                          />
                        )}
                        {!this.state.loading && <span>Login</span>}
                      </button>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3"></div>
                  </div>
                  {/* <div className="row mt-3">
                    <div className="col-md-3 col-lg-3 col-xl-3"></div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                      <p
                        style={{
                          fontFamily: "Alegreya Sans",
                          color: "#374767",
                          fontSize: "15px",
                          lineHeight: "26px",
                          marginLeft: "10px"
                        }}
                      >
                        Are you Registered?{" "}
                        <a
                          href="/Signup"
                          style={{
                            textAlign: "left",
                            fontFamily: "Alegreya Sans",
                            color: "#374767",
                            fontSize: "15px",
                            lineHeight: "26px"
                          }}
                        >
                          <b>SignUp</b>
                        </a>
                      </p>
                    </div>
                    <div className="col-sm-0 col-md-3 col-lg-3 col-xl-3"></div>
                    <div className="col-md-1 col-lg-1 col-xl-1"></div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  loginResMsg: state.AuthReducer.loginResMsg
});

export default connect(mapStateToProps, { adminLoginAction })(loginPage);
