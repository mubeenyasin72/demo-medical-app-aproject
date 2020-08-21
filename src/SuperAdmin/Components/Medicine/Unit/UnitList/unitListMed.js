import React, { Component } from "react";
import {
  showUnitListAction,
  deleteUnitListAction,
  updateUnitListAction
} from "../../../../Actions/AddUnitAction/addUnitAction";
import { connect } from "react-redux";
import UnitListClass from "../../../../BusinessLogics/UpdateLogics/medicineListUpdate";
class unitListMed extends Component {
  state = {
    loading1: true,
    editUnitMedicine: false,
    ids: 0,
    newtask: ""
  };
  componentDidMount() {
    this.props.showUnitListAction(this);
  }
  render() {
    console.log(this.state.editUnitMedicine, "Edit Toggel");
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row mt-5">
            <div className="col-12">
              <div class="card">
                <div className="card-header">
                  <p
                    style={{
                      fontFamily: "Alegreya Sans",
                      fontSize: "20px",
                      lineHeight: "15px",
                      color: "#374767",
                      textAlign: "Left"
                    }}
                  >
                    Unit List
                  </p>
                </div>
                <div class="card-body">
                  {this.props.msgError ? (
                    <span
                      style={{
                        fontSize: "20px",
                        color: "red",
                        marginLeft: "600px"
                      }}
                    >
                      {this.props.msgError}
                    </span>
                  ) : (
                    ""
                  )}
                  <div className="row mt-5">
                    <div className="col-12">
                      {this.props.addUnit1.length > 0 ? (
                        <table className="table justify-content-center table-responsive-md table-bordered">
                          <thead>
                            <tr>
                              <th style={{ textAlign: "center" }}>Unit Name</th>
                              <th style={{ textAlign: "center" }}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.props.addUnit1.map(ls => (
                              <tr>
                                <td>
                                  {this.state.editUnitMedicine === true &&
                                  this.state.ids === ls._id ? (
                                    <span>
                                      <input
                                        class="w-100"
                                        style={{
                                          border: "none",
                                          borderBottom: "1px solid #45C203"
                                        }}
                                        type="text"
                                        defaultValue={ls.medicineUnitName}
                                        onChange={e =>
                                          this.setState({
                                            newtask: e.target.value
                                          })
                                        }
                                      />
                                    </span>
                                  ) : (
                                    <span>{ls.medicineUnitName}</span>
                                  )}
                                </td>
                                <td>
                                  {this.state.editUnitMedicine === true &&
                                  this.state.ids === ls._id ? (
                                    <a
                                      href="#"
                                      onClick={() => {
                                        this.setState({ ids: ls._id });
                                        {
                                          this.props.updateUnitListAction(
                                            new UnitListClass(
                                              ls._id,
                                              this.state.newtask
                                            ),
                                            this
                                          );
                                        }
                                      }}
                                    >
                                      <i
                                        class="fa fa-share-square-o mr-3"
                                        style={{
                                          border: "1px solid #53D4FA",
                                          padding: "10px",
                                          backgroundColor: "#53D4FA",
                                          color: "white",
                                          borderRadius: "5px"
                                        }}
                                      ></i>
                                    </a>
                                  ) : (
                                    <a
                                      href="#"
                                      onClick={() => {
                                        this.setState({
                                          newtask: ls.medicineUnitName
                                        });
                                        this.setState({
                                          editUnitMedicine: !this.state
                                            .editUnitMedicine,
                                          ids: ls._id
                                        });
                                      }}
                                    >
                                      <i
                                        class="fa fa-pencil  mr-3"
                                        style={{
                                          border: "1px solid #53D4FA",
                                          padding: "10px",
                                          backgroundColor: "#53D4FA",
                                          color: "white",
                                          borderRadius: "5px"
                                        }}
                                      ></i>
                                    </a>
                                  )}
                                  <a
                                    href="#"
                                    onClick={() =>
                                      this.props.deleteUnitListAction(ls._id)
                                    }
                                  >
                                    <i
                                      class="fa fa-trash-o"
                                      style={{
                                        border: "1px solid red",
                                        backgroundColor: "#E64048",
                                        color: "white",
                                        borderRadius: "5px",
                                        padding: "10px"
                                      }}
                                    ></i>
                                  </a>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      ) : (
                        this.state.loading1 && (
                          <i
                            class="spinner-border spinner-border-lg text-center"
                            role="status"
                            style={{
                              textAlign: "center",
                              color: "#45C203",
                              marginLeft: "600px",
                              height: "30px",
                              width: "30px"
                            }}
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  addUnit1: state.AddUnitReducer.addUnit,
  msgError: state.AddUnitReducer.msgError
});
export default connect(mapStateToProps, {
  showUnitListAction,
  deleteUnitListAction,
  updateUnitListAction
})(unitListMed);
