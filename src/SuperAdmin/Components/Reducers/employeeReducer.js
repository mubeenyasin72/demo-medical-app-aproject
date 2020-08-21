import {
  ADD_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEE_ERROR,
  SHOW_EMPLOYEE_LIST_SUCCESS,
  SHOW_EMPLOYEE_LIST_ERROR,
  UPDATE_EMPLOYEE_SUCCESS,
  UPDATE_EMPLOYEE_ERROR,
  BLOCK_EMPLOYEE_SUCCESS,
  BLOCK_EMPLOYEE_ERROR,
  UNBLOCK_EMPLOYEE_SUCCESS,
  UNBLOCK_EMPLOYEE_ERROR,
  SEARCH_EMPLOYEE_BY_NAME
} from "../../Actions/types";
const state = {
  employee: [],
  netError: "",
  netError2: "",
  updateError: "",
  searcEmployee: [],
  searchError: ""
};

function EmployeeReducer(mState = { ...state }, action) {
  switch (action.type) {
    case ADD_EMPLOYEE_SUCCESS:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.netError2 = "";
        mState.netError = "";
        mState.employee.unshift(action.payload);
      }
      return deepCopy(mState);
    case ADD_EMPLOYEE_ERROR:
      if (action.payload === null || action.payload === undefined) {
      } else {
        console.log(action.payload);
        mState.netError = action.payload;
      }
      return deepCopy(mState);
    case SHOW_EMPLOYEE_LIST_SUCCESS:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.netError2 = "";
        mState.employee = [];
        mState.employee = action.payload;
        mState.employee = mState.employee.reverse();
      }
      return deepCopy(mState);

    case SHOW_EMPLOYEE_LIST_ERROR:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.employee = [];
        mState.netError2 = action.payload;
      }
      return deepCopy(mState);
    case UPDATE_EMPLOYEE_SUCCESS:
      if (action.payload === null || action.payload === undefined) {
      } else {
        const sTasks = mState.searcEmployee;
        const index1 = mState.searcEmployee.findIndex(
          ls => ls._id === action.payload._id
        );
        if (index1 >= 0) {
          sTasks[index1] = action.payload;
        }
        mState.updateError = "";
        const mTasks = mState.employee;
        const index = mState.employee.findIndex(
          ls => ls._id === action.payload._id
        );
        if (index >= 0) {
          mTasks[index] = action.payload;
        }
      }
      return deepCopy(mState);
    case UPDATE_EMPLOYEE_ERROR:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.updateError = action.payload;
        console.log(action.payload);
      }
      return deepCopy(mState);
    case BLOCK_EMPLOYEE_SUCCESS:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.employee.forEach(employees => {
          console.log(action.payload.id);
          if (employees._id === action.payload.id) {
            employees.isBlocked = action.payload.isBlocked;
          }
        });
        mState.searcEmployee.forEach(employees => {
          console.log(action.payload.id);
          if (employees._id === action.payload.id) {
            employees.isBlocked = action.payload.isBlocked;
          }
        });
      }
      return deepCopy(mState);
    case BLOCK_EMPLOYEE_ERROR:
      if (action.payload === null || action.payload === undefined) {
      } else {
        console.log(action.payload);
        mState.employee = [];
      }
      return deepCopy(mState);
    case UNBLOCK_EMPLOYEE_SUCCESS:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.employee.forEach(employees => {
          if (employees._id === action.payload.id) {
            employees.isBlocked = action.payload.isBlocked;
          }
        });
        mState.searcEmployee.forEach(employees => {
          console.log(action.payload.id);
          if (employees._id === action.payload.id) {
            employees.isBlocked = action.payload.isBlocked;
          }
        });
      }
      return deepCopy(mState);
    case UNBLOCK_EMPLOYEE_ERROR:
      if (action.payload === null || action.payload === undefined) {
      } else {
        console.log(action.payload);
        mState.employee = [];
      }
      return deepCopy(mState);
    case SEARCH_EMPLOYEE_BY_NAME:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.searcEmployee = [];
        mState.searchError = "";
        mState.employee.forEach(unit => {
          if (unit.userName.toUpperCase().includes(action.payload)) {
            mState.searcEmployee.push(unit);
          } else {
            mState.searchError = "Employee Not Found";
          }
        });
      }
    default:
      return deepCopy(mState);
  }
}

const deepCopy = obj => {
  const newObj = JSON.parse(JSON.stringify(obj));
  return newObj;
};
export default EmployeeReducer;
