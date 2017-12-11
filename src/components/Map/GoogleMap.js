import React, { Component } from 'react';

export class GoogleMap extends Component {
  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    const { google } = window;
    const map = new google.maps.Map(this.refs.map, {
      center: {lat: this.props.lat, lng: this.props.lng},
      zoom: 4,
    });
    const directionsDisplay = new google.maps.DirectionsRenderer;
    directionsDisplay.setMap(map);
    /*
     * Add the map object to redux for use in the search input.
     */
    this.props.setMap(directionsDisplay);
  }

  render() {
    return (
      <div id="map" ref="map" />
    )
  }
}
