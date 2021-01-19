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
        <div className={s.nav_bar_container}>
            <div className={s.container}>
                <div className={s.mobile}>Navigation</div>
                <div className={s.linksContainer}>
                    <a href="#greeting" onClick={scrollTo}>Greeting</a>
                    <a href="#works" onClick={scrollTo}>My works</a>
                    <a href="#skills" onClick={scrollTo}>My skills</a>
                </div>
            </div>

        </div>
    )
}

export default Navbar;