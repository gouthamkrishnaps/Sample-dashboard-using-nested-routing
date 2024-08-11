import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Child1 from './Child1';
import Child2 from './Child2';

function Attendence() {
  return (
    <div className='home-container'>
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