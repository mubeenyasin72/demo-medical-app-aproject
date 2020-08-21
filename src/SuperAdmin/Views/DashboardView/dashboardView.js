import React, { Component } from "react";
import "./sidebarView.css";
import SideBar from "../../Components/SideBar/SideBarumar/sidebarPractice";
import Header from "../../Components/NavBar/navBar";
import Body from "../../Components/MainBody/MainBodyCards/cardMainBody";
import Graph from "../../Components/Charts/customerChart";
import Table from "../../Components/MainBody/MainBodyCards/TableMainBody/tableNewCardData";
class sidebarView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
  }

  //Initializing Aos Component

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
                  selected="home"
                  invoiceExpended=""
                  invoiceSubSelected={0}
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
                    <div className="row mt-4">
                      <div className="col-6 mt-4 ml-4">
                        <Graph />
                      </div>
                      <div className="col-3">
                        <Table />
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
export default sidebarView;
