import React from 'react';

import Hamburger from './Hamburger/Hamburger';
import Navigation from './Navigation/Navigation';
import logo from '@assets/logo.svg';

function Header() {
    return (
        <header>
            <a className="title" href='.'>
                <img className="logo" src={logo} alt="logo"/>
                <h1>GPA Calculator</h1>
            </a>
            <Hamburger/>
            <Navigation/>
        </header>
    )
}

export default Header