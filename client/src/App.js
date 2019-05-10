import React, { Component } from "react";
import "./App.css";
import GoogleMap from "./components/MapComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <GoogleMap />
        </header>
      </div>
    );
  }
}

export default App;
