import React, { useEffect, useState} from 'react'
import './style.css'
import { Paper, Typography, useMediaQuery } from '@mui/material';
import GoogleMapReact from 'google-map-react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Rating from '@mui/material';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { SET_BOUNDS, SET_CENTER } from '../Redux/actionTypes';
import { connect } from 'react-redux';

function Map({coordinates, bounds, setCenter, setBounds}) {
  const isMobile = useMediaQuery('(min-width:600px)');

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coords}) => {
      setCenter(coords.latitude, coords.longitude)
    })
  }, [])

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
            setCenter(e.center.lat, e.center.lng)
            setBounds(e)
          }}
          onChildClick={''}
        >
        </GoogleMapReact>
      </div>
  )
}

const mapStateToProps = (state) => {
  return {
    coordinates : state.map.center,
    bounds : state.map.bounds
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setBounds : (e) => dispatch({type : SET_BOUNDS, payload : {ne: e.bounds.ne, sw : e.bounds.sw}}),
    setCenter : (lat, lng) => dispatch({type : SET_CENTER, payload : {lat, lng}})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);