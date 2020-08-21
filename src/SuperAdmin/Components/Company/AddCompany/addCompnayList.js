import React, { Component } from "react";
import CompnayClass from "../../../BusinessLogics/companyClass";
import {
  addCompanyAction,
  showCompnayAction,
  updateCompanyAction,
  searchCompanyByNameAction
} from "../../../Actions/CompnayAction/companyActions";
import { connect } from "react-redux";
import CompanyClass from "../../../BusinessLogics/UpdateLogics/companyUpdateClass";
class addCompnayList extends Component {
  state = {
    companyName: "",
    loading1: true,
    loading: false,
    editCompany: false,
    ids: 0,
    newtask: "",
    validCompanyName: false,
    errors: {
      companyName: ""
    },
    searchComoany: ""
  };
  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    let State = this.state;

    switch (name) {
      case "userName":
        console.log("This is State");
        errors.companyName = value.length === 0 ? "Field is empty" : "";
        value.length === 0
          ? this.setState({ validCompanyName: false })
          : this.setState({ validCompanyName: true });
        State.companyName = value;
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
    this.setState({ State, [name]: value });
  };
  componentDidMount() {
    this.props.showCompnayAction(this);
  }
  render() {
    const { errors } = this.state;
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row mt-3">
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
                    Add Company
                  </p>
                </div>
                <div class="card-body">
                  <div className="row">
                    <div className="col-2">
                      <p>Company Name</p>
                    </div>
                    <div className="col-8">
                      <input
                        type="text"
                        name="userName"
                        class="form-control"
                        placeholder=""
                        style={{ width: "100%" }}
                        value={this.state.companyName}
                        onChange={this.handleChange}
                        disabled={this.state.loading}
                      />
                    </div>
                    <div className="col-3"></div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      {errors.companyName.length > 0 && (
                        <span
                          style={{
                            fontSize: "11px",
                            color: "red",
                            marginLeft: "200px",
                            marginBottom: "-40px"
                          }}
                        >
                          {errors.companyName}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-12" style={{ textAlign: "center" }}>
                      {this.props.netError2 ? (
                        <span
                          style={{
                            fontSize: "10px",
                            color: "red"
                          }}
                        >
                          {this.props.netError2}
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
                                this.props.addCompanyAction(
                                  new CompnayClass(this.state.companyName),
                                  this
                                );
                              }
                            );
                          }
                        }}
                        loading={this.state.loading}
                        disabled={!this.state.validCompanyName}
                      >
                        {this.state.loading && (
                          <i
                            class="spinner-border text-center text-dark spinner-border-sm"
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
          <div className="row mt-3">
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
                        Company List
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
                          this.setState({ searchComoany: e.target.value }, () =>
                            this.props.searchCompanyByNameAction(
                              this.state.searchComoany.toUpperCase()
                            )
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  {this.props.netError ? (
                    <span
                      style={{
                        fontSize: "20px",
                        color: "red",
                        marginLeft: "550px"
                      }}
                    >
                      {this.props.netError}
                    </span>
                  ) : (
                    ""
                  )}
                  <div className="row mt-4">
                    <div className="col-12">
                      {this.props.company.length > 0 &&
                      this.state.searchComoany.length === 0 ? (
                        <table className="table justify-content-center table-responsive-md table-bordered">
                          <thead>
                            <tr>
                              {/* <th>Date</th> */}
                              <th>Company Name</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.props.company.map(ls => (
                              <tr>
                                <td>
                                  {this.state.editCompany === true &&
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
                                        defaultValue={ls.companyName}
                                        onChange={e =>
                                          this.setState({
                                            newtask: e.target.value
                                          })
                                        }
                                      />
                                    </span>
                                  ) : (
                                    <span>{ls.companyName}</span>
                                  )}
                                </td>
                                <td>
                                  {this.state.editCompany === true &&
                                  this.state.ids === ls._id ? (
                                    <a
                                      href="#"
                                      onClick={() => {
                                        this.setState({ ids: ls._id });
                                        {
                                          this.props.updateCompanyAction(
                                            new CompanyClass(
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
                                          newtask: ls.companyName
                                        });

                                        this.setState({
                                          editCompany: !this.state.editCompany,
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
                      {this.props.searchCompany.length > 0 &&
                      this.state.searchComoany.length > 0 ? (
                        <table className="table justify-content-center table-responsive-md table-bordered">
                          <thead>
                            <tr>
                              {/* <th>Date</th> */}
                              <th>Company Name</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.props.searchCompany.map(ls => (
                              <tr>
                                <td>
                                  {this.state.editCompany === true &&
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
                                        defaultValue={ls.companyName}
                                        onChange={e =>
                                          this.setState({
                                            newtask: e.target.value
                                          })
                                        }
                                      />
                                    </span>
                                  ) : (
                                    <span>{ls.companyName}</span>
                                  )}
                                </td>
                                <td>
                                  {this.state.editCompany === true &&
                                  this.state.ids === ls._id ? (
                                    <a
                                      href="#"
                                      onClick={() => {
                                        this.setState({ ids: ls._id });
                                        {
                                          this.props.updateCompanyAction(
                                            new CompanyClass(
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
                                          newtask: ls.companyName
                                        });

                                        this.setState({
                                          editCompany: !this.state.editCompany,
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
  company: state.CompayReducer.company,
  netError: state.CompayReducer.netError,
  netError2: state.CompayReducer.netError2,
  searchCompany: state.CompayReducer.searchCompany,
  searchError: state.CompayReducer.searchError
});
export default connect(mapStateToProps, {
  addCompanyAction,
  showCompnayAction,
  updateCompanyAction,
  searchCompanyByNameAction
})(addCompnayList);
