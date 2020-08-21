import React, { Component } from "react";
import { connect } from "react-redux";
import {
  showGSTDataActions,
  updateDiscountDataActions
} from "../../../Actions/GstActions/gstActions";
import { filterID } from "../FilterIDFolder/filterID";
import DiscountClass from "../../../BusinessLogics/ActionsLogics/UpdateGstLogics/updateDiscountClass";
class discount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      discoutData: "",
      editDiscount: false,
      loading: false
    };
  }
  componentDidMount() {
    this.props.showGSTDataActions(filterID, this);
  }
  render() {
    console.log(this.state.discoutData);
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row mt-5">
            <div className="col-12">
              <div class="card">
                <div className="card-header">
                  <p style={{ fontSize: "25px" }}>Discount %</p>
                </div>
                <div class="card-body">
                  <div className="row mt-3">
                    <div className="col-3">
                      <p>Discount %</p>
                    </div>
                    <div className="col-3">
                      {this.state.editDiscount === true ? (
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
                            defaultValue={this.props.discount}
                            onChange={e =>
                              this.setState({ discoutData: e.target.value })
                            }
                          />
                        </span>
                      ) : (
                        <span>{this.props.discount}</span>
                      )}
                    </div>
                    <div className="col-2">
                      {this.state.editDiscount === true ? (
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
                                  this.props.updateDiscountDataActions(
                                    new DiscountClass(
                                      filterID,
                                      this.state.discoutData
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
                              discoutData: this.props.discount
                            });
                            this.setState({
                              editDiscount: !this.state.editDiscount
                            });
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
  discount: state.GstReducers.discount,
  errorMsg: state.GstReducers.errorMsg
});
export default connect(mapStateToProps, {
  showGSTDataActions,
  updateDiscountDataActions
})(discount);
