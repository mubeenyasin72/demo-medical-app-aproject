import {
  ADD_UNIT_SUCCESS,
  ADD_UNIT_ERROR,
  SHOW_UNIT_LIST_SUCCESS,
  SHOW_UNIT_LIST_ERROR,
  DELETE_UNIT_LIST_ERROR,
  DELETE_UNIT_LIST_SUCCESS,
  UPDATE_UNIT_LIST_SUCCESS,
  UPDATE_UNIT_LIST_ERROR,
  SEARCH_UNIT_LIST
} from "../../../Actions/types";

const state = {
  addUnit: [],
  resMsgType: "",
  msgError: "",
  netError2: "",
  seachMedUnit: [],
  searchError: ""
};

function addUnitReducer(mState = { ...state }, action) {
  switch (action.type) {
    case ADD_UNIT_SUCCESS:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.resMsgType = "";
        mState.netError2 = "";
        mState.addUnit.unshift(action.payload);
      }
      return deepCopy(mState);
    case ADD_UNIT_ERROR:
      if (action.payload === null || action.payload === undefined) {
      } else {
        console.log(action.payload);
        mState.netError2 = action.payload;
      }
      return deepCopy(mState);
    case SHOW_UNIT_LIST_SUCCESS:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.resMsgType = "";
        mState.addUnit = [];
        mState.addUnit = action.payload;
        mState.addUnit = mState.addUnit.reverse();
      }
      return deepCopy(mState);
    case SHOW_UNIT_LIST_ERROR:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.addUnit = [];
        mState.resMsgType = action.payload;
      }
      return deepCopy(mState);
    case DELETE_UNIT_LIST_SUCCESS:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.addUnit = mState.addUnit.filter(
          ls => ls._id !== action.payload._id
        );
        mState.seachMedUnit = mState.seachMedUnit.filter(
          ls => ls._id !== action.payload._id
        );
      }
      return deepCopy(mState);
    case DELETE_UNIT_LIST_ERROR:
      if (action.payload === null || action.payload === undefined) {
      } else {
        console.log("This is The Deletion Case in the Unit LIST");
      }
      return deepCopy(mState);
    case UPDATE_UNIT_LIST_SUCCESS:
      if (action.payload === null || action.payload === undefined) {
      } else {
        const sTasks = mState.seachMedUnit;
        const index1 = mState.seachMedUnit.findIndex(
          ls => ls._id === action.payload._id
        );
        if (index1 >= 0) {
          sTasks[index1] = action.payload;
        }

        const mTasks = mState.addUnit;
        const index = mState.addUnit.findIndex(
          ls => ls._id === action.payload._id
        );
        if (index >= 0) {
          mTasks[index] = action.payload;
        }
      }
      return deepCopy(mState);
    case UPDATE_UNIT_LIST_ERROR:
      if (action.payload === null || action.payload === undefined) {
      } else {
        console.log("Update Medicine Error Case");
      }
      return deepCopy(mState);
    case SEARCH_UNIT_LIST:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.seachMedUnit = [];
        mState.searchError = "";
        mState.addUnit.forEach(unit => {
          if (unit.medicineUnitName.toUpperCase().includes(action.payload)) {
            mState.seachMedUnit.push(unit);
          } else {
            mState.searchError = "Unit Not Found";
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
export default addUnitReducer;
