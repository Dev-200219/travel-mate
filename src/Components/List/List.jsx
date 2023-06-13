import { SearchOutlined } from '@mui/icons-material'
import { Button, Card, CardActions, CardContent, CircularProgress, FormControl, Grid, IconButton, Input, InputBase, InputLabel, MenuItem, Paper, Select, Typography } from '@mui/material'
import React, { createRef, useEffect, useState, useRef } from 'react'
import './style.css'
import { getData } from '../API/api'
import PlaceCard from '../PlaceCard/PlaceCard'
import { CHANGE_TYPE, SET_PLACES, SET_RATING } from '../Redux/actionTypes'
import { connect } from 'react-redux'
import fetchDataThunk from '../Redux/placesActions'

function List({places, setPlaces, bounds, loading, err, type, setType, childClicked, rating, setRating}) {
  const[cardRefs, setCardRefs] = useState([]);

  useEffect(() => {
    setPlaces();
  }, [bounds, type])

  useEffect(() => {
    let newRefs = Array(places?.length).fill().map((_, idx) => createRef());
    setCardRefs(newRefs)
  }, [places])

  return (
    <div className='list-container'>
    <Typography gutterBottom variant='h5'>Search for Restaurants, Hotels and Attractions</Typography>
    <div className="choice-containers">
      <FormControl fullWidth sx={{ marginTop: '10px' }}>
        <InputLabel id="demo-simple-select-label">Rating</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={rating}
          label="Rating"
          onChange={(e) => {
            setRating(e.target.value);
          }}
        >
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={2}>Above 2.0</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ marginTop: '10px' }}>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="Rating"
          onChange={(e) => {
            setType(e.target.value)
          }}
        >
          <MenuItem value='restaurants'>Restaurants</MenuItem>
          <MenuItem value='hotels'>Hotels</MenuItem>
          <MenuItem value='attractions'>Attractions</MenuItem>
        </Select>
      </FormControl>
    </div>

      <Grid container style={{ height: '75vh', overflow: 'auto', marginTop: '18px' }}>
        {
          loading ? <CircularProgress/> : err ? <Typography>{err}</Typography> :
          places.length > 0 ? places.map((place, idx) => {
            return (
              <Grid ref={(el) => cardRefs[idx] ? cardRefs[idx].current = el : null} item xs={12}>
                {
                  Number(place.rating) >= Number(rating) ?
                  <PlaceCard place={place} key={idx} selected={Number(childClicked) === idx} cardRef = {cardRefs[idx]} idx={idx}/> :
                  <></>
                } 
              </Grid>
            )
          }) : <Typography>No Places in this region</Typography>
        }
      </Grid>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    places: state.places.places,
    bounds: state.map.bounds,
    loading : state.places.loading,
    err : state.places.err,
    type : state.places.type,
    childClicked : state.map.childClicked,
    rating : state.places.rating
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPlaces: () => {dispatch(fetchDataThunk())},
    setType : (type) => {dispatch({type : CHANGE_TYPE, payload : type})},
    setRating : (rating) => {dispatch({type : SET_RATING, payload : rating})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);