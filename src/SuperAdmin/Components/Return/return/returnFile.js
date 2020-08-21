import React, { Component } from 'react';
import { Link } from "react-router-dom";
class returnFile extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid"  >
                    <div className="row mt-4">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="row">
                                    <div className="col-xs-4 col-sm-4 col-md-3 col-lg-3 col-xl-3">
                                       <Link to="/SuperAdmin/StockReturnFileView">
                                       <button className="btn" style={{backgroundColor:"#3A95E4",color:"white",fontSize:"15px",width:"80%"}}>
                                            <i class="fa fa-align-justify mr-2"></i> Return List
                                        </button>
                                       </Link>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                            <div class="card">
                                <div class="card-body">
                                   <div className="row">
                                       <div className="col-sm-12">
                                        <h6 style={{textAlign:"center",marginTop:"0px",fontFamily:"Segoe UI",fontSize:"16px",color:"#374767"}}> Customer Return</h6>
                                       </div>
                                   </div>
                                   <div className="row mt-4">
                                        <div className="col-sm-3 mt-3">
                                            <p>Invoice No:</p>
                                        </div>
                                        <div className="col-sm-7 mt-3">
                                            <input class="form-control " style={{width:"100%"}} type="text" placeholder="Invoice No" />
                                        </div>
                                        <div className="col-sm-2 mt-3">
                                            <button className="btn btn-success " style={{}}>
                                                Search
                                            </button><br/><br/>
                                        </div>
                                   </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2"></div>
                        <div className=" col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                        <div class="card">
                                <div class="card-body">
                                   <div className="row">
                                       <div className="col-sm-12 col-md-12">
                                        <h6 style={{textAlign:"center",marginTop:"0px",fontFamily:"Segoe UI",fontSize:"16px",color:"#374767"}}> Manufacturer Return List</h6>
                                       </div>
                                   </div>
                                   <div className="row mt-4">
                                        <div className="col-sm-3 col-md-3 mt-3">
                                            <p>Manufacturer Name</p>
                                        </div>
                                        <div className="col-sm-7 col-md-7 mt-3">
                                            <input class="form-control " style={{width:"100%"}} type="text" placeholder="Manufacturer Name" />
                                        </div>
                                        <div className="col-sm-2 col-md-2 mt-3">
                                            <button className="btn btn-success " style={{}}>
                                                Search
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
export default returnFile;