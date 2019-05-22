import React, { Component } from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import WeaponComponent from "../weaponComponent/WeaponComponent";
import InfoComponent from "../infoComponent/InfoComponent";
import { NavbarContainer, ViewHandler } from "./NavbarStyles";
import {
  janPaint,
  febPaint,
  marPaint,
  aprPaint,
  mayPaint,
  junPaint,
  julPaint,
  augPaint,
  sepPaint,
  octPaint,
  novPaint,
  decPaint
} from "../WeaponHeatMapStyles";
import { paintLayer } from "../3DMapStyle";

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
});

const janWeaponData = require("../../data/012018.json");
const febWeaponData = require("../../data/022018.json");
const marWeaponData = require("../../data/032018.json");
const aprWeaponData = require("../../data/042018.json");
const mayWeaponData = require("../../data/052018.json");
const junWeaponData = require("../../data/062018.json");
const julWeaponData = require("../../data/072018.json");
const augWeaponData = require("../../data/082018.json");
const sepWeaponData = require("../../data/092018.json");
const octWeaponData = require("../../data/102018.json");
const novWeaponData = require("../../data/112018.json");
const decWeaponData = require("../../data/122018.json");

class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [-73.966, 40.742], // New York
      zoom: [12],
      pitch: [60],
      map3d: false,
      weaponComponent: false,
      infoComponent: true,
      janData: false,
      febData: false,
      marData: false,
      aprData: false,
      mayData: false,
      junData: false,
      julData: false,
      augData: false,
      sepData: false,
      octData: false,
      novData: false,
      decData: false
    };
  }

  view3dMap = event => {
    this.setState({
      map3d: !this.state.map3d
    });
  };

  viewWeaponData = event => {
    console.log("here", this.state.weaponData);
    this.setState({
      weaponData: !this.state.weaponData
    });
  };

  displayWeaponComponent = event => {
    this.setState({
      weaponComponent: !this.state.weaponComponent,
      infoComponent: false
    });
  };

  displayInformationComponent = event => {
    this.setState({
      infoComponent: !this.state.infoComponent,
      weaponComponent: false
    });
  };

  // Update parent from child component
  update(data, month) {
    switch (month) {
      case "1":
        this.setState({ janData: data });
        break;
      case "2":
        this.setState({ febData: data });
        break;
      case "3":
        this.setState({ marData: data });
        break;
      case "4":
        this.setState({ aprData: data });
        break;
      case "5":
        this.setState({ mayData: data });
        break;
      case "6":
        this.setState({ junData: data });
        break;
      case "7":
        this.setState({ julData: data });
        break;
      case "8":
        this.setState({ augData: data });
        break;
      case "9":
        this.setState({ sepData: data });
        break;
      case "10":
        this.setState({ octData: data });
        break;
      case "11":
        this.setState({ novData: data });
        break;
      case "12":
        this.setState({ decData: data });
        break;
      default:
        console.log("Select a month");
    }
  }

  seeBuildings = event => {
    this.setState({
      map3d: !this.state.map3d
    });
  };

  render() {
    return (
      <div>
        <NavbarContainer>
          <ViewHandler
            onClick={this.seeBuildings}
            style={
              this.state.map3d
                ? {
                    backgroundColor: "#4CAF50",
                    border: "none",
                    borderBottom: "1px solid green"
                  }
                : { backgroundColor: "#494949" }
            }
          >
            3D
          </ViewHandler>
          <ViewHandler
            onClick={this.displayWeaponComponent}
            style={
              this.state.weaponComponent
                ? {
                    backgroundColor: "#4CAF50",
                    border: "none",
                    borderBottom: "1px solid green"
                  }
                : { backgroundColor: "#494949" }
            }
          >
            W
          </ViewHandler>
          {/* Information View Handler */}
          <ViewHandler
            onClick={this.displayInformationComponent}
            style={
              this.state.infoComponent
                ? {
                    backgroundColor: "#3163C7",
                    border: "none",
                    borderBottom: "1px solid blue"
                  }
                : { backgroundColor: "#494949" }
            }
          >
            <i class="fas fa-info-circle" />
          </ViewHandler>
        </NavbarContainer>
        {this.state.weaponComponent ? (
          <WeaponComponent
            updateParent={this.update.bind(this)}
            janData={this.state.janData}
            febData={this.state.febData}
            marData={this.state.marData}
            aprData={this.state.aprData}
            mayData={this.state.mayData}
            junData={this.state.junData}
            julData={this.state.julData}
            augData={this.state.augData}
            sepData={this.state.sepData}
            octData={this.state.octData}
            novData={this.state.novData}
            decData={this.state.decData}
          />
        ) : null}
        {this.state.infoComponent ? <InfoComponent /> : null}
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
          {this.state.janData ? (
            <Layer type="heatmap" paint={janPaint}>
              {janWeaponData.map((item, index) => (
                <Feature
                  key={index}
                  coordinates={[item.longitude, item.latitude]}
                  properties={item}
                />
              ))}
            </Layer>
          ) : null}
          {this.state.febData ? (
            <Layer type="heatmap" paint={febPaint}>
              {febWeaponData.map((item, index) => (
                <Feature
                  key={index}
                  coordinates={[item.longitude, item.latitude]}
                  properties={item}
                />
              ))}
            </Layer>
          ) : null}
          {this.state.marData ? (
            <Layer type="heatmap" paint={marPaint}>
              {marWeaponData.map((item, index) => (
                <Feature
                  key={index}
                  coordinates={[item.longitude, item.latitude]}
                  properties={item}
                />
              ))}
            </Layer>
          ) : null}
          {this.state.aprData ? (
            <Layer type="heatmap" paint={aprPaint}>
              {aprWeaponData.map((item, index) => (
                <Feature
                  key={index}
                  coordinates={[item.longitude, item.latitude]}
                  properties={item}
                />
              ))}
            </Layer>
          ) : null}
          {this.state.mayData ? (
            <Layer type="heatmap" paint={mayPaint}>
              {mayWeaponData.map((item, index) => (
                <Feature
                  key={index}
                  coordinates={[item.longitude, item.latitude]}
                  properties={item}
                />
              ))}
            </Layer>
          ) : null}
          {this.state.junData ? (
            <Layer type="heatmap" paint={junPaint}>
              {junWeaponData.map((item, index) => (
                <Feature
                  key={index}
                  coordinates={[item.longitude, item.latitude]}
                  properties={item}
                />
              ))}
            </Layer>
          ) : null}
          {this.state.julData ? (
            <Layer type="heatmap" paint={julPaint}>
              {julWeaponData.map((item, index) => (
                <Feature
                  key={index}
                  coordinates={[item.longitude, item.latitude]}
                  properties={item}
                />
              ))}
            </Layer>
          ) : null}
          {this.state.augData ? (
            <Layer type="heatmap" paint={augPaint}>
              {augWeaponData.map((item, index) => (
                <Feature
                  key={index}
                  coordinates={[item.longitude, item.latitude]}
                  properties={item}
                />
              ))}
            </Layer>
          ) : null}
          {this.state.sepData ? (
            <Layer type="heatmap" paint={sepPaint}>
              {sepWeaponData.map((item, index) => (
                <Feature
                  key={index}
                  coordinates={[item.longitude, item.latitude]}
                  properties={item}
                />
              ))}
            </Layer>
          ) : null}
          {this.state.octData ? (
            <Layer type="heatmap" paint={octPaint}>
              {octWeaponData.map((item, index) => (
                <Feature
                  key={index}
                  coordinates={[item.longitude, item.latitude]}
                  properties={item}
                />
              ))}
            </Layer>
          ) : null}
          {this.state.novData ? (
            <Layer type="heatmap" paint={novPaint}>
              {novWeaponData.map((item, index) => (
                <Feature
                  key={index}
                  coordinates={[item.longitude, item.latitude]}
                  properties={item}
                />
              ))}
            </Layer>
          ) : null}
          {this.state.decData ? (
            <Layer type="heatmap" paint={decPaint}>
              {decWeaponData.map((item, index) => (
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

export default MapComponent;
