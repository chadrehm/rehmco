import React, { Component } from 'react';

export class GoogleSearch extends Component {
  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    const { google } = window;
    this.searchBox = new google.maps.places.SearchBox(this.refs.search);
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input type="text" className="form-control" id="search" />
      </div>
    )
  }
}
