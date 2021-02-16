import React from "react";
import ListHeader from "../listHeader/listHeader.component";
import SkillItem from "../skillItem/skillItem.component";
import skills from "../../data/skills";
import ITranslations from "../../interfaces/translations";
import chooseLanguage from "../../tool/chooseLanguage";
import {LanguageType} from "../../redux/languages";

interface IFields {
    title: string,
    description: string,
}

const translations: ITranslations<IFields> = {
    eng: {
        title: "My Skills",
        description: "This block shows my basic skills in creating web applications. The skill score is shown as a percentage and may not represent the exact actual value. The assessment was carried out by me and is objective.",
    },
    ukr: {
        title: "Мої навички",
        description: "У данному блоці зображено мої основні навики в написанні веб-додатків. Оцінка вміння відображається у відсотках і може не відображати точне фактичне значення. Оцінка була проведена мною і є об’єктивною.",
    },
    rus: {
        title: "Мои навыки",
        description: "В этом блоке показаны мои базовые навыки создания веб-приложений. Оценка навыков отображается в процентах и может не отражать точное фактическое значение. Оценка была проведена мной и объективна.",
    }
}

interface IProps {
    lang: LanguageType,
}

function SkillList(props: IProps): React.ReactElement {
    const { lang } = props;
    const currTranslation: IFields = chooseLanguage<IFields>(lang, translations);
    return (
        <>
            <ListHeader title={currTranslation.title}
                        description={currTranslation.description}
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