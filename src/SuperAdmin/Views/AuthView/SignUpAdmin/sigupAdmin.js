import React, { Component } from 'react';
import SigunAdmin from '../../../Components/Auth/Signup/signUpPage';
class loginAdmin extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row mt-5">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <SigunAdmin/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default loginAdmin;