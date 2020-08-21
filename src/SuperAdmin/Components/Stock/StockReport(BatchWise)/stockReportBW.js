import React, { Component } from 'react';
import { Link } from "react-router-dom";
class stockReportBW extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row mt-5">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="row">
                                <div className="col-xs-4 col-sm-4 col-md-3 col-lg-2 col-xl-2">
                                   <Link to="/SuperAdmin/StockReportView">
                                   <button className="btn" style={{backgroundColor:"#3A95E4",color:"white",fontSize:"15px",width:"80%"}}>
                                        <i class="fa fa-align-justify mr-2"></i> Stock Report
                                    </button>
                                   </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3 bg-white">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="row">
                                <div className="col-xs-12 col-sm-4 col-md-3 col-lg-3 col-xl-3">
                                    <p style={{fontSize:"25px",fontFamily:"Alegreya Sans",color:"#374767",lineHeight:"26px",marginTop:"5px"}}>
                                        Stock Report(Batch Wise)
                                    </p>
                                </div>
                                <hr style={{width:"100%"}} />
                            </div>
                            <div className="row">
                                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 mt-3" style={{marginTop:"10px"}}>
                                        <p className="mt-2">
                                        Show 
                                        </p>
                                    </div>
                                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 mt-3">
                                        <div class="input-group" style={{width:"100%"}}>
                                                    <select class="custom-select" id="inputGroupSelect04">
                                                        <option selected>Choose...</option>
                                                        <option value="1">10</option>
                                                        <option value="2">50</option>
                                                        <option value="3">100</option>
                                                    </select>
                                        </div>
                                    </div>
                                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 mt-3" style={{marginTop:"10px"}}>
                                        <p className="mt-2">
                                            Enteries 
                                        </p>
                                    </div>
                                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 mt-3">

                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 mt-3">
                                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                            <label class="btn btn-success">
                                                <input type="radio" name="options" id="option1" autocomplete="off" checked /> Copy
                                            </label>
                                            <label class="btn btn-success">
                                                <input type="radio" name="options" id="option2" autocomplete="off" /> Excel
                                            </label>
                                            <label class="btn btn-success">
                                                <input type="radio" name="options" id="option3" autocomplete="off" /> CSV
                                            </label>
                                            <label class="btn btn-success">
                                                <input type="radio" name="options" id="option3" autocomplete="off" /> PDF
                                            </label>
                                            <label class="btn btn-success">
                                                <input type="radio" name="options" id="option3" autocomplete="off" /> Print
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 mt-3" style={{marginTop:"10px"}}>
                                        <p className="mt-2">
                                            Search 
                                        </p>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2 col-xl-2 mt-3">
                                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                    </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <table className=" table table-sm table-bordered">
                                        <thead>
                                            <tr>
                                                <th>SL.</th>
                                                <th>Medicine Name</th>
                                                <th>Strenght</th>
                                                <th>Batch ID</th>
                                                <th>Expiry Date</th>
                                                <th>In Quantity</th>
                                                <th>Sold QTY</th>
                                                <th>Stock</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    1.
                                                </td>
                                                <td>
                                                    <a href='/'>Ad - All(50 mg + 47 mg + 500 mcg + 10 mg + 1 mg + 2 mg + 2 mg + 22.5 mg)</a>
                                                </td>
                                                <td>50 mg + 47 mg + 500 mcg + 10 mg + 1 mg + 2 mg + 2 mg + 22.5 mg</td>
                                                <td>88532</td>
                                                <td>2020-10-31</td>
                                                <td>30.00</td>
                                                <td>0</td>
                                                <td>30</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    2.
                                                </td>
                                                <td>
                                                    <a href='/'>Ad - All(50 mg + 47 mg + 500 mcg + 10 mg + 1 mg + 2 mg + 2 mg + 22.5 mg)</a>
                                                </td>
                                                <td>500 mg + 200 IU</td>
                                                <td>88532</td>
                                                <td>2020-10-31</td>
                                                <td>30.00</td>
                                                <td>0</td>
                                                <td>30</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    3.
                                                </td>
                                                <td>
                                                    <a href='/'>Ad - All(50 mg + 47 mg + 500 mcg + 10 mg + 1 mg + 2 mg + 2 mg + 22.5 mg)</a>
                                                </td>
                                                <td>500 mg + 200 IU</td>
                                                <td>88532</td>
                                                <td>2020-10-31</td>
                                                <td>30.00</td>
                                                <td>0</td>
                                                <td>30</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    4.
                                                </td>
                                                <td>
                                                    <a href='/'>Ad - All(50 mg + 47 mg + 500 mcg + 10 mg + 1 mg + 2 mg + 2 mg + 22.5 mg)</a>
                                                </td>
                                                <td>500 mg + 200 IU</td>
                                                <td>88532</td>
                                                <td>2020-10-31</td>
                                                <td>30.00</td>
                                                <td>0</td>
                                                <td>30</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-xs-4 col-sm-4 col-md-3 col-lg-3 col-xl-3">
                                    <p>
                                        Showing 1 to 10 of 22 entries
                                    </p>
                                </div>
                                <div className="col-xs-8 col-sm-8 col-md-9 col-lg-9 col-xl-9"></div>
                        </div>
                        <div className="row mt-3">
                                <div className="col-md-9 col-lg-9 col-xl-9"></div>
                                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                                    <div class="btn-group" role="group" aria-label="First group ml-5">
                                        <button type="button" class="btn btn-outline-secondary">Previous</button>
                                        <button type="button" class="btn btn-outline-primary">1</button>
                                        <button type="button" class="btn btn-outline-primary">2</button>
                                        <button type="button" class="btn btn-outline-primary">3</button>
                                        <button type="button" class="btn btn-outline-secondary">Next</button>
                                    </div>
                                </div>
                        </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default  stockReportBW;