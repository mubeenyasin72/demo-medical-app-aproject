import "./login.css";

import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from 'react-redux';

import { loginVendorAction } from '../../../Actions/vendorAuthActions';

import SellerLoginClass from '../../../BusinessLogics/sellerLogin';

import InputField from "../../../../BasicComponents/FormGroup/Inputs/BasicInput/basicInput";
import PrimaryButton from "../../../../BasicComponents/FormGroup/Buttons/PrimaryButton/primaryButton";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

class Login extends Component {
  state = {
    email:"",
    password:"",
    loader:false,
    validEmail:false,
    validPassword:false,
    validity:false,
    errors:{
      email:"",
      password:"",
    }
  };

  handleValidity = (e) =>{
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;
    let State = this.state;

    switch(name){
      case "email":
        errors.email = validEmailRegex.test(value)?
        ("")
        :("Email not Valid");
        validEmailRegex.test(value)? this.setState({validEmail: true}) : this.setState({validEmail: false});
        State.email = value;
        break;

      case "password":
        errors.password = value.length < 8?
        ("Password must be 8 characters long")
        :("");
        value.length < 8? this.setState({validPassword: false}) : this.setState({validPassword: true});
        State.password = value;
        break;
    }
    this.setState({errors, [name]: value});
    this.setState({State, [name]: value});
  }

  render() {
    const { errors } = this.state;
    return (
      <React.Fragment>
        <div class="bg-login"></div>
        <div class="container-fluid login-container">
          <div class="row pt-5">
            <div class="col-12 text-center">
              <h3 class="text-white ">Log in</h3>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1"></div>
            <div class="col-12 col-sm-12 col-md-10 col-xl-10 col-xl-10">
              <div class="row">
                <div class="col-12">
                  <InputField 
                    name="email"
                    placeholder="E-mail" 
                    onChange={this.handleValidity}
                    disabled={this.state.loader}
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                    {errors.email.length > 0 && (
                      <span style={{ fontSize: "11px", color: "#fbb03b" }}>
                        {errors.email}
                      </span>
                    )}
                </div>
              </div>
            </div>
            <div class="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1"></div>
          </div>
          <div class="row mt-3">
            <div class="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1"></div>
            <div class="col-12 col-sm-12 col-md-10 col-xl-10 col-xl-10">
              <div class="row">
                <div class="col-12">
                  <InputField 
                    placeholder="Password" 
                    type="password"
                    name="password"
                    onChange={this.handleValidity}
                    disabled={this.state.loader}
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                    {errors.password.length > 0 && (
                      <span style={{ fontSize: "11px", color: "#fbb03b" }}>
                        {errors.password}
                      </span>
                    )}
                </div>
              </div>
            </div>
            <div class="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1"></div>
          </div>
          <div class="row mt-3">
            <div class="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1"></div>
            <div class="col-12 col-sm-12 col-md-10 col-xl-10 col-xl-10">
              <div class="row">
                <div class="col-7">
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
                        Keep me signed in
                      </div>
                    </label>
                  </div>
                </div>
                <div class="col-5">
                  <div class="text-right">
                    <Link
                      to="/Seller/Forget_Password"
                      class="login-forgot-text text-white"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1"></div>
          </div>
          <div class="row mt-3">
            <div class="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1"></div>
            <div class="col-12 col-sm-12 col-md-10 col-xl-10 col-xl-10 text-center">
              {/* {/ <Link to="/Seller/Statistics"> /} */}
              <div class="row">
                <div class="col-12">
                  {this.props.loginMessage === "Authenticated Seller" ? (
                    <span style={{ fontSize: "11px", color: "#00ff00" }}>
                      {this.props.loginMessage}
                    </span>
                  ) : (
                    <span style={{ fontSize: "11px", color: "#fbb03b" }}>
                      {this.props.loginMessage}
                    </span>
                  )}
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <PrimaryButton 
                    onClick={()=>{
                      if(!this.state.loader){
                        this.setState({loader: true},
                          ()=>{
                            this.timer = setTimeout(()=> {},
                            this.state.loader === false);
                            this.props.loginVendorAction(new SellerLoginClass(this.state.email, this.state.password), this);
                          }
                          );
                      }
                    }}
                    loader={this.state.loader && this.props.loginSuccess}
                    disabled={!this.state.validEmail || !this.state.validPassword}
                  >
                    {this.state.loader && (
                      <i class="spinner-border" role="status" />
                    )}
                    {!this.state.loader && <span>Login</span>}
                  </PrimaryButton>
                </div>
              </div>
              {/* {/ </Link> /} */}
            </div>
            <div class="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1"></div>
          </div>
          <div class="row mt-2 pb-5">
            <div class="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1"></div>
            <div class="col-12 col-sm-12 col-md-10 col-xl-10 col-xl-10 text-center">
              <span style={{ color: "#ffffff" }}>
                Already have an account?&nbsp;&nbsp;
                <Link
                  to="/Seller/Signup"
                  style={{ textUnderlineOffset: "auto" }}
                >
                  Signup
                </Link>
              </span>
            </div>
            <div class="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state =>({
  loginSuccess: state.VendorAuthReducer.vendorLoginSuccess,
  loginMessage: state.VendorAuthReducer.vendorLoginMessage,
})

export default connect(mapStateToProps,{loginVendorAction})(Login);
