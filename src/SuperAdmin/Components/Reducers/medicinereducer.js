import {
  ADD_MEDICINE_TYPE_SUCCESS,
  ADD_MEDICINE_TYPE_ERROR,
  SHOW_MEDICINE_TYPE_LIST_SUCCESS,
  SHOW_MEDICINE_TYPE_LIST_ERROR,
  UPDATE_MEDICINE_TYPE_SUCCESS,
  UPDATE_MEDICINE_TYPE_ERROR,
  DELETE_MEDICINE_TYPE_SUCCESS,
  DELETE_MEDICINE_TYPE_ERROR,
  SEARCH_MEDICINE_TYPE
} from "../../Actions/types";

const state = {
  medicineTypeName: [],
  resMsgType: "",
  netError: "",
  searchMedType: [],
  searchError: ""
};
function medicineReducer(mState = { ...state }, action) {
  switch (action.type) {
    case ADD_MEDICINE_TYPE_SUCCESS:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.resMsgType = "";
        mState.netError = "";
        mState.medicineTypeName.unshift(action.payload);
      }
      return deepCopy(mState);

    case ADD_MEDICINE_TYPE_ERROR:
      if (action.payload === null || action.payload === undefined) {
      } else {
        console.log(action.payload);
        mState.resMsgType = action.payload;
      }
      return deepCopy(mState);

    case SHOW_MEDICINE_TYPE_LIST_SUCCESS:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.netError = "";
        mState.medicineTypeName = [];
        mState.medicineTypeName = action.payload;
        mState.medicineTypeName = mState.medicineTypeName.reverse();
      }
      return deepCopy(mState);

    case SHOW_MEDICINE_TYPE_LIST_ERROR:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.medicineTypeName = [];
        mState.netError = action.payload;
      }
      return deepCopy(mState);

    case UPDATE_MEDICINE_TYPE_SUCCESS:
      if (action.payload === null || action.payload === undefined) {
      } else {
        const sTasks = mState.searchMedType;
        const index1 = mState.searchMedType.findIndex(
          ls => ls._id === action.payload._id
        );
        if (index1 >= 0) {
          sTasks[index1] = action.payload;
        }
        const mTasks = mState.medicineTypeName;
        const index = mState.medicineTypeName.findIndex(
          ls => ls._id === action.payload._id
        );
        if (index >= 0) {
          mTasks[index] = action.payload;
        }
      }
      return deepCopy(mState);
    case UPDATE_MEDICINE_TYPE_ERROR:
      if (action.payload === null || action.payload === undefined) {
      } else {
        console.log("Update Medicine Type Error Case");
      }
      return deepCopy(mState);
    case DELETE_MEDICINE_TYPE_SUCCESS:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.searchMedType = mState.searchMedType.filter(
          ls => ls._id !== action.payload._id
        );
        mState.medicineTypeName = mState.medicineTypeName.filter(
          ls => ls._id !== action.payload._id
        );
      }
      return deepCopy(mState);
    case DELETE_MEDICINE_TYPE_ERROR:
      if (action.payload === null || action.payload === undefined) {
      } else {
        console.log("This is The Deletion Case in the Unit LIST");
      }
      return deepCopy(mState);
    case SEARCH_MEDICINE_TYPE:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.searchMedType = [];
        mState.searchError = "";
        mState.medicineTypeName.forEach(unit => {
          if (unit.medicineTypeName.toUpperCase().includes(action.payload)) {
            mState.searchMedType.push(unit);
          } else {
            mState.searchError = "Medicine Type Not Found";
          }
        });
        console.log(mState.searchMedType, "Med Type");
      }
    default:
      return deepCopy(mState);
  }
}

const deepCopy = obj => {
  const newObj = JSON.parse(JSON.stringify(obj));
  return newObj;
};
export default medicineReducer;
