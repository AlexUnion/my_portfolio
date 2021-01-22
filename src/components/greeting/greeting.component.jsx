import React from "react";
import { StyleSheet, css } from 'aphrodite';

import s from './greeting.module.scss';

const style = StyleSheet.create({
        backImg: {
        background: `fixed center/cover no-repeat url("${process.env.PUBLIC_URL}/img/code.jpg")`
    }
})

function Greeting() {
    return (
        <div className={`${s.header} ${css(style.backImg)}`} id="greeting">
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
