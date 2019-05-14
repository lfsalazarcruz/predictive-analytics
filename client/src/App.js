import React, { Component } from "react";
import "./App.css";
import MapComponent from "./components/mapComponent/MapComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MapComponent />
      </div>
    );
  }
}

export default App;
