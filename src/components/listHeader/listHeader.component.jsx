import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { css, StyleSheet } from "aphrodite";
import s from './listHeader.module.scss';
import { slideInLeft, slideInRight } from "react-animations";


const style = StyleSheet.create({
    slideInLeft: {
        animationName: slideInLeft,
        animationDuration: '1s'
    },
    slideInRight: {
        animationName: slideInRight,
        animationDuration: '1s'
    }
})

function ListHeader(props) {
    const { title, description } = props;
    return (
        <>
            <ScrollAnimation animateIn={css(style.slideInLeft)}
                             animateOnce={true}>
                <h1 className={s.title}>
                    {title}
                </h1>
            </ScrollAnimation>

            <div className={s.line}/>

            <ScrollAnimation animateIn={css(style.slideInRight)}
                             animateOnce={true}>
                <p className={s.description}>
                    {description}
                </p>
            </ScrollAnimation>
        </>
    )
}

export default ListHeader;
