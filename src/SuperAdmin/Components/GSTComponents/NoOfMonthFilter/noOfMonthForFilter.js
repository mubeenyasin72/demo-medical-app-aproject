import React, { Component } from "react";
import { connect } from "react-redux";
import {
  showGSTDataActions,
  updateNoOfMonthDataActions
} from "../../../Actions/GstActions/gstActions";
import { filterID } from "../FilterIDFolder/filterID";
import NoOfMonthClass from "../../../BusinessLogics/ActionsLogics/UpdateGstLogics/updateNoOfMonthClass";
class noOfMonthForFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noOfMonth: "",
      editMonth: false,
      loading: false
    };
  }
  componentDidMount() {
    this.props.showGSTDataActions(filterID, this);
  }
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row mt-5">
            <div className="col-12">
              <div class="card">
                <div className="card-header">
                  <p style={{ fontSize: "25px" }}>No.Of Month FIlter</p>
                </div>
                <div class="card-body">
                  <div className="row mt-3">
                    <div className="col-2">
                      <p>No.Of Month</p>
                    </div>
                    <div className="col-3">
                      {this.state.editMonth === true ? (
                        <span>
                          <input
                            style={{
                              border: "none",
                              borderBottom: "1px solid #45C203",
                              borderBottomLeftRadius: "0px",
                              borderBottomRightRadius: "0px"
                            }}
                            type="number"
                            class="form-control"
                            defaultValue={this.props.noOfMonth}
                            onChange={e =>
                              this.setState({ noOfMonth: e.target.value })
                            }
                          />
                        </span>
                      ) : (
                        <span>{this.props.noOfMonth}</span>
                      )}
                    </div>
                    <div className="col-2">
                      {this.state.editMonth === true ? (
                        <button
                          className="btn"
                          style={{ backgroundColor: "#45C203", color: "white" }}
                          onClick={() => {
                            this.setState(
                              {
                                loading: true
                              },
                              () => {
                                this.timer = setTimeout(() => {},
                                this.state.loading === false);
                                {
                                  this.props.updateNoOfMonthDataActions(
                                    new NoOfMonthClass(
                                      filterID,
                                      this.state.noOfMonth
                                    ),
                                    this
                                  );
                                }
                              }
                            );
                          }}
                          class="btn btn-block"
                          disabled={this.state.loading}
                        >
                          {this.state.loading && (
                            <i
                              class="spinner-border text-dark spinner-border-sm"
                              role="status"
                            />
                          )}
                          {this.state.loading && <span></span>}
                          {!this.state.loading && <span>Save</span>}
                        </button>
                      ) : (
                        <button
                          class="btn"
                          style={{ backgroundColor: "#45C203", color: "white" }}
                          onClick={() => {
                            this.setState({
                              noOfMonth: this.props.noOfMonth
                            });
                            this.setState({ editMonth: !this.state.editMonth });
                          }}
                        >
                          Update
                        </button>
                      )}
                    </div>
                    <div className="col-4"></div>
                  </div>
                </div>
                {this.props.errorMsg !== "" ? (
                  <div className="card-footer" style={{ textAlign: "center" }}>
                    {this.props.errorMsg ? (
                      <span
                        style={{
                          fontSize: "20px",
                          color: "red"
                        }}
                      >
                        {this.props.errorMsg}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  noOfMonth: state.GstReducers.noOfMonth,
  errorMsg: state.GstReducers.errorMsg
});
export default connect(mapStateToProps, {
  showGSTDataActions,
  updateNoOfMonthDataActions
})(noOfMonthForFilter);
