import {
  ADD_COMPANY_SUCCESS,
  ADD_COMPANY_ERROR,
  SHOW_COMPANY_SUCCESS,
  SHOW_COMPANY_ERROR,
  UPDATE_COMPANY_SUCCESS,
  UPDATE_COMPANY_ERROR,
  SEARCH_VENDER_BY_NAME
} from "../types";
import { BaseURL } from "../baseURL";
import axios from "axios";
import CompnayClass from "../../BusinessLogics/ActionsLogics/CompnayLogics/compnayClass";

export const addCompanyAction = (Data, ctrl) => dispatch => {
  const state = {
    company: Data
  };
  axios
    .post(BaseURL + "medicine/med/add-medicine-company", state)
    .then(response => {
      if (response.data.success === true) {
        ctrl.setState({ loading: false });
        dispatch({
          type: ADD_COMPANY_SUCCESS,
          payload: response.data.savedCompany
        });
        ctrl.setState({ companyName: "" });
      } else {
        ctrl.setState({ loading: false });
        dispatch({
          type: ADD_COMPANY_ERROR,
          payload: response.data.msg
        });
      }

      ctrl.setState({
        company: ""
      });
    })
    .catch(error => {
      ctrl.setState({ loading: false });
      dispatch({
        type: ADD_COMPANY_ERROR,
        payload: "Netwok Error"
      });
      console.log(error);
    });
};

export const showCompnayAction = ctrl => dispatch => {
  const state = {
    foundAllCompanies: []
  };

  axios
    .post(BaseURL + "medicine/med/show-company-list")
    .then(response => {
      if (response.data.success === true) {
        response.data.foundAllCompanies.forEach(companyName => {
          state.foundAllCompanies.push(
            new CompnayClass().setCompnayName(companyName)
          );
        });
        ctrl.setState({ loading1: false });
        dispatch({
          type: SHOW_COMPANY_SUCCESS,
          payload: state.foundAllCompanies
        });
      } else {
        ctrl.setState({ loading1: false });
        dispatch({
          type: SHOW_COMPANY_ERROR,
          payload: response.data.msg
        });
      }
    })
    .catch(error => {
      dispatch({
        type: SHOW_COMPANY_ERROR,
        payload: "Network Error"
      });
      ctrl.setState({ loading1: false });
      console.log(error);
    });
};
export const updateCompanyAction = (Data, ctrl) => dispatch => {
  const state = {
    company: Data
  };
  axios
    .post(BaseURL + "medicine/med/update-medicine-company", state)
    .then(response => {
      if (response.data.success === true) {
        dispatch({
          type: UPDATE_COMPANY_SUCCESS,
          payload: response.data.savedCompany
        });
        ctrl.setState({ editCompany: false });
      } else {
        dispatch({
          type: UPDATE_COMPANY_ERROR,
          payload: response.data.msg
        });
      }
    })
    .catch(error => {
      dispatch({
        type: UPDATE_COMPANY_ERROR,
        payload: "Network Error"
      });
      console.log(error);
    });
};

export const searchCompanyByNameAction = Data => dispatch => {
  console.log(Data);
  dispatch({
    type: SEARCH_VENDER_BY_NAME,
    payload: Data
  });
};
