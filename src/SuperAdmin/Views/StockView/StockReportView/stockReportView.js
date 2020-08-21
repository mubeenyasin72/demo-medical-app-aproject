import React, { Component } from "react";
import "./sReportView.css";
import Body from "../../../Components/Stock/StockReport/stockReport";
import Header from "../../../Components/NavBar/navBar";
import SideBar from "../../../Components/SideBar/SideBarumar/sidebarPractice";
class stockReportView extends Component {
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
                  selected="stock"
                  stockExpanded="stockExpanded"
                  stockSucSelected={2}
                  medicineExpanded=""
                  medicineSubExpanded={0}
                  invoiceExpended=""
                  invoiceSubSelected={0}
                  employeeSubSelected={0}
                  employeeExpanded=""
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
export default stockReportView;
