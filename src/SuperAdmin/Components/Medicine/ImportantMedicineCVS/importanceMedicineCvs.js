import React, { Component } from 'react';
import FileInformation from "./CardFileInforMationCvs/cardFileInformationCvs";
import MedicineCVS from './Card2MedicineCVS/medicineCardCVS';
import {Link} from 'react-router-dom';
class importanceMedicineCvs extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                <div className="row">
                        <div className="col-2">
                            <div className="row">
                                <div className="col-12">
                                   <Link to="/SuperAdmin/AddVendorView">
                                   <button className="btn mt-3" style={{backgroundColor:"#45C203",color:"white"}}>
                                    <i class="fa fa-plus" style={{marginRight:"5px"}}></i>Add Vender
                                    </button>
                                   </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="row">
                                <div className="col-12">
                                  <Link to="#">
                                  <button className="btn mt-3" style={{backgroundColor:"#53D4FA",color:"white"}}>
                                    <i class="fa fa-plus" style={{marginRight:"5px"}}></i>Add Category
                                    </button>
                                  </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="row">
                                <div className="col-12">
                                   <Link to="/SuperAdmin/AddMedicineView">
                                   <button className="btn mt-3" style={{backgroundColor:"#FFC751",color:"white"}}>
                                    <i class="fa fa-plus" style={{marginRight:"5px"}}></i> Add Medicine
                                    </button>
                                   </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="row">
                                <div className="col-12">
                                   <Link to="/SuperAdmin/ManageMedicineView">
                                   <button className="btn mt-3" style={{backgroundColor:"#3A95E4",color:"white"}}>
                                       <i class="fa fa-align-justify" style={{marginRight:"5px"}}></i>Manage Medicine
                                    </button>
                                   </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-7"></div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12">
                                <div className="row " style={{borderBottom:"1px solid #374767"}}>
                                    <div className="col-12">
                                        <h4 style={{fontFamily:"Alegreya Sans",fontSize:"25px",lineHeight:"15px",color:"#374767",textAlign:"Left"}}> 
                                            Import Medicine (CSV)
                                        </h4>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12">
                            <FileInformation/>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12">
                            <MedicineCVS/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default importanceMedicineCvs;