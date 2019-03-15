import React, { Component } from "react";
import "./Pick.css";
import listoffruits from "./list.json";

class Pick extends Component {
  render() {
    let list = listoffruits.map(item => {
      return (
        <div className="fruit" key={item.fruit}>
          <p>
            <Link to={"/price/" + item.fruit}>{item.fruit}</Link>: {item.fruit}
          </p>
        </div>
      );
    });
    return (
      <div>
        <ul>{list}</ul>
      </div>
    );
  }
}

export default Pick;
