import { connect } from 'react-redux';
import asyncLoad from 'react-async-loader';
import { compose, withState, lifecycle } from 'recompose';

import { actions } from '../../redux/modules/map';

import { Map } from './Map';

const mapScriptsToProps = () => ({
  gmap: {
    globalPath: 'google.maps',
    url: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDCQJ0K93aif1f-AEVLEfdP-jh33J3moJc&libraries=places',
    jsonp: true,
  }
});

const mapStateToProps = state => ({
  map: state.map.data,
  origin: state.map.origin,
  destination: state.map.destination,
});

const mapDispatchToProps = {
  setMap: actions.setMap,
  setOrigin: actions.setOrigin,
  setDestination: actions.setDestination,
}

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  asyncLoad(mapScriptsToProps),
  withState('initState', '_', { lat: 34.397, lng: 260 }),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      const { google } = window;
      if (google) {
        const directionsService = new google.maps.DirectionsService;
        const { map, origin, destination } = nextProps;
        if (map && origin.geometry && destination.geometry) {
          directionsService.route({
            origin: { lat: origin.geometry.location.lat(), lng: origin.geometry.location.lng() },
            destination: { lat: destination.geometry.location.lat(), lng: destination.geometry.location.lng() },
            travelMode: "TRANSIT",
          }, (response, status) => {
            if (status == 'OK') {
              map.setDirections(response);
            } else {
              window.alert('Directions request failed due to ' + status);
            }
          });
        }
      }
    },
  }),
)

export const MapContainer = enhance(Map);
