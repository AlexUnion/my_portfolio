import React from "react";
import s from './loading.module.scss';

function Loading() {
    return (
        <div className={s.container}>
            <div className={`${s.item} ${s.red}`}/>
            <div className={`${s.item} ${s.green}`}/>
            <div className={`${s.item} ${s.blue}`}/>
        </div>
    )
}

export default Loading;