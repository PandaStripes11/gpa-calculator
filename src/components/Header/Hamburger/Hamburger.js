import React from 'react'
import { useState } from 'react';

function Hamburger() {
    const [active, setActive] = useState(false);

    const handleClick = (e) => {
        if (active) {
            e.target.classList.toggle("active");
            setActive(false);
        } else if (!active) {
            e.target.classList.toggle("active");
            setActive(true);
        }
        
    };

    return (
        <div className='hamburger-menu-container' onClick={handleClick}>
            <div className='hamburger-menu'></div>
        </div>
    );
}

export default Hamburger;