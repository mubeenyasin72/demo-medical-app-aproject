import React, { Component } from "react";
import { connect } from "react-redux";
import AddVenderClass from "../../../../BusinessLogics/addVenderClass";
import { addVendorAction } from "../../../../Actions/VendorActions/VenderActions";

class addVendorForm extends Component {
  state = {
    vendorName: "",
    contactNumber: "",
    validVendorName: false,
    validContactNumber: false,
    errors: {
      vendorName: "",
      contactNumber: ""
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
        errors.vendorName =
          value.length < 5 ? "Name must be 3 characters long!" : "";
        value.length < 5
          ? this.setState({ validVendorName: false })
          : this.setState({ validVendorName: true });
        State.vendorName = value;
        break;
      case "password":
        errors.contactNumber =
          value.length < 11 ? "Phone Number must be 11 characters long!" : "";
        value.length < 11
          ? this.setState({ validContactNumber: false })
          : this.setState({ validContactNumber: true });
        State.contactNumber = value;
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
          <div className="row">
            <div className="col-12">
              <div class="card">
                <div className="card-header">
                  <p
                    style={{
                      fontFamily: "Alegreya Sans",
                      fontSize: "20px",
                      lineHeight: "15px",
                      color: "#374767",
                      textAlign: "Left"
                    }}
                  >
                    Add Vendor
                  </p>
                </div>
                <div class="card-body">
                  <div className="row">
                    <div className="col-12">
                      <div class="row">
                        <div class="col-2">
                          <label>Vendor Name</label>
                        </div>
                        <div class="col-6">
                          <input
                            type="text"
                            name="userName"
                            class="form-control"
                            placeholder=""
                            style={{ width: "100%" }}
                            value={this.state.vendorName}
                            onChange={this.handleChange}
                            disabled={this.state.loading}
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-12">
                          {errors.vendorName.length > 0 && (
                            <span
                              style={{
                                fontSize: "11px",
                                color: "red",
                                marginLeft: "200px"
                              }}
                            >
                              {errors.vendorName}
                            </span>
                          )}
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-2 mt-2">
                          <label>Vendor Mobile</label>
                        </div>
                        <div class="col-6 mt-2">
                          <input
                            type="number"
                            name="password"
                            class="form-control"
                            placeholder=""
                            value={this.state.contactNumber}
                            style={{ width: "100%" }}
                            onChange={this.handleChange}
                            disabled={this.state.loading}
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-12">
                          {errors.contactNumber.length > 0 && (
                            <span
                              style={{
                                fontSize: "11px",
                                color: "red",
                                marginLeft: "200px"
                              }}
                            >
                              {errors.contactNumber}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ marginBottom: "-10px" }}>
                    {this.props.netError2 ? (
                      <span
                        style={{
                          fontSize: "11px",
                          color: "red",
                          marginLeft: "200px"
                        }}
                      >
                        {this.props.netError2}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="row mt-3">
                    <div className="col-2"></div>

                    <div className="col-3">
                      <button
                        className="btn add-vendor-btn-form"
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
                                this.props.addVendorAction(
                                  new AddVenderClass(
                                    this.state.vendorName,
                                    this.state.contactNumber
                                  ),
                                  this
                                );
                              }
                            );
                          }
                        }}
                        loading={this.state.loading}
                        disabled={
                          !this.state.validVendorName ||
                          !this.state.validContactNumber
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
  addVenResMsg: state.VenderReducer.addVenResMsg,
  netError2: state.VenderReducer.netError2
});

export default connect(mapStateToProps, { addVendorAction })(addVendorForm);
