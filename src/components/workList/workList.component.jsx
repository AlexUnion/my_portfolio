import React from 'react';
import s from './workList.module.scss';
import WorkItem from "../workItem/workItem.component";
import ListHeader from "../listHeader/listHeader.component";
const description = "Below are some examples of my work. Each example has 2 links. The first link is to represent the web application. The second link leads to the GitHub repository, where you can see the source code of the application.";

function WorkList(props) {
    const { list } = props;
    return (
        <>
            <ListHeader title={"My Works"}
                        description={description}
            />
            <div className={s.project_container}>
                {list.map(({id, name, src, linkGit, linkPage}) => (
                    <WorkItem key={id} name={name} src={src}
                              linkGit={linkGit} linkPage={linkPage}/>
                    ))}
            </div>
        </>
    )
}

export default WorkList;
