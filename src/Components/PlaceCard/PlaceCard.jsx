import React from 'react'
import { Card, CardMedia, CardContent, Typography, Box, Button, Chip, CardActions } from '@mui/material'
import { LocationOnOutlined } from '@mui/icons-material'
import { Phone } from '@mui/icons-material'
import { Rating } from '@mui/material'

function PlaceCard({ place, selected, cardRef}) {

  if(selected) {
    cardRef?.current?.scrollIntoView({behavior : 'smooth', block : 'start'});
  }

  return (
    place.name ?
      <Card elevation={6} style={{ width: '100%', marginBottom: '10px' }}>
        <CardMedia
          style={{ height: 350 }}
          image={place.photo ? place.photo.images.large.url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-R57KH5Of-HDrpqLFk4Xp_QqAzwuCDK9TGbUqyumWkg&s'}
          title={place.name}
        />
        <CardContent>
          <Typography gutterBottom variant='h5'>{place.name}</Typography>
          <Box display='flex' justifyContent='space-between'>
            <Typography variant='subtitle1'>Price</Typography>
            <Typography variant='subtitle1'>{place.price_level ? place.price_level : '___'}</Typography>
          </Box>
          <Box display='flex' justifyContent='space-between'>
            <Rating value={place.rating} readOnly />
            <Typography variant='subtitle1'>out of {place.num_reviews} reviews</Typography>
          </Box>
          <Box display='flex' justifyContent='space-between'>
            <Typography variant='subtitle1'>Ranking</Typography>
            <Typography variant='subtitle1'>{place.ranking ? place.ranking : '___'}</Typography>
          </Box>
          {
            place?.cuisine?.map(({ name }) => {
              return (
                <Chip key={name} value={name} size='small' style={{ margin: '5px 5px 5px 0px' }} label={name} />
              )
            })
          }
          {
            place.address ?
              <Typography gutterBottom variant='body2' color='textSecondary' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' }}>
                <LocationOnOutlined /> {place.address}
              </Typography> : <></>
          }
          {
            place.phone ?
              <Typography gutterBottom variant='body2' color='textSecondary' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' }}>
                <Phone /> {place.phone}
              </Typography> : <></>
          }
          <CardActions>
            <Button size='small' variant='contained' color='primary' onClick={() => window.open(place.web_url, '_blank')}>TripAdvisor</Button>
            <Button size='small' variant='contained' color='primary' onClick={() => window.open(place.website, '_blank')}>Website</Button>
          </CardActions>
        </CardContent>
      </Card> :
      <></>
  )
}

export default PlaceCard