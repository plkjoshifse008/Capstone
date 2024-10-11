import React from 'react';
import { Outlet } from 'react-router-dom';
import logo from '../assets/logo-color.png';
import { useNavigate, Link } from 'react-router-dom';

function Layout() {
  const navigate = useNavigate();
  const handleHomeClick=()=>{
    const access = localStorage.getItem('access_token');
    if(!access) navigate('/');
    else navigate('/createTicket')
  }
  return (
    <div>
      <header className='header'>
        <div className={'headofLayout'}>
            <img src={logo} style={{'width':'300px', 'height':'250px'}} onClick={handleHomeClick} className='furnifixLogo'/>
        
        
        <nav className='navBar'>
          <ul>
            <Link style={{
        color: 'black',
        textDecoration: 'none',
        fontWeight: 'bold',margin: '5px'
      }} to="/createUser">Create User</Link>
            <Link style={{
        color: 'black',
        textDecoration: 'none',
        fontWeight: 'bold',margin: '5px'
      }} to="/createTicket">Create Ticket</Link>
            <Link style={{
        color: 'black',
        textDecoration: 'none',
        fontWeight: 'bold',margin: '5px'
      }} to="/logout">LogOut</Link>
          </ul>
        </nav></div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;