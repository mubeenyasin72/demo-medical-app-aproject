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
} from "../types";
import { BaseURL } from "../baseURL";
import axios from "axios";
import MedicineTypeClass from "../../BusinessLogics/ActionsLogics/MedicineLogics/medicineTypeClass";

export const addMedicineTypeAction = (Data, ctrl) => dispatch => {
  const state = {
    medicineType: Data
  };
  axios
    .post(BaseURL + "medicine/med/add-medicineType", state)
    .then(response => {
      if (response.data.success === true) {
        ctrl.setState({ loading: false });
        dispatch({
          type: ADD_MEDICINE_TYPE_SUCCESS,
          payload: response.data.savedMedtype
        });
      } else {
        ctrl.setState({ loading: false });
        dispatch({
          type: ADD_MEDICINE_TYPE_ERROR,
          payload: response.data.msg
        });
      }

      ctrl.setState({
        medicineTypeName: ""
      });
    })
    .catch(error => {
      ctrl.setState({ loading: false });
      console.log(error);
      dispatch({
        type: ADD_MEDICINE_TYPE_ERROR,
        payload: "Network Error"
      });
    });
};
export const showMedicineTypeAction = ctrl => dispatch => {
  const state = {
    medicineTypes: []
  };
  console.log(state, "Medicine Actions");
  axios
    .post(BaseURL + "medicine/med/show-medicineType-list")
    .then(response => {
      if (response.data.success === true) {
        ctrl.setState({ loading1: false });
        response.data.foundAllMedTypeList.forEach(medicineType => {
          state.medicineTypes.push(
            new MedicineTypeClass().setMedicineType(medicineType)
          );
        });
        dispatch({
          type: SHOW_MEDICINE_TYPE_LIST_SUCCESS,
          payload: state.medicineTypes
        });
      } else {
        ctrl.setState({ loading1: false });
        dispatch({
          type: SHOW_MEDICINE_TYPE_LIST_ERROR,
          payload: response.data.msg
        });
      }
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: SHOW_MEDICINE_TYPE_LIST_ERROR,
        payload: "Network Error"
      });
      ctrl.setState({ loading1: false });
    });
};

export const updateMedicineTypeAction = (Data, ctrl) => dispatch => {
  const state = {
    medicineType: Data
  };
  axios
    .post(BaseURL + "medicine/med/update-medicineType", state)
    .then(response => {
      if (response.data.success === true) {
        dispatch({
          type: UPDATE_MEDICINE_TYPE_SUCCESS,
          payload: response.data.savedMedtype
        });
        ctrl.setState({ editMedType: false });
      } else {
        dispatch({
          type: UPDATE_MEDICINE_TYPE_ERROR,
          payload: response.data.msg
        });
      }
    })
    .catch(error => {
      dispatch({
        type: UPDATE_MEDICINE_TYPE_ERROR,
        payload: "Network Error"
      });
      console.log(error);
    });
};
export const deleteMedicineTypeAction = Data => dispatch => {
  const state = {
    medicineTypeID: Data
  };
  axios
    .post(BaseURL + "medicine/med/delete-medicineType", state)
    .then(response => {
      if (response.data.success === true) {
        dispatch({
          type: DELETE_MEDICINE_TYPE_SUCCESS,
          payload: response.data.DeletedmedicineType
        });
      } else {
        dispatch({
          type: DELETE_MEDICINE_TYPE_ERROR,
          payload: response.data.msg
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
};

export const searchMedicineTypeAction = Data => dispatch => {
  console.log(Data);
  dispatch({
    type: SEARCH_MEDICINE_TYPE,
    payload: Data
  });
};
