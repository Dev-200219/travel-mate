import React from 'react'
import './style.css'
import { Paper, Rating, Typography } from '@mui/material'

function MapCard({place}) {
  return (
    place.name ? 
    <Paper className='map-card' elevation={3}>
        <Typography variant='subtitle2' gutterBottom>{place.name}</Typography>
        <img src={place.photo ? place.photo.images.large.url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-R57KH5Of-HDrpqLFk4Xp_QqAzwuCDK9TGbUqyumWkg&s'} alt={place ? place.name : 'Agra'} />
        <Rating size='small' value={Number(place.rating)} readOnly/>
    </Paper> : <></>
  )
}

export default MapCard