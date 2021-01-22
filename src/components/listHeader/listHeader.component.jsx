import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { css, StyleSheet } from "aphrodite";
import s from './listHeader.module.scss';

const style = StyleSheet.create({
    myFromUp: {
        animationName: 'from-up-animation',
        animationDuration: '1s',
    },
    myFromDown: {
        animationName: 'from-down-animation',
        animationDuration: '1s',
    }
})

function ListHeader(props) {
    const { title, description } = props;
    return (
        <>
            <ScrollAnimation animateIn={css(style.myFromUp)}
                             animateOnce>
                <h1 className={s.title}>
                    {title}
                </h1>
            </ScrollAnimation>

            <div className={s.line}/>

            <ScrollAnimation animateIn={css(style.myFromDown)}
                             animateOnce>
                <p className={s.description}>
                    {description}
                </p>
            </ScrollAnimation>
        </>
    )
}

export default ListHeader;
