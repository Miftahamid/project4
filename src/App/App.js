import React, { Component } from "react";
import logo from "../logo.svg";
import "./App.css";
import Form from "../Form/Form";
// import Pick from "../Pick/Pick";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Pick /> */}
        <Form />
      </div>
    );
  }
}

export default App;
