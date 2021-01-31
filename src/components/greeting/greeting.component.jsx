import React from "react";

import s from './greeting.module.scss';

function Greeting() {
    return (
        <div className={s.header} id="greeting">
            <div className={s.header_container}>
                <div>
                    <p className={s.p}>Hello, my name is Alex Kyrychenko and I am</p>
                    <p className={`${s.p} ${s.bold}`}>WEB DEVELOPER</p>
                    <p className={s.p}>creating modern and responsive Web Application</p>
                </div>
            </div>
        </div>
    )
}

export default Greeting;
