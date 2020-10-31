import React from "react";

import './workItem.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import { css, StyleSheet } from "aphrodite";
import { zoomIn } from "react-animations";

const style = StyleSheet.create({
    zoomIn: {
        animationName: zoomIn,
        animationDuration: '1s',
    }
});

function WorkItem(props) {
    const { src, name, link } = props;
    return (
        <ScrollAnimation className="card_item_container"
                         animateIn={css(style.zoomIn)}
                         animateOnce={true}>
            <a href={link}>
                <div className="card_item_title">{name}</div>
                <img src={src} alt=""/>
            </a>
        </ScrollAnimation>
    );
}

export default WorkItem;
