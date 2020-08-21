import React, { Component } from "react";
import history from "../History/history";
import { Route, Switch, Router } from "react-router-dom";
//-----------SuperAdmin------------------//
//---Auth View
import LoginAdminView from "../../SuperAdmin/Views/AuthView/LoginAdmin/loginAdmin";
import SignUpAdminView from "../../SuperAdmin/Views/AuthView/SignUpAdmin/sigupAdmin";
//---MainSideBar
import MainDashBoardView from "../../SuperAdmin/Views/DashboardView/dashboardView";
//---DashBoard
// import DashBoardView from "../../SuperAdmin/Views/DashboardView/dashboardView";
//---Invoice
import NewInvoiceView from "../../SuperAdmin/Views/InvoiceView/NewInvoice/invoiceView";
import GUIPOSView from "../../SuperAdmin/Views/InvoiceView/GuiPosView/gulPoView";
import ManageInvoiceView from "../../SuperAdmin/Views/InvoiceView/ManageInvoice/manageInvoiceView";
import POSInvoiceView from "../../SuperAdmin/Views/InvoiceView/POSInvoiceView/posInvoiceView";
import TodaySaleView from "../../../src/SuperAdmin/Views/InvoiceView/TodayReportView/todayReportView";
//---Employee
import AddEmployeeView from "../../SuperAdmin/Views/EmployeeView/employeeView";
// import ManageEmployeeView from "../../SuperAdmin/Views/EmployeeView/ManageEmployee/manageEmployee";
//---Stock
import StockReportView from "../../SuperAdmin/Views/StockView/StockReportView/stockReportView";
import ExpireStockMedicineView from "../../SuperAdmin/Views/StockView/ExpiredStockView/expireStockView";
import AddStockView from "../../SuperAdmin/Views/StockView/AddStockView/addStockView";
//---Return
// import ReturnFileView from "../../SuperAdmin/Views/ReturnView/ReturnFile/returnFile";
// import StockReturnFileView from "../../SuperAdmin/Views/ReturnView/StockReturn/stockReturn";
//---Vendor
import AddVendorView from "../../SuperAdmin/Views/VenderViews/addVenderView";
//---Medicine
// import ImportMedicineCVSView from "../../SuperAdmin/Views/Medicine/ImportMedicineCVSView/importMedCVSView";
import AddMedicineView from "../../SuperAdmin/Views/MedicineView/AddMedicineView/addMedicineView";
import ManageMedicineView from "../../SuperAdmin/Views/MedicineView/ManageMedicineView/manageMedicineView";
import MedicineTypeView from "../../SuperAdmin/Views/MedicineView/MedicinetypeView/medicineTypeView";
import AddUnitMedView from "../../SuperAdmin/Views/MedicineView/MedicineUnitView/medicineUnitView";
// import UnitListView from "../../SuperAdmin/Views/Medicine/UnitMedicineView/UnitListMedView/unitListView";
// import UpdateMedicineView from "../../SuperAdmin/Views/Medicine/UpdateMedicineView/updateMedicineView";
// ---Company
import AddCompanyView from "../../SuperAdmin/Views/CompanyView/companyView";
import DiscountGST from "../../SuperAdmin/Views/DiscountView/discountView";
import AuthRoute from "./AuthRoute";

class mainRounting extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Router history={history}>
            <Switch>
              <Route
                exact
                path="/"
                render={props => <LoginAdminView {...props} />}
              />
              <Route
                path="/Signup"
                render={props => <SignUpAdminView {...props} />}
              />
              <AuthRoute
                path="/Dashboard"
                redirectPath="/"
                render={props => <MainDashBoardView {...props} />}
              />
              {/* Company */}
              <AuthRoute
                path="/SuperAdmin/AddCompany"
                redirectPath="/"
                render={props => <AddCompanyView {...props} />}
              />
              {/* InvoiceView */}
              <AuthRoute
                path="/SuperAdmin/NewInvoiceView"
                redirectPath="/"
                render={props => <NewInvoiceView {...props} />}
              />
              <AuthRoute
                path="/SuperAdmin/TodaySaleView"
                redirectPath="/"
                render={props => <TodaySaleView {...props} />}
              />
              <AuthRoute
                path="/SuperAdmin/GUIPOSView"
                redirectPath="/"
                render={props => <GUIPOSView {...props} />}
              />
              <AuthRoute
                path="/SuperAdmin/ManageInvoiceView"
                redirectPath="/"
                render={props => <ManageInvoiceView {...props} />}
              />
              <AuthRoute
                path="/SuperAdmin/POSInvoiceView"
                redirectPath="/"
                render={props => <POSInvoiceView {...props} />}
              />
              {/* EmployeeView */}
              <AuthRoute
                path="/SuperAdmin/AddEmployeeView"
                redirectPath="/"
                render={props => <AddEmployeeView {...props} />}
              />
              {/* StockReprotView */}
              <AuthRoute
                path="/SuperAdmin/StockReportView"
                redirectPath="/"
                render={props => <StockReportView {...props} />}
              />
              <AuthRoute
                path="/SuperAdmin/ExpireStockMedicineView"
                redirectPath="/"
                render={props => <ExpireStockMedicineView {...props} />}
              />
              <AuthRoute
                path="/SuperAdmin/AddStockView"
                redirectPath="/"
                render={props => <AddStockView {...props} />}
              />
              {/* Vendor */}
              <AuthRoute
                path="/SuperAdmin/AddVendorView"
                redirectPath="/"
                render={props => <AddVendorView {...props} />}
              />
              {/* Medicine */}
              <AuthRoute
                path="/SuperAdmin/AddMedicineView"
                redirectPath="/"
                render={props => <AddMedicineView {...props} />}
              />
              <AuthRoute
                path="/SuperAdmin/ManageMedicineView"
                redirectPath="/"
                render={props => <ManageMedicineView {...props} />}
              />
              <AuthRoute
                path="/SuperAdmin/MedicineTypeView"
                redirectPath="/"
                render={props => <MedicineTypeView {...props} />}
              />
              <AuthRoute
                path="/SuperAdmin/AddUnitMedView"
                redirectPath="/"
                render={props => <AddUnitMedView {...props} />}
              />
              {/* Discount */}
              <AuthRoute
                path="/SuperAdmin/combineAllGst"
                redirectPath="/"
                render={props => <DiscountGST {...props} />}
              />
            </Switch>
          </Router>
        </div>
      </React.Fragment>
    );
  }
}
export default mainRounting;
