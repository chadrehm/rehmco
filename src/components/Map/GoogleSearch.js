import React, { Component } from 'react';

export class GoogleSearch extends Component {
  shouldComponentUpdate() {
    return false;
  }

  componentWillReceiveProps(nextProps) {
    const searchBox = this.searchBox;
    const { map } = nextProps;
    searchBox.bindTo('bounds', nextProps.map);
    searchBox.addListener('place_changed', function() {
      var place = searchBox.getPlace();
      if (!place.geometry) {
        // User entered the name of a Place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
        window.alert("No details available for input: '" + place.name + "'");
        return;
      }

      // If the place has a geometry, then present it on a map.
      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);  // Why 17? Because it looks good.
      }
    });
  }

  componentDidMount() {
    const { google } = window;
    this.searchBox = new google.maps.places.Autocomplete(this.refs.search);
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input type="text" className="form-control" id="search" ref="search" />
      </div>
    )
  }
}
