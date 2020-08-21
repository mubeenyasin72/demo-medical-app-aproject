import { combineReducers } from "redux";
import AuthReducer from "../SuperAdmin/Components/Reducers/authReducer";
import VenderReducer from "../SuperAdmin/Components/Reducers/vendorReducer";
import StockReducer from "../SuperAdmin/Components/Reducers/stockReducer";
import MedicineReducer from "../SuperAdmin/Components/Reducers/medicinereducer";
import EmployeeReducer from "../SuperAdmin/Components/Reducers/employeeReducer";
import CompayReducer from "../SuperAdmin/Components/Reducers/companyReducer";
import AddMedicineReducer from "../SuperAdmin/Components/Reducers/AddMedicineReducer/addMedicineReducer";
import AddUnitReducer from "../SuperAdmin/Components/Reducers/AddUnitReducer/addUnitReducer";
import SearchedMedicineReducer from "../SuperAdmin/Components/Reducers/SearchMedicineReducer/searchMedicineReducer";
import GstReducers from "../SuperAdmin/Components/Reducers/GSTReducers/gstReducers";
import EmployeeAuthReducer from "../EmployeeSide/EmployeeReducers/AuthReducer/employeeAuthReducer";
const rootReducer = combineReducers({
  AuthReducer,
  VenderReducer,
  StockReducer,
  MedicineReducer,
  EmployeeReducer,
  CompayReducer,
  AddMedicineReducer,
  AddUnitReducer,
  SearchedMedicineReducer,
  GstReducers,
  // EmployeeReducer
  EmployeeAuthReducer
});
export default rootReducer;
