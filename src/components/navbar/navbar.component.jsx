import React from 'react';

import { Nav } from "react-bootstrap";

import s from  './navbar.module.scss';

function Navbar() {
    return (
        <div className={s.nav_bar_container}>
            <Nav
                id={'navigation_bar'}
                className="justify-content-center my-3"
            >
                <Nav.Item className={s.nav_item}>
                    <Nav.Link eventKey="Greeting" href="#greeting">
                        Greeting
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className={s.nav_item}>
                    <Nav.Link eventKey="works" href="#works">
                        My Works
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className={s.nav_item}>
                    <Nav.Link eventKey="#works" href="#skill">
                        My Skill
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>

    )
}

export default Navbar;