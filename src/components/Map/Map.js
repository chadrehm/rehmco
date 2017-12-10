import React from 'react';

import { GoogleMap } from './GoogleMap';
import { GoogleSearch } from './GoogleSearch';

export const Map = ({ gmap, lat, lng, handleClick, setMap, map }) =>
  <div>
    {
      gmap ?
      <div>
        <GoogleSearch map={map} />
        <GoogleMap lat={lat} lng={lng}  setMap={setMap} />
      </div>
      : <p>Loading</p>
    }
  </div>
