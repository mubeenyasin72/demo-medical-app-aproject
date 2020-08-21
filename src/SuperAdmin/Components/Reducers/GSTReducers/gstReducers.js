import {
  GET_GST_DATA_SUCCESS,
  GET_GST_DATA_ERROR,
  UPADTE_GST_DATA_SUCCESS,
  UPADTE_GST_DATA_ERROR,
  UPDATE_DICOUNT_DATA_SUCCESS,
  UPDATE_DICOUNT_DATA_ERROR,
  UPDATE_NO_OF_MONTH_SUCCESS,
  UPDATE_NO_OF_MONTH_ERROR
} from "../../../Actions/types";

const state = {
  gstData: 0,
  discount: 0,
  noOfMonth: 0,
  errorMsg: "",
  gstError: ""
};

function gstReducers(mState = { ...state }, action) {
  switch (action.type) {
    case GET_GST_DATA_SUCCESS:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.errorMsg = "";
        mState.gstData = action.payload.gst;
        mState.discount = action.payload.discount;
        mState.noOfMonth = action.payload.noOfMonths;
      }
      return deepCopy(mState);

    case GET_GST_DATA_ERROR:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.errorMsg = action.payload;
      }
      return deepCopy(mState);
    case UPADTE_GST_DATA_SUCCESS:
      if (action.payload === null || action.payload === undefined) {
      } else {
        console.log(action.payload.gst, "Update GST Value in the reducer");
        mState.gstData = action.payload.gst;
        mState.errorMsg = "";
      }
      return deepCopy(mState);
    case UPADTE_GST_DATA_ERROR:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.errorMsg = action.payload;
      }
      return deepCopy(mState);
    case UPDATE_DICOUNT_DATA_SUCCESS:
      if (action.payload === null || action.payload === undefined) {
      } else {
        console.log(
          action.payload.discount,
          "This is The Discount Value in The Reducer "
        );
        mState.errorMsg = "";
        mState.discount = action.payload.discount;
      }
      return deepCopy(mState);
    case UPDATE_DICOUNT_DATA_ERROR:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.errorMsg = action.payload;
      }
      return deepCopy(mState);
    case UPDATE_NO_OF_MONTH_SUCCESS:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.errorMsg = "";
        console.log(action.payload.noOfMonths, "This is Reducer");
        mState.noOfMonth = action.payload.noOfMonths;
      }
      return deepCopy(mState);
    case UPDATE_NO_OF_MONTH_ERROR:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.errorMsg = action.payload;
      }
      return deepCopy(mState);
    default:
      return deepCopy(mState);
  }
}
const deepCopy = obj => {
  const newObj = JSON.parse(JSON.stringify(obj));
  return newObj;
};
export default gstReducers;
