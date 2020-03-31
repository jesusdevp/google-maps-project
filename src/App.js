import React, { Component } from "react";

import "./App.css";
import MyMap from "./components/Map.js";

import "materialize-css/dist/css/materialize.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="card">
          <div className="card-content">
            <MyMap ref="map" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
