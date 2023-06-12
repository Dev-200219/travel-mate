import { AppBar, Box, Container, IconButton, Menu, MenuItem, Toolbar, Typography, Avatar, Tooltip, Button, Paper, InputBase } from '@mui/material'
import React, { useState } from 'react'
import { Autocomplete } from '@react-google-maps/api';
import { SearchOutlined } from '@mui/icons-material';
import { SET_CENTER } from '../Redux/actionTypes';
import { connect } from 'react-redux';

function Header({setCenter}) {
  const [autocomplete, setAutocomplete] = useState(null);
  let onLoad = (autoC) => setAutocomplete(autoC);
  
  let onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCenter(lat, lng)
  }

  return (
    <>
      <AppBar>
        <Container maxWidth="xl" sx={{
          paddingLeft:'10px !important'}}>
          <Toolbar disableGutters sx={{
            display : 'flex',
            justifyContent : 'space-between'
          }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              TravelMate
            </Typography>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              TravelMate
            </Typography>
            
            <Paper>
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
              <div className="search-bar" style={{backgroundColor:'whitesmoke'}}>
                <SearchOutlined/>
                <InputBase style={{width:'100%', padding:'2px'}}/>
              </div>
            </Autocomplete>
          </Paper>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCenter : (lat, lng) => {dispatch({type : SET_CENTER, payload : {lat, lng}})}
  }
}

export default connect(null, mapDispatchToProps)(Header);