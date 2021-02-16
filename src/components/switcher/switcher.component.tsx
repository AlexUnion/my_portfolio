import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import s from './swithcer.module.scss';
import * as lang from '../../redux/languages';
import { langActions } from '../../redux/langSlice';

function Switcher(): React.ReactElement | null {

    const dispatch = useDispatch();
    const [ displayIcon, setDisplayIcon ] = useState(false);
    const [ displayList, setDisplayList ] = useState(false);
    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setDisplayIcon(true);
        }, 1000);

        return () => {
            clearTimeout(timeoutID);
        }
    }, []);

    document.body.addEventListener('click', () => {
        setDisplayList(false);
    });

    const listClasses = displayList ?
        `${s.listContainer} ${s.displayList}` :
        `${s.listContainer} ${s.hideList}`;

    const handleChangeLang = (event: React.MouseEvent<HTMLDivElement | MouseEvent>) => {
        event.stopPropagation();
        const target : HTMLDivElement = event.target as HTMLDivElement;
        const id: string | null = (target.getAttribute('id'));
        switch (id) {
            case lang.UKR: {
                dispatch(langActions.toUkr());
                break;
            }
            case lang.ENG: {
                dispatch(langActions.toEng());
                break;
            }
            case lang.RUS: {
                dispatch(langActions.toRus());
                break;
            }
            default: {
                return;
            }
        }
        setDisplayList(false);
    }

    return displayIcon ?
        (
            <>
                <div className={s.container} onClick={
                    (e) => {
                        setDisplayList(!displayList);
                        e.stopPropagation();
                    }
                }>
                    <div className={s.img}/>
                </div>
                <div className={listClasses} onClick={handleChangeLang}>
                    <div className={s.listItem} id={lang.ENG}>ENG</div>
                    <div className={s.listItem} id={lang.UKR}>UKR</div>
                    <div className={s.listItem} id={lang.RUS}>RUS</div>
                </div>
            </>
        ) :
        null
}

export default Switcher;
