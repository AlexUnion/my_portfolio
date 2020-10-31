import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import ScrollAnimation from 'react-animate-on-scroll';
import { css, StyleSheet } from "aphrodite";
import { zoomIn } from "react-animations";

import s from './skillItem.module.scss';

const style = StyleSheet.create({
    zoomIn: {
        animationName: zoomIn,
        animationDuration: '1s',
    }
});

function SkillItem(props) {
    const { title, progress } = props;
    return (
        <ScrollAnimation animateIn={css(style.zoomIn)}
                         animateOnce={true}>
            <div className={s.skill_item}>
                <div className={s.skill_item_title}>
                    {title}
                </div>
                <div className={`${s.skill_item_progress}`}>
                    <ProgressBar now={progress} label={`${progress}%`}/>
                </div>
            </div>
        </ScrollAnimation>
    );
}

export default SkillItem;