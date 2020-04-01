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
            <div>
              <button className="waves-effect waves-light btn">
                <i className="material-icons">keyboard_arrow_left</i>
              </button>
              <button className="waves-effect waves-light btn">
                <i className="material-icons">play_arrow</i>
              </button>
              <button className="waves-effect waves-light btn">
                <i className="material-icons">stop</i>
              </button>
              <button className="waves-effect waves-light btn">
                <i className="material-icons">keyboard_arrow_right</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
