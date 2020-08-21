import {
  SEARCH_MEDICINE_BY_SALT_ERRROR,
  SEARCH_MEDICINE_BY_SALT_SUCCESS,
  SEARCH_MEDICINE_BY_NAME_ERROR,
  SEARCH_MEDICINE_BY_NAME_SUCCESS,
  SEARCH_DATA_FROM_INVOICE,
  SEARCH_DATA_NAME_INVOICE,
  SELECTED_QUNTITY_DATA,
  TOTAL_PRICE_EACH_MEDICINE,
  DELETE_INVOICE_ROW_DATA
} from "../../../Actions/types";
import SearchQuantityClass from "../../../BusinessLogics/ReducerLogics/searchedMedicine";
import TotalPriceCLass from "../../../BusinessLogics/ReducerLogics/totalPriceReducerClass";
const state = {
  searchedMedicine: [],
  netError: "",
  searchdData: [],
  byNameError: "",
  bySaltError: "",
  selectedQuantity: 10
};
function searchedMedicineReducer(mState = { ...state }, action) {
  switch (action.type) {
    case SEARCH_MEDICINE_BY_SALT_SUCCESS:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.bySaltError = "";
        mState.searchedMedicine = [];
        mState.searchedMedicine = action.payload;
      }
      return deepCopy(mState);
    case SEARCH_MEDICINE_BY_SALT_ERRROR:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.bySaltError = action.payload;
        mState.searchedMedicine = [];
      }
      return deepCopy(mState);
    case SEARCH_DATA_FROM_INVOICE:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.searchedMedicine.forEach(medicine => {
          if (medicine._id === action.payload) {
            mState.searchdData.push(medicine);
          }
        });
        console.log(mState.searchdData, "This Reducer Data");
      }
      return deepCopy(mState);
    case SEARCH_MEDICINE_BY_NAME_SUCCESS:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.byNameError = "";
        mState.searchedMedicine = [];
        mState.searchedMedicine = action.payload;
      }
      return deepCopy(mState);
    case SEARCH_MEDICINE_BY_NAME_ERROR:
      if (action.payload === null || action.payload === undefined) {
      } else {
        console.log(action.payload);
        mState.byNameError = action.payload;
        mState.searchedMedicine = [];
      }
      return deepCopy(mState);
    case SELECTED_QUNTITY_DATA:
      if (action.payload === null || action.payload === undefined) {
      } else {
        let array = [];
        mState.searchdData.forEach(med => {
          array.push(new SearchQuantityClass().clone(med));
        });
        mState.searchdData = [];
        mState.searchdData = [...array];
        mState.searchdData.forEach(med => {
          if (med._id === action.payload.id) {
            med.setQuantity(action.payload.quantity);
            med.setTotalPrice(action.payload.price);
          }
        });
        console.log(mState.searchdData, "This is The Reducer Data");
      }
      return deepCopy(mState);
    case TOTAL_PRICE_EACH_MEDICINE:
      if (action.payload === null || action.payload === undefined) {
      } else {
      }
      return deepCopy(mState);
    case SEARCH_DATA_NAME_INVOICE:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.searchedMedicine.forEach(medicine => {
          if (medicine._id === action.payload) {
            mState.searchdData.push(medicine);
          }
        });
      }
      return deepCopy(mState);
    case DELETE_INVOICE_ROW_DATA:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.searchdData = mState.searchdData.filter(
          ls => ls._id !== action.payload
        );
      }
    default:
      return deepCopy(mState);
  }
}

const deepCopy = obj => {
  const newObj = JSON.parse(JSON.stringify(obj));
  return newObj;
};
export default searchedMedicineReducer;
