import React, { Component } from "react";
import { connect } from "react-redux";
import MedicineTypeClass from "../../../../../BusinessLogics/UpdateLogics/medicineTypeLogics";
import {
  showMedicineTypeAction,
  updateMedicineTypeAction,
  deleteMedicineTypeAction,
  searchMedicineTypeAction
} from "../../../../../Actions/MedicineActions/medicineAction";
class tableCardMedType extends Component {
  state = {
    loading1: true,
    editMedType: false,
    ids: 0,
    newtask: "",
    searchMed: ""
  };

  componentDidMount() {
    this.props.showMedicineTypeAction(this);
  }
  render() {
    console.log(this.props.searchMedType, "Table body data");
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
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
                        Manage Medicine Type
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
                          this.setState({ searchMed: e.target.value }, () => {
                            this.props.searchMedicineTypeAction(
                              this.state.searchMed.toUpperCase()
                            );
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div className="row mt-4">
                    <div className="col-12">
                      {this.props.netError ? (
                        <span
                          style={{
                            fontSize: "18px",
                            color: "red",
                            marginLeft: "500px"
                          }}
                        >
                          {this.props.netError}
                        </span>
                      ) : (
                        ""
                      )}
                      {this.props.medicineTypeName.length > 0 &&
                      this.state.searchMed.length === 0 ? (
                        <table className="table justify-content-center table-responsive-md table-bordered">
                          <thead>
                            <tr>
                              <th style={{ textAlign: "center" }}>Unit Name</th>
                              <th style={{ textAlign: "center" }}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.props.medicineTypeName.map(ls => (
                              <tr>
                                <td>
                                  {this.state.editMedType === true &&
                                  this.state.ids === ls._id ? (
                                    <span>
                                      <input
                                        class="w-100 form-control"
                                        style={{
                                          border: "none",
                                          borderBottom: "1px solid #45C203",
                                          borderBottomLeftRadius: "0px",
                                          borderBottomRightRadius: "0px"
                                        }}
                                        type="text"
                                        defaultValue={ls.medicineTypeName}
                                        onChange={e =>
                                          this.setState({
                                            newtask: e.target.value
                                          })
                                        }
                                      />
                                    </span>
                                  ) : (
                                    <span>{ls.medicineTypeName}</span>
                                  )}
                                </td>
                                <td>
                                  {this.state.editMedType === true &&
                                  this.state.ids === ls._id ? (
                                    <a
                                      href="#"
                                      onClick={() => {
                                        this.setState({ ids: ls._id });
                                        {
                                          this.props.updateMedicineTypeAction(
                                            new MedicineTypeClass(
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
                                          newtask: ls.medicineTypeName
                                        });
                                        this.setState({
                                          editMedType: !this.state.editMedType,
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
                                      this.props.deleteMedicineTypeAction(
                                        ls._id
                                      )
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
                      {this.props.searchMedType.length > 0 &&
                      this.state.searchMed.length > 0 ? (
                        <table className="table justify-content-center table-responsive-md table-bordered">
                          <thead>
                            <tr>
                              <th style={{ textAlign: "center" }}>Unit Name</th>
                              <th style={{ textAlign: "center" }}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.props.searchMedType.map(ls => (
                              <tr>
                                <td>
                                  {this.state.editMedType === true &&
                                  this.state.ids === ls._id ? (
                                    <span>
                                      <input
                                        class="w-100 form-control"
                                        style={{
                                          border: "none",
                                          borderBottom: "1px solid #45C203",
                                          borderBottomLeftRadius: "0px",
                                          borderBottomRightRadius: "0px"
                                        }}
                                        type="text"
                                        defaultValue={ls.medicineTypeName}
                                        onChange={e =>
                                          this.setState({
                                            newtask: e.target.value
                                          })
                                        }
                                      />
                                    </span>
                                  ) : (
                                    <span>{ls.medicineTypeName}</span>
                                  )}
                                </td>
                                <td>
                                  {this.state.editMedType === true &&
                                  this.state.ids === ls._id ? (
                                    <a
                                      href="#"
                                      onClick={() => {
                                        this.setState({ ids: ls._id });
                                        {
                                          this.props.updateMedicineTypeAction(
                                            new MedicineTypeClass(
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
                                          newtask: ls.medicineTypeName
                                        });
                                        this.setState({
                                          editMedType: !this.state.editMedType,
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
                                      this.props.deleteMedicineTypeAction(
                                        ls._id
                                      )
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
  medicineTypeName: state.MedicineReducer.medicineTypeName,
  netError: state.MedicineReducer.netError,
  searchMedType: state.MedicineReducer.searchMedType,
  searchError: state.MedicineReducer.searchError
});

export default connect(mapStateToProps, {
  showMedicineTypeAction,
  updateMedicineTypeAction,
  deleteMedicineTypeAction,
  searchMedicineTypeAction
})(tableCardMedType);
