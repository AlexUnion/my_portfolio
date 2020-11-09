import React from "react";
import s from './footer.module.scss';
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
            <p>
                Created with React JS
            </p>
            <p>
                &copy;2020 Alex Kyrychenko
            </p>
        </div>
    )
}

export default Footer;
