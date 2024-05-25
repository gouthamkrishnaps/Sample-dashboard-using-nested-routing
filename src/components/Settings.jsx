import React from 'react'
import Dashboard from './Dashboard'
import './style.css'
import { useLocation } from 'react-router-dom'


function Settings() {
    const location = useLocation();
    const previousPath = location.state?.from;

  return (
    <div className='home-container'>
        <div>
            <p className='fs-2 fw-bold'>Current location : <span className='text-info'>{location.pathname}</span></p>
            <p className='fs-2 fw-bold'>Previous location: <span className='text-danger'>{previousPath == '/'?'/dashboard':previousPath}</span></p>
        </div>
    </div>
  )
}

export default Settings