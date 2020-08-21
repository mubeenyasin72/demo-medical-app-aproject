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
} from "../types";
import { BaseURL } from "../baseURL";
import axios from "axios";
import history from "../../../Routing/History/history";
import StockListClass from "../../BusinessLogics/ActionsLogics/stockListLogics/stockListLigics";
import ExpireMedicine from "../../BusinessLogics/ActionsLogics/stockListLogics/expireMedicineClass";
import ExpireStock from "../../BusinessLogics/ActionsLogics/stockListLogics/expireStockClass";
export const addStockAction = (Data, ctrl) => dispatch => {
  const state = {
    stock: Data
  };
  console.log(state);
  axios
    .post(BaseURL + "stock/manage/add-new-stock", state)
    .then(response => {
      console.log(response.data, "Add Stock Data");
      if (response.data.success === true) {
        ctrl.setState({ loading: false });
        dispatch({
          type: ADD_STOCK_SUCCESS,
          payload: response.data.savedStock
        });
        history.push("/SuperAdmin/StockReportView");
      } else {
        ctrl.setState({ loading: false });
        dispatch({
          type: ADD_STOCK_ERROR,
          payload: response.data.msg
        });
      }
    })
    .catch(error => {
      ctrl.setState({ loading: false });
      dispatch({
        type: ADD_STOCK_ERROR,
        payload: "Network Error"
      });
    });
};
export const showStockListAction = ctrl => dispatch => {
  const state = {
    stockList: []
  };
  axios
    .post(BaseURL + "stock/manage/show-complete-stock-list")
    .then(response => {
      if (response.data.success === true) {
        ctrl.setState({ loading: false });
        response.data.foundAllStock.forEach(stockList => {
          ctrl.setState({ loading1: false });
          state.stockList.push(new StockListClass().setStockType(stockList));
        });
        dispatch({
          type: SHOW_STOCK_LIST_SUCCESS,
          payload: state.stockList
        });
      } else {
        ctrl.setState({ loading: false });
        dispatch({
          type: SHOW_STOCK_LIST_ERROR,
          payload: response.data.msg
        });
      }
    })
    .catch(error => {
      ctrl.setState({ loading: false });
      dispatch({
        type: SHOW_STOCK_LIST_ERROR,
        payload: "Network Error"
      });
      console.log(error);
    });
};

export const showExpiredStockListAction = ctrl => dispatch => {
  const state = {
    expireStockList: []
  };
  axios
    .post(BaseURL + "order/manage/show-all-out-of-Stock-medicines")
    .then(response => {
      if (response.data.success === true) {
        ctrl.setState({ loading: false });
        response.data.foundAllOutOfStock.forEach(stockList => {
          state.expireStockList.push(
            new ExpireStock().setExpireStock(stockList)
          );
        });
        dispatch({
          type: SHOW_EXPIRE_STOCK_SUCCESS,
          payload: state.expireStockList
        });
      } else {
        ctrl.setState({ loading: false });
        dispatch({
          type: SHOW_EXPIRE_STOCK_ERROR,
          payload: response.data.msg
        });
      }
    })
    .catch(error => {
      ctrl.setState({ loading: false });
      dispatch({
        type: SHOW_EXPIRE_STOCK_ERROR,
        payload: "Network Error"
      });
      console.log(error);
    });
};

export const showExpiredMedicineListAction = ctrl => dispatch => {
  const state = {
    expireMedicineList: []
  };
  axios
    .post(BaseURL + "stock/manage/show-expiry-alert-medicines")
    .then(response => {
      console.log(response.data, "THis is Action response");
      if (response.data.success === true) {
        ctrl.setState({ loading1: false });
        response.data.foundStock.forEach(expireMedicine => {
          state.expireMedicineList.push(
            new ExpireMedicine().setExpireMedidicineType(expireMedicine)
          );
        });
        dispatch({
          type: SHOW_EXPIRE_MEDICINE_SUCCESS,
          payload: state.expireMedicineList
        });
      } else {
        ctrl.setState({ loading1: false });
        dispatch({
          type: SHOW_EXPIRE_MEDICINE_ERROR,
          payload: response.data.msg
        });
      }
    })
    .catch(error => {
      ctrl.setState({ loading1: false });
      dispatch({
        type: SHOW_EXPIRE_MEDICINE_ERROR,
        payload: "Network Error"
      });
      console.log(error);
    });
};

export const searchStockAction = Data => dispatch => {
  console.log(Data);
  dispatch({
    type: SEARCH_STOCK_BY_NAME,
    payload: Data
  });
};

export const expiredMedicineStockAction = Data => dispatch => {
  console.log(Data);
  dispatch({
    type: EXPIRED_MEDICINE_STOCK,
    payload: Data
  });
};

export const outOfStockAction = Data => dispatch => {
  console.log(Data);
  dispatch({
    type: OUT_OF_STOCK,
    payload: Data
  });
};
