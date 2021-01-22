import React from "react";
import './workItem.scss';

function WorkItem({ src, name, linkGit, linkPage }) {
    const url = `${process.env.PUBLIC_URL}/img/${src}`
    return (
        <div className="card_item_container">
            <div className="card_item_title">
                <div className="title">
                    {name}
                </div>
                <div className="btn-container">
                    <a className="btn" href={linkPage}>view</a>
                    <a className="btn" href={linkGit}>github</a>
                </div>
            </div>
            <img src={url} alt=""/>
        </div>
    );
}

export default WorkItem;
