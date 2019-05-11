import React, { Component } from "react";
import "./App.css";
import GoogleMap from "./components/GooglemapComponent";
import MapboxMap from "./components/MapboxComponent";
import ReactMapboxGL from "./components/ReactMaboxGL";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <GoogleMap /> */}
        {/* <MapboxMap /> */}
        <ReactMapboxGL />
      </div>
    );
  }
}

export default App;
