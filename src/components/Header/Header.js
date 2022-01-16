import React from 'react';

import logo from '@assets/logo.svg';

function Header() {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="logo"/>
            <h1 className="title">GPA Calculator</h1>
        </div>
    )
}

export default Header