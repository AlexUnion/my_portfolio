import React from "react";
import ListHeader from "../listHeader/listHeader.component";
import SkillItem from "../skillItem/skillItem.component";

import skills from "../../data/skills";

function SkillList() {
    return (
        <>
            <ListHeader title={"My Skills"}
                        description={"Below is my knowledge and skills related to web development."}
            />
            {
                skills.map(({ id, name, progress }) => (
                    <SkillItem key={id} title={name} progress={progress}/>
                ))
            }
        </>
    )
}

export default SkillList;