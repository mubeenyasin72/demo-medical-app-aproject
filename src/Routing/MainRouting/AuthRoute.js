import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import { getSuperAdminData } from "../../LocalStorage/superAdminLocalStorage";
class AuthRoute extends Component {
  render() {
    const { redirectPath, path, render } = this.props;

    const authData = getSuperAdminData();
    if (authData && authData._id.length > 0) {
      return <Route path={path} render={render} />;
    } else {
      return <Redirect to={redirectPath} />;
    }
  }
}
export default AuthRoute;
