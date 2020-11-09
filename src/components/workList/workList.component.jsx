import React from 'react';

import s from './workList.module.scss';
import WorkItem from "../workItem/workItem.component";
import ListHeader from "../listHeader/listHeader.component";

const description = "Below are some of my works. Some of them are written in Native JS, some in React JS.";


function WorkList(props) {
    const { list } = props;
    return (
        <div className={s.container} id="works">
            <ListHeader title={"My Works"}
                        description={description}
            />

            <div className={s.project_container}>
                {list.map(({id, name, src, linkGit, linkPage}) => (
                    <WorkItem key={id} name={name} src={src}
                              linkGit={linkGit} linkPage={linkPage}/>
                    ))}
            </div>
        </div>
    )
}

export default WorkList;
