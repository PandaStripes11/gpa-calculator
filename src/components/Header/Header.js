import React from 'react';

import logo from '@assets/logo.svg';

function Header() {
    return (
        <header>
            <a className="title" href='.'>
                <img className="logo" src={logo} alt="logo"/>
                <h1>GPA Calculator</h1>
            </a>
            <nav>
                <a href='.'>Home</a>
                <a href='.'>About</a>
                <a href='.'>Contact</a>
                <a href='.' className='button-primary'>Calculator</a>
            </nav>
        </header>
    )
}

export default Header