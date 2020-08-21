import React, { Component } from 'react';

class cardMedicineCvs extends Component {
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
                                            <p style={{fontFamily:"Alegreya Sans",fontSize:"25px",lineHeight:"15px",color:"#374767",textAlign:"Left"}}>File Information (CSV)</p>
                                        </div>
                                    </div>
                                  <div className="row">
                                      <div className="col-8">
                                          
                                            <p class="text-warning">The first line in downloaded csv file should remain as it is. Please do not change the order of columns.</p>
                                            <p>The correct column order is</p><p class="text-info"> (Serial No,Manufacturer Name,Medicine Name, Generic Name,Strength,Category Name,Manufacturer Price)</p><p> & you must follow this.
                                            Please make sure the csv file is UTF-8 encoded and not saved with byte order mark (BOM).
                                            The images should be uploaded in uploads folder.
                                          </p>
                                      </div>
                                      {/* <div className="col-2"></div> */}
                                      <div className="col-4 mt-4 ">
                                          <button className="btn med-cvs-card" style={{backgroundColor:"#3A95E4",color:"white"}}>
                                            <i class="fa fa-download" style={{marginRight:"5px"}}></i>Download Sample File
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
export default cardMedicineCvs;