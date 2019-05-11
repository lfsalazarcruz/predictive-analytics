import React, { Component } from "react";
import ReactMapboxGl, { Layer, Feature, Source } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
});

const paintLayer = {
  "fill-extrusion-color": "#ffa100",
  "fill-extrusion-height": {
    type: "identity",
    property: "height"
  },
  "fill-extrusion-base": {
    type: "identity",
    property: "max_height"
  },
  "fill-extrusion-opacity": 0.7
};

class ReactMapboxGL extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [-73.966, 40.782],
      zoom: [15],
      pitch: [60]
    };
  }

  render() {
    return (
      <Map
        center={this.state.center}
        zoom={this.state.zoom}
        style="mapbox://styles/lfsalazarcruz/cjvk1a09v1rp81cmep5k0olw8"
        containerStyle={{
          height: "100vh",
          width: "100vw"
        }}
        pitch={this.state.pitch}
      >
        <Layer
          id="3d-buildings"
          sourceId="composite"
          sourceLayer="building"
          type="fill-extrusion"
          minZoom={4}
          paint={paintLayer}
        />
      </Map>
    );
  }
}

export default ReactMapboxGL;
