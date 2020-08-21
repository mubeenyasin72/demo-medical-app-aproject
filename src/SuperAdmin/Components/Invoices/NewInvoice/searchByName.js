import React, { Component } from "react";
import Autosuggest from "react-autosuggest";
import { connect } from "react-redux";
import {
  searchMedicineByNameAction,
  searchDataNameInvoice
} from "../../../Actions/SearchMedicineAction/searchMedicineAction";
import "./invoice.css";
class searchByName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      suggestions: [],
      languages: [],
      numericValue: 0
    };
  }
  getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : this.state.languages.filter(
          lang => lang.name.toLowerCase().slice(0, inputLength) === inputValue
        );
  };
  getSuggestionValue = suggestion => {
    this.props.searchDataNameInvoice(suggestion.year);
    return suggestion.name;
  };

  renderSuggestion = suggestion => {
    return (
      <li className="contact">
        <img
          src={"https://pharmacysys.herokuapp.com" + suggestion.image[0]}
          width="60px"
          height="60px"
          className="contact-image"
        />
        <div
          className="contact-info"
          style={{
            position: "absolute",
            marginLeft: "70px",
            marginTop: "-65px"
          }}
        >
          <div className="contact-name" style={{ marginTop: "2px" }}>
            {suggestion.name}
          </div>
          <div className="contact-name" style={{ marginTop: "26px" }}>
            {suggestion.name2}
          </div>
          <div style={{ marginLeft: "-85px", marginTop: "-45px" }}>
            {suggestion.key}
          </div>
        </div>
      </li>
    );
  };
  onChange = (event, { newValue }) => {
    let value = newValue.slice(-1).match(/(\d+)/);
    if (value === null) {
      this.setState(
        {
          value: newValue
        },
        () => {
          this.props.searchMedicineByNameAction(this.state.value, this);
        }
      );
    } else {
      this.setState({ numericValue: newValue.slice(-1) });
      console.log(this.state.numericValue, "ITS A NUMERIC VALUE");
    }
    // this.setState(
    //   {
    //     value: newValue
    //   },
    //   () => {
    //     this.props.searchMedicineByNameAction(this.state.value, this);
    //   }
    // );
  };
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };
  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Search By Name",
      value,
      onChange: this.onChange
    };
    console.log(this.state.languages, "THis Is The Search By Name Data");
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps}
              />
              {this.props.byNameError ? (
                <span
                  style={{
                    fontSize: "11px",
                    color: "red",
                    marginLeft: "100px"
                  }}
                >
                  {this.props.byNameError}
                </span>
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
  byNameError: state.SearchedMedicineReducer.byNameError
});
export default connect(mapStateToProps, {
  searchMedicineByNameAction,
  searchDataNameInvoice
})(searchByName);
