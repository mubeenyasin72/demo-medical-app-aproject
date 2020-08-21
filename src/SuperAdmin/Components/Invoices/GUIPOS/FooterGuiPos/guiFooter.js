import React, { Component } from 'react';
import '../FooterGuiPos/footerGuiPos.css';
class guiFooter extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <nav class="navbar justify-content-center fixed-bottom navbar-light bg-light">
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" style={{backgroundColor:"#ffC751",color:"white",padding:"10px 20px"}}>
                                    <i class="fa fa-arrow-up" ></i>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarText">
                                    <div className="w-100" >
                                        <div className="row mt-4">
                                            <div className="col-sm-12 col-md-4 col-lg-1 col-xl-1">           
                                                <button className="btn footer-btn " style={{backgroundColor:"#ffC751",color:"white"}}>
                                                    Full Paid
                                                </button>
                                            </div>
                                            <div className="col-sm-12 col-md-4 col-lg-1 col-xl-1">           
                                                <button className="btn footer-btn " style={{backgroundColor:"#45C203",color:"#fffcf6"}}>
                                                    Save Sale
                                                </button>
                                            </div>
                                            <div className="col-sm-12 col-md-4 col-lg-1 col-xl-1">           
                                                <button className="btn footer-btn footer-btn-123" style={{backgroundColor:"#53D4F4"}}>
                                                    <i class="fa fa-calculator" style={{fontSize:"15px",color:"white"}}></i>
                                                </button>
                                            </div>
                                            {/* <div className="col-sm-1"></div> */}
                                            <div className="col-sm-4 col-md-6 col-lg-1 col-xl-1">
                                                <h6 style={{}}>
                                                    Net Total:
                                                </h6>
                                            </div>
                                            <div className="col-sm-4 col-md-6 col-lg-2 col-xl-2">
                                                <h5><span class="badge badge-secondary" style={{backgroundColor:"#EEEEEE",padding:"15px 50px",marginLeft:"5px",color:"black"}}>00.0</span></h5>
                                            </div>
                                            <div className="col-sm-4 col-md-6 col-lg-1 col-xl-1">
                                                <h6 className="">
                                                    Paid Ammount:
                                                </h6>
                                            </div>
                                            <div className="col-sm-4 col-md-6 col-lg-2 col-xl-2">
                                                <input type="number" class="form-control ml-1" placeholder="00.0" style={{}} />
                                            </div>
                                            <div className="col-sm-4 col-md-6 col-lg-1 col-xl-1">
                                                <h6>
                                                        Due:
                                                </h6>
                                            </div>
                                            <div className="col-sm-4 col-md-6 col-lg-2 col-xl-2">
                                                <h5><span class="badge badge-secondary" style={{backgroundColor:"#EEEEEE",padding:"15px 50px",marginLeft:"5px",color:"black"}}>0</span></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default guiFooter;