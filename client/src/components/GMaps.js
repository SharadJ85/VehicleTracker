import React, { Component } from 'react';
import { InfoWindow, Marker, GoogleMap, GoogleApiWrapper, withScriptjs, withGoogleMap } from 'react-google-maps';


export default class GMaps extends Component {
  constructor(props) {
    super();
    this.state = { vehicles: [] };
  }

  componentDidMount() {
    fetch('/v1/vehicles')
      .then(res => res.json())
      .then(vehicles => this.setState({ vehicles }, () => console.log('vehicles fetched...', vehicles)))
  }


  render() {

    function Map() {
      return (<div>
        <GoogleMap
          defaultZoom={5}
          defaultCenter={{ lat: 21.0000, lng: 78.0000 }}
        > <div></div>
        </GoogleMap>
      </div>
      );
    }
    /*
    //put this before- </GoogleMap>
    {this.state.vehicles.map(vehicles =>{
      <Marker
      key={vehicles.licence_plate}
      position={{
        lat: vehicles.lat, lng: vehicles.lon
      }}
    />
    })}
            
    */
    const MapWrapped = withScriptjs(withGoogleMap(Map));
    return (
      <div>
        <div style={{ width: "35.5vw", height: "70vh" }}>
          <MapWrapped
            googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key='}
            loadingElement={<div style={{ height: `75%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `110%` }} />}
          />
        </div>
        <div>
        </div>
      </div>
    );
  }
}

