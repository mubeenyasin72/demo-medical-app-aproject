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
} from "../types";
import { BaseURL } from "../baseURL";
import axios from "axios";
import history from "../../../Routing/History/history";
import AddMedicineClass from "../../BusinessLogics/ActionsLogics/AddMedicineClass/addMedicineClass";
export const addMedicineAction = (Data, Pic, ctrl) => dispatch => {
  let data = JSON.stringify(Data);
  let formData = new FormData();
  formData.append("data", data);
  console.log(data, "Add Medicine Data");
  console.log(formData, "This is The Action Data");
  formData.append("medicineImage", Pic[0]);
  axios
    .post(BaseURL + "medicine/med/add-medicine-metadata-wt-image", formData)
    .then(response => {
      console.log(response.data);
      if (response.data.success === true) {
        ctrl.setState({ loading: false });
        dispatch({
          type: ADD_MEDICINE_SUCCESS,
          payload: response.data.savedMedicine
        });
        history.push("/SuperAdmin/ManageMedicineView");
      } else {
        ctrl.setState({ loading: false });
        dispatch({
          type: ADD_MEDICINE_ERROR,
          payload: response.data.msg
        });
      }
    })
    .catch(error => {
      ctrl.setState({ loading: false });
      console.log(error);
      dispatch({
        type: ADD_MEDICINE_ERROR,
        payload: "Network Error"
      });
    });
};

export const showMedicineAction = ctrl => dispatch => {
  const state = {
    foundListOfMedicines1: []
  };
  console.log(state, "Medicine Actions");
  axios
    .post(BaseURL + "medicine/med/show-all-medicines")
    .then(response => {
      console.log(response, "This Is The Show Medicine Response");
      if (response.data.success === true) {
        ctrl.setState({ loading1: false });
        response.data.foundListOfMedicines.forEach(medicine => {
          state.foundListOfMedicines1.push(
            new AddMedicineClass().setMedicine(medicine)
          );
        });
        dispatch({
          type: SHOW_MEDICINE_SUCCESS,
          payload: state.foundListOfMedicines1
        });
      } else {
        ctrl.setState({ loading1: false });
        dispatch({
          type: SHOW_MEDICINE_ERROR,
          payload: response.data.msg
        });
      }
    })
    .catch(error => {
      dispatch({
        type: SHOW_MEDICINE_ERROR,
        payload: "Network Error"
      });
      ctrl.setState({ loading1: false });
      console.log(error);
    });
};
export const deleteMedicineAction = (Data, ctrl) => dispatch => {
  console.log(Data, "This The Delete Medicine Data ");
  const state = {
    medicineID: Data
  };

  axios
    .post(BaseURL + "medicine/med/delete-medicine", state)
    .then(response => {
      if (response.data.success === true) {
        dispatch({
          type: DELETE_MEDICINE_SUCCESS,
          payload: response.data.Deletedmedicine
        });
      } else {
        dispatch({
          type: DELETE_MEDICINE_ERROR,
          payload: response.data.msg
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
};
export const sendMedicineDataIDAction = (Data, ctrl) => dispatch => {
  const state = {
    medicineID: Data
  };
  console.log(state, "Send Medicine Data Action");
  axios
    .post(BaseURL + "medicine/med/show-single-medicine-against-id", state)
    .then(response => {
      console.log(response.data);
      if (response.data.success === true) {
        dispatch({
          type: SEND_MEDICINE_SUCCESS,
          payload: response.data.foundMedicine
        });
        ctrl.setState({
          medicineName: response.data.foundMedicine.medicineName,

          salt: response.data.foundMedicine.salt,

          noOfSachet: response.data.foundMedicine.noOfSachet,

          noOfTabletsPerSachet:
            response.data.foundMedicine.noOfTabletsPerSachet,

          noOfTablets: response.data.foundMedicine.noOfTablets,

          medicineUnitID:
            response.data.foundMedicine.medicineUnit.medicineUnitName,

          isUnboxAllowed: response.data.foundMedicine.isUnboxAllowed,

          companyID: response.data.foundMedicine.company.companyName,

          employeeID: response.data.foundMedicine.employee.userName,

          medicineTypeID:
            response.data.foundMedicine.medicineType.medicineTypeName,

          medicineUnitValue: response.data.foundMedicine.medicineUnitValue,

          fileArray: response.data.foundMedicine.medicineImgURL
        });
      } else {
        dispatch({
          type: SEND_MEDICINE_ERROR,
          payload: response.data.msg
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
};

export const updateMedicineAction = (Data, Pic, ctrl) => dispatch => {
  let data = JSON.stringify(Data);
  let formData = new FormData();
  formData.append("data", data);
  formData.append("medicineImage", Pic[0]);
  console.log(Pic, "Action In Add Medicine");
  axios
    .post(BaseURL + "medicine/med/update-medicine-metadata-wt-image", formData)
    .then(response => {
      console.log(response.data, "Upadate Medicine Action ");
      if (response.data.success === true) {
        dispatch({
          type: UPDATE_MEDICINE_SUCCESS,
          payload: response.data.savedMedicine
        });
        window.location.reload();
      } else {
        dispatch({
          type: UPDATE_MEDICINE_ERROR,
          payload: response.data.msg
        });
      }

      ctrl.setState({ loading: false });
    })
    .catch(error => {
      dispatch({
        type: UPDATE_MEDICINE_ERROR,
        payload: "Network Error"
      });
      console.log(error);
    });
};

export const searchMedicineByNameAction = Data => dispatch => {
  console.log(Data, "Search Medicine Data");
  dispatch({
    type: SEARCH_MEDICINE_BY_NAME,
    payload: Data
  });
};
