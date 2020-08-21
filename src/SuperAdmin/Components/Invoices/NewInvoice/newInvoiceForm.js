import React, { Component } from "react";
import Autosuggest from "react-autosuggest";
const languages = [
  {
    name: "C",
    year: 1972,
    image: "https://cdn.worldvectorlogo.com/logos/apple.svg"
  },
  {
    name: "C#",
    year: 2000,
    image: "https://cdn.worldvectorlogo.com/logos/android.svg"
  },
  {
    name: "C++",
    year: 1983,
    image: "https://cdn.worldvectorlogo.com/logos/windows.svg"
  },
  {
    name: "Clojure",
    year: 2007,
    image: "https://cdn.worldvectorlogo.com/logos/bbm-blackberry-messenger.svg"
  },
  {
    name: "Elm",
    year: 2012,
    image: "https://cdn.worldvectorlogo.com/logos/apple.svg"
  },
  {
    name: "Go",
    year: 2009,
    image: "https://cdn.worldvectorlogo.com/logos/apple.svg"
  },
  {
    name: "Haskell",
    year: 1990,
    image: "https://cdn.worldvectorlogo.com/logos/apple.svg"
  },
  {
    name: "Java",
    year: 1995,
    image: "https://cdn.worldvectorlogo.com/logos/apple.svg"
  },
  {
    name: "Javascript",
    year: 1995,
    image: "https://cdn.worldvectorlogo.com/logos/apple.svg"
  },
  {
    name: "Perl",
    year: 1987,
    image: "https://cdn.worldvectorlogo.com/logos/apple.svg"
  },
  {
    name: "PHP",
    year: 1995,
    image: "https://cdn.worldvectorlogo.com/logos/apple.svg"
  },
  {
    name: "Python",
    year: 1991,
    image: "https://cdn.worldvectorlogo.com/logos/apple.svg"
  },
  {
    name: "Ruby",
    year: 1995,
    image: "https://cdn.worldvectorlogo.com/logos/apple.svg"
  },
  {
    name: "Scala",
    year: 2003,
    image: "https://cdn.worldvectorlogo.com/logos/apple.svg"
  }
];

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === "") {
    return [];
  }

  const regex = new RegExp("^" + escapedValue, "i");

  return languages.filter(language => regex.test(language.name));
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <li className="contact">
      <img
        src={suggestion.image}
        width="40px"
        height="40px"
        className="contact-image"
      />
      <div
        className="contact-info"
        style={{
          position: "absolute",
          marginLeft: "150px",
          marginTop: "-30px"
        }}
      >
        <div className="contact-name">{suggestion.name}</div>
      </div>
    </li>
  );
}

class newInvoiceForm extends Component {
  constructor() {
    super();

    this.state = {
      value: "",
      suggestions: []
    };
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
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
      placeholder: "Type 'c'",
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}
export default newInvoiceForm;
