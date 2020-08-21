import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addUnitAction,
  showUnitListAction,
  deleteUnitListAction,
  updateUnitListAction,
  searchMedicineUnitAction
} from "../../../../../Actions/AddUnitAction/addUnitAction";
import AddUnitClass from "../../../../../BusinessLogics/addUnitClass";
import UnitListClass from "../../../../../BusinessLogics/UpdateLogics/medicineListUpdate";
class addUnitCard extends Component {
  state = {
    medicineUnitName: "",
    loading: false,
    loading1: true,
    delLoading: false,
    edit: false,
    ids: 0,
    delIds: 0,
    newtask: "",
    validMedicineUnitName: false,
    errors: {
      medicineUnitName: ""
    },
    searchUnit: ""
  };

  toggle = () => {
    this.setState({ edit: !this.state.edit });
  };
  componentDidMount() {
    this.props.showUnitListAction(this);
  }
  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    let State = this.state;

    switch (name) {
      case "userName":
        console.log("This is State");
        errors.medicineUnitName =
          value.length < 2 ? "minimum 2 characters long!" : "";
        value.length < 2
          ? this.setState({ validMedicineUnitName: false })
          : this.setState({ validMedicineUnitName: true });
        State.medicineUnitName = value;
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
                  <h6
                    style={{
                      fontFamily: "Alegreya Sans",
                      fontSize: "18px",
                      lineHeight: "15px",
                      color: "#374767",
                      textAlign: "Left"
                    }}
                  >
                    Add Unit
                  </h6>
                </div>
                <div class="card-body">
                  <div class="row ">
                    <div class="col-2">Unit Name</div>
                    <div class="col-8">
                      <input
                        type="text"
                        name="userName"
                        class="form-control"
                        placeholder=""
                        style={{ width: "100%" }}
                        value={this.state.medicineUnitName}
                        onChange={this.handleChange}
                        disabled={this.state.loading}
                      />
                    </div>
                    <div className="col-2"></div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      {errors.medicineUnitName.length > 0 && (
                        <span
                          style={{
                            fontSize: "11px",
                            color: "red",
                            marginLeft: "200px"
                          }}
                        >
                          {errors.medicineUnitName}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="" style={{ marginBottom: "-20px" }}>
                    {this.props.netError2 ? (
                      <span
                        style={{
                          fontSize: "11px",
                          color: "red",
                          marginLeft: "490px"
                        }}
                      >
                        {this.props.netError2}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="row mt-4">
                    <div className="col-5"></div>
                    <div className="col-4">
                      <button
                        className="btn btn-add-unit-card"
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
                                this.props.addUnitAction(
                                  new AddUnitClass(this.state.medicineUnitName),
                                  this
                                );
                              }
                            );
                          }
                        }}
                        loading={this.state.loading}
                        disabled={!this.state.validMedicineUnitName}
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
          <div className="row mt-5">
            <div className="col-12">
              <div class="card">
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
                        Unit List
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
                          this.setState({ searchUnit: e.target.value }, () => {
                            this.props.searchMedicineUnitAction(
                              this.state.searchUnit.toUpperCase()
                            );
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  {this.props.resMsgType ? (
                    <span
                      style={{
                        fontSize: "20px",
                        color: "red",
                        marginLeft: "450px"
                      }}
                    >
                      {this.props.resMsgType}
                    </span>
                  ) : (
                    ""
                  )}
                  <div className="row mt-2">
                    <div className="col-12">
                      {this.props.addUnit1.length > 0 &&
                      this.state.searchUnit.length === 0 ? (
                        <table className="table justify-content-center table-responsive-md table-bordered">
                          <thead>
                            <tr>
                              <th style={{ textAlign: "center" }}>Unit Name</th>
                              <th style={{ textAlign: "center" }}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.props.addUnit1.map(ls => (
                              <tr>
                                <td>
                                  {this.state.edit === true &&
                                  this.state.ids === ls._id ? (
                                    <span>
                                      <input
                                        class="w-100 form-control "
                                        style={{
                                          border: "none",
                                          borderBottom: "1px solid #45C203",
                                          borderBottomLeftRadius: "0px",
                                          borderBottomRightRadius: "0px"
                                        }}
                                        type="text"
                                        defaultValue={ls.medicineUnitName}
                                        onChange={e =>
                                          this.setState({
                                            newtask: e.target.value
                                          })
                                        }
                                      />
                                    </span>
                                  ) : (
                                    <span>{ls.medicineUnitName}</span>
                                  )}
                                </td>
                                <td>
                                  {this.state.edit === true &&
                                  this.state.ids === ls._id ? (
                                    <a
                                      href="#"
                                      onClick={() => {
                                        this.setState({
                                          ids: ls._id
                                        });
                                        {
                                          this.props.updateUnitListAction(
                                            new UnitListClass(
                                              ls._id,
                                              this.state.newtask
                                            ),
                                            this
                                          );
                                        }
                                      }}
                                    >
                                      <i
                                        class="fa fa-share-square-o mr-3"
                                        style={{
                                          border: "1px solid #53D4FA",
                                          padding: "10px",
                                          backgroundColor: "#53D4FA",
                                          color: "white",
                                          borderRadius: "5px"
                                        }}
                                      ></i>
                                    </a>
                                  ) : (
                                    <a
                                      href="#"
                                      onClick={() => {
                                        this.setState({
                                          newtask: ls.medicineUnitName
                                        });
                                        this.setState({
                                          edit: !this.state.edit,
                                          ids: ls._id
                                        });
                                      }}
                                    >
                                      <i
                                        class="fa fa-pencil  mr-3"
                                        style={{
                                          border: "1px solid #53D4FA",
                                          padding: "10px",
                                          backgroundColor: "#53D4FA",
                                          color: "white",
                                          borderRadius: "5px"
                                        }}
                                      ></i>
                                    </a>
                                  )}
                                  <a
                                    href="#"
                                    onClick={() =>
                                      this.props.deleteUnitListAction(ls._id)
                                    }
                                  >
                                    <i
                                      class="fa fa-trash-o"
                                      style={{
                                        border: "1px solid red",
                                        backgroundColor: "#E64048",
                                        color: "white",
                                        borderRadius: "5px",
                                        padding: "10px"
                                      }}
                                    ></i>
                                  </a>
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
                              height: "30px",
                              width: "30px"
                            }}
                          />
                        )
                      )}
                    </div>
                    <div className="col-12">
                      {this.props.seachMedUnit.length > 0 &&
                      this.state.searchUnit.length > 0 ? (
                        <table className="table justify-content-center table-responsive-md table-bordered">
                          <thead>
                            <tr>
                              <th style={{ textAlign: "center" }}>Unit Name</th>
                              <th style={{ textAlign: "center" }}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.props.seachMedUnit.map(ls => (
                              <tr>
                                <td>
                                  {this.state.edit === true &&
                                  this.state.ids === ls._id ? (
                                    <span>
                                      <input
                                        class="w-100 form-control "
                                        style={{
                                          border: "none",
                                          borderBottom: "1px solid #45C203",
                                          borderBottomLeftRadius: "0px",
                                          borderBottomRightRadius: "0px"
                                        }}
                                        type="text"
                                        defaultValue={ls.medicineUnitName}
                                        onChange={e =>
                                          this.setState({
                                            newtask: e.target.value
                                          })
                                        }
                                      />
                                    </span>
                                  ) : (
                                    <span>{ls.medicineUnitName}</span>
                                  )}
                                </td>
                                <td>
                                  {this.state.edit === true &&
                                  this.state.ids === ls._id ? (
                                    <a
                                      href="#"
                                      onClick={() => {
                                        this.setState({
                                          ids: ls._id
                                        });
                                        {
                                          this.props.updateUnitListAction(
                                            new UnitListClass(
                                              ls._id,
                                              this.state.newtask
                                            ),
                                            this
                                          );
                                        }
                                      }}
                                    >
                                      <i
                                        class="fa fa-share-square-o mr-3"
                                        style={{
                                          border: "1px solid #53D4FA",
                                          padding: "10px",
                                          backgroundColor: "#53D4FA",
                                          color: "white",
                                          borderRadius: "5px"
                                        }}
                                      ></i>
                                    </a>
                                  ) : (
                                    <a
                                      href="#"
                                      onClick={() => {
                                        this.setState({
                                          newtask: ls.medicineUnitName
                                        });
                                        this.setState({
                                          edit: !this.state.edit,
                                          ids: ls._id
                                        });
                                      }}
                                    >
                                      <i
                                        class="fa fa-pencil  mr-3"
                                        style={{
                                          border: "1px solid #53D4FA",
                                          padding: "10px",
                                          backgroundColor: "#53D4FA",
                                          color: "white",
                                          borderRadius: "5px"
                                        }}
                                      ></i>
                                    </a>
                                  )}
                                  <a
                                    href="#"
                                    onClick={() =>
                                      this.props.deleteUnitListAction(ls._id)
                                    }
                                  >
                                    <i
                                      class="fa fa-trash-o"
                                      style={{
                                        border: "1px solid red",
                                        backgroundColor: "#E64048",
                                        color: "white",
                                        borderRadius: "5px",
                                        padding: "10px"
                                      }}
                                    ></i>
                                  </a>
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
  addUnit1: state.AddUnitReducer.addUnit,
  msgError: state.AddUnitReducer.msgError,
  netError2: state.AddUnitReducer.netError2,
  resMsgType: state.AddUnitReducer.resMsgType,
  seachMedUnit: state.AddUnitReducer.seachMedUnit,
  searchError: state.AddUnitReducer.searchError
});

export default connect(mapStateToProps, {
  addUnitAction,
  showUnitListAction,
  deleteUnitListAction,
  updateUnitListAction,
  searchMedicineUnitAction
})(addUnitCard);
