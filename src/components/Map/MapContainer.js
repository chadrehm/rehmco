import { connect } from 'react-redux';
import { compose, lifecycle, withStateHandlers, withHandlers } from 'recompose';

import { Map } from './Map';

const enhance = compose(
  connect(null),
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
