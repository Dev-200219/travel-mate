import { SearchOutlined } from '@mui/icons-material'
import { Button, Card, CardActions, CardContent, CircularProgress, FormControl, Grid, IconButton, Input, InputBase, InputLabel, MenuItem, Paper, Select, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './style.css'
import { Autocomplete } from '@react-google-maps/api'
import DeleteIcon from '@mui/icons-material/Delete';
import LocationCard from '../LocationCard/LocationCard'
import axios from 'axios'
import { getRestaurants } from '../API/api'
import PlaceCard from '../PlaceCard/PlaceCard'

function List() {
  const locations = []
  const [places, setPlaces] = useState([]);
  const [rating, setRating] = useState(0); 

  useEffect(async() => {
    let data = await getRestaurants();
    setPlaces([...data]);
  }, [])

  return (
    locations.length > 0 ?
    <div className='list-container'>
      <Paper>
        {/* <Autocomplete> */}
          <div className="search-bar" style={{backgroundColor:'whitesmoke'}}>
            <SearchOutlined/>
            <InputBase style={{width:'100%', padding:'2px'}}/>
          </div>
        {/* </Autocomplete> */}
      </Paper>
      <Grid container style={{height:'70vh', overflow:'auto', marginTop:'18px'}}>
        {
            locations.map((location, idx) => {
              return (
                <LocationCard idx = {idx} location = {location}/>
              )
            })
        }
      </Grid>
    </div> :
      <>
        <FormControl fullWidth sx= {{marginTop:'10px'}}>
          <InputLabel id="demo-simple-select-label">Rating</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={rating}
            label="Rating"
            onChange={(e)=>{
              setRating(e.target.value);
            }}
          >
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={2}>Above 2.0</MenuItem>
            <MenuItem value={3}>Above 3.0</MenuItem>
            <MenuItem value={4}>Above 4.0</MenuItem>
          </Select>
        </FormControl>
        <Grid container style={{height:'70vh', overflow:'auto', marginTop:'18px'}}>
        {
            places.length > 0 ? places.map((place, idx) => {
              return (
                place.rating > rating ? 
                <PlaceCard idx = {idx} place = {place}/> : <></>
              )
            }) : <CircularProgress/>
        }
      </Grid>
      </>
  )
}

export default List