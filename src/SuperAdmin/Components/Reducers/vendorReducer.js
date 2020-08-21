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
} from "../../Actions/types";

const state = {
  addVender: [],
  addVenResMsg: "",
  venderID: "",
  netError: "",
  netError2: "",
  searchVender: [],
  searchError: ""
};
function authReducer(mState = { ...state }, action) {
  switch (action.type) {
    case ADD_VENDOR_SUCCESS:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.netError2 = "";
        mState.netError = "";
        // mState.addVenResMsg = action.payload.msg;
        mState.addVender.unshift(action.payload);
      }
      return deepCopy(mState);
    case ADD_VENDOR_ERROR:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.netError2 = action.payload;
      }
      return deepCopy(mState);
    case MANAGE_VENDOR:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.netError = "";
        mState.addVender = [];
        mState.addVender = action.payload;
        mState.addVender = mState.addVender.reverse();
      }
      return deepCopy(mState);
    case MANAGE_VENDOR_ERROR:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.addVender = [];
        mState.netError = action.payload;
      }
      return deepCopy(mState);
    case DELETE_VENDOR_SUCCESS:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.searchVender = mState.searchVender.filter(
          ls => ls._id !== action.payload._id
        );
        mState.addVender = mState.addVender.filter(
          ls => ls._id !== action.payload._id
        );
      }
      return deepCopy(mState);
    case DELETE_VENDOR_ERROR:
      if (action.payload === null || action.payload === undefined) {
      } else {
        console.log("Error In Vender Deletion");
      }
      return deepCopy(mState);
    case UPDATE_VENDER_SUCCESS:
      if (action.payload === null || action.payload === undefined) {
      } else {
        const sTasks = mState.searchVender;
        const index1 = mState.searchVender.findIndex(
          ls => ls._id === action.payload._id
        );
        if (index1 >= 0) {
          sTasks[index1] = action.payload;
        }
        const mTasks = mState.addVender;
        const index = mState.addVender.findIndex(
          ls => ls._id === action.payload._id
        );
        if (index >= 0) {
          mTasks[index] = action.payload;
        }
      }
      return deepCopy(mState);
    case UPDATE_VENDER_ERROR:
      if (action.payload === null || action.payload === undefined) {
      } else {
        console.log("Update Vender Error Case");
      }
      return deepCopy(mState);
    case SEARCH_VENDER_BY_NAME:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.searchVender = [];
        mState.searchError = "";
        mState.addVender.forEach(unit => {
          if (unit.vendorName.toUpperCase().includes(action.payload)) {
            mState.searchVender.push(unit);
          } else {
            mState.searchError = "Vendor Not Found";
          }
        });
      }
    default:
      return deepCopy(mState);
  }
}

const deepCopy = obj => {
  const newObj = JSON.parse(JSON.stringify(obj));
  return newObj;
};
export default authReducer;
