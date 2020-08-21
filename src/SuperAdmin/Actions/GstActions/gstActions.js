import {
  GET_GST_DATA_SUCCESS,
  GET_GST_DATA_ERROR,
  UPADTE_GST_DATA_SUCCESS,
  UPADTE_GST_DATA_ERROR,
  UPDATE_DICOUNT_DATA_SUCCESS,
  UPDATE_DICOUNT_DATA_ERROR,
  UPDATE_NO_OF_MONTH_SUCCESS,
  UPDATE_NO_OF_MONTH_ERROR
} from "../types";
import { BaseURL } from "../baseURL";
import axios from "axios";
export const showGSTDataActions = (Data, ctrl) => dispatch => {
  const state = {
    getGstData: {
      discount: 0,
      gst: 0,
      noOfMonths: 0
    },
    filterID: {
      filterID: Data
    }
  };
  axios
    .post(
      BaseURL + "medicine/medfilters/show-api-gst-discount-noOf",
      state.filterID
    )
    .then(response => {
      if (response.data.success === true) {
        ctrl.setState({ loading: false });
        dispatch({
          type: GET_GST_DATA_SUCCESS,
          payload: response.data.foundFilter
        });
      } else {
        ctrl.setState({ loading: false });
        dispatch({
          type: GET_GST_DATA_ERROR,
          payload: response.data.msg
        });
      }
    })
    .catch(error => {
      dispatch({
        type: GET_GST_DATA_ERROR,
        payload: "Network Error"
      });
      ctrl.setState({ loading: false });
      console.log(error);
    });
};

export const updateGSTDataActions = (Data, ctrl) => dispatch => {
  const state = {
    filter: {
      filter: Data
    }
  };
  axios
    .post(BaseURL + "medicine/medfilters/update-gst-in-filters", state.filter)
    .then(response => {
      console.log(response.data, "This Is The Response Of That Update GST");
      if (response.data.success === true) {
        dispatch({
          type: UPADTE_GST_DATA_SUCCESS,
          payload: response.data.Updated
        });
        ctrl.setState({ editGst: false, loading: false });
      } else {
        ctrl.setState({ loading: false });
        dispatch({
          type: UPADTE_GST_DATA_ERROR,
          payload: response.data.msg
        });
      }
    })
    .catch(error => {
      ctrl.setState({ loading: false });
      dispatch({
        type: UPADTE_GST_DATA_ERROR,
        payload: "NetWork Error"
      });
      console.log(error);
    });
};

export const updateDiscountDataActions = (Data, ctrl) => dispatch => {
  const state = {
    filter: {
      filter: Data
    }
  };
  axios
    .post(
      BaseURL + "medicine/medfilters/update-discounts-in-filters",
      state.filter
    )
    .then(response => {
      if (response.data.success === true) {
        dispatch({
          type: UPDATE_DICOUNT_DATA_SUCCESS,
          payload: response.data.Updated
        });
        ctrl.setState({ editDiscount: false, loading: false });
      } else {
        ctrl.setState({ loading: false });
        dispatch({
          type: UPDATE_DICOUNT_DATA_ERROR,
          payload: response.data.msg
        });
      }
    })
    .catch(error => {
      ctrl.setState({ loading: false });
      dispatch({
        type: UPDATE_DICOUNT_DATA_ERROR,
        payload: "NetWork Error"
      });
      console.log(error);
    });
};

export const updateNoOfMonthDataActions = (Data, ctrl) => dispatch => {
  const state = {
    filter: {
      filter: Data
    }
    // edit3: true
  };
  axios
    .post(
      BaseURL + "medicine/medfilters/update-no-of-months-in-filters",
      state.filter
    )
    .then(response => {
      if (response.data.success === true) {
        dispatch({
          type: UPDATE_NO_OF_MONTH_SUCCESS,
          payload: response.data.Updated
        });
        ctrl.setState({
          editMonth: false,
          loading: false
        });
      } else {
        ctrl.setState({ loading: false });
        dispatch({
          type: UPDATE_NO_OF_MONTH_ERROR,
          payload: response.data.msg
        });
      }
    })
    .catch(error => {
      ctrl.setState({ loading: false });
      dispatch({
        type: UPDATE_NO_OF_MONTH_ERROR,
        payload: "NetWork Error"
      });
      console.log(error);
    });
};
