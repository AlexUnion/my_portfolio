import React from "react";
import s from "./skillList.module.scss";
import ListHeader from "../listHeader/listHeader.component";
import SkillItem from "../skillItem/skillItem.component";
import {css, StyleSheet} from "aphrodite";
import {zoomIn} from "react-animations";
import ScrollAnimation from "react-animate-on-scroll";

import skills from "../../data/skills";

const style = StyleSheet.create({
    zoomIn: {
        animationName: zoomIn,
        animationDuration: '1s',
    }
});

function SkillList() {
    return (
        <div className={s.container} id="skills">
            <ListHeader title={"My Skills"}
                        description={"Below is my knowledge and skills related to web development."}
            />
            <ScrollAnimation animateIn={css(style.zoomIn)}
                             animateOnce={true}>
                {
                    skills.map(({ id, name, progress }) => (
                        <SkillItem key={id} title={name} progress={progress}/>
                    ))
                }
            </ScrollAnimation>
        </div>
    )
}

export default SkillList;