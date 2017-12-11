import React, { Component } from 'react';

export class GoogleSearch extends Component {
  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    // Add the place responce to redux state.
    const { setState } = this.props;
    const { google } = window;
    const searchBox = new google.maps.places.Autocomplete(this.refs.search);
    searchBox.addListener('place_changed', function() {
      var place = searchBox.getPlace();

      if (!place.geometry) {
        // User entered the name of a Place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
        window.alert("No details available for input: '" + place.name + "'");
        return;
      } else {
        setState(place);
      }
    });
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor="search">{this.props.lable}</label>
        <input type="text" className="form-control" id="search" ref="search" />
      </div>
    )
  }
}
