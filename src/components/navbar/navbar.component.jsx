import React from 'react';
import s from  './navbar.module.scss';

const scrollTo = (e) => {
    e.preventDefault();
    const scrollID = e.target.getAttribute('href');
    document.querySelector(scrollID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}

function Navbar() {
    return (
        <div className={s.linksContainer}>
            <a href="#greeting" onClick={scrollTo}>Greeting</a>
            <a href="#works" onClick={scrollTo}>My works</a>
            <a href="#skills" onClick={scrollTo}>My skills</a>
        </div>
    )
}

export default Navbar;