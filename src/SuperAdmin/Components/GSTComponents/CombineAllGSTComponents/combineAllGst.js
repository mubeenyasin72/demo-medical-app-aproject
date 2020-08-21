import React, { Component } from "react";
import GetGST from "../GetGstPercentage/getGstPrecentage";
import Discount from "../Discount/discount";
import FilterMonth from "../NoOfMonthFilter/noOfMonthForFilter";
class combineAllGst extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <ul class="nav nav-tabs ">
            <li class="nav-item">
              <a
                style={{
                  marginTop: "20px",
                  fontSize: "17px",
                  textDecoration: "none",
                  color: "#45C203"
                }}
                class="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                GST %
              </a>
            </li>
            <li class="nav-item">
              <a
                style={{
                  marginTop: "20px",
                  fontSize: "17px",
                  textDecoration: "none",
                  color: "#45C203"
                }}
                class="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Discount %
              </a>
            </li>
            <li class="nav-item">
              <a
                style={{
                  marginTop: "20px",
                  fontSize: "17px",
                  textDecoration: "none",
                  color: "#45C203"
                }}
                class="nav-link"
                id="contact-tab"
                data-toggle="tab"
                href="#contact"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                No.Of Month For Filter
              </a>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <GetGST />
            </div>
            <div
              class="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <Discount />
            </div>
            <div
              class="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              <FilterMonth />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default combineAllGst;
