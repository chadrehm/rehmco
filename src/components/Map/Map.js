import React from 'react';

import { GoogleMap } from './GoogleMap';

export const Map = ({ lat, lng, handleClick }) =>
  <div>
    <button className="btn btn-primary" onClick={handleClick}>click me</button>
    <GoogleMap lat={lat} lng={lng} />
  </div>
