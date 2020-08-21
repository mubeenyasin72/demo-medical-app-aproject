import React, { Component } from "react";
import "./signinCard.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { employeeLoginAction } from "../../../../ActionsEmployee/EmployeeAuthAction/loginActions";
import LoginClass from "../../../../EmployeeBusinessLogics/employeeLoginClass";
class siginCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      loading: false
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div class="card w-100" style={{ borderRadius: "20px" }}>
                <img
                  class="card-img-top"
                  src={require("../../../Assets/laptop.jpg")}
                  style={{
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px"
                  }}
                  alt="Card image cap"
                />
                <div class="content">
                  <h1
                    style={{
                      textAlign: "center",
                      fontFamily: "Poppins-Regular",
                      fontSize: "30px",
                      lineHeight: "36px"
                    }}
                  >
                    <b>SIGN IN</b>
                  </h1>
                </div>
                <div class="card-body">
                  <div className="row">
                    <div className="col-12">
                      <div class="row">
                        <div class="col-3">
                          <label
                            className="lable-text mt-4"
                            style={{
                              fontFamily: "Poppins-Regular",
                              fontSize: "16px",
                              lineHeight: "18px",
                              color: "#808080"
                            }}
                          >
                            Username
                          </label>
                        </div>
                        <div class="col-9">
                          <input
                            type="text"
                            className="form-control"
                            style={{
                              border: "none",
                              borderBottom: "1px solid #45C203",
                              borderBottomLeftRadius: "0px",
                              borderBottomRightRadius: "0px"
                            }}
                            placeholder=""
                            disabled={this.state.loading}
                            onChange={e =>
                              this.setState({ userName: e.target.value })
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-12">
                      <div class="row ">
                        <div class="col-3">
                          <label
                            className="lable-text mt-4"
                            style={{
                              fontFamily: "Poppins-Regular",
                              fontSize: "16px",
                              lineHeight: "18px",
                              color: "#808080"
                            }}
                          >
                            Password
                          </label>
                        </div>
                        <div class="col-9">
                          <input
                            type="password"
                            className="form-control"
                            style={{
                              border: "none",
                              borderBottom: "1px solid #45C203",
                              borderBottomLeftRadius: "0px",
                              borderBottomRightRadius: "0px"
                            }}
                            placeholder=""
                            disabled={this.state.loading}
                            onChange={e =>
                              this.setState({ password: e.target.value })
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-3"></div>
                    <div className="col-9">
                      <div className="row">
                        <div className="col">
                          <div class="form-check">
                            <input
                              class="input-checkbox100"
                              type="checkbox"
                              id="gridCheck"
                            />
                            <label class="label-checkbox100" for="gridCheck">
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <div className="col">
                          <a href="#" class="txt1">
                            Forgot Password?
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-12">
                      <div className="row">
                        <div className="col"></div>
                        <div className="col">
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
                          {/* <Link to="/"> */}
                          <button
                            class="btn btn-login-2 "
                            style={{
                              padding: "15px",
                              borderRadius: "40px",
                              fontSize: "18px",
                              width: "200px",
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
                                    this.props.employeeLoginAction(
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
                          >
                            {this.state.loading && (
                              <i
                                class="spinner-border text-dark spinner-border-sm"
                                role="status"
                              />
                            )}

                            {this.state.loading && <span>Logging In</span>}
                            {!this.state.loading && <span>Login</span>}
                          </button>
                          {/* </Link> */}
                        </div>
                        <div className="col"></div>
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
  loginResMsg: state.EmployeeAuthReducer.loginResMsg
});
export default connect(mapStateToProps, { employeeLoginAction })(siginCard);
