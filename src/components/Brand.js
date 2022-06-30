import React from 'react'

function Brand(props) {
  return (
    <div className='brand-section'>
        <a href={props.link}>
            <img src={props.logo} alt={props.name} />
        </a>
    </div>
  )
}

export default Brand
