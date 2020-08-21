import {
  ADD_UNIT_SUCCESS,
  ADD_UNIT_ERROR,
  SHOW_UNIT_LIST_SUCCESS,
  SHOW_UNIT_LIST_ERROR,
  DELETE_UNIT_LIST_SUCCESS,
  DELETE_UNIT_LIST_ERROR,
  UPDATE_UNIT_LIST_SUCCESS,
  UPDATE_UNIT_LIST_ERROR,
  SEARCH_UNIT_LIST
} from "../../Actions/types";
import { BaseURL } from "../baseURL";
import axios from "axios";
import UnitClass from "../../BusinessLogics/ActionsLogics/AddUnitListClass/medUnitListClass";
export const addUnitAction = (Data, ctrl) => dispatch => {
  const state = {
    medicineUnit: Data
  };
  axios
    .post(BaseURL + "medicine/med/add-medicineUnit", state)
    .then(response => {
      if (response.data.success === true) {
        ctrl.setState({ loading: false });
        dispatch({
          type: ADD_UNIT_SUCCESS,
          payload: response.data.savedMedUnit
        });
        ctrl.setState({ medicineUnitName: "" });
      } else {
        ctrl.setState({ loading: false });
        dispatch({
          type: ADD_UNIT_ERROR,
          payload: response.data.msg
        });
      }
    })
    .catch(error => {
      ctrl.setState({ loading: false });
      dispatch({
        type: ADD_UNIT_ERROR,
        payload: "Network Error"
      });
      console.log(error);
    });
};
export const showUnitListAction = ctrl => dispatch => {
  const state = {
    medicineUnitList: []
  };
  axios
    .post(BaseURL + "medicine/med/show-medicineUnit-list")
    .then(response => {
      if (response.data.success === true) {
        console.log(response.data, "Show Unit List Data");
        ctrl.setState({ loading1: false });
        response.data.foundAllMedUnitList.forEach(unitList => {
          state.medicineUnitList.push(new UnitClass().setUnitList(unitList));
        });
        dispatch({
          type: SHOW_UNIT_LIST_SUCCESS,
          payload: state.medicineUnitList
        });
      } else {
        ctrl.setState({ loading1: false });
        dispatch({
          type: SHOW_UNIT_LIST_ERROR,
          payload: response.data.msg
        });
      }
    })
    .catch(error => {
      dispatch({
        type: SHOW_UNIT_LIST_ERROR,
        payload: "Network Error"
      });
      ctrl.setState({ loading1: false });
      console.log(error);
    });
};
export const deleteUnitListAction = (Data, ctrl) => dispatch => {
  const state = {
    medicineUnitID: Data
  };
  console.log(state, "This Is The Action data");
  axios
    .post(BaseURL + "medicine/med/delete-medicineUnit", state)
    .then(response => {
      if (response.data.success === true) {
        // ctrl.setState({ delLoading: false });
        dispatch({
          type: DELETE_UNIT_LIST_SUCCESS,
          payload: response.data.DeletedmedicineUnit
        });
      } else {
        // ctrl.setState({ delLoading: false });
        dispatch({
          type: DELETE_UNIT_LIST_ERROR,
          payload: response.data.msg
        });
      }
    })
    .catch(error => {
      // ctrl.setState({ delLoading: false });
      console.log(error);
    });
};

export const updateUnitListAction = (Data, ctrl) => dispatch => {
  const state = {
    medicineUnit: Data
  };
  console.log(state, "This Is The Action Update Data data");
  axios
    .post(BaseURL + "medicine/med/update-medicineUnit", state)
    .then(response => {
      if (response.data.success === true) {
        ctrl.setState({ edit: false });
        dispatch({
          type: UPDATE_UNIT_LIST_SUCCESS,
          payload: response.data.savedMedUnit
        });
        // ctrl.setState({ editUnitMedicine: false });
      } else {
        dispatch({
          type: UPDATE_UNIT_LIST_ERROR,
          payload: response.data.msg
        });
      }
    })
    .catch(error => {
      dispatch({
        type: UPDATE_UNIT_LIST_ERROR,
        payload: "Network Error"
      });
      console.log(error);
    });
};

export const searchMedicineUnitAction = Data => dispatch => {
  console.log(Data, "Search Medicine Unit Action");
  dispatch({
    type: SEARCH_UNIT_LIST,
    payload: Data
  });
};
