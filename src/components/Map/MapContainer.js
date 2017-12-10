import { connect } from 'react-redux';
import asyncLoad from 'react-async-loader';
import { compose, lifecycle, withStateHandlers, withHandlers } from 'recompose';

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
})

const mapDispatchToProps = {
  setMap: actions.setMap,
}

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  asyncLoad(mapScriptsToProps),
  withStateHandlers(
    ({ lat= 34.397, lng= 260 }) => ({ lat, lng }),
    {
      updateLatLng: ({ lat, lng }) => () => ({
        lat: 0,
        lng: 180,
      })
    }
  ),
  withHandlers({
    handleClick: props => () => {
      props.updateLatLng()
    }
  })
)

export const MapContainer = enhance(Map);
