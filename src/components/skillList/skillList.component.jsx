import React from "react";
import ListHeader from "../listHeader/listHeader.component";
import SkillItem from "../skillItem/skillItem.component";
import skills from "../../data/skills";

const DESCRIPTION = 'This block shows my basic skills in creating web applications. The skill score is shown as a percentage and may not represent the exact actual value. The assessment was carried out by me and is objective.';

function SkillList() {
    return (
        <>
            <ListHeader title={"My Skills"}
                        description={DESCRIPTION}
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