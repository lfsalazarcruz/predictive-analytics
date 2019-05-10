import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static defaultProps = {
    center: {
      lat: 23,
      lng: -102
    },
    zoom: 4
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%", position: "absolute" }}>
        <GoogleMapReact
          google={this.props.google}
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLEMAPS }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={function(maps) {
            return { mapTypeId: maps.MapTypeId.HYBRID };
          }}
        />
      </div>
    );
  }
}

export default GoogleMap;
