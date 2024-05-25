import React from 'react'
import Dashboard from './Dashboard'
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Child1 from './Child1';
import Child2 from './Child2';

function Attendence() {
    const location = useLocation();
    const previousPath = location.state?.from;
  return (
    <div className='home-container'>
        {/* <div>
            <p className='fs-2 fw-bold'>Current location : <span className='text-info'>{location.pathname}</span></p>
            <p className='fs-2 fw-bold'>Previous location: <span className='text-danger'>{previousPath == '/'?'/dashboard':previousPath}</span></p>
        </div> */}
        <div className="buttons">
            <Link to={'component1'}><a className='btn btn-info'>Component 1</a></Link>
            <Link to={'component2'}><a className='btn btn-danger'>Component 2</a></Link>
        </div>
        <Routes>
            <Route path='component1' element={<Child1/>}/>
            <Route path='component2' element={<Child2/>}/>
        </Routes>

    </div>
  )
}

export default Attendence