import {
  ADD_MEDICINE_SUCCESS,
  ADD_MEDICINE_ERROR,
  SHOW_MEDICINE_SUCCESS,
  SHOW_MEDICINE_ERROR,
  DELETE_MEDICINE_SUCCESS,
  DELETE_MEDICINE_ERROR,
  SEND_MEDICINE_SUCCESS,
  SEND_MEDICINE_ERROR,
  UPDATE_MEDICINE_SUCCESS,
  UPDATE_MEDICINE_ERROR,
  SEARCH_MEDICINE_BY_NAME
} from "../../../Actions/types";

const state = {
  addMedicine: [],
  netError: "",
  updateError: "",
  netError2: "",
  searchMedicine: [],
  searchError: ""
};
function addMedicineReducer(mState = { ...state }, action) {
  switch (action.type) {
    case ADD_MEDICINE_SUCCESS:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.netError2 = "";
        mState.addMedicine.unshift(action.payload);
      }
      return deepCopy(mState);
    case ADD_MEDICINE_ERROR:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.netError2 = action.payload;
        console.log(action.payload, "This is In add Medicine Reducder");
      }
      return deepCopy(mState);
    case SHOW_MEDICINE_SUCCESS:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.netError = "";
        mState.addMedicine = [];
        mState.addMedicine = action.payload;
        mState.addMedicine = mState.addMedicine.reverse();
      }
      return deepCopy(mState);

    case SHOW_MEDICINE_ERROR:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.addMedicine = [];
        mState.netError = action.payload;
      }
      return deepCopy(mState);
    case DELETE_MEDICINE_SUCCESS:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.addMedicine = mState.addMedicine.filter(
          ls => ls._id !== action.payload._id
        );
        mState.searchMedicine = mState.searchMedicine.filter(
          ls => ls._id !== action.payload._id
        );
      }
      return deepCopy(mState);
    case DELETE_MEDICINE_ERROR:
      if (action.payload === null || action.payload === undefined) {
      } else {
        console.log(action.payload);
      }
      return deepCopy(mState);
    case SEND_MEDICINE_SUCCESS:
      if (action.payload === null || action.payload === undefined) {
      } else {
      }
      return deepCopy(mState);
    case SEND_MEDICINE_ERROR:
      if (action.payload === null || action.payload === undefined) {
      } else {
        console.log(action.payload);
      }
      return deepCopy(mState);
    case UPDATE_MEDICINE_SUCCESS:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.updateError = "";
        const mTasks = mState.addMedicine;
        const index = mState.addMedicine.findIndex(
          ls => ls._id === action.payload._id
        );
        if (index >= 0) {
          mTasks[index] = action.payload;
        }
        const mTasks1 = mState.searchMedicine;
        const index1 = mState.searchMedicine.findIndex(
          ls => ls._id === action.payload._id
        );
        if (index1 >= 0) {
          mTasks1[index] = action.payload;
        }
      }
      return deepCopy(mState);
    case UPDATE_MEDICINE_ERROR:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.addMedicine = [];
        console.log(action.payload);
        mState.updateError = action.payload;
      }
      return deepCopy(mState);
    case SEARCH_MEDICINE_BY_NAME:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.searchMedicine = [];
        mState.searchError = "";
        mState.addMedicine.forEach(unit => {
          if (unit.medicineName.toUpperCase().includes(action.payload)) {
            mState.searchMedicine.push(unit);
          } else {
            mState.searchError = "Medicine Not Found";
          }
        });
        console.log(mState.searchError, "Reducer");
      }
    default:
      return deepCopy(mState);
  }
}

const deepCopy = obj => {
  const newObj = JSON.parse(JSON.stringify(obj));
  return newObj;
};
export default addMedicineReducer;
