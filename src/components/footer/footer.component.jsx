import React from "react";
import s from './footer.module.scss';

function Footer() {
    return (
        <div className={s.container}>
            <p>
                Created with React JS
            </p>
            <p>
                &copy;2020 Alex Kyrychenko
            </p>
        </div>
    )
}

export default Footer;
