import React, { Component } from "react";
import ReactMapGL from "react-map-gl";
import { fromJS } from "immutable";

const TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

class MapboxComponent extends Component {
  state = {
    viewport: {
      width: "100vw",
      height: "100vh",
      latitude: 32.45,
      longitude: -117,
      zoom: 10.5
    }
  };

  render() {
    return (
      <ReactMapGL
        // mapboxApiAccessToken={TOKEN}
        mapboxApiAccessToken="pk.eyJ1IjoibGZzYWxhemFyY3J1eiIsImEiOiJjanR4bjJuZ2Eya2doNDVsbHJ4YWJyMGMxIn0.A8r3gizGAmpdKj_e2KftsQ"
        mapStyle="mapbox://styles/lfsalazarcruz/cjt9jxquv0bub1ftai4csqtzk"
        {...this.state.viewport}
        onViewportChange={viewport => this.setState({ viewport })}
      />
    );
  }
}

export default MapboxComponent;
