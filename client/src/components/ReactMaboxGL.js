import React, { Component } from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "./ReactMapboxGL.css";
import {
  ViewHandler,
  ViewHandlerContainer,
  Sidebar,
  ButtonInfo,
  SelectedHandlerBar,
  ListContainer
} from "./SideBarStyles";
import { roberyPaint, weaponPaint, disorderPaint } from "./HeatmapStyle";
import { paintLayer } from "./3DMapStyle";

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
});

const robberyData = require("../data/nyc_robery.json");
const weaponData = require("../data/nyc_weapon.json");
const disorderData = require("../data/nyc_disorderly_conduct.json");

class ReactMapboxGL extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [-73.966, 40.742], // New York
      zoom: [12],
      pitch: [60],
      map3d: false,
      roberyData: false,
      weaponData: false,
      disorderData: false
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

  viewWeaponData = event => {
    this.setState({
      weaponData: !this.state.weaponData
    });
  };

  viewDisorderData = event => {
    this.setState({
      disorderData: !this.state.disorderData
    });
  };

  render() {
    return (
      <div>
        <Sidebar />
        {/* 3D Handler */}
        <ViewHandlerContainer>
          {this.state.map3d ? (
            <ViewHandler
              onClick={this.view3dMap}
              style={{
                marginTop: "20px",
                backgroundColor: "#50AD00",
                color: "#fff"
              }}
            >
              3D
            </ViewHandler>
          ) : (
            <ViewHandler onClick={this.view3dMap} style={{ marginTop: "20px" }}>
              3D
            </ViewHandler>
          )}
          <ButtonInfo style={{ marginTop: "20px", color: "white" }}>
            <h3>Display buildings in 3D. ZOOM IN!</h3>
          </ButtonInfo>
        </ViewHandlerContainer>
        {/* Robery Data Handler */}
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
          <ButtonInfo style={{ marginTop: "90px", backgroundColor: "#e035e0" }}>
            <h3>Robbery Complaints 2018</h3>
            <p>Found 207 complaints.</p>
            <p>This includes: </p>
            <ListContainer>
              <ul>
                <li>ROBBERY, CHAIN STORE</li>
                <li>ROBBERY, PAYROLL</li>
                <li>ROBBERY, ATM LOCATION</li>
                <li>ROBBERY, BANK</li>
                <li>ROBBERY, BAR/RESTAURANT</li>
                <li>ROBBERY, BEGIN AS SHOPLIFTING</li>
                <li>ROBBERY, BICYCLE</li>
                <li>ROBBERY, BODEGA/CONVENIENCE STORE</li>
                <li>ROBBERY, CAR JACKING</li>
                <li>ROBBERY, CHECK CASHING BUSINESS</li>
                <li>ROBBERY, CLOTHING</li>
                <li>ROBBERY, COMMERCIAL UNCLASSIFIED</li>
                <li>ROBBERY, DELIVERY PERSON</li>
                <li>ROBBERY, DWELLING</li>
                <li>ROBBERY, GAS STATION</li>
                <li>ROBBERY, HIJACKING</li>
                <li>ROBBERY, HOME INVASION</li>
              </ul>
              <ul>
                <li>ROBBERY, LICENSED FOR HIRE VEHICLE</li>
                <li>ROBBERY, LICENSED MEDALLION CAB</li>
                <li>ROBBERY, LIQUOR STORE</li>
                <li>ROBBERY, NECKCHAIN/JEWELRY</li>
                <li>ROBBERY, OF TRUCK DRIVER</li>
                <li>ROBBERY, ON BUS/ OR BUS DRIVER</li>
                <li>ROBBERY, OPEN AREA UNCLASSIFIED</li>
                <li>ROBBERY, PERSONAL ELECTRONIC DEVICE</li>
                <li>ROBBERY, PHARMACY</li>
                <li>ROBBERY, POCKETBOOK/CARRIED BAG</li>
                <li>ROBBERY, PUBLIC PLACE INSIDE</li>
                <li>ROBBERY, RESIDENTIAL COMMON AREA</li>
                <li>ROBBERY, UNLICENSED FOR HIRE VEHICLE</li>
              </ul>
            </ListContainer>
            {/* <a
              href="https://catalog.data.gov/dataset?q=new+york+crime&sort=none&organization_type=City+Government&ext_location=&ext_bbox=&ext_prev_extent=-142.03125%2C8.754794702435605%2C-59.0625%2C61.77312286453148"
              target="_blank"
            >
              Source: DATA.GOV New York Crime
            </a> */}
          </ButtonInfo>
          {this.state.roberyData ? (
            <SelectedHandlerBar
              style={{ marginTop: "135px", backgroundColor: "#e035e0" }}
            />
          ) : null}
        </ViewHandlerContainer>
        {/* Weapon Data Handler */}
        <ViewHandlerContainer>
          <ViewHandler
            onClick={this.viewWeaponData}
            style={{ marginTop: "160px" }}
          >
            <img
              src="https://img.icons8.com/small/52/000000/gun.png"
              className="pickpocket"
              alt="weapon icon"
            />
          </ViewHandler>
          <ButtonInfo
            style={{ marginTop: "160px", backgroundColor: "#ffff00" }}
          >
            <h3>Weapon Complaints 2018</h3>
            <p>Found 7859 complaints.</p>
            <p>This includes: </p>
            {/* <ListContainer> */}
            <ul>
              <li>WEAPONS, DISPOSITION OF</li>
              <li>WEAPONS, POSSESSION 1 & 2</li>
              <li>WEAPONS, POSSESSION 3</li>
              <li>WEAPONS, POSSESSION, ETC</li>
            </ul>
            {/* </ListContainer> */}
          </ButtonInfo>
          {this.state.weaponData ? (
            <SelectedHandlerBar
              style={{ marginTop: "205px", backgroundColor: "#ffff00" }}
            />
          ) : null}
        </ViewHandlerContainer>
        {/* Disorder Data Handler */}
        <ViewHandlerContainer>
          <ViewHandler
            onClick={this.viewDisorderData}
            style={{ marginTop: "230px" }}
          >
            <img
              src="https://img.icons8.com/small/64/000000/crazy.png"
              className="pickpocket"
              alt="crazy icon"
            />
          </ViewHandler>
          <ButtonInfo
            style={{ marginTop: "230px", backgroundColor: "#F32100" }}
          >
            <h3>Disorderly Conduct Complaints 2018</h3>
            <p>Found 45 complaints.</p>
            <p>This includes: </p>
            {/* <ListContainer> */}
            <ul>
              <li>DISORDERLY CONDUCT</li>
            </ul>
            {/* </ListContainer> */}
          </ButtonInfo>
          {this.state.disorderData ? (
            <SelectedHandlerBar
              style={{ marginTop: "275px", backgroundColor: "#F32100" }}
            />
          ) : null}
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
              {robberyData.map((item, index) => (
                <Feature
                  key={index}
                  coordinates={[item.longitude, item.latitude]}
                  properties={item}
                />
              ))}
            </Layer>
          ) : null}
          {this.state.weaponData ? (
            <Layer type="heatmap" paint={weaponPaint}>
              {weaponData.map((item, index) => (
                <Feature
                  key={index}
                  coordinates={[item.longitude, item.latitude]}
                  properties={item}
                />
              ))}
            </Layer>
          ) : null}
          {this.state.disorderData ? (
            <Layer type="heatmap" paint={disorderPaint}>
              {disorderData.map((item, index) => (
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
