import React, { useState, useEffect } from 'react';
import s from './swithcer.module.scss';

interface IProps {
    timeOut: number,
}

function Switcher(props: IProps): React.ReactElement | null {
    const { timeOut = 0 } = props;
    const [ isDisplay, setDisplay ] = useState(false);
    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setDisplay(true);
        }, timeOut);

        return () => {
            clearTimeout(timeoutID);
        }
    }, []);
    return isDisplay ?
        (
            <div className={s.container}>
                <div className={s.img}/>
            </div>
        ) :
        null
}

export default Switcher;
