import React, { Component } from "react";
import {
  showVendorAction,
  deleteVendorListAction,
  updateVenderAction,
  searchVenderbByNameAction
} from "../../../../Actions/VendorActions/VenderActions";
import { connect } from "react-redux";
import UpdateVenderClass from "../../../../BusinessLogics/UpdateLogics/updateVederClass";
class manageVendorForm extends Component {
  state = {
    loading1: true,
    editVender: false,
    ids: 0,
    newtask: "",
    newtask1: "",
    searchVender: ""
  };
  componentDidMount() {
    this.props.showVendorAction(this);
  }
  render() {
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
                        Manage Vendor
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
                          this.setState({ searchVender: e.target.value }, () =>
                            this.props.searchVenderbByNameAction(
                              this.state.searchVender.toUpperCase()
                            )
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div className="row mb-5">
                    <div className="col-4"></div>
                  </div>
                  {this.props.netError ? (
                    <span
                      style={{
                        fontSize: "20px",
                        color: "red",
                        marginLeft: "450px"
                      }}
                    >
                      {this.props.netError}
                    </span>
                  ) : (
                    ""
                  )}
                  <div className="row mt-4">
                    <div className="col-12">
                      {this.props.vendor.length > 0 &&
                      this.state.searchVender.length === 0 ? (
                        <table className="table justify-content-center table-responsive-md table-bordered">
                          <thead>
                            <tr>
                              <th style={{ textAlign: "center" }}>
                                Vender Name
                              </th>
                              <th style={{ textAlign: "center" }}>
                                Contact Number
                              </th>
                              <th style={{ textAlign: "center" }}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.props.vendor.map(ls => (
                              <tr>
                                <td>
                                  {this.state.editVender === true &&
                                  this.state.ids === ls._id ? (
                                    <span>
                                      <input
                                        class="w-100"
                                        style={{
                                          border: "none",
                                          borderBottom: "1px solid #45C203"
                                        }}
                                        type="text"
                                        defaultValue={ls.vendorName}
                                        onChange={e =>
                                          this.setState({
                                            newtask: e.target.value
                                          })
                                        }
                                      />
                                    </span>
                                  ) : (
                                    <span>{ls.vendorName}</span>
                                  )}
                                </td>
                                <td>
                                  {this.state.editVender === true &&
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
                                        defaultValue={ls.contactNumber}
                                        onChange={e =>
                                          this.setState({
                                            newtask1: e.target.value
                                          })
                                        }
                                      />
                                    </span>
                                  ) : (
                                    <span>{ls.contactNumber}</span>
                                  )}
                                </td>
                                <td>
                                  {this.state.editVender === true &&
                                  this.state.ids === ls._id ? (
                                    <a
                                      href="#"
                                      onClick={() => {
                                        this.setState({ ids: ls._id });

                                        {
                                          this.props.updateVenderAction(
                                            new UpdateVenderClass(
                                              ls._id,
                                              this.state.newtask,
                                              this.state.newtask1
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
                                          newtask: ls.vendorName,
                                          newtask1: ls.contactNumber
                                        });
                                        this.setState({
                                          editVender: !this.state.editVender,
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
                                      this.props.deleteVendorListAction(ls._id)
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
                              marginLeft: "450px",
                              height: "30px",
                              width: "30px"
                            }}
                          />
                        )
                      )}
                    </div>
                    <div className="col-12">
                      {this.props.searchVender.length > 0 &&
                      this.state.searchVender.length > 0 ? (
                        <table className="table justify-content-center table-responsive-md table-bordered">
                          <thead>
                            <tr>
                              <th style={{ textAlign: "center" }}>
                                Vender Name
                              </th>
                              <th style={{ textAlign: "center" }}>
                                Contact Number
                              </th>
                              <th style={{ textAlign: "center" }}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.props.searchVender.map(ls => (
                              <tr>
                                <td>
                                  {this.state.editVender === true &&
                                  this.state.ids === ls._id ? (
                                    <span>
                                      <input
                                        class="w-100"
                                        style={{
                                          border: "none",
                                          borderBottom: "1px solid #45C203"
                                        }}
                                        type="text"
                                        defaultValue={ls.vendorName}
                                        onChange={e =>
                                          this.setState({
                                            newtask: e.target.value
                                          })
                                        }
                                      />
                                    </span>
                                  ) : (
                                    <span>{ls.vendorName}</span>
                                  )}
                                </td>
                                <td>
                                  {this.state.editVender === true &&
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
                                        defaultValue={ls.contactNumber}
                                        onChange={e =>
                                          this.setState({
                                            newtask1: e.target.value
                                          })
                                        }
                                      />
                                    </span>
                                  ) : (
                                    <span>{ls.contactNumber}</span>
                                  )}
                                </td>
                                <td>
                                  {this.state.editVender === true &&
                                  this.state.ids === ls._id ? (
                                    <a
                                      href="#"
                                      onClick={() => {
                                        this.setState({ ids: ls._id });

                                        {
                                          this.props.updateVenderAction(
                                            new UpdateVenderClass(
                                              ls._id,
                                              this.state.newtask,
                                              this.state.newtask1
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
                                          newtask: ls.vendorName,
                                          newtask1: ls.contactNumber
                                        });
                                        this.setState({
                                          editVender: !this.state.editVender,
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
                                      this.props.deleteVendorListAction(ls._id)
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
  vendor: state.VenderReducer.addVender,
  netError: state.VenderReducer.netError,
  searchVender: state.VenderReducer.searchVender,
  searchError: state.VenderReducer.searchError
});
export default connect(mapStateToProps, {
  showVendorAction,
  deleteVendorListAction,
  updateVenderAction,
  searchVenderbByNameAction
})(manageVendorForm);
