import React from 'react'
import './style.css'
import { Paper, Typography, useMediaQuery } from '@mui/material';
import GoogleMapReact from 'google-map-react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Rating from '@mui/material';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

function Map() {
  const isMobile = useMediaQuery('(min-width:600px)');
  const coordinates = { lat: 18.52043, lng: 73.856743};
  return ( 
      <div className="mapContainer">
        <GoogleMapReact
          bootstrapURLKeys={{key:'AIzaSyB3v3TDaqqnzYI39bbJS6dd0W6uVVLD8OM'}}
          center={coordinates}
          defaultCenter={coordinates}
          defaultZoom={10}
          margin={[50,50,50,50]}
          options={''}
          onChange={''}
          onChildClick={''}
        >
        </GoogleMapReact>
      </div>
  )
}

export default Map