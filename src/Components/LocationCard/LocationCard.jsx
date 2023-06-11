import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';

function LocationCard({idx, location}) {
  return (
    <Card className='single-location-card' key={idx}>
        <CardContent>
            <Typography variant='h6'>{location}</Typography>
        </CardContent>
        <CardActions className='card-actions'>
            <Button variant='text' color='secondary'>Hotels</Button>
            <Button variant='text' color='secondary'>Restaurants</Button>
            <Button variant='text' color='secondary'>Attractions</Button>
            <Button variant="text" color='warning' startIcon={<DeleteIcon />}>
            Delete
            </Button>
        </CardActions>
    </Card>
  )
}

export default LocationCard