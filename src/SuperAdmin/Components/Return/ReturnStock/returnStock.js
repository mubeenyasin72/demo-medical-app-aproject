import React, { Component } from 'react';
import { SingleDatePicker} from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { Link } from "react-router-dom";
class returnStock extends Component {
    state={
        startDate:'',
        endDate:''
    }
    render() {
        
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row mt-4">
                        <div className="col-xs-6 col-sm-6 col-md-3 col-lg-2 col-xl-2">
                           <Link to="/SuperAdmin/ReturnFileView">
                           <button className="btn" style={{backgroundColor:"#53D4FA",color:"white",fontSize:"15px"}}>
                                + Add Return
                            </button>
                           </Link>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-9 col-lg-10 col-xl-10"></div>
                    </div>
                    <div className="row mt-3 bg-white">
                        <div className="col-xs-12 col-sm-12 col-md-2 col-lg-1 col-xl-1 mt-3">
                            Start Date
                        </div>
                        <div className="col-xs-12 col-sm-12 col-lg-2 col-xl-2 mt-3">
                            <SingleDatePicker
                                date={this.state.date} // momentPropTypes.momentObj or null
                                onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                                focused={this.state.focused} // PropTypes.bool
                                onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                                id="your_unique_id" // PropTypes.string.isRequired,
                            />
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-2 col-lg-1 col-xl-1 mt-3">
                            End Date
                        </div>
                        <div className="col-xs-12 col-sm-12 col-lg-3 col-xl-3 mt-3">
                            <input type="text" class="form-control" placeholder="End Date" />
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-1 col-lg-1 col-xl-1">
                            <button className="btn btn-success mt-3">
                                Search
                            </button>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <table className="table table-bordered table-responsive-md">
                                <thead>
                                    <tr>
                                        <th><p>SL.</p></th>
                                        <th><p>Invoice ID</p></th>
                                        <th><p>Customer Name</p></th>
                                        <th><p>Date</p></th>
                                        <th><p>Payment Type</p></th>
                                        <th><p>Total Ammount</p></th>
                                        <th><p>Action</p></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            8438332291
                                        </td>
                                        <td>
                                            Waiking Customer
                                        </td>
                                        <td>
                                            12-NOV-2019
                                        </td>
                                        <td>
                                            Cash Payment
                                        </td>
                                        <td>
                                            $1550.00
                                        </td>
                                        <td>
                                        
                                            <a href="/" style={{backgroundColor:"#37A000",padding:"5px",border:"1px solid #37A000",borderRadius:"5px"}}>
                                                <i class="fa fa-window-restore" style={{fontSize:"20px",color:"white"}}></i>
                                            </a>
                                            <a href="/" style={{backgroundColor:"#E5343D",padding:"5px",border:"1px solid #E5343D",borderRadius:"5px",marginLeft:"10px"}}>
                                                <i class="fa fa-trash" style={{fontSize:"20px",color:"white"}}></i>
                                            </a>
                                        
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            8438332291
                                        </td>
                                        <td>
                                            Waiking Customer
                                        </td>
                                        <td>
                                            12-NOV-2019
                                        </td>
                                        <td>
                                            Cash Payment
                                        </td>
                                        <td>
                                            $1550.00
                                        </td>
                                        <td>
                                        
                                            <a href="/" style={{backgroundColor:"#37A000",padding:"5px",border:"1px solid #37A000",borderRadius:"5px"}}>
                                                <i class="fa fa-window-restore" style={{fontSize:"20px",color:"white"}}></i>
                                            </a>
                                            <a href="/" style={{backgroundColor:"#E5343D",padding:"5px",border:"1px solid #E5343D",borderRadius:"5px",marginLeft:"10px"}}>
                                                <i class="fa fa-trash" style={{fontSize:"20px",color:"white"}}></i>
                                            </a>
                                        
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            8438332291
                                        </td>
                                        <td>
                                            Waiking Customer
                                        </td>
                                        <td>
                                            12-NOV-2019
                                        </td>
                                        <td>
                                            Cash Payment
                                        </td>
                                        <td>
                                            $1550.00
                                        </td>
                                        <td>
                                        
                                            <a href="/" style={{backgroundColor:"#37A000",padding:"5px",border:"1px solid #37A000",borderRadius:"5px"}}>
                                                <i class="fa fa-window-restore" style={{fontSize:"20px",color:"white"}}></i>
                                            </a>
                                            <a href="/" style={{backgroundColor:"#E5343D",padding:"5px",border:"1px solid #E5343D",borderRadius:"5px",marginLeft:"10px"}}>
                                                <i class="fa fa-trash" style={{fontSize:"20px",color:"white"}}></i>
                                            </a>
                                        
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            8438332291
                                        </td>
                                        <td>
                                            Waiking Customer
                                        </td>
                                        <td>
                                            12-NOV-2019
                                        </td>
                                        <td>
                                            Cash Payment
                                        </td>
                                        <td>
                                            $1550.00
                                        </td>
                                        <td>
                                        
                                            <a href="/" style={{backgroundColor:"#37A000",padding:"5px",border:"1px solid #37A000",borderRadius:"5px"}}>
                                                <i class="fa fa-window-restore" style={{fontSize:"20px",color:"white"}}></i>
                                            </a>
                                            <a href="/" style={{backgroundColor:"#E5343D",padding:"5px",border:"1px solid #E5343D",borderRadius:"5px",marginLeft:"10px"}}>
                                                <i class="fa fa-trash" style={{fontSize:"20px",color:"white"}}></i>
                                            </a>
                                        
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default returnStock;