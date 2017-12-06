import { connect } from 'react-redux';
import { compose } from 'recompose';

import { Map } from './Map';

const enhance = compose(
  connect(null),
);

export const MapContainer = enhance(Map);
