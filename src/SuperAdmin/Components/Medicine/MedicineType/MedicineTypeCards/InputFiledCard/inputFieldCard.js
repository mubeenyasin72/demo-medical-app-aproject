import React, { Component } from "react";
import { addMedicineTypeAction } from "../../../../../Actions/MedicineActions/medicineAction";
import { connect } from "react-redux";
import MedicineTypeClass from "../../../../../BusinessLogics/addMedicinetypeClass";

class inputFieldCard extends Component {
  state = {
    medicineTypeName: "",
    loading: false,
    validmedicineTypeName: false,
    errors: {
      medicineTypeName: "enter Medicine Type"
    }
  };
  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    let State = this.state;

    switch (name) {
      case "userName":
        errors.medicineTypeName =
          value.length === 0 ? "enter Medicine Type" : "";
        value.length === 0
          ? this.setState({ validmedicineTypeName: false })
          : this.setState({ validmedicineTypeName: true });
        State.medicineTypeName = value;
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
                    Add Medicine Type
                  </p>
                </div>
                <div class="card-body">
                  <div className="row">
                    <div className="col-2">
                      <p>Type Name</p>
                    </div>
                    <div className="col-8">
                      <input
                        type="text"
                        name="userName"
                        class="form-control"
                        placeholder=""
                        style={{ width: "100%" }}
                        value={this.state.medicineTypeName}
                        onChange={this.handleChange}
                        disabled={this.state.loading}
                      />
                    </div>
                    <div className="col-3"></div>
                  </div>
                  <div class="row">
                    <div class="col-12"></div>
                  </div>
                  <div className="row mt-3" style={{ marginBottom: "-20px" }}>
                    <div className="col-12" style={{ textAlign: "center" }}>
                      {this.props.resMsgType ? (
                        <span
                          style={{
                            fontSize: "10px",
                            color: "red",
                            marginRight: "230px"
                          }}
                        >
                          {this.props.resMsgType}
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-4"></div>
                    <div className="col-4">
                      <button
                        type="button"
                        class="btn btn-med-type-input-card"
                        style={{
                          backgroundColor: "#45C203",
                          color: "white",
                          width: "40%"
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
                                this.props.addMedicineTypeAction(
                                  new MedicineTypeClass(
                                    this.state.medicineTypeName
                                  ),
                                  this
                                );
                              }
                            );
                          }
                        }}
                        loading={this.state.loading}
                        disabled={!this.state.validmedicineTypeName}
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
  resMsgType: state.MedicineReducer.resMsgType
});
export default connect(mapStateToProps, { addMedicineTypeAction })(
  inputFieldCard
);
