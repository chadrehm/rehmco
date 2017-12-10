import React from 'react';

import { GoogleMap } from './GoogleMap';
import { GoogleSearch } from './GoogleSearch';

export const Map = ({ gmap, lat, lng, handleClick, setMap, map }) =>
  <div>
    {
      gmap ?
      <div className="row">
        <div className="col-md-4 map-legend">
          <GoogleSearch map={map} />
        </div>
        <div className="col-md-8">
          <GoogleMap lat={lat} lng={lng}  setMap={setMap} />
        </div>
      </div>
      : <p>Loading</p>
    }
  </div>
