import React from 'react';
import s from './workList.module.scss';
import WorkItem from "../workItem/workItem.component";
import ListHeader from "../listHeader/listHeader.component";
import { WorkList as WorkListType } from "../../data/works";
import chooseLanguage from "../../tool/chooseLanguage";
import { LanguageType } from "../../redux/languages";

interface ILanguage {
    description: string,
}

interface IWorkList {
    eng: ILanguage,
    ukr: ILanguage,
    rus: ILanguage,
}

const translations: IWorkList = {
    eng: {
        description: "Below are some examples of my work. Each example has 2 links. The first link is to represent the web application. The second link leads to the GitHub repository, where you can see the source code of the application.",
    },
    ukr: {
        description: "Нижче подано декілька прикладів моїх робіт. Кожен приклад має 2 посилання. Перше посилання - це веб-додаток. Друге посилання веде до сховища GitHub, де ви можете побачити відкритий код програми."
    },
    rus: {
        description: "Ниже приведены несколько примеров моих работ. В каждом примере есть 2 ссылки. Первая ссылка представляет веб-приложение. Вторая ссылка ведет в репозиторий GitHub, где вы можете увидеть исходный код приложения."
    }
}

interface IProps {
    list: WorkListType,
    lang: LanguageType,
}

function WorkList(props: IProps): React.ReactElement {
    const { list, lang } = props;
    const { description } = chooseLanguage<ILanguage>(lang, translations);
    return (
        <>
            <ListHeader title={"My Works"}
                        description={description}
            />
            <div className={s.project_container}>
                {list.map(({id, name, src, links}) => (
                    <WorkItem key={id} name={name} src={src}
                              links={links}/>
                    ))}
            </div>
        </>
    )
}

export default WorkList;
