import React, { Component } from "react";
import AddVendorForm from "./AddVendorForm/addVendorForm";
import ManageVender from "../ManageVendor/ManageVendorForm/manageVendorForm";
class addVendor extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row mt-5">
            <div className="col-12">
              <AddVendorForm />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12">
              <ManageVender />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default addVendor;
