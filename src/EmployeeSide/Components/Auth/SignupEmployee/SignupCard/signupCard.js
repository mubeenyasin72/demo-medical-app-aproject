import React, { Component } from 'react';
import './signinCard.css';
class siginCard extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div class="card w-100" style={{borderRadius:"20px"}}>
                                <img class="card-img-top" src={require("../../../../../Images/laptop2.jpg")} style={{borderTopLeftRadius:"20px",borderTopRightRadius:"20px"}} alt="Card image cap" />
                                <div class="content">
                                    <h1 style={{textAlign:"center",fontFamily:"Poppins-Regular",fontSize:"30px",lineHeight:"36px"}}><b>SIGN IN</b></h1>
                                </div>
                                <div class="card-body">
                                    <div className="row">
                                        <div className="col-12">
                                            <div class="row">
                                                <div class="col-3">
                                                    <span className="lable-text mt-3" style={{fontFamily:"Poppins-Regular",fontSize:"18px",lineHeight:"18px",color:"#808080"}}>
                                                        Username
                                                    </span>
                                                </div>
                                                <div class="col-9">
                                                <input type="text" className="form-control-12" placeholder="Enter Username" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-12">
                                            <div class="row ">
                                                <div class="col-3">
                                                    <span className="lable-text" style={{textAlign:"center",fontFamily:"Poppins-Regular",fontSize:"18px",lineHeight:"18px",color:"#808080"}}>
                                                        Password
                                                    </span>
                                                </div>
                                                <div class="col-9">
                                                <input type="password" className="form-control-12" placeholder="Enter Password" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-3"></div>
                                        <div className="col-9">
                                            <div className="row">
                                                <div className="col">
                                                <div class="form-check">
                                                        <input class="input-checkbox100" type="checkbox" id="gridCheck" />
                                                        <label class="label-checkbox100" for="gridCheck">
                                                            Remember Me
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <a href="#" class="txt1">
                                                        Sigin?
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col"></div>
                                                <div className="col">
                                                        <button className="btn btn-login-2" style={{padding:"15px",borderRadius:"40px",fontSize:"18px"}}>
                                                            Sigup
                                                        </button>
                                                </div>
                                                <div className="col"></div>
                                            </div>
                                        </div>
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
export default siginCard;