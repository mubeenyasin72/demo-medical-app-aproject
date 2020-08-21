import React, { Component } from "react";
import Body from "../../../Components/Invoices/GUIPOS/guiPos";
import SideBar from "../../../Components/SideBar/SideBarumar/sidebarPractice";
import Header from "../../../Components/NavBar/navBar";
import "./styleView.css";
class gulPoView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
  }
  handleCollapse() {
    this.setState({ collapse: !this.state.collapse });
  }
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid dashboard-body">
          <div className="row">
            <div className="w-100">
              <div
                className={
                  this.state.collapse
                    ? "sidebarContainerClosed"
                    : "sidebarContainerd"
                }
              >
                <SideBar
                  selected="invoice"
                  invoiceExpended="invoiceExpended"
                  invoiceSubSelected={4}
                />
              </div>
              <div
                className={
                  this.state.collapse
                    ? "headerAndBodyContainerClosed"
                    : "headerAndBodyContainerd"
                }
              >
                <div className="row">
                  <div className="col-12">
                    <Header handleCollapse={() => this.handleCollapse()} />
                  </div>
                </div>
                <div className="bodyViewScrolld">
                  <div className="container-fluid">
                    <div className="row mt-3">
                      <div className="col-12">
                        <Body />
                      </div>
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
export default gulPoView;
