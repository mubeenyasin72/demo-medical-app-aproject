import {
  ADD_STOCK_SUCCESS,
  ADD_STOCK_ERROR,
  SHOW_STOCK_LIST_SUCCESS,
  SHOW_STOCK_LIST_ERROR,
  SHOW_EXPIRE_STOCK_SUCCESS,
  SHOW_EXPIRE_STOCK_ERROR,
  SHOW_EXPIRE_MEDICINE_SUCCESS,
  SHOW_EXPIRE_MEDICINE_ERROR,
  SEARCH_STOCK_BY_NAME,
  EXPIRED_MEDICINE_STOCK,
  OUT_OF_STOCK
} from "../../Actions/types";

const state = {
  addStock: [],
  displayStock: [],
  expiredStockList: [],
  expiredMedicine: [],
  expiredStockMsg: "",
  addstockResMsg: "",
  msgError: "",
  addDataError: "",
  expiredMedicineMsg: "",
  expiredMedStock: [],
  searchExpiredMedError: "",
  outOfStock: [],
  SearchOutStockError: ""
};
function stockReducer(mState = { ...state }, action) {
  switch (action.type) {
    case ADD_STOCK_SUCCESS:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.addDataError = "";
        mState.addStock.unshift(action.payload);
      }
      return deepCopy(mState);
    case ADD_STOCK_ERROR:
      if (action.payload === null || action.payload === undefined) {
      } else {
        console.log(action.payload);
        mState.addDataError = action.payload;
      }
      return deepCopy(mState);
    case SHOW_STOCK_LIST_SUCCESS:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.msgError = "";
        mState.addStock = [];
        mState.addStock = action.payload;
        mState.addStock = mState.addStock.reverse();
      }
      return deepCopy(mState);
    case SHOW_STOCK_LIST_ERROR:
      if (action.payload === null || action.payload === undefined) {
      } else {
        console.log(action.payload);
        mState.addStock = [];
        mState.msgError = action.payload;
      }
      return deepCopy(mState);
    case SHOW_EXPIRE_STOCK_SUCCESS:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.expiredStockMsg = "";
        mState.expiredStockList = [];
        mState.expiredStockList = action.payload;
        mState.expiredStockList = mState.expiredStockList.reverse();
      }
      return deepCopy(mState);
    case SHOW_EXPIRE_STOCK_ERROR:
      if (action.payload === null || action.payload === undefined) {
      } else {
        console.log(action.payload);
        mState.expiredStockList = [];
        mState.expiredStockMsg = action.payload;
      }
      return deepCopy(mState);
    case SHOW_EXPIRE_MEDICINE_SUCCESS:
      if (action.payload === null || action.payload === undefined) {
      } else {
        console.log(action.payload, "Expired Medicine Reducer Data");
        mState.expiredMedicineMsg = "";
        mState.expiredMedicine = [];
        mState.expiredMedicine = action.payload;
        mState.expiredMedicine = mState.expiredMedicine.reverse();
      }
      return deepCopy(mState);
    case SHOW_EXPIRE_MEDICINE_ERROR:
      if (action.payload === null || action.payload === undefined) {
      } else {
        console.log(action.payload);
        mState.expiredMedicine = [];
        mState.expiredMedicineMsg = action.payload;
      }
      return deepCopy(mState);
    case SEARCH_STOCK_BY_NAME:
      if (action.payload === null || action.payload === undefined) {
      } else {
        console.log(action.payload, "In Stock Reducer");
      }
    case EXPIRED_MEDICINE_STOCK:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.expiredMedStock = [];
        mState.searchExpiredMedError = "";
        mState.expiredMedicine.forEach(unit => {
          if (
            unit.medicine.medicineName.toUpperCase().includes(action.payload)
          ) {
            mState.expiredMedStock.push(unit);
          } else {
            mState.searchExpiredMedError = "Medicine Not Found";
          }
        });
        console.log(mState.expiredMedStock, "Medicine");
      }
    case OUT_OF_STOCK:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.outOfStock = [];
        mState.SearchOutStockError = "";
        mState.expiredStockList.forEach(unit => {
          if (
            unit.medicine.medicineName.toUpperCase().includes(action.payload)
          ) {
            mState.outOfStock.push(unit);
          } else {
            mState.SearchOutStockError = "No Stock Found";
          }
        });
        console.log(mState.outOfStock, "Stock Data");
      }
    default:
      return deepCopy(mState);
  }
}

const deepCopy = obj => {
  const newObj = JSON.parse(JSON.stringify(obj));
  return newObj;
};
export default stockReducer;
