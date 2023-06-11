import React from 'react'
import { BottomNavigation, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css';

function Footer() {
  return (
    <BottomNavigation className='footer' 
    sx ={{display : 'flex', justifyContent:'space-between', pl:'10px', pr:'10px', backgroundColor : '#1976d2', alignItems:'center'}}>
      <div className="left-part">
          <Typography sx={{color:'white'}}>
            &copy; 2023 TripMate. All Rights Reserved
          </Typography>
      </div>
      <div className="right-part">
          <LinkedInIcon/>
          <InstagramIcon/>
          <TwitterIcon/>
          <FacebookIcon/>
      </div>
    </BottomNavigation>
  )
}

export default Footer;