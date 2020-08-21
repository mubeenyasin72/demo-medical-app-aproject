import {
  ADD_COMPANY_SUCCESS,
  ADD_COMPANY_ERROR,
  SHOW_COMPANY_SUCCESS,
  SHOW_COMPANY_ERROR,
  UPDATE_COMPANY_SUCCESS,
  UPDATE_COMPANY_ERROR,
  SEARCH_VENDER_BY_NAME
} from "../../Actions/types";

const state = {
  company: [],
  netError: "",
  netError2: "",
  searchCompany: [],
  searchError: ""
};

function companyReducer(mState = { ...state }, action) {
  switch (action.type) {
    case ADD_COMPANY_SUCCESS:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.netError2 = "";
        mState.netError = "";
        mState.company.unshift(action.payload);
      }
      return deepCopy(mState);
    case ADD_COMPANY_ERROR:
      if (action.payload === null || action.payload === undefined) {
      } else {
        console.log(action.payload);
        mState.netError2 = action.payload;
      }
      return deepCopy(mState);
    case SHOW_COMPANY_SUCCESS:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.netError = "";
        mState.company = [];
        mState.company = action.payload;
        mState.company = mState.company.reverse();
      }
      return deepCopy(mState);
    case SHOW_COMPANY_ERROR:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.company = [];
        mState.netError = action.payload;
      }
      return deepCopy(mState);
    case UPDATE_COMPANY_SUCCESS:
      if (action.payload === null || action.payload === undefined) {
      } else {
        const sTasks = mState.searchCompany;
        const index1 = mState.searchCompany.findIndex(
          ls => ls._id === action.payload._id
        );
        if (index1 >= 0) {
          sTasks[index1] = action.payload;
        }
        ///////////////////////////////////
        const mTasks = mState.company;
        const index = mState.company.findIndex(
          ls => ls._id === action.payload._id
        );
        if (index >= 0) {
          mTasks[index] = action.payload;
        }
      }
      return deepCopy(mState);
    case UPDATE_COMPANY_ERROR:
      if (action.payload === null || action.payload === undefined) {
      } else {
        console.log("Update Medicine Error Case");
      }
      return deepCopy(mState);
    case SEARCH_VENDER_BY_NAME:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.searchCompany = [];
        mState.searchError = "";
        mState.company.forEach(unit => {
          if (unit.companyName.toUpperCase().includes(action.payload)) {
            mState.searchCompany.push(unit);
          } else {
            mState.searchError = "Company Not Found";
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

export default companyReducer;
