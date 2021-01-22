import React from "react";
import s from './footer.module.scss';
import logo from '../../logo.svg';
import { GithubOutlined, FacebookFilled, TwitterCircleFilled, LinkedinOutlined } from '@ant-design/icons';

function Footer() {
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
                    Created with React JS
                </div>
                <img src={logo} alt="" className={s.logo}/>
            </div>
            <p>
                &copy;2021 Alex Kyrychenko
            </p>
        </div>
    )
}

export default Footer;
