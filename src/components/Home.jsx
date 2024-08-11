import React from 'react'
import './style.css'
import { Route, Routes } from 'react-router-dom';
import Attendence from './Attendence';
import Teams from './Teams';
import Payments from './Payments';
import Settings from './Settings';
import Maindash from './Maindash';
import Dashboard from './Dashboard';


function Home() {
  return (
    <div className='home-container'>
        <div className="row">
            <div className="col-2 dashboard-container">
            <Dashboard/>
            </div>
            <div className="col-10 location-container">
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