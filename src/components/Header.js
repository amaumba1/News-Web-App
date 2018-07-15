import React from 'react'
import logo from '../logo.svg'
import './Header.css'


const Header = () => {
    return (
        <div>
            <div className="header-title">
                <span>
                    <img src={logo} className="header-logo" alt="logo" /> 
                </span>
            </div>
            <div className="header-title">
                <div className="header-title-app">
                    React Hacker News
                </div>
            </div>
        </div>
    )
}

export default Header; 