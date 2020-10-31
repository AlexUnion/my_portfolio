import React from 'react';

import { Nav } from "react-bootstrap";

import s from  './navbar.module.scss';

function Navbar() {
    return (
        <div className={s.nav_bar}>
            <Nav
                id={'navigation_bar'}
                className="justify-content-center my-3"
                //onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
                <Nav.Item>
                    <Nav.Link eventKey="Greeting" href="#greeting"
                              className={s.nav_item}>Greeting</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="works" href="#works"
                              className={s.nav_item}>My Works</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="#works" href="#skill"
                              className={s.nav_item}>My Skill</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>

    )
}

export default Navbar;