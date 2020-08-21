import React, { Component } from "react";
import { connect } from "react-redux";
import {
  showGSTDataActions,
  updateGSTDataActions
} from "../../../Actions/GstActions/gstActions";
import { filterID } from "../FilterIDFolder/filterID";
import GSTClass from "../../../BusinessLogics/ActionsLogics/UpdateGstLogics/updateGstClass";
class getGstPrecentage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gstData: "",
      editGst: false,
      loading: false
    };
  }
  toggle = () => {
    this.setState({ editGst: !this.state.editGst });
  };
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
                <div class="card-header">
                  <p style={{ fontSize: "25px" }}>
                    GST ( General Sales Tax ) %
                  </p>
                </div>
                <div class="card-body">
                  <div className="row">
                    <div className="col-3">
                      <p>GST %</p>
                    </div>
                    <div className="col-3">
                      {this.state.editGst === true ? (
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
                            defaultValue={this.props.gstData}
                            onChange={e =>
                              this.setState({ gstData: e.target.value })
                            }
                          />
                        </span>
                      ) : (
                        <span>{this.props.gstData}</span>
                      )}
                    </div>
                    <div className="col-2">
                      {this.state.editGst === true ? (
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
                                  this.props.updateGSTDataActions(
                                    new GSTClass(filterID, this.state.gstData),
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
                          {!this.state.loading && <span>Save</span>}
                        </button>
                      ) : (
                        <button
                          class="btn"
                          style={{ backgroundColor: "#45C203", color: "white" }}
                          onClick={() => {
                            this.setState({
                              gstData: this.props.gstData
                            });
                            this.setState({ editGst: !this.state.editGst });
                          }}
                        >
                          Update
                        </button>
                      )}
                    </div>
                  </div>
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
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  gstData: state.GstReducers.gstData,
  errorMsg: state.GstReducers.errorMsg,
  gstError: state.GstReducers.gstError
});
export default connect(mapStateToProps, {
  showGSTDataActions,
  updateGSTDataActions
})(getGstPrecentage);
