import React, { useEffect } from 'react'
import './style.css'
import { useMediaQuery } from '@mui/material';
import GoogleMapReact from 'google-map-react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { SET_BOUNDS, SET_CENTER, SET_CHILD_CLICKED } from '../Redux/actionTypes';
import { connect } from 'react-redux';
import MapCard from '../MapCard/MapCard';
import mapInternalStyles from './mapInternalStyles';

function Map({coordinates, bounds, setCenter, setBounds, places, setChildClicked, rating, center}) {
  const isDesktop = useMediaQuery('(min-width:600px)');

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coords}) => {
      setCenter(coords.latitude, coords.longitude)
    })
  }, [])

  return ( 
      <div className="mapContainer">
        <GoogleMapReact
          bootstrapURLKeys={{key:process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
          center={coordinates}
          defaultCenter={{lat : 0.8578, lng : 36.3174}}
          defaultZoom={10}
          margin={[50,50,50,50]}
          options={{ disableDefaultUI: true, zoomControl: true, styles: mapInternalStyles }}
          onChange={(e) => {
            setCenter(Number(e.center.lat), Number(e.center.lng))
            setBounds(e)
          }}
          onChildClick={(child) => {
            setChildClicked(child);
          }}
        >
          {
            places?.map((place, idx) => {
              return(
                <div key={idx} className="marker-container" lat = {Number(place.latitude)} lng = {Number(place.longitude)}>
                  {
                    Number(place.rating) >= Number(rating) ? !isDesktop ? <LocationOnIcon/> : 
                    <MapCard place = {place}/> : <></>
                  }
                </div>
              )
            })
          }
        </GoogleMapReact>
      </div>
  )
}

const mapStateToProps = (state) => {
  return {
    coordinates : state.map.center,
    bounds : state.map.bounds,
    places : state.places.places,
    rating : state.places.rating,
    center : state.map.center
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setBounds : (e) => dispatch({type : SET_BOUNDS, payload : {ne: e.bounds.ne, sw : e.bounds.sw}}),
    setCenter : (lat, lng) => dispatch({type : SET_CENTER, payload : {lat, lng}}),
    setChildClicked : (child) => dispatch({type : SET_CHILD_CLICKED, payload : child})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);