import React, { Component } from "react";
import "./navBar.css";
import {
  logoutSuperAdmin,
  getSuperAdminData
} from "../../../../LocalStorage/superAdminLocalStorage";
import { Link } from "react-router-dom";
class firstFIle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyExpanded: this.props.companyExpanded
        ? this.props.companyExpanded
        : "",
      selected: this.props.selected ? this.props.selected : "",
      companySubSelected: this.props.companySubSelected
        ? this.props.companySubSelected
        : 0,
      invoiceExpended: this.props.invoiceExpended
        ? this.props.invoiceExpended
        : "",
      invoiceSubSelected: this.props.invoiceSubSelected
        ? this.props.invoiceSubSelected
        : "",
      employeeExpanded: this.props.employeeExpanded
        ? this.props.employeeExpanded
        : "",
      employeeSubSelected: this.props.employeeSubSelected
        ? this.props.employeeSubSelected
        : "",
      medicineExpanded: this.props.medicineExpanded
        ? this.props.medicineExpanded
        : "",
      medicineSubExpanded: this.props.medicineSubExpanded
        ? this.props.medicineSubExpanded
        : "",
      venderExpended: this.props.venderExpended
        ? this.props.venderExpended
        : "",
      venderSubSelected: this.props.venderSubSelected
        ? this.props.venderSubSelected
        : "",
      stockExpanded: this.props.stockExpanded ? this.props.stockExpanded : "",
      stockSucSelected: this.props.stockSucSelected
        ? this.props.stockSucSelected
        : "",
      discountExpanded: this.props.discountExpanded
        ? this.props.discountExpanded
        : "",
      discountSubSelected: this.props.discountSubSelected
        ? this.props.discountSubSelected
        : ""
    };
  }
  handleSelected(SELECTED) {
    this.setState({
      selected: SELECTED
    });
  }
  // Company Method
  handleCompanyExpanded(EXPANDED) {
    this.setState({
      companyExpanded: EXPANDED
    });
  }

  handleCompanySubSelected(SUBSELECTED) {
    this.setState({
      companySubSelected: SUBSELECTED
    });
  }
  // Discount Method
  handleDiscountExpanded(EXPANDED) {
    this.setState({
      discountExpanded: EXPANDED
    });
  }

  handleDiscountSubSelected(SUBSELECTED) {
    this.setState({
      discountSubSelected: SUBSELECTED
    });
  }
  // Vender Method
  handleVenderExpanded(EXPANDED) {
    this.setState({
      venderExpended: EXPANDED
    });
  }

  handleVenderSubSelected(SUBSELECTED) {
    console.log("Hello");
    this.setState({
      venderSubSelected: SUBSELECTED
    });
  }
  // Stock Method
  handleStockExpanded(EXPANDED) {
    this.setState({
      stockExpanded: EXPANDED
    });
  }

  handleStockSubSelected(SUBSELECTED) {
    console.log("Hello");
    this.setState({
      stockSucSelected: SUBSELECTED
    });
  }
  // Invoice Method
  handleInvoiceExpanded(EXPANDED) {
    this.setState({
      invoiceExpended: EXPANDED
    });
  }

  handleInvoiceSubSelected(SUBSELECTED) {
    this.setState({
      invoiceSubSelected: SUBSELECTED
    });
  }
  // Employee Method
  handleEmployeeExpanded(EXPANDED) {
    this.setState({
      employeeExpanded: EXPANDED
    });
  }

  handleEmployeeSubSelected(SUBSELECTED) {
    this.setState({
      employeeSubSelected: SUBSELECTED
    });
  }
  //Medicine Method
  handleMedicineExpanded(EXPANDED) {
    this.setState({
      medicineExpanded: EXPANDED
    });
  }

  handleMedicineSubSelected(SUBSELECTED) {
    this.setState({
      medicineSubExpanded: SUBSELECTED
    });
  }
  render() {
    console.log(this.state, "This is Company Expended");
    return (
      <React.Fragment>
        <div class="container-fluid height-container ">
          <div class="row">
            <div class="col-12">
              <div class="titletext">𝐏𝐡𝐚𝐫𝐚𝐦𝐚𝐜𝐚𝐫𝐞</div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12 text-center">
              <div class={"optionStyle"}>
                {/* <img
                  alt="admin"
                  className={"optionIcon"}
                  src={require("../../../../Icons/Icons/admin.svg")}
                /> */}
                <div className={"optionText"} style={{ marginLeft: "69px" }}>
                  {" "}
                  {getSuperAdminData().userName.toUpperCase()}
                </div>
              </div>
            </div>
          </div>
          <Link to="/Dashboard">
            <div
              class="row mt-3"
              onClick={() => {
                this.handleSelected("home");
                this.handleInvoiceExpanded("");
                this.handleInvoiceSubSelected(0);
                this.handleEmployeeExpanded("");
                this.handleEmployeeSubSelected(0);
                this.handleMedicineExpanded("");
                this.handleMedicineSubSelected(0);
                this.handleVenderExpanded("");
                this.handleVenderSubSelected(0);
                this.handleCompanyExpanded("");
                this.handleCompanySubSelected(0);
                this.handleStockExpanded("");
                this.handleStockSubSelected(0);
                this.handleDiscountExpanded("");
                this.handleDiscountSubSelected(0);
              }}
            >
              <div class="col-12 text-center">
                <div
                  class={
                    this.state.selected === "home"
                      ? "optionStyle" + " " + "optionSelectedBackground"
                      : "optionStyle"
                  }
                >
                  <img
                    alt="admin"
                    className={"optionIcon"}
                    src={require("../../../../Icons/Icons/dashboard.svg")}
                  />
                  <div class="optionText">Dashboard</div>
                </div>
              </div>
            </div>
          </Link>
          {/* Invoice Menu */}
          {this.state.invoiceExpended === "invoiceExpended" ? (
            <div className="row mt-3">
              <div className="col-12 text-center">
                <div
                  className={
                    this.state.selected === "invoice"
                      ? "optionAdminExpandStyle" +
                        " " +
                        "optionSelectedBackgroundInvoice"
                      : "optionAdminExpandStyle"
                  }
                >
                  {/* <Link to=""> */}
                  <div className="row">
                    <div
                      className={"col-12 pointer"}
                      onClick={() => {
                        this.handleInvoiceExpanded("");
                        this.handleInvoiceSubSelected(0);
                        this.handleCompanyExpanded("");
                        this.handleCompanySubSelected(0);
                      }}
                    >
                      <img
                        alt="admin"
                        className={"optionIcon"}
                        src={require("../../../../Icons/Icons/invoice.svg")}
                      />
                      <div className="optionText">Invoice</div>
                      <img
                        alt="arrow"
                        className={"optionArrowIcon"}
                        src={require(this.state.selected === "invoice"
                          ? "../../../../Icons/Icons/arrow-up.svg"
                          : "../../../../Icons/Icons/arrow-down.svg")}
                      />
                    </div>
                  </div>
                  {/* </Link> */}
                  <Link to="/SuperAdmin/NewInvoiceView">
                    <div
                      className={"row pointer"}
                      onClick={() => {
                        this.handleInvoiceSubSelected(1);
                      }}
                    >
                      <div className="col-12 text-left">
                        <div
                          className={
                            this.state.invoiceSubSelected === 1
                              ? "subOptionSelectedContainer"
                              : "subOptionContainer"
                          }
                        >
                          <div className={"subOptionText ml-5"}>
                            New Invoice
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link to="/SuperAdmin/ManageInvoiceView">
                    <div
                      className={"row pointer"}
                      onClick={() => {
                        this.handleInvoiceSubSelected(2);
                      }}
                    >
                      <div className="col-12 text-left">
                        <div
                          className={
                            this.state.invoiceSubSelected === 2
                              ? "subOptionSelectedContainer"
                              : "subOptionContainer"
                          }
                        >
                          <div className={"subOptionText ml-5"}>
                            Manage Invoice
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link to="/SuperAdmin/POSInvoiceView">
                    <div
                      className={"row pointer"}
                      onClick={() => {
                        this.handleInvoiceSubSelected(3);
                      }}
                    >
                      <div className="col-12 text-left">
                        <div
                          className={
                            this.state.invoiceSubSelected === 3
                              ? "subOptionSelectedContainer"
                              : "subOptionContainer"
                          }
                        >
                          <div className={"subOptionText ml-5"}>
                            POS Invoice
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link to="/SuperAdmin/GUIPOSView">
                    <div
                      className={"row pointer"}
                      onClick={() => {
                        this.handleInvoiceSubSelected(4);
                      }}
                    >
                      <div className="col-12 text-left">
                        <div
                          className={
                            this.state.invoiceSubSelected === 4
                              ? "subOptionSelectedContainer"
                              : "subOptionContainer"
                          }
                        >
                          <div className={"subOptionText ml-5"}>GUI POS</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link to="/SuperAdmin/TodaySaleView">
                    <div
                      className={"row pointer"}
                      onClick={() => {
                        this.handleInvoiceSubSelected(5);
                      }}
                    >
                      <div className="col-12 text-left">
                        <div
                          className={
                            this.state.invoiceSubSelected === 5
                              ? "subOptionSelectedContainer"
                              : "subOptionContainer"
                          }
                        >
                          <div className={"subOptionText ml-5"}>
                            Today Report
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="row mt-3"
              onClick={() => {
                this.handleSelected("invoice");
                this.handleInvoiceExpanded("invoiceExpended");
                this.handleEmployeeExpanded("");
                this.handleEmployeeSubSelected(0);
                this.handleMedicineExpanded("");
                this.handleMedicineSubSelected(0);
                this.handleVenderExpanded("");
                this.handleVenderSubSelected(0);
                this.handleCompanyExpanded("");
                this.handleCompanySubSelected(0);
                this.handleStockExpanded("");
                this.handleStockSubSelected(0);
                this.handleDiscountExpanded("");
                this.handleDiscountSubSelected(0);
              }}
            >
              <div className="col-12 text-center">
                <div
                  class={
                    this.state.selected === "invoice"
                      ? "optionStyle" + " " + "optionSelectedBackground"
                      : "optionStyle"
                  }
                >
                  <img
                    alt="admin"
                    className={"optionIcon"}
                    src={require("../../../../Icons/Icons/invoice.svg")}
                  />
                  <div className={"optionText"}>Invoice</div>
                  <img
                    alt="arrow"
                    className={"optionArrowIcon"}
                    src={require(this.state.selected === "invoiceOpen"
                      ? "../../../../Icons/Icons/arrow-up.svg"
                      : "../../../../Icons/Icons/arrow-down.svg")}
                  />
                </div>
              </div>
            </div>
          )}
          {/* Employee */}
          {this.state.employeeExpanded === "employeeExpanded" ? (
            <div className="row mt-3">
              <div className="col-12 text-center">
                <div
                  className={
                    this.state.selected === "employee"
                      ? "optionAdminExpandStyleEmployee" +
                        " " +
                        "optionSelectedBackgroundEmployee"
                      : "optionAdminExpandStyle"
                  }
                >
                  <div className="row">
                    <div
                      className={"col-12 pointer"}
                      onClick={() => {
                        this.handleEmployeeExpanded("");
                        this.handleEmployeeSubSelected(0);
                      }}
                    >
                      <img
                        alt="admin"
                        className={"optionIcon"}
                        src={require("../../../../Icons/Icons/worker.svg")}
                      />
                      <div className="optionText">Employee</div>
                      <img
                        alt="arrow"
                        className={"optionArrowIcon"}
                        src={require(this.state.selected === "employee"
                          ? "../../../../Icons/Icons/arrow-up.svg"
                          : "../../../../Icons/Icons/arrow-down.svg")}
                      />
                    </div>
                  </div>
                  <Link to="/SuperAdmin/AddEmployeeView">
                    <div
                      className={"row pointer"}
                      onClick={() => {
                        this.handleEmployeeSubSelected(1);
                      }}
                    >
                      <div className="col-12 text-left">
                        <div
                          className={
                            this.state.employeeSubSelected === 1
                              ? "subOptionSelectedContainer"
                              : "subOptionContainer"
                          }
                        >
                          <div className={"subOptionText ml-5"}>
                            Add Employee
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="row mt-3"
              onClick={() => {
                this.handleSelected("employee");
                this.handleEmployeeExpanded("employeeExpanded");
                this.handleEmployeeSubSelected(0);
                this.handleInvoiceExpanded("");
                this.handleInvoiceSubSelected(0);
                this.handleMedicineExpanded("");
                this.handleMedicineSubSelected(0);
                this.handleVenderExpanded("");
                this.handleVenderSubSelected(0);
                this.handleCompanyExpanded("");
                this.handleCompanySubSelected(0);
                this.handleStockExpanded("");
                this.handleStockSubSelected(0);
                this.handleDiscountExpanded("");
                this.handleDiscountSubSelected(0);
              }}
            >
              <div className="col-12 text-center">
                <div
                  class={
                    this.state.selected === "employee"
                      ? "optionStyle" + " " + "optionSelectedBackground"
                      : "optionStyle"
                  }
                >
                  <img
                    alt="admin"
                    className={"optionIcon"}
                    src={require("../../../../Icons/Icons/worker.svg")}
                  />
                  <div className={"optionText"}>Employee</div>
                  <img
                    alt="arrow"
                    className={"optionArrowIcon"}
                    src={require(this.state.selected === "employeeOpen"
                      ? "../../../../Icons/Icons/arrow-up.svg"
                      : "../../../../Icons/Icons/arrow-down.svg")}
                  />
                </div>
              </div>
            </div>
          )}
          {/* Medicine Menu */}
          {this.state.medicineExpanded === "medicineExpanded" ? (
            <div className="row mt-3">
              <div className="col-12 text-center">
                <div
                  className={
                    this.state.selected === "medicine"
                      ? "optionAdminExpandStyle" +
                        " " +
                        "optionSelectedBackgroundInvoice"
                      : "optionAdminExpandStyle"
                  }
                >
                  <div className="row">
                    <div
                      className={"col-12 pointer"}
                      onClick={() => {
                        this.handleInvoiceExpanded("");
                        this.handleInvoiceSubSelected(0);
                        this.handleCompanyExpanded("");
                        this.handleCompanySubSelected(0);
                        this.handleMedicineExpanded("");
                        this.handleMedicineSubSelected(0);
                        this.handleEmployeeExpanded("");
                        this.handleEmployeeSubSelected(0);
                      }}
                    >
                      <img
                        alt="admin"
                        className={"optionIcon"}
                        src={require("../../../../Icons/Icons/doctor.svg")}
                      />
                      <div className="optionText">Medicine</div>
                      <img
                        alt="arrow"
                        className={"optionArrowIcon"}
                        src={require(this.state.selected === "medicine"
                          ? "../../../../Icons/Icons/arrow-up.svg"
                          : "../../../../Icons/Icons/arrow-down.svg")}
                      />
                    </div>
                  </div>
                  <Link to="/SuperAdmin/AddUnitMedView">
                    <div
                      className={"row pointer"}
                      onClick={() => {
                        this.handleMedicineSubSelected(4);
                      }}
                    >
                      <div className="col-12 text-left">
                        <div
                          className={
                            this.state.medicineSubExpanded === 4
                              ? "subOptionSelectedContainer"
                              : "subOptionContainer"
                          }
                        >
                          <div className={"subOptionText ml-5"}>
                            Medicine Unit
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link to="/SuperAdmin/MedicineTypeView">
                    <div
                      className={"row pointer"}
                      onClick={() => {
                        this.handleMedicineSubSelected(3);
                      }}
                    >
                      <div className="col-12 text-left">
                        <div
                          className={
                            this.state.medicineSubExpanded === 3
                              ? "subOptionSelectedContainer"
                              : "subOptionContainer"
                          }
                        >
                          <div className={"subOptionDot"} />
                          <div className={"subOptionText ml-5"}>
                            Medicine Type
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link to="/SuperAdmin/AddMedicineView">
                    <div
                      className={"row pointer"}
                      onClick={() => {
                        this.handleMedicineSubSelected(1);
                      }}
                    >
                      <div className="col-12 text-left">
                        <div
                          className={
                            this.state.medicineSubExpanded === 1
                              ? "subOptionSelectedContainer"
                              : "subOptionContainer"
                          }
                        >
                          <div className={"subOptionText ml-5"}>
                            Add Medicine
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link to="/SuperAdmin/ManageMedicineView">
                    <div
                      className={"row pointer"}
                      onClick={() => {
                        this.handleMedicineSubSelected(2);
                      }}
                    >
                      <div className="col-12 text-left">
                        <div
                          className={
                            this.state.medicineSubExpanded === 2
                              ? "subOptionSelectedContainer"
                              : "subOptionContainer"
                          }
                        >
                          <div className={"subOptionText ml-5"}>
                            Manage Medicine
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="row mt-3"
              onClick={() => {
                this.handleSelected("medicine");
                this.handleMedicineExpanded("medicineExpanded");
                this.handleMedicineSubSelected(0);
                this.handleInvoiceExpanded("");
                this.handleInvoiceSubSelected(0);
                this.handleEmployeeExpanded("");
                this.handleEmployeeSubSelected(0);
                this.handleVenderExpanded("");
                this.handleVenderSubSelected(0);
                this.handleCompanyExpanded("");
                this.handleCompanySubSelected(0);
                this.handleStockExpanded("");
                this.handleStockSubSelected(0);
                this.handleDiscountExpanded("");
                this.handleDiscountSubSelected(0);
              }}
            >
              <div className="col-12 text-center">
                <div
                  class={
                    this.state.selected === "medicine"
                      ? "optionStyle" + " " + "optionSelectedBackground"
                      : "optionStyle"
                  }
                >
                  <img
                    alt="admin"
                    className={"optionIcon"}
                    src={require("../../../../Icons/Icons/doctor.svg")}
                  />
                  <div className={"optionText"}>Medicine</div>
                  <img
                    alt="arrow"
                    className={"optionArrowIcon"}
                    src={require(this.state.selected === "medicineOpen"
                      ? "../../../../Icons/Icons/arrow-up.svg"
                      : "../../../../Icons/Icons/arrow-down.svg")}
                  />
                </div>
              </div>
            </div>
          )}
          {/* Veder Menu */}
          {this.state.venderExpended === "venderExpended" ? (
            <div className="row mt-3">
              <div className="col-12 text-center">
                <div
                  className={
                    this.state.selected === "vender"
                      ? "optionAdminExpandStyleVender" +
                        " " +
                        "optionSelectedBackgroundVender"
                      : "optionAdminExpandStyle"
                  }
                >
                  <div className="row">
                    <div
                      className={"col-12 pointer"}
                      onClick={() => {
                        this.handleVenderExpanded("");
                        this.handleVenderSubSelected(0);
                        this.handleCompanyExpanded("");
                        this.handleCompanySubSelected(0);
                      }}
                    >
                      <img
                        alt="admin"
                        className={"optionIcon"}
                        src={require("../../../../Icons/Icons/gender-equality (1).svg")}
                      />
                      <div className="optionText">Vender</div>
                      <img
                        alt="arrow"
                        className={"optionArrowIcon"}
                        src={require(this.state.selected === "vender"
                          ? "../../../../Icons/Icons/arrow-up.svg"
                          : "../../../../Icons/Icons/arrow-down.svg")}
                      />
                    </div>
                  </div>
                  <Link to="/SuperAdmin/AddVendorView">
                    <div
                      className={"row pointer"}
                      onClick={() => {
                        this.handleVenderSubSelected(1);
                      }}
                    >
                      <div className="col-12 text-left">
                        <div
                          className={
                            this.state.venderSubSelected === 1
                              ? "subOptionSelectedContainer"
                              : "subOptionContainer"
                          }
                        >
                          <div className={"subOptionText ml-5"}>Add Vender</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="row mt-3"
              onClick={() => {
                this.handleSelected("vender");
                this.handleVenderExpanded("venderExpended");
                this.handleMedicineExpanded("");
                this.handleMedicineSubSelected(0);
                this.handleInvoiceExpanded("");
                this.handleInvoiceSubSelected(0);
                this.handleEmployeeExpanded("");
                this.handleEmployeeSubSelected(0);
                this.handleCompanyExpanded("");
                this.handleCompanySubSelected(0);
                this.handleStockExpanded("");
                this.handleStockSubSelected(0);
                this.handleDiscountExpanded("");
                this.handleDiscountSubSelected(0);
              }}
            >
              <div className="col-12 text-center">
                <div
                  class={
                    this.state.selected === "vender"
                      ? "optionStyle" + " " + "optionSelectedBackground"
                      : "optionStyle"
                  }
                >
                  <img
                    alt="admin"
                    className={"optionIcon"}
                    src={require("../../../../Icons/Icons/gender-equality (1).svg")}
                  />
                  <div className={"optionText"}>Vender</div>
                  <img
                    alt="arrow"
                    className={"optionArrowIcon"}
                    src={require(this.state.selected === "venderOpen"
                      ? "../../../../Icons/Icons/arrow-up.svg"
                      : "../../../../Icons/Icons/arrow-down.svg")}
                  />
                </div>
              </div>
            </div>
          )}
          {/* Company List */}
          {this.state.companyExpanded === "companyExpanded" ? (
            <div className="row mt-3">
              <div className="col-12 text-center">
                <div
                  className={
                    this.state.selected === "company"
                      ? "optionAdminExpandStyleCompany" +
                        " " +
                        "optionSelectedBackgroundCompany"
                      : "optionAdminExpandStyleCompany"
                  }
                >
                  <div className="row">
                    <div
                      className={"col-12 pointer"}
                      onClick={() => {
                        this.handleCompanyExpanded("");
                        this.handleCompanySubSelected(0);
                      }}
                    >
                      <img
                        alt="admin"
                        className={"optionIcon"}
                        src={require("../../../../Icons/Icons/factory.svg")}
                      />
                      <div className="optionText">Company</div>
                      <img
                        alt="arrow"
                        className={"optionArrowIcon"}
                        src={require(this.state.selected === "company"
                          ? "../../../../Icons/Icons/arrow-up.svg"
                          : "../../../../Icons/Icons/arrow-down.svg")}
                      />
                    </div>
                  </div>
                  <Link to="/SuperAdmin/AddCompany">
                    <div
                      className={"row pointer"}
                      onClick={() => {
                        this.handleCompanySubSelected(1);
                      }}
                    >
                      <div className="col-12 text-left">
                        <div
                          className={
                            this.state.companySubSelected === 1
                              ? "subOptionSelectedContainer"
                              : "subOptionContainer"
                          }
                        >
                          <div className={"subOptionText ml-5"}>
                            Add Company
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="row mt-3"
              onClick={() => {
                this.handleSelected("company");
                this.handleCompanyExpanded("companyExpanded");
                this.handleCompanySubSelected(0);
                this.handleMedicineExpanded("");
                this.handleMedicineSubSelected(0);
                this.handleInvoiceExpanded("");
                this.handleInvoiceSubSelected(0);
                this.handleEmployeeExpanded("");
                this.handleEmployeeSubSelected(0);
                this.handleVenderExpanded("");
                this.handleVenderSubSelected(0);
                this.handleStockExpanded("");
                this.handleStockSubSelected(0);
                this.handleDiscountExpanded("");
                this.handleDiscountSubSelected(0);
              }}
            >
              <div className="col-12 text-center">
                <div
                  class={
                    this.state.selected === "company"
                      ? "optionStyle" + " " + "optionSelectedBackground"
                      : "optionStyle"
                  }
                >
                  <img
                    alt="admin"
                    className={"optionIcon"}
                    src={require("../../../../Icons/Icons/factory.svg")}
                  />
                  <div className={"optionText"}>Company</div>
                  <img
                    alt="arrow"
                    className={"optionArrowIcon"}
                    src={require(this.state.selected === "companyOpen"
                      ? "../../../../Icons/Icons/arrow-up.svg"
                      : "../../../../Icons/Icons/arrow-down.svg")}
                  />
                </div>
              </div>
            </div>
          )}
          {/* Stock Menu */}
          {this.state.stockExpanded === "stockExpanded" ? (
            <div className="row mt-3">
              <div className="col-12 text-center">
                <div
                  className={
                    this.state.selected === "stock"
                      ? "optionAdminExpandStyleStock" +
                        " " +
                        "optionSelectedBackgroundInvoiceStock"
                      : "optionAdminExpandStyleStock"
                  }
                >
                  <div className="row">
                    <div
                      className={"col-12 pointer"}
                      onClick={() => {
                        this.handleStockExpanded("");
                        this.handleStockSubSelected(0);
                        this.handleInvoiceExpanded("");
                        this.handleInvoiceSubSelected(0);
                        this.handleCompanyExpanded("");
                        this.handleCompanySubSelected(0);
                      }}
                    >
                      <img
                        alt="admin"
                        className={"optionIcon"}
                        src={require("../../../../Icons/Icons/stock.svg")}
                      />
                      <div className="optionText">Stock</div>
                      <img
                        alt="arrow"
                        className={"optionArrowIcon"}
                        src={require(this.state.selected === "stock"
                          ? "../../../../Icons/Icons/arrow-up.svg"
                          : "../../../../Icons/Icons/arrow-down.svg")}
                      />
                    </div>
                  </div>
                  <Link to="/SuperAdmin/AddStockView">
                    <div
                      className={"row pointer"}
                      onClick={() => {
                        this.handleStockSubSelected(1);
                      }}
                    >
                      <div className="col-12 text-left">
                        <div
                          className={
                            this.state.stockSucSelected === 1
                              ? "subOptionSelectedContainer"
                              : "subOptionContainer"
                          }
                        >
                          <div className={"subOptionText ml-5"}>Add Stock</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link to="/SuperAdmin/StockReportView">
                    <div
                      className={"row pointer"}
                      onClick={() => {
                        this.handleStockSubSelected(2);
                      }}
                    >
                      <div className="col-12 text-left">
                        <div
                          className={
                            this.state.stockSucSelected === 2
                              ? "subOptionSelectedContainer"
                              : "subOptionContainer"
                          }
                        >
                          <div className={"subOptionText ml-5"}>
                            Available Stock
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link to="/SuperAdmin/ExpireStockMedicineView">
                    <div
                      className={"row pointer"}
                      onClick={() => {
                        this.handleStockSubSelected(3);
                      }}
                    >
                      <div className="col-12 text-left">
                        <div
                          className={
                            this.state.stockSucSelected === 3
                              ? "subOptionSelectedContainer"
                              : "subOptionContainer"
                          }
                        >
                          <div className={"subOptionText ml-5"}>
                            Expire Stock
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="row mt-3"
              onClick={() => {
                this.handleSelected("stock");
                this.handleStockExpanded("stockExpanded");
                this.handleStockSubSelected(0);
                this.handleMedicineExpanded("");
                this.handleMedicineSubSelected(0);
                this.handleInvoiceExpanded("");
                this.handleInvoiceSubSelected(0);
                this.handleEmployeeExpanded("");
                this.handleEmployeeSubSelected(0);
                this.handleVenderExpanded("");
                this.handleVenderSubSelected(0);
                this.handleCompanyExpanded("");
                this.handleCompanySubSelected(0);
                this.handleDiscountExpanded("");
                this.handleDiscountSubSelected(0);
              }}
            >
              <div className="col-12 text-center">
                <div
                  class={
                    this.state.selected === "stock"
                      ? "optionStyle" + " " + "optionSelectedBackground"
                      : "optionStyle"
                  }
                >
                  <img
                    alt="admin"
                    className={"optionIcon"}
                    src={require("../../../../Icons/Icons/stock.svg")}
                  />
                  <div className={"optionText"}>Stock</div>
                  <img
                    alt="arrow"
                    className={"optionArrowIcon"}
                    src={require(this.state.selected === "stockOpen"
                      ? "../../../../Icons/Icons/arrow-up.svg"
                      : "../../../../Icons/Icons/arrow-down.svg")}
                  />
                </div>
              </div>
            </div>
          )}
          {/* Discount Menu */}
          {this.state.discountExpanded === "discountExpanded" ? (
            <div className="row mt-3">
              <div className="col-12 text-center">
                <div
                  className={
                    this.state.selected === "discount"
                      ? "optionAdminExpandStyleEmployee" +
                        " " +
                        "optionSelectedBackgroundEmployee"
                      : "optionAdminExpandStyle"
                  }
                >
                  <div className="row">
                    <div
                      className={"col-12 pointer"}
                      onClick={() => {
                        this.handleEmployeeExpanded("");
                        this.handleEmployeeSubSelected(0);
                        this.handleDiscountExpanded("");
                        this.handleDiscountSubSelected(0);
                      }}
                    >
                      <img
                        alt="admin"
                        className={"optionIcon"}
                        src={require("../../../../Icons/Icons/low-price.svg")}
                      />
                      <div className="optionText">Discount</div>
                      <img
                        alt="arrow"
                        className={"optionArrowIcon"}
                        src={require(this.state.selected === "discount"
                          ? "../../../../Icons/Icons/arrow-up.svg"
                          : "../../../../Icons/Icons/arrow-down.svg")}
                      />
                    </div>
                  </div>
                  <Link to="/SuperAdmin/combineAllGst">
                    <div
                      className={"row pointer"}
                      onClick={() => {
                        this.handleDiscountSubSelected(1);
                      }}
                    >
                      <div className="col-12 text-left">
                        <div
                          className={
                            this.state.discountSubSelected === 1
                              ? "subOptionSelectedContainer"
                              : "subOptionContainer"
                          }
                        >
                          <div className={"subOptionText ml-5"}>
                            Add Discount
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="row mt-3"
              onClick={() => {
                this.handleSelected("discount");
                this.handleDiscountExpanded("discountExpanded");
                this.handleMedicineExpanded("");
                this.handleMedicineSubSelected(0);
                this.handleInvoiceExpanded("");
                this.handleInvoiceSubSelected(0);
                this.handleEmployeeExpanded("");
                this.handleEmployeeSubSelected(0);
                this.handleVenderExpanded("");
                this.handleVenderSubSelected(0);
                this.handleCompanyExpanded("");
                this.handleCompanySubSelected(0);
                this.handleStockExpanded("");
                this.handleStockSubSelected(0);
                this.handleDiscountSubSelected(0);
              }}
            >
              <div className="col-12 text-center">
                <div
                  class={
                    this.state.selected === "discount"
                      ? "optionStyle" + " " + "optionSelectedBackground"
                      : "optionStyle"
                  }
                >
                  <img
                    alt="admin"
                    className={"optionIcon"}
                    src={require("../../../../Icons/Icons/low-price.svg")}
                  />
                  <div className={"optionText"}>Discount</div>
                  <img
                    alt="arrow"
                    className={"optionArrowIcon"}
                    src={require(this.state.selected === "discountOpen"
                      ? "../../../../Icons/Icons/arrow-up.svg"
                      : "../../../../Icons/Icons/arrow-down.svg")}
                  />
                </div>
              </div>
            </div>
          )}
          <Link to="/">
            <div className="row mt-3" onClick={() => logoutSuperAdmin()}>
              <div className="col-12 text-center">
                <div class={"optionStyle"}>
                  <img
                    alt="admin"
                    className={"optionIcon"}
                    src={require("../../../../Icons/Icons/logout (1).svg")}
                  />
                  <div className={"optionText"}>Logout</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}
export default firstFIle;
