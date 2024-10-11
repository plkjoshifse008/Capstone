import React from 'react';
import Layout from './Layout';
import { useNavigate } from 'react-router';

const Home=()=>{
const navigate = useNavigate();
    const handleHomeLinkClick=()=>{
        navigate('/login')
    }
    return(
<div className='bgstyle'>
        <Layout />
            <div className="landing-backdrop">
                <div className="text-container">
                        <div className="welcome-message">
                            <h2>Welcome to Furnifix!</h2> 
                        </div>
                    <h4 className='home-text'>
                        Please&nbsp;<span onClick={handleHomeLinkClick} 
                        style={{'color': 'black', 'textDecoration': 'none', 'cursor':'pointer'}}>
                        {' CLICK HERE '}
                        </span>&nbsp;To Login
                    </h4>
                    <h6 className='para-text'>
                            Furnifix aims at simplifying furniture damage reporting and management at FurniCentre.
                            Quickly report damage from transit, warehouses, or stores.<br/>
                            Streamline workflows for efficient decision-making on repairs, returns, or discounts.
                            Minimize delays and improve supply chain operations.
                    </h6>	           
                </div> 
            </div>
        </div>
    )    
}

export default Home;