import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import './skillItem.scss';

function SkillItem(props) {
    const { title, progress } = props;
    return (
        <div className='skill_item'>
            <div className='skill_item_title'>
                {title}
            </div>
            <div className='skill_item_progress'>
                <ProgressBar now={progress} label={`${progress}%`}/>
            </div>
        </div>
    );
}

export default SkillItem;