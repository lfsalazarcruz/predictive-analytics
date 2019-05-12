import React, { Component } from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "./ReactMapboxGL.css";
import {
  ViewHandler,
  ViewHandlerContainer,
  Sidebar,
  ButtonInfo
} from "./SideBarStyles";

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
});

const data = require("../data/nyc_robery.json");

// 3D buildings
const paintLayer = {
  "fill-extrusion-color": "#898989",
  "fill-extrusion-height": {
    type: "identity",
    property: "height"
  },
  "fill-extrusion-base": {
    type: "identity",
    property: "max_height"
  },
  "fill-extrusion-opacity": 0.6
};

// Heatmap style
const roberyPaint = {
  "heatmap-weight": {
    property: "priceIndicator",
    type: "exponential",
    stops: [[0, 0], [5, 2]]
  },
  // Increase the heatmap color weight weight by zoom level
  // heatmap-ntensity is a multiplier on top of heatmap-weight
  "heatmap-intensity": {
    stops: [[0, 0], [5, 1.2]]
  },
  // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
  // Begin color ramp at 0-stop with a 0-transparancy color
  // to create a blur-like effect.
  "heatmap-color": [
    "interpolate",
    ["linear"],
    ["heatmap-density"],
    0,
    "rgba(33,102,172,0)",
    0.2,
    "#e035e0",
    0.4,
    "#ad35e0",
    0.6,
    "#6200ed",
    0.8,
    "#3f00ff",
    1,
    "#000000"
  ],
  // Adjust the heatmap radius by zoom level
  "heatmap-radius": {
    stops: [[0, 1], [5, 20]]
  }
};

class ReactMapboxGL extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [-73.966, 40.742], // New York
      zoom: [12],
      pitch: [60],
      map3d: false,
      roberyData: false
    };
  }

  view3dMap = event => {
    this.setState({
      map3d: !this.state.map3d
    });
  };

  viewRoberyData = event => {
    this.setState({
      roberyData: !this.state.roberyData
    });
  };

  render() {
    return (
      <div>
        <Sidebar />
        <ViewHandlerContainer>
          <ViewHandler onClick={this.view3dMap} style={{ marginTop: "20px" }}>
            3D
          </ViewHandler>
          <ButtonInfo style={{ marginTop: "20px" }}>
            Display buildings in 3D
          </ButtonInfo>
        </ViewHandlerContainer>
        <ViewHandlerContainer>
          <ViewHandler
            onClick={this.viewRoberyData}
            style={{ marginTop: "90px" }}
          >
            <img
              src="https://img.icons8.com/small/64/000000/pickpocket.png"
              className="pickpocket"
              alt="pickpocket icon"
            />
          </ViewHandler>
          <ButtonInfo style={{ marginTop: "90px" }}>Robberies</ButtonInfo>
        </ViewHandlerContainer>
        <Map
          center={this.state.center}
          zoom={this.state.zoom}
          style="mapbox://styles/lfsalazarcruz/cjvk1a09v1rp81cmep5k0olw8"
          containerStyle={{
            height: "100vh",
            width: "100%"
          }}
          pitch={this.state.pitch}
        >
          {this.state.map3d ? (
            <Layer
              id="3d-buildings"
              sourceId="composite"
              sourceLayer="building"
              type="fill-extrusion"
              minZoom={4}
              paint={paintLayer}
            />
          ) : null}
          {this.state.roberyData ? (
            <Layer type="heatmap" paint={roberyPaint}>
              {data.map((item, index) => (
                <Feature
                  key={index}
                  coordinates={[item.longitude, item.latitude]}
                  properties={item}
                />
              ))}
            </Layer>
          ) : null}
        </Map>
      </div>
    );
  }
}

export default ReactMapboxGL;
