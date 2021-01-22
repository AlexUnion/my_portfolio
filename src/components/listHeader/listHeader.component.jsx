import React from "react";
import s from './listHeader.module.scss';

function ListHeader(props) {
    const { title, description } = props;
    return (
        <>
            <h1 className={s.title}>
                {title}
            </h1>
            <div className={s.line}/>
            <p className={s.description}>
                {description}
            </p>
        </>
    )
}

export default ListHeader;
