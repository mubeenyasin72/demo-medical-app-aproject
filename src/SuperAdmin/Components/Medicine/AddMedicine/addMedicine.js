import React, { Component } from "react";
import Form from "./newMedicineForm/newMedForm";
import "./addMedicine.css";
import history from "../../../../Routing/History/history";
import { Link } from "react-router-dom";
class addMedicine extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <div className="row mt-3 ml-1">
                <div className="col-12">
                  <Link to="/SuperAdmin/ManageMedicineView">
                    <button
                      className="btn "
                      style={{
                        backgroundColor: "#45C203",
                        fontSize: "15px",
                        color: "white"
                      }}
                    >
                      <i
                        class="fa fa-align-justify"
                        style={{ marginRight: "5px" }}
                      ></i>
                      Manage Medicine
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-7"></div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <Form />
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default addMedicine;
