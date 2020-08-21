import React, { Component } from "react";
import "./expireStockmed.css";
import ExpiredMedicine from "./ExpiredMedicine/expiredMedicine";
import ExpiredStock from "./ExpiredStock/expiredStock";
class expireStock extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategory() {
    if (this.state.activeTab === 0) {
      return <ExpiredMedicine />;
    } else if (this.state.activeTab === 1) {
      return <ExpiredStock />;
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <ul class="nav nav-tabs">
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
                Expired Medicine
                <h6
                  style={{
                    position: "absolute",
                    marginLeft: "122px",
                    marginTop: "-40px"
                  }}
                >
                  <span
                    style={{
                      border: "1px solid #45C203",
                      padding: "4px",
                      borderRadius: "50px",
                      backgroundColor: "#45C203",
                      color: "white"
                    }}
                    class="badge"
                  >
                    22
                  </span>
                </h6>
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
                Out OF Stock
                <h6
                  style={{
                    position: "absolute",
                    marginLeft: "100px",
                    marginTop: "-40px"
                  }}
                >
                  <span
                    style={{
                      border: "1px solid #45C203",
                      padding: "4px",
                      borderRadius: "50px",
                      backgroundColor: "#45C203",
                      color: "white"
                    }}
                    class="badge"
                  >
                    12
                  </span>
                </h6>
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
              <ExpiredMedicine />
            </div>
            <div
              class="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <ExpiredStock />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default expireStock;
