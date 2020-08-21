import {
  ADD_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEE_ERROR,
  SHOW_EMPLOYEE_LIST_SUCCESS,
  SHOW_EMPLOYEE_LIST_ERROR,
  UPDATE_EMPLOYEE_SUCCESS,
  UPDATE_EMPLOYEE_ERROR,
  BLOCK_EMPLOYEE_SUCCESS,
  BLOCK_EMPLOYEE_ERROR,
  UNBLOCK_EMPLOYEE_SUCCESS,
  UNBLOCK_EMPLOYEE_ERROR,
  SEARCH_EMPLOYEE_BY_NAME
} from "../types";
import axios from "axios";
import { BaseURL } from "../baseURL";
import EmployeeClass from "../../BusinessLogics/ActionsLogics/EmployeeLogics/employeeLogics";
export const addEmplyeeActions = (Data, ctrl) => dispatch => {
  const state = {
    employee: Data
  };
  console.log(state, "Employee");
  axios
    .post(BaseURL + "employee/auth/employee-register", state)
    .then(response => {
      ctrl.setState({ loading: false });
      if (response.data.success === true) {
        dispatch({
          type: ADD_EMPLOYEE_SUCCESS,
          payload: response.data.SavedEmployee
        });
        ctrl.setState({ userName: "", password: "" });
      } else {
        ctrl.setState({ loading: false });
        dispatch({
          type: ADD_EMPLOYEE_ERROR,
          payload: response.data.msg
        });
      }
    })
    .catch(error => {
      ctrl.setState({ loading: false });
      dispatch({
        type: ADD_EMPLOYEE_ERROR,
        payload: "Netwok Error"
      });
    });
};

export const showEmployeeListAction = ctrl => dispatch => {
  const state = {
    foundEmployeeList1: []
  };
  axios
    .post(BaseURL + "employee/auth/all-employees")
    .then(response => {
      if (response.data.success === true) {
        response.data.foundEmployeeList.forEach(employeeList => {
          ctrl.setState({ loading1: false });
          state.foundEmployeeList1.push(
            new EmployeeClass().setEmployeeList(employeeList)
          );
        });
        dispatch({
          type: SHOW_EMPLOYEE_LIST_SUCCESS,
          payload: state.foundEmployeeList1
        });
      } else {
        ctrl.setState({ loading1: false });
        dispatch({
          type: SHOW_EMPLOYEE_LIST_ERROR,
          payload: response.data.msg
        });
      }
    })
    .catch(error => {
      dispatch({
        type: SHOW_EMPLOYEE_LIST_ERROR,
        payload: "Network Error"
      });
      ctrl.setState({ loading1: false });
      console.log(error);
    });
};

export const updateEmployeeListAction = (Data, ctrl) => dispatch => {
  const state = {
    employee: Data
  };
  console.log(state, "This Is The Block Action and this the Employee ID ");
  axios
    .post(BaseURL + "employee/auth/employee-update", state)
    .then(response => {
      if (response.data.success === true) {
        ctrl.setState({ loading: false });
        dispatch({
          type: UPDATE_EMPLOYEE_SUCCESS,
          payload: response.data.SavedEmployee
        });
        window.location.reload();
      } else {
        ctrl.setState({ loading: false });
        dispatch({
          type: UPDATE_EMPLOYEE_ERROR,
          payload: response.data.msg
        });
      }
    })
    .catch(error => {
      ctrl.setState({ loading: false });
      dispatch({
        type: UPDATE_EMPLOYEE_ERROR,
        payload: "Network Error"
      });
      console.log(error);
    });
};
export const blockEmployeeActions = (Data, ctrl) => dispatch => {
  const state = {
    employee: {
      _id: Data
    }
  };
  console.log(state, "Employee");
  axios
    .post(BaseURL + "admin/auth/block-specific-employee-by-admin", state)
    .then(response => {
      if (response.data.success === true) {
        ctrl.setState({ loading: false });
        dispatch({
          type: BLOCK_EMPLOYEE_SUCCESS,
          payload: response.data.savedEmployee
        });
        // window.location.reload();
      } else {
        dispatch({
          type: BLOCK_EMPLOYEE_ERROR,
          payload: response.data.msg
        });
      }
      ctrl.setState({ loading: false });
    })
    .catch(error => {
      console.log(error);
    });
};
export const unblockEmployeeActions = (Data, ctrl) => dispatch => {
  const state = {
    employee: {
      _id: Data
    }
  };
  console.log(state, "Employee");
  axios
    .post(BaseURL + "admin/auth/block-specific-employee-by-admin", state)
    .then(response => {
      if (response.data.success === true) {
        ctrl.setState({ loading: false });
        dispatch({
          type: UNBLOCK_EMPLOYEE_SUCCESS,
          payload: response.data.savedEmployee
        });
        // window.location.reload();
      } else {
        dispatch({
          type: UNBLOCK_EMPLOYEE_ERROR,
          payload: response.data.msg
        });
      }
      ctrl.setState({ loading: false });
    })
    .catch(error => {
      console.log(error);
    });
};

export const searchEmployeeByNameAction = Data => dispatch => {
  console.log(Data, "Employee");
  dispatch({
    type: SEARCH_EMPLOYEE_BY_NAME,
    payload: Data
  });
};
