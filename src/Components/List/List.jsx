import { SearchOutlined } from '@mui/icons-material'
import { Button, Card, CardActions, CardContent, Grid, IconButton, Input, InputBase, Paper, Typography } from '@mui/material'
import React from 'react'
import './style.css'
import { Autocomplete } from '@react-google-maps/api'
import DeleteIcon from '@mui/icons-material/Delete';

function List() {
  const locations = ['Agra', 'New Delhi', 'Jaipur', 'Udaipur','Agra', 'New Delhi', 'Jaipur', 'Udaipur','Agra', 'New Delhi', 'Jaipur', 'Udaipur','Agra', 'New Delhi','Agra', 'New Delhi', 'Jaipur', 'Udaipur','Agra', 'New Delhi', 'Jaipur', 'Udaipur','Agra', 'New Delhi', 'Jaipur', 'Udaipur','Agra', 'New Delhi','Agra', 'New Delhi', 'Jaipur', 'Udaipur','Agra', 'New Delhi', 'Jaipur', 'Udaipur','Agra', 'New Delhi', 'Jaipur', 'Udaipur','Agra', 'New Delhi']

  return (
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
            })
        }
      </Grid>
    </div>
  )
}

export default List