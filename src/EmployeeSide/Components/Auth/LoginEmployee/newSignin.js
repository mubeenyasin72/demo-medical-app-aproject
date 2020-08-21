import React, { Component } from 'react';
import SigninCard from './siginCard/siginCard';
import './newSigninPage.css';
class newSignin extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid" >
                    <div className="row" style={{marginTop:"100px"}}>
                        <div className="col-lg-2 col-md-1 col-sm-0"></div>
                        <div className="col-lg-8 col-md-10 col-sm-12">
                            <SigninCard/>                    
                        </div>
                        <div className="col-lg-2 col-md-1 col-sm-0"></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default newSignin;