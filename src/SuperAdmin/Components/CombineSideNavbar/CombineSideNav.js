import React, { Component } from 'react';
import './CombineSideNav.css';
import Sidebar from '../SideBar/SideBarumar/sidebar';
import Navebar from '../NavBar/Navbarr';
                    // DashBoard
import CompleteDashboard from '../../Views/MainBodyView/mainBodyView'; 
                    // invoice
import CompleteNewInvoice from '../../Views/InvoiceView/NewInvoice/invoiceView'; 
import CompletemanageInvoice from '../../Views/InvoiceView/ManageInvoice/manageInvoice';
import CompleteguiPOSInvoice from '../../Views/InvoiceView/GUIPOS/guiPOS';
import CompletetodaySaleInvoice from '../../Views/InvoiceView/GUIPOS/TodaySale/todaySale';
import CompleteposInvoice from '../../Views/InvoiceView/POSInvoice/posInvoice';
                    // Employee
import CompleteaddEmployee from '../../Views/EmployeeView/AddEmployee/addEmployee';
import CompletemanageEmployee from '../../Views/EmployeeView/ManageEmployee/manageEmployee';
                    // Medicine
import CompleteaddMedicine from '../../Views/Medicine/AddMedicineView/addMedicineView';
import CompleteimportMedCVS from '../../Views/Medicine/ImportMedicineCVSView/importMedCVSView';
import CompletemanageMedicine from '../../Views/Medicine/ManageMedicineView/manageMedicineView';
import CompletemedicineType from '../../Views/Medicine/MedicineTypeView/medicineTypeView';
import CompleteaddUnit from '../../Views/Medicine/UnitMedicineView/AddMedUnitView/addUnitView';
import CompleteunitList from '../../Views/Medicine/UnitMedicineView/UnitListMedView/unitListView';
                    // Return
import CompletereturnFile from '../../Views/ReturnView/ReturnFile/returnFile';
import CompletestockReturn from '../../Views/ReturnView/StockReturn/stockReturn';
                    // Stock
import CompleteaddStock from '../../Views/StockView/AddStockView/addStockView';
import CompleteexpireMedicine from '../../Views/StockView/ExpireStockMedicine/expireMedicine';
import CompletestockReportk from '../../Views/StockView/StockReport/stockReport';
import CompletestockReportBW from '../../Views/StockView/StockReport(BW)/stockReportBW';
                    // Vender
 import CompleteaddVendor from '../../Views/VendorView/AddVendorView/addVendorView';
 import CompletemanageVendor from '../../Views/VendorView/ManageVendorView/manageVendorview';
class CombineNaveBar extends Component {
    state = {
        umar:false,  
        change:"Dashboard", 
     }   
     changeFunctions=(childData)=>{
        this.setState({change:childData})
 } 
toggleSidebar=()=> {
    document.getElementById("sidebar").classList.toggle('active');
    {
    this.state.umar===true?
    this.setState({umar:false}):this.setState({umar:true})
    } 
}


    render() { 
        console.log(this.state.change);
        return ( 
            <React.Fragment>
                        <div id="example2" style={{transition: "all 700ms" }} className={this.state.umar===false? "classes.headerAndBodyContainer" :  "headerAndBodyContainerClose"}>
                                <Sidebar toggleSidebar={this.toggleSidebar}
                               parentfunction={this.changeFunctions}
                                /> 
                        <div style={{marginLeft:"80px" , }}>
                            <Navebar
                            parentfunction={this.changeFunctions}
                            />
                        </div>
                        </div>
                 <div style={{transition: "all 700ms"}} className={this.state.umar===true? "headerAndBodyContainerClose" : "classes.headerAndBodyContainer"}>
                        <div class="scroll">

                            {/* DashBoard */}
                        {
                            this.state.change==="Dashboard"?<CompleteDashboard/>:""
                        }

                                {/* Invoice */}

                        {
                            this.state.change==="NewInvoice"?<CompleteNewInvoice/>:""
                        }
                        {
                            this.state.change==="manageInvoice"?<CompletemanageInvoice/>:""
                        }
                        {
                            this.state.change==="GuiPOSInvoice"?<CompleteguiPOSInvoice/>:""
                        }
                        {
                            this.state.change==="SaleInvoice"?<CompletetodaySaleInvoice/>:""
                        }
                        {
                            this.state.change==="unitList"?<CompleteunitList/>:""
                        }

                                {/* // Employee */}

                        {
                            this.state.change==="addEmployee"?<CompleteaddEmployee/>:""
                        }
                        {
                            this.state.change==="manageEmployee"?<CompletemanageEmployee/>:""
                        }

                                {/* // Medicine */}

                        {
                            this.state.change==="addMedicine"?<CompleteaddMedicine/>:""
                        }
                        {
                            this.state.change==="importMedCVS"?<CompleteimportMedCVS/>:""
                        }
                        {
                            this.state.change==="manageMedicine"?<CompletemanageMedicine/>:""
                        }
                        {
                            this.state.change==="medicineType"?<CompletemedicineType/>:""
                        }
                        {
                            this.state.change==="addUnit"?<CompleteaddUnit/>:""
                        }
                        {
                            this.state.change==="posInvoice"?<CompleteposInvoice/>:""
                        }
                                 {/* // Return */}
                                 {
                            this.state.change==="returnFile"?<CompletereturnFile/>:""
                        }
                        {
                            this.state.change==="stockReturn"?<CompletestockReturn/>:""
                        }
                                {/* // Stock */}
                                {
                            this.state.change==="addStock"?<CompleteaddStock/>:""
                        }
                        {
                            this.state.change==="expireMedicine"?<CompleteexpireMedicine/>:""
                        }
                        {
                            this.state.change==="stockReportk"?<CompletestockReportk/>:""
                        }
                        {
                            this.state.change==="stockReportBW"?<CompletestockReportBW/>:""
                        }
                        
                                {/* // Vender */}
                                {
                            this.state.change==="addVendor"?<CompleteaddVendor/>:""
                        }
                        {
                            this.state.change==="manageVendor"?<CompletemanageVendor/>:""
                        }
    </div>
    </div> 
    <div>
                            
    </div>
 
            </React.Fragment>
         );
    }
}
 
export default CombineNaveBar;