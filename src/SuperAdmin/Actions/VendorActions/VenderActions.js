import {
  ADD_VENDOR_SUCCESS,
  ADD_VENDOR_ERROR,
  MANAGE_VENDOR,
  MANAGE_VENDOR_ERROR,
  DELETE_VENDOR_SUCCESS,
  DELETE_VENDOR_ERROR,
  UPDATE_VENDER_SUCCESS,
  UPDATE_VENDER_ERROR,
  SEARCH_VENDER_BY_NAME
} from "../types";
import { BaseURL } from "../baseURL";
import axios from "axios";
import VenderClass from "../../BusinessLogics/ActionsLogics/VenderLogics/venderClass";
export const addVendorAction = (Data, ctrl) => dispatch => {
  const state = {
    vendor: Data
  };
  axios
    .post(BaseURL + "vendor/manage/vendor-register", state)
    .then(response => {
      if (response.data.success === true) {
        ctrl.setState({ loading: false });
        dispatch({
          type: ADD_VENDOR_SUCCESS,
          payload: response.data.SavedVendor
        });
        ctrl.setState({ vendorName: "", contactNumber: "" });
      } else {
        ctrl.setState({ loading: false });
        dispatch({
          type: ADD_VENDOR_ERROR,
          payload: response.data.msg
        });
      }
    })
    .catch(error => {
      ctrl.setState({ loading: false });
      console.log(error);
      dispatch({
        type: ADD_VENDOR_ERROR,
        payload: "Network Error"
      });
    });
};

export const showVendorAction = ctrl => dispatch => {
  const state = {
    foundVendors: []
  };

  axios
    .post(BaseURL + "vendor/manage/show-all-vendors")
    .then(response => {
      if (response.data.success === true) {
        ctrl.setState({ loading1: false });
        response.data.foundVendors.forEach(vendorName => {
          state.foundVendors.push(new VenderClass().setvendorName(vendorName));
        });
        dispatch({
          type: MANAGE_VENDOR,
          payload: state.foundVendors
        });
      } else {
        ctrl.setState({ loading1: false });
        dispatch({
          type: MANAGE_VENDOR_ERROR,
          payload: response.data.msg
        });
      }
    })
    .catch(error => {
      dispatch({
        type: MANAGE_VENDOR_ERROR,
        payload: "Network Error"
      });
      ctrl.setState({ loading1: false });
      console.log(error);
    });
};
export const deleteVendorListAction = (Data, ctrl) => dispatch => {
  const state = {
    vendorID: Data
  };
  console.log(state, "This Is The Action data");
  axios
    .post(BaseURL + "vendor/manage/delete-vendor", state)
    .then(response => {
      if (response.data.success === true) {
        dispatch({
          type: DELETE_VENDOR_SUCCESS,
          payload: response.data.DeletedVendor
        });
      } else {
        dispatch({
          type: DELETE_VENDOR_ERROR,
          payload: response.data.msg
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
};
export const updateVenderAction = (Data, ctrl) => dispatch => {
  const state = {
    vendor: Data
  };
  console.log(state, "This Is the Vender Update Actions");
  axios
    .post(BaseURL + "vendor/manage/vendor-update", state)
    .then(response => {
      if (response.data.success === true) {
        dispatch({
          type: UPDATE_VENDER_SUCCESS,
          payload: response.data.SavedVendor
        });
        ctrl.setState({ editVender: false });
      } else {
        dispatch({
          type: UPDATE_VENDER_ERROR,
          payload: response.data.msg
        });
      }
    })
    .catch(error => {
      dispatch({
        type: UPDATE_VENDER_ERROR,
        payload: "Network Error"
      });
      console.log(error);
    });
};

export const searchVenderbByNameAction = Data => dispatch => {
  console.log(Data);
  dispatch({
    type: SEARCH_VENDER_BY_NAME,
    payload: Data
  });
};
