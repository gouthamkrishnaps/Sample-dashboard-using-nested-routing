import React from 'react'
import './style.css'
import { Route, Routes, useLocation } from 'react-router-dom';
import Attendence from './Attendence';
import Teams from './Teams';
import Payments from './Payments';
import Settings from './Settings';
import Maindash from './Maindash';
import Dashboard from './Dashboard';


function Home() {
   /*  const location = useLocation(); */
   // const previousPath = location.state?.from;
    
  return (
    <div className='home-container'>
        <div className="row">
            <div className="col-4 dashboard-container">
            <Dashboard/>
            </div>
            <div className="col-8 location-container">
                <Routes>
                    <Route path='/' element={<Maindash/>}/>
                    <Route path='/attendance/*' element={<Attendence/>}/>
                    <Route path='/teams' element={<Teams/>}/>
                    <Route path='/payments' element={<Payments/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>

        </div>
    </div>
  )
}

export default Home