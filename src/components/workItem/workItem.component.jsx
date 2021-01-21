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

function WorkItem({ src, name, linkGit, linkPage }) {
    const url = `${process.env.PUBLIC_URL}/img/${src}`
    return (
        <ScrollAnimation className="card_item_container"
                         animateIn={css(style.zoomIn)}
                         animateOnce={true}>
            <div className="card_item_title">
                <div className="title">
                    {name}
                </div>
                <div className="btn-container">
                    <a className="btn" href={linkPage}>view</a>
                    <a className="btn" href={linkGit}>github</a>
                </div>
            </div>
            <img src={url} alt=""/>
        </ScrollAnimation>
    );
}

export default WorkItem;
