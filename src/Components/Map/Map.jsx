import React, { useEffect, useState} from 'react'
import './style.css'
import { Paper, Typography, useMediaQuery } from '@mui/material';
import GoogleMapReact from 'google-map-react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Rating from '@mui/material';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

function Map() {
  const isMobile = useMediaQuery('(min-width:600px)');
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coords}) => {
      setCoordinates({lat : coords.latitude, lng : coords.longitude})
    })
  }, [])
  
  console.log(bounds);

  return ( 
      <div className="mapContainer">
        <GoogleMapReact
          bootstrapURLKeys={{key:'AIzaSyB3v3TDaqqnzYI39bbJS6dd0W6uVVLD8OM'}}
          center={coordinates}
          defaultCenter={coordinates}
          defaultZoom={10}
          margin={[50,50,50,50]}
          options={''}
          onChange={(e) => {
            setBounds({ne:e.bounds.ne, sw:e.bounds.sw})
          }}
          onChildClick={''}
        >
        </GoogleMapReact>
      </div>
  )
}

export default Map