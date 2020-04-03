import React from 'react';
import './Navigation.css';

const Navigation = () => {

    return (
        <>  
        <h1 className="header"> Search Results </h1>
        <div className="nav-Container">
            <div className='nav-Bar'>
            <span className = 'nav-Bar'> All </span>
            <span className = 'nav-Bar'> Movies </span>
            <span className = 'nav-Bar'> TV Shows </span>
            <span className = 'nav-Bar'> Games & Apps </span>
            </div>
            </div>
        </> 
    )
}

export default Navigation;

