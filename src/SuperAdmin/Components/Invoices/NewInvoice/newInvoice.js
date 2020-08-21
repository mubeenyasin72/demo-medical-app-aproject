import React, { Component } from "react";
import { Link } from "react-router-dom";
import Autosuggest from "react-autosuggest";
import "./invoice.css";
import SearchLable from "./searchByName";
import { getSuperAdminData } from "../../../../LocalStorage/superAdminLocalStorage";
import {
  searchMedicineBySaltAction,
  searchDataFromInvoice,
  selectedQuantityAction,
  totalPiceEachMedicineAction,
  deleteRowDataInvoiceAction
} from "../../../Actions/SearchMedicineAction/searchMedicineAction";
import {
  showGSTDataActions,
  updateDiscountDataActions
} from "../../../Actions/GstActions/gstActions";
import { connect } from "react-redux";
import ReactToPrint from "react-to-print";
import { filterID } from "../../GSTComponents/FilterIDFolder/filterID";
import DiscountClass from "../../../BusinessLogics/ActionsLogics/UpdateGstLogics/updateDiscountClass";
import SelectedQuantityClass from "../../../BusinessLogics/SelectOptionClassLogic/selectedQuantityClass";
import TotalPriceClass from "../../../BusinessLogics/totalPriceSendClass";
import { HotKeys } from "react-hotkeys";
// const keyMap = {
//   SNAP_LEFT: "command+left",
//   DELETE_NODE: ["del", "backspace"]
// };
class newInvoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      curTime: null,
      value: "",
      suggestions: [],
      languages: [],
      toggle: true,
      quantity: 0,
      medPrice: 200,
      inputFieldState: true,
      gstData: "",
      editGst: false,
      loading: false,
      discoutData: 0,
      currentQuantity: 0,
      totalPrice: 0,
      numericValue: 0
    };
  }
  toggle = () => {
    this.setState({ editGst: !this.state.editGst });
  };
  componentDidMount() {
    this.props.showGSTDataActions(filterID, this);
  }
  getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : this.state.languages.filter(
          lang => lang.name.toLowerCase().slice(0, inputLength) === inputValue
        );
  };
  getSuggestionValue = suggestion => {
    // this.props.searchDataFromInvoice(suggestion.year);
    return suggestion.name;
  };

  renderSuggestion = suggestion => {
    let count = 0;
    count = count + 1;
    return (
      <li className="contact">
        <img
          src={"https://pharmacysys.herokuapp.com" + suggestion.image[0]}
          width="60px"
          height="60px"
          className="contact-image"
        />
        <div
          className="contact-info"
          style={{
            position: "absolute",
            marginLeft: "70px",
            marginTop: "-65px"
          }}
        >
          <div className="contact-name" style={{ marginTop: "2px" }}>
            {suggestion.name}
          </div>
          <div className="contact-name" style={{ marginTop: "26px" }}>
            {suggestion.name2}
          </div>
          <div style={{ marginLeft: "-85px", marginTop: "-45px" }}>
            {suggestion.key}
          </div>
        </div>
      </li>
    );
  };
  onChange = (event, { newValue }) => {
    // let matches = newValue.match(/(\d+)/);
    // console.log(matches, "THIS IN NUMERIC VALUE");
    let value = newValue.slice(-1).match(/(\d+)/);
    if (value === null) {
      this.setState(
        {
          value: newValue
        },
        () => {
          this.props.searchMedicineBySaltAction(this.state.value, this);
        }
      );
    } else {
      this.setState({ numericValue: newValue.slice(-1) });
    }
    // this.setState(
    //   {
    //     value: newValue
    //   },
    //   () => {
    //     this.props.searchMedicineBySaltAction(this.state.value, this);
    //   }
    // );
  };
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };
  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Search By Salt",
      value,
      onChange: this.onChange
    };
    return (
      <React.Fragment>
        {/* <HotKeys keyMap={keyMap}> */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 mt-2">
              <div className="row">
                <div className="col-sm-4 col-md-3 col-lg-2 col-xl-2 mt-1">
                  <Link to="/SuperAdmin/ManageInvoiceView">
                    <button
                      className="btn"
                      style={{
                        backgroundColor: "#53D4FA",
                        width: "100%",
                        color: "white"
                      }}
                    >
                      Manage Invoice
                    </button>
                  </Link>
                </div>
                <div className="col-sm-4 col-md-3 col-lg-2 col-xl-2 mt-1 ">
                  <Link to="/SuperAdmin/POSInvoiceView">
                    <button
                      className="btn"
                      style={{
                        backgroundColor: "#3A95E4",
                        width: "100%",
                        color: "white"
                      }}
                    >
                      POS Invoice
                    </button>
                  </Link>
                </div>
                <div className="col-sm-4 col-md-3 col-lg-2 col-xl-2 mt-1">
                  <Link to="/SuperAdmin/GUIPOSView">
                    <button
                      className="btn"
                      style={{
                        backgroundColor: "#53D4FA",
                        width: "100%",
                        color: "white"
                      }}
                    >
                      GUI POS
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <div className="card mt-5 w-100">
                <div className="card-header">
                  <div className="row ">
                    <div className="col-6">
                      <Autosuggest
                        suggestions={suggestions}
                        onSuggestionsFetchRequested={
                          this.onSuggestionsFetchRequested
                        }
                        onSuggestionsClearRequested={
                          this.onSuggestionsClearRequested
                        }
                        getSuggestionValue={this.getSuggestionValue}
                        renderSuggestion={this.renderSuggestion}
                        inputProps={inputProps}
                      />
                      {this.state.toggle === false ? (
                        this.props.bySaltError ? (
                          <span
                            style={{
                              fontSize: "11px",
                              color: "red",
                              marginLeft: "100px"
                            }}
                          >
                            {this.props.bySaltError}
                          </span>
                        ) : (
                          ""
                        )
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="col-6">
                      <SearchLable />
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row mt-4 mr-4">
                    <div className="col-12">
                      <table className="table justify-content-center table-responsive-xl table-bordered bg-white">
                        <thead
                          style={{ fontSize: "13px", textAlign: "center" }}
                        >
                          <tr>
                            <th>Medicine Name</th>
                            <th>Salt</th>
                            <th>Medicine Img</th>
                            <th>QTY</th>
                            <th>Price</th>
                            <th>Total</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.props.searchdData.map(medicineList => (
                            <tr>
                              <td>
                                {medicineList.medicineName
                                  ? medicineList.medicineName
                                  : ""}
                              </td>
                              <td>
                                {medicineList.salt ? medicineList.salt : ""}
                              </td>
                              <td>
                                <img
                                  class="img-thumbnail"
                                  src={
                                    medicineList.medicineImgURL
                                      ? "https://pharmacysys.herokuapp.com" +
                                        medicineList.medicineImgURL[0]
                                      : ""
                                  }
                                  style={{ height: "50px", width: "50px" }}
                                  alt="product"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  class="form-control"
                                  placeholder="QTY"
                                  onChange={e =>
                                    this.setState(
                                      { quantity: e.target.value },
                                      () => {
                                        this.props.selectedQuantityAction(
                                          new SelectedQuantityClass(
                                            this.state.quantity,
                                            this.state.medPrice *
                                              medicineList.selectedQuantity,
                                            medicineList._id
                                          )
                                        );
                                      }
                                    )
                                  }
                                />
                              </td>
                              <td>{this.state.medPrice}</td>
                              <td>
                                <p
                                  style={{
                                    border: "1px solid #EAEAEA",
                                    padding: "10px",
                                    backgroundColor: "#EAEAEA",
                                    textAlign: "right"
                                  }}
                                >
                                  {medicineList.totalPrice}
                                  {/* {this.props.totalPiceEachMedicineAction(
                              new TotalPriceClass(
                                medicineList.SelectedQuantity *
                                  this.state.medPrice,
                                medicineList._id
                              )
                            )} */}
                                </p>
                              </td>
                              <td>
                                <button
                                  type="button"
                                  class="btn mt-1 ml-2"
                                  data-toggle="modal"
                                  data-target=".bd-example-modal-lg"
                                  style={{
                                    backgroundColor: "red",
                                    color: "white"
                                  }}
                                  onClick={() =>
                                    this.props.deleteRowDataInvoiceAction(
                                      medicineList._id
                                    )
                                  }
                                >
                                  <i
                                    class="fa fa-trash"
                                    style={{
                                      fontSize: "20px",
                                      color: "white"
                                    }}
                                  ></i>
                                </button>
                              </td>
                            </tr>
                          ))}
                          <tr>
                            <td
                              colSpan="6"
                              style={{ textAlign: "right", height: "30px" }}
                            >
                              <b>Grand Total</b>
                            </td>
                            <td>
                              <p
                                style={{
                                  border: "1px solid #EAEAEA",
                                  padding: "4px",
                                  backgroundColor: "#EAEAEA",
                                  textAlign: "right"
                                }}
                              >
                                0
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td
                              colSpan="6"
                              style={{ textAlign: "right", height: "30px" }}
                            >
                              <b>Gst</b>
                            </td>
                            <td>
                              <input
                                type="number"
                                class="form-control"
                                placeholder="discount%"
                                defaultValue={this.props.gstData}
                                disabled={this.state.inputFieldState}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td
                              colSpan="6"
                              style={{ textAlign: "right", height: "30px" }}
                            >
                              {this.state.editGst === true ? (
                                <button
                                  class="btn"
                                  style={{
                                    backgroundColor: "#45C203",
                                    color: "white",
                                    width: "20%",
                                    float: "right"
                                  }}
                                  onClick={() => {
                                    this.toggle();
                                    this.setState(
                                      {
                                        loading: true
                                      },
                                      () => {
                                        this.timer = setTimeout(() => {},
                                        this.state.loading === false);
                                        {
                                          this.props.updateDiscountDataActions(
                                            new DiscountClass(
                                              filterID,
                                              this.state.discoutData
                                            ),
                                            this
                                          );
                                        }
                                      }
                                    );
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
                                  {this.state.loading && <span></span>}
                                  {!this.state.loading && <span>Save</span>}
                                  {/* Save */}
                                </button>
                              ) : (
                                <button
                                  class="btn"
                                  style={{
                                    backgroundColor: "#45C203",
                                    color: "white"
                                  }}
                                  onClick={() => {
                                    this.setState({
                                      discoutData: this.props.discount
                                    });
                                    this.toggle();
                                  }}
                                >
                                  Discount
                                </button>
                              )}
                            </td>
                            <td>
                              <input
                                type="number"
                                class="form-control"
                                placeholder="discount%"
                                defaultValue={this.props.discount}
                                onChange={e =>
                                  this.setState({
                                    discoutData: e.target.value
                                  })
                                }
                              />
                            </td>
                          </tr>
                          <tr>
                            <td
                              colSpan="6"
                              style={{ textAlign: "right", height: "30px" }}
                            >
                              <b>Net Total</b>
                            </td>
                            <td>
                              <p
                                style={{
                                  border: "1px solid #EAEAEA",
                                  padding: "4px",
                                  backgroundColor: "#EAEAEA",
                                  textAlign: "right"
                                }}
                              >
                                0.00
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="row mt-5 mb-3">
                        <div className="col-8"></div>
                        <div className="col-2 w-100">
                          <ReactToPrint
                            trigger={() => (
                              <button
                                className="btn btn-success mr-3 w-100"
                                style={{ color: "white" }}
                              >
                                <i class="fa fa-print mr-3"></i>Print
                              </button>
                            )}
                            content={() => this.componentRef}
                          />
                        </div>
                        <div className="col-2 w-100">
                          <button
                            className="btn btn-warning w-100"
                            style={{ float: "right" }}
                          >
                            Full Paid
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-4"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 mt-5 ml-n3">
              <div className="row" ref={el => (this.componentRef = el)}>
                <div className="col-12">
                  <div class="card" style={{ width: "25rem" }}>
                    <div className="card-header">
                      <p
                        style={{
                          fontSize: "25px",
                          textAlign: "center"
                        }}
                      >
                        ᴘʜᴀʀᴍᴀᴄᴀʀᴇ
                      </p>
                    </div>
                    <div class="card-body">
                      <div className="row mt-2">
                        <div className="col-6">
                          <p>Admin Name</p>
                        </div>
                        <div className="col-6">
                          <p>{getSuperAdminData().userName}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <table className="table justify-content-center table-responsive-sm table-bordered-less">
                            <thead
                              style={{
                                fontSize: "13px",
                                textAlign: "center"
                              }}
                            >
                              <th>Medicine Name</th>
                              <th>Salt Name</th>
                              <th>Price</th>
                              <th>Qty</th>
                            </thead>
                            <tbody
                              style={{
                                fontSize: "10px",
                                textAlign: "center"
                              }}
                            >
                              {this.props.searchdData.map(medicineList => (
                                <tr>
                                  <td>
                                    {medicineList.medicineName
                                      ? medicineList.medicineName
                                      : ""}
                                  </td>
                                  <td>
                                    {medicineList.salt ? medicineList.salt : ""}
                                  </td>
                                  <td>{this.state.medPrice}</td>
                                  <td>{medicineList.selectedQuantity}</td>
                                </tr>
                              ))}
                              <tr>
                                <td
                                  colSpan="3"
                                  style={{
                                    textAlign: "right",
                                    height: "30px"
                                  }}
                                >
                                  <b>Grand Total</b>
                                </td>
                                <td>
                                  <p>
                                    {this.state.medPrice * this.state.quantity}
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  colSpan="3"
                                  style={{
                                    textAlign: "right",
                                    height: "30px"
                                  }}
                                >
                                  <b>Gst</b>
                                </td>
                                <td>
                                  <p>
                                    {this.props.gstData}% =&nbsp;
                                    {this.state.quantity *
                                      this.state.medPrice *
                                      (this.props.gstData / 100)}
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  colSpan="3"
                                  style={{
                                    textAlign: "right",
                                    height: "30px"
                                  }}
                                >
                                  <b>Discount</b>
                                </td>
                                <td>
                                  <p>{this.props.discount}</p>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  colSpan="3"
                                  style={{
                                    textAlign: "right",
                                    height: "30px"
                                  }}
                                >
                                  <b>Received Ammount</b>
                                </td>
                                <td>
                                  <p
                                    style={{
                                      border: "1px solid #EAEAEA",
                                      padding: "4px",
                                      backgroundColor: "#EAEAEA",
                                      textAlign: "right"
                                    }}
                                  >
                                    0.00
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  colSpan="3"
                                  style={{
                                    textAlign: "right",
                                    height: "30px"
                                  }}
                                >
                                  <b>Net Total</b>
                                </td>
                                <td>
                                  <p
                                    style={{
                                      border: "1px solid #EAEAEA",
                                      padding: "4px",
                                      backgroundColor: "#EAEAEA",
                                      textAlign: "right"
                                    }}
                                  >
                                    0.00
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <p
                        style={{
                          fontSize: "30px",
                          textAlign: "center"
                        }}
                      >
                        🆃🅷🅰🅽🅺 🆈🅾🆄
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </HotKeys> */}
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  searchdData: state.SearchedMedicineReducer.searchdData,

  bySaltError: state.SearchedMedicineReducer.bySaltError,

  gstData: state.GstReducers.gstData,

  discount: state.GstReducers.discount
});
export default connect(mapStateToProps, {
  searchMedicineBySaltAction,
  searchDataFromInvoice,
  showGSTDataActions,
  updateDiscountDataActions,
  selectedQuantityAction,
  totalPiceEachMedicineAction,
  deleteRowDataInvoiceAction
})(newInvoice);
