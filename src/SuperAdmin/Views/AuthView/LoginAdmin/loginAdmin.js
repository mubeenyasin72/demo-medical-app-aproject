import React, { Component } from 'react';
import LoginAdmin from '../../../Components/Auth/Login/loginPage';
class loginAdmin extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row mt-5">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <LoginAdmin/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default loginAdmin;