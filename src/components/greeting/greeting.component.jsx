import React from "react";
import { zoomIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import ScrollAnimation from 'react-animate-on-scroll';

import s from './greeting.module.scss';

const style = StyleSheet.create({
    anim: {
        animationName: zoomIn,
        animationDuration: '1s'
    },
        backImg: {
        background: `fixed center/cover no-repeat url("${process.env.PUBLIC_URL}/img/code.jpg")`
    }
})

function Greeting() {
    return (
        <div className={`${s.header} ${css(style.backImg)}`} id="greeting">
            <div className={s.header_container}>
                <ScrollAnimation animateIn={css(style.anim)}
                                 animateOnce={true}>
                    <div>
                        <p className={s.p}>Hello, my name is Alex Kyrychenko and I am</p>
                        <p className={`${s.p} ${s.bold}`}>WEB DEVELOPER</p>
                        <p className={s.p}>creating modern and responsive Web Application</p>
                    </div>
                </ScrollAnimation>

            </div>
        </div>
    )
}

export default Greeting;
