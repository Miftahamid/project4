import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
  }

  onSubmit = e => {
    e.preventDefault();
    console.log("form has been submitted");
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Name</label>
          <input placeholder="Name" />
          <br />
          <label>Age</label>
          <input placeholder="Age" />
          <br />
          <label>Fruit</label>
          <input placeholder="Fruit" />
          <br />
          <label>Vegetables</label>
          <input placeholder="Vegetables" />
        </form>
      </div>
    );
  }
}

export default Form;
