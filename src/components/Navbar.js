import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css';
import { styled } from '@mui/system/styled';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';

function Navbar() {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <h3>xs=8</h3>
        </Grid>
        <Grid item xs={4}>
          <h3>xs=4</h3>
        </Grid>
        <Grid item xs={4}>
          <h3>xs=4</h3>
        </Grid>
      </Grid>
    </Box>
    <div className='nav-section'>
        <div className='logo'>
        <Link to='/' >Logo</Link>
        </div>
        <div className='menu-bar'>
            <div className="menu-links">
                <ul className='menu-items'>
                    <li className='menu-item'><Link to='/'>Home</Link></li>
                    <li className='menu-item'><Link to='/about'>About</Link></li>
                    <li className='menu-item'><Link to='/products-and-services'>Products and Services</Link></li>
                    <li className='menu-item'><Link to='/opportunities'>Opportunities</Link></li>
                    <li className='menu-item'><Link to='/our-work'>Our Work</Link></li>
                </ul>
            </div>
            <div className="menu-social">
              <h3>Linked In</h3>
            </div>
            <div className='menu-tail'>
                <Link to='/contact-us'>Contact Us</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar;
