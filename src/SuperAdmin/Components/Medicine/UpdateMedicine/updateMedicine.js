import React, { Component } from 'react';
import UpdateMedForm from './UpdateMedicineForm/updateMedicineForm';
import history from '../../../../Routing/History/history';
class updateMedicine extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                <div className="row">
                        <div className="col-2">
                            <div className="row">
                                <div className="col-12">
                                    <button className="btn mt-3" style={{backgroundColor:"#B2DFDB",fontSize:"15px",color:"#374767"}}
                                     onClick={()=>{
                                        history.push("/SuperAdmin/Views/Medicine/ImportMedicineCVSView/importMedCVSView")
                                    }}
                                    >
                                    <i class="fa fa-plus" style={{marginRight:"5px"}}></i>Import Medicine CVS
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-2">
                            <div className="row mt-3">
                                <div className="col-12">
                                    <button className="btn " style={{backgroundColor:"#45C203",fontSize:"15px",color:"white"}}
                                    onClick={()=>{
                                        history.push("/SuperAdmin/Views/Medicine/ManageMedicineView/manageMedicineView")
                                    }}
                                    >
                                       <i class="fa fa-align-justify" style={{marginRight:"5px"}}></i>Manage Medicine
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-7"></div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12">
                                <div className="row hr-line-design-new-med">
                                    <div className="col-12">
                                        <h4 style={{fontFamily:"Alegreya Sans",fontSize:"25px",lineHeight:"15px",color:"#374767",textAlign:"Left"}}>
                                             Update Medicine
                                        </h4>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-1"></div>
                        <div className="col-8">
                            <div className="row">
                                <div className="col-12">
                                <UpdateMedForm/>
                                </div>
                            </div>
                        </div>
                        <div className="col-1"></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default updateMedicine;