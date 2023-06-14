import { Button } from '@mui/material'
import React, { useState } from 'react'

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    window.addEventListener('scroll', () => {
        let scrollTop = document.documentElement.scrollTop;

        if(scrollTop >= 100) {
            setIsVisible(true);
        }
        else {
            setIsVisible(false);
        }
    })

    const getToTop = () => {
        window.scrollTo({
            top : 0,
            behavior : 'smooth'
        });
    }

  return (
    <Button onClick={getToTop} style={{display : isVisible ? 'block' : 'none'}} className='scroll-to-top' disableRipple>
        <img src="https://img.icons8.com/ios-filled/50/circled-up-2.png" alt="circled-up-2"/>
    </Button>
  )
}

export default ScrollToTop