import React, { Component } from 'react';

class medicineCardCVS extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div class="card">
                            <div class="card-body">
                                <div className="row" style={{borderBottom:"1px solid #344767"}}>
                                        <div className="col-12">
                                            <p style={{fontFamily:"Alegreya Sans",fontSize:"25px",lineHeight:"15px",color:"#374767",textAlign:"Left"}}>Import Medicine (CSV)</p>
                                        </div>
                                </div>
                                <div class="row">
                                        <div class="col-2 mt-4">
                                            <p>Upload CSV File *</p>
                                        </div>
                                        <div class="col-3 mt-4">
                                        <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-1 ">
                                        <button className="btn card-btn-med" style={{backgroundColor:"#3A95E4",color:"white"}} >
                                            Save
                                        </button>
                                    </div>
                                    <div className="col-2 ">
                                        <button className="btn card-btn-save-med" style={{backgroundColor:"#45C203",color:"white"}} >
                                            Submit And Add Another One
                                        </button>
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
export default  medicineCardCVS;