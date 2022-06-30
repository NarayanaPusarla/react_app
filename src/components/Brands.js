import React from 'react'
import Brand from './Brand';
import '../styles/Brands.css';

function Brands() {
  return (
    <ul className='brands-list-section'>
        <li className='brand-list'><Brand link="https://intraedge.com" logo="https://ui-avatars.com/api/?background=000&color=a0a0a0&name=Intra Edge" name="intraedge" /></li>
        <li className='brand-list'><Brand link="https://truyo.com/" logo="https://ui-avatars.com/api/?background=000&color=a0a0a0&name=Truyo" name="truyo" /></li>
        <li className='brand-list'><Brand link="https://www.byndr.com/" logo="https://ui-avatars.com/api/?background=000&color=a0a0a0&name=Byndr" name="byndr" /></li>
        <li className='brand-list'><Brand link="https://edgelearn.co" logo="https://ui-avatars.com/api/?background=000&color=a0a0a0&name=Learn" name="learn" /></li>
        <li className='brand-list'><Brand link="https://healthcheckmanagement.com" logo="https://ui-avatars.com/api/?background=000&color=a0a0a0&name=Health Check Management" name="healthcheckmanagement" /></li>
    </ul>
  )
}

export default Brands
