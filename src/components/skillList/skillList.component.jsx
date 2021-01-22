import React from "react";
import s from "./skillList.module.scss";
import ListHeader from "../listHeader/listHeader.component";
import SkillItem from "../skillItem/skillItem.component";

import skills from "../../data/skills";


function SkillList() {
    return (
        <div className={s.container} id="skills">
            <ListHeader title={"My Skills"}
                        description={"Below is my knowledge and skills related to web development."}
            />
            {
                skills.map(({ id, name, progress }) => (
                    <SkillItem key={id} title={name} progress={progress}/>
                ))
            }
        </div>
    )
}

export default SkillList;