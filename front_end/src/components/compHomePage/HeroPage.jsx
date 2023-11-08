import React from 'react'
// import { CalendarMonthSharpIcon } from '@mui/icons-material/CalendarMonthSharp';
import "./heroPage.css"
import { Button } from '@mui/material'
const HeroPage = () => {
  return (
    <div className='hero-home-page position-relative'>
        <div className='hero-banner'>
            <img style={{height:"100%",width:"100%"}} src="/IMG/hero.jpg" alt="" className='hero-home-img' />
        </div>
        <div className="hero-home-text">
            <h1 className='fs_70 c-white'>Bring the <br/>warmth.</h1>
            <p className='fs_20 c-grey' style={{backgroundColor:"#ffffff21", color: "#adb5bd"}}>
                Everyone needs a good winter jacket. <br/>
                Find yours with our collection and more.
            </p>
            <Button className='hero-btn' variant="contained" sx={{
              width:"fit-content",
              fontSize:"18px",
              border:"1px solid #eee",
              backgroundColor:"#0000" }}
            >shopping now</Button>
        </div>
    </div>
  )
}

export default HeroPage
// #ff9c9c