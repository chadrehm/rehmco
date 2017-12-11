import React from 'react';

import { GoogleMap } from './GoogleMap';
import { GoogleSearch } from './GoogleSearch';

export const Map = ({ gmap, setOrigin, setDestination, setMap, initState: { lat, lng } }) =>
  <div>
    {
      gmap ?
      <div className="row">
        <div className="col-md-5 map-legend">
          <GoogleSearch lable="Origin:" setState={setOrigin} />
          <GoogleSearch lable="Destination:" setState={setDestination} />
        </div>
        <div className="col-md-7">
          <GoogleMap lat={lat} lng={lng} setMap={setMap} />
        </div>
      </div>
      : <p>Loading</p>
    }
  </div>
