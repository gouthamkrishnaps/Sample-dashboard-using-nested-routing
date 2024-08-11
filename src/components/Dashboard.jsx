import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './style.css'


function Dashboard() {
    const navigate = useNavigate();
    const redirectToDashboard = () => {
        navigate('/');
    };
    const redirectToTeams = () => {
        navigate('/teams');
    };
    const redirectToPayments = () => {
        navigate('/payments');
    };
    const redirectToAttendance = () => {
        navigate('/attendance');
    };
    const redirectToSettings = () => {
        navigate('/settings');
    };

  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
        <h3 className='head-name text-light mt-5'><i class="fi fi-sr-briefcase" style={{color:'springgreen'}}></i> Xoppin</h3>
        <div className='profile d-flex justify-content-center align-items-center flex-column'>
            <img className='rounded-circle mt-5' src="https://tse3.explicit.bing.net/th?id=OIP.X6-9dBY_jMvvulC67C1MxgHaHa&pid=Api&P=0&h=220" alt="" width={'100px'} height={'100px'}/>

            <h4 className='profile-name text-light mt-4'>Stephan Davis</h4>
            <h5 className='profle-desig text-secondary text-center mt-1'>Software Developer</h5>
        </div>
        <div className="sections d-flex justify-content-center  flex-column mt-5">
            {/* <Link to={'/'} style={{color:'white'}}>Dashboard</Link> */}
            <a onClick={redirectToDashboard} className='text-light  fw-bold link-tag'><i class="fi fi-rr-category"></i> Dashboard</a>
            <a onClick={redirectToTeams} className='text-light  fw-bold mt-4 link-tag'><i class="fi fi-sr-users-alt"></i> Teams</a>
            <a onClick={redirectToPayments} className='text-light  fw-bold mt-4 link-tag'><i class="fi fi-rs-money-bill-wave-alt"></i> Payments</a>
            <a onClick={redirectToAttendance} className='text-light  fw-bold mt-4 link-tag'><i class="fi fi-br-calendar-days"></i> Attendance</a>
            <a onClick={redirectToSettings} className='text-light  fw-bold mt-4 link-tag'><i class="fi fi-sr-settings"></i> Settings</a>
        </div>
    </div>
  )
}

export default Dashboard