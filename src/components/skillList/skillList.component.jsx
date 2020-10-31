import React from "react";
import s from "./skillList.module.scss";
import ListHeader from "../listHeader/listHeader.component";
import SkillItem from "../skillItem/skillItem.component";

const skills = [
    {
        name: 'HTML',
        progress: 90
    },
    {
        name: 'CSS',
        progress: 75
    },
    {
        name: 'JavaScript',
        progress: 90
    },
    {
        name: 'React JS',
        progress: 60
    },
    {
        name: 'Git',
        progress: 50
    },
    {
        name: 'Photoshop',
        progress: 75
    },
    {
        name: 'WebPack',
        progress: 50
    },
    {
        name: 'Node JS',
        progress: 40
    },
]

function SkillList() {
    return (
        <div className={s.container} id="skill">
            <ListHeader title={"My Skills"}
                        description={"Below is my knowledge and skills related to web development."}
            />
            {
                skills.map(({ name, progress }) => (
                    <SkillItem title={name} progress={progress}/>
                ))
            }
        </div>
    )
}

export default SkillList;