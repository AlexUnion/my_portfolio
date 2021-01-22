import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import s from './skillItem.module.scss';

function SkillItem(props) {
    const { title, progress } = props;
    return (
        <div className={s.skill_item}>
            <div className={s.skill_item_title}>
                {title}
            </div>
            <div className={`${s.skill_item_progress}`}>
                <ProgressBar now={progress} label={`${progress}%`}/>
            </div>
        </div>
    );
}

export default SkillItem;