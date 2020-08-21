import {
  EMPLOYEE_LOGIN_SUCCESS,
  EMPLOYEE_LOGIN_ERROR
} from "../emplyoeeActionTypes";
import axios from "axios";
import history from "../../../Routing/History/history";
import { BaseURL } from "../../../SuperAdmin/Actions/baseURL";
export const employeeLoginAction = (Data, ctrl) => dispatch => {
  const state = {
    employee: Data
  };
  axios
    .post(BaseURL + "employee/auth/employee-login", state)
    .then(response => {
      if (response.data.success === true) {
        console.log(response.data, "This Employee Login Response");
        dispatch({
          type: EMPLOYEE_LOGIN_SUCCESS,
          payload: response.data
        });
        ctrl.setState({ loading: false });
      } else {
        ctrl.setState({ loading: false });
        dispatch({
          type: EMPLOYEE_LOGIN_ERROR,
          payload: response.data.msg
        });
      }
    })
    .catch(error => {
      console.log(error);
      ctrl.setState({ loading: false });
      dispatch({
        type: EMPLOYEE_LOGIN_ERROR,
        payload: "Network Error"
      });
    });
};
