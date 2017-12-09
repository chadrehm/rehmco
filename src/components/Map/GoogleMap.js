import React, { Component } from 'react';

export class GoogleMap extends Component {
  shouldComponentUpdate() {
    return false;
  }

  componentWillReceiveProps(nextProps) {
    this.map.panTo({lat: nextProps.lat, lng: nextProps.lng})
  }

  componentDidMount() {
    const { google } = window;
    this.map = new google.maps.Map(this.refs.map, {
      center: {lat: this.props.lat, lng: this.props.lng},
      zoom: 4,
    });
  }

  render() {
    return (
      <div id="map" ref="map" />
    )
  }
}
