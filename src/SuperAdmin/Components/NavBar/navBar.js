import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
class NavBar extends Component {
  state = {
    ShowOrhide: false
  };

  changeValue = () => {};

  showOrHideNAv = () => {
    this.setState({ ShowOrhide: !this.state.ShowOrhide });
    if (this.state.ShowOrhide === false) {
      document.getElementById("MysideBar").className = "newSidebar";
    } else {
      document.getElementById("MysideBar").className = "sidebar";
    }
  };
  render() {
    return (
      <React.Fragment>
        <nav class="navbar navbar-header-d" id="MysideBar">
          <img
            alt="menu"
            onClick={this.props.handleCollapse}
            className="menuIcon"
            id="menu"
            src={require("../../../Icons/Icons/Header/menu.svg")}
          />
          <div>
            <Link to="/SuperAdmin/NewInvoiceView">
              <div className="invoice-btn">
                <button class="btn btn-outline-success mr-3" type="button">
                  <img
                    alt="admin"
                    className={"optionIcon11 ml-1 mr-1"}
                    src={require("../../../Icons/Icons/payment.svg")}
                  />
                  Invoice
                </button>
              </div>
            </Link>
            <Link to="/SuperAdmin/AddEmployeeView">
              <div className="employee-btn">
                <button class="btn btn-outline-success mr-3" type="button">
                  <img
                    alt="admin"
                    className={"optionIcon11 mr-2 ml-1"}
                    src={require("../../../Icons/Icons/businessman.svg")}
                  />
                  Employee
                </button>
              </div>
            </Link>
            <Link to="/SuperAdmin/ExpireStockMedicineView">
              <div className="manfacture-btn">
                <button class="btn btn-outline-success mr-3" type="button">
                  <img
                    alt="admin"
                    className={"optionIcon11 mr-2 ml-1"}
                    src={require("../../../Icons/Icons/expired (1).svg")}
                  />
                  Expired Medicine
                </button>
              </div>
            </Link>
            <Link to="/SuperAdmin/TodaySaleView">
              <div className="purchase-btn">
                <button class="btn btn-outline-success mr-3" type="button">
                  <img
                    alt="admin"
                    className={"optionIcon11 ml-1 mr-1"}
                    src={require("../../../Icons/Icons/report.svg")}
                  />
                  Today Report
                </button>
              </div>
            </Link>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
