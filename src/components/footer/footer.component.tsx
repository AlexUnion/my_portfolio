import React from "react";
import s from './footer.module.scss';
import logo from '../../media/logo.svg';
import { GithubOutlined, FacebookFilled, TwitterCircleFilled, LinkedinOutlined } from '@ant-design/icons';
import ITranslations from "../../interfaces/translations";
import chooseLanguage from "../../tool/chooseLanguage";

interface IFields {
    created: string,
    name: string
}
interface IProps {
    lang: string,
}

const translations: ITranslations<IFields> = {
    eng: {
        created: "Created with React JS",
        name: "Alex Kyrychenko"
    },
    ukr: {
        created: "Створено за допомогою React JS",
        name: "Олексій Кириченко"
    },
    rus: {
        created: "Созданно с помощью React JS",
        name: "Алексей Кириченко"
    }
}

function Footer(props: IProps): React.ReactElement {
    const { lang } = props;
    const currTranslate = chooseLanguage<IFields>(lang, translations);
    return (
        <div className={s.container}>
            <div className={s.icon_container}>
                <a href="https://github.com/AlexUnion" target='_blank' rel="noreferrer">
                    <GithubOutlined  className={s.icon}/>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100009187531844"
                   target='_blank' rel="noreferrer">
                    <FacebookFilled className={s.icon}/>
                </a>
                <a href="https://twitter.com/AlexKyrychenko" target='_blank' rel="noreferrer">
                    <TwitterCircleFilled className={s.icon}/>
                </a>
                <a href="https://www.linkedin.com/in/al-chemick/" target='_blank' rel="noreferrer">
                    <LinkedinOutlined className={s.icon}/>
                </a>
            </div>
            <div className={s.withLogo}>
                <div className={s.text}>
                    {currTranslate.created}
                </div>
                <img src={logo} alt="" className={s.logo}/>
            </div>
            <p>
                &copy;2021 {currTranslate.name}
            </p>
        </div>
    )
}

export default Footer;
