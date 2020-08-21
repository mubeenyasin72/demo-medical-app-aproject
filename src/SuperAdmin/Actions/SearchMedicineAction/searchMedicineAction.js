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
} from "../types";
import axios from "axios";
import { BaseURL } from "../baseURL";
import SearchBySaltClass from "../../BusinessLogics/ActionsLogics/SearchBySaltLogics/searchBySaltLogics";
import SearchByNameClass from "../../BusinessLogics/ActionsLogics/SearchByNameLogic/searchByNameLogics";
import SelectOptionClass from "../../BusinessLogics/SelectOptionClassLogic/selectOptionClass";
import SelectMedOptionClass from "../../BusinessLogics/SelectOptionClassLogic/selectOptionMedicine";
export const searchMedicineBySaltAction = (Data, ctrl) => dispatch => {
  const state = {
    medicineApiData: {
      medicine: {
        salt: Data
      }
    },
    foundListOfMedicinesBySalt: [],
    saltOptins1: []
  };
  axios
    .post(
      BaseURL + "medicine/search/search-medicine-by-salt",
      state.medicineApiData
    )
    .then(response => {
      if (response.data.success === true) {
        response.data.MedicineList.forEach(medicine => {
          state.foundListOfMedicinesBySalt.push(
            new SearchBySaltClass().setMedicineBySlat(medicine)
          );
        });
        dispatch({
          type: SEARCH_MEDICINE_BY_SALT_SUCCESS,
          payload: state.foundListOfMedicinesBySalt
        });
        response.data.MedicineList.forEach((ls, key) => {
          state.saltOptins1.push(new SelectOptionClass(ls, key));
        });
        ctrl.setState({
          languages: [...state.saltOptins1],
          toggle: true
        });
      } else {
        ctrl.setState({
          toggle: false
        });
        dispatch({
          type: SEARCH_MEDICINE_BY_SALT_ERRROR,
          payload: response.data.msg
        });
      }
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: SEARCH_MEDICINE_BY_SALT_ERRROR,
        payload: "Network Error"
      });
      ctrl.setState({
        toggle: false
      });
    });
};
export const searchDataFromInvoice = Data => dispatch => {
  dispatch({
    type: SEARCH_DATA_FROM_INVOICE,
    payload: Data
  });
};
export const searchMedicineByNameAction = (Data, ctrl) => dispatch => {
  const state = {
    medicineApiData: {
      medicine: {
        name: Data
      }
    },
    foundListOfMedicinesByName: [],
    saltOptins: []
  };
  axios
    .post(
      BaseURL + "medicine/search/search-medicine-by-name",
      state.medicineApiData
    )
    .then(response => {
      if (response.data.success === true) {
        response.data.MedicineList.forEach(medicineByName => {
          state.foundListOfMedicinesByName.push(
            new SearchByNameClass().setMedicineByName(medicineByName)
          );
        });
        dispatch({
          type: SEARCH_MEDICINE_BY_NAME_SUCCESS,
          payload: state.foundListOfMedicinesByName
        });
        response.data.MedicineList.forEach((ls, key) => {
          state.saltOptins.push(new SelectMedOptionClass(ls, key));
        });
        ctrl.setState({ languages: [...state.saltOptins] });
      } else {
        dispatch({
          type: SEARCH_MEDICINE_BY_NAME_ERROR,
          payload: response.data.msg
        });
      }
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: SEARCH_MEDICINE_BY_NAME_ERROR,
        payload: "Network Error"
      });
    });
};

export const searchDataNameInvoice = (Data, value) => dispatch => {
  console.log(Data, "SearchDataNameInvoice In The Action");
  dispatch({
    type: SEARCH_DATA_NAME_INVOICE,
    payload: Data
  });
};

export const selectedQuantityAction = Data => dispatch => {
  dispatch({
    type: SELECTED_QUNTITY_DATA,
    payload: Data
  });
};

export const totalPiceEachMedicineAction = Data => dispatch => {
  dispatch({
    type: TOTAL_PRICE_EACH_MEDICINE,
    payload: Data
  });
};

export const deleteRowDataInvoiceAction = Data => dispatch => {
  console.log(Data, "This Is the Delete ID");
  dispatch({
    type: DELETE_INVOICE_ROW_DATA,
    payload: Data
  });
};
