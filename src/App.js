import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "../src/Store/store";
import NewRoutingFile from "../src/Routing/MainRouting/mainRounting";
import EmployeeLogin from "./SuperAdmin/Components/Invoices/NewInvoice/newInvoiceForm";
class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <NewRoutingFile />
        </Provider>
      </React.Fragment>
    );
  }
}
export default App;
