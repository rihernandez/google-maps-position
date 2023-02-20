import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import { Paper } from '@mui/material';
import { Typography } from '@mui/material';
class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }


    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }
  render() {
    const style = {
      width: '50vw',
      height: '75vh',
      'marginLeft': 'auto',
      'marginRight': 'auto'
    }
    return (
      <Map
        item
        xs = { 12 }
        style = { style }
        google = { this.props.google }
        onClick = { this.onMapClick }
        zoom = { 14 }
        initialCenter = {{ lat: 18.5001200, lng: -69.9885700 }}
      >
        <Marker
          onClick = { this.onMarkerClick }
          title = { 'Changing Colors Garage' }
          position = {{ lat: 18.5001200, lng: -69.9885700 }}
          name = { 'Changing Colors Garage' }
        />
        <InfoWindow
          marker = { this.state.activeMarker }
          visible = { this.state.showingInfoWindow }
        >
          <Paper>
            <Typography
              variant = 'headline'
              component = 'h4'
            >
              Santo Domingo, Rep.Dom
            </Typography>
            <Typography
              component = 'p'
            >
              Nueva terraza, Avenida Monumental <br />
              latitude: 18.5001200 <br />
              longitude: -69.9885700 <br />
            </Typography>
          </Paper>
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyDmDGFxb7cKh8gd-vfMAs1P3LCtHf9TPhs'
})(GoogleMapsContainer)