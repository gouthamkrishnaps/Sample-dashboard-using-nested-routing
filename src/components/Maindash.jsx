import React from 'react'
import { useLocation } from 'react-router-dom';

function Maindash() {
    const location = useLocation();
    const previousPath = location.state?.from;
  return (
    <div className='home-container'>
        <div>
            <p className='fs-2 fw-bold'>Current location : <span className='text-info'>{location.pathname == '/'?'/dashboard':location.pathname}</span></p>
            <p className='fs-2 fw-bold'>Previous location: <span className='text-danger'>{previousPath == '/'?'/dashboard':previousPath}</span></p>
        </div>
    </div>
  )
}

export default Maindash
