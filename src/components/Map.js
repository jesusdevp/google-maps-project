import React, { Component } from "react";
import { GoogleMap, Marker, withGoogleMap } from "react-google-maps";

const google = window.google;

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: this.props.markers
    };
  }

  render() {
    const MyMapComponent = withGoogleMap(props => (
      <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: 19.39029, lng: -99.2828898 }}
        defaultTitle="Mapa"
      ></GoogleMap>
    ));
    return (
      <MyMapComponent
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "70vh" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    );
  }
}

export default Map;
