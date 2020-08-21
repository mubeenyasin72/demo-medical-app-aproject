import { BaseURL } from "../baseURL";
import {
  ADMIN_SIGNUP_SUCCESS,
  ADMIN_SIGNUP_ERROR,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_ERROR
} from "../types";
import axios from "axios";
import history from "../../../Routing/History/history";
import { setSuperAdminData } from "../../../LocalStorage/superAdminLocalStorage";
export const adminSignupAction = (Data, ctrl) => dispatch => {
  const state = {
    admin: Data
  };
  axios
    .post(BaseURL + "admin/auth/admin-register", state)
    .then(response => {
      if (response.data.success === true) {
        dispatch({
          type: ADMIN_SIGNUP_SUCCESS,
          payload: response.data
        });
        history.push("/");
      } else {
        ctrl.setState({ loading1: false });
        dispatch({
          type: ADMIN_SIGNUP_ERROR,
          payload: response.data.msg
        });
      }

      ctrl.setState({ loading: false });
      ctrl.setState({
        firstName: "",
        lastName: "",
        userName: "",
        password: ""
      });
    })
    .catch(error => {
      console.log(error);
      ctrl.setState({ loading: false });
      dispatch({
        type: ADMIN_SIGNUP_ERROR,
        payload: "Network Error"
      });
    });
};
export const adminLoginAction = (Data, ctrl) => dispatch => {
  const state = {
    admin: Data
  };
  console.log(state, "This is Login Data");
  axios
    .post(BaseURL + "admin/auth/admin-login", state)
    .then(response => {
      console.log(response.data, "Admin Login Action");
      if (response.data.success === true) {
        dispatch({
          type: ADMIN_LOGIN_SUCCESS,
          payload: response.data
        });
        setSuperAdminData(response.data.Admin);
        ctrl.setState({
          loggedIn: true
        });
      } else {
        dispatch({
          type: ADMIN_LOGIN_ERROR,
          payload: response.data.msg
        });
      }

      ctrl.setState({
        loading: false
      });
    })
    .catch(error => {
      console.log(error);
    });
};
