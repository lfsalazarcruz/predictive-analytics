import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import ReactMapboxGL from "./components/ReactMaboxGL";

const MapContainer = styled.div`
  width: 100vw;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <MapContainer>
          <ReactMapboxGL />
        </MapContainer>
      </div>
    );
  }
}

export default App;
