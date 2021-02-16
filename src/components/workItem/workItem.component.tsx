import React from "react";
import './workItem.scss';

interface IProps {
    name: string,
    src: string,
    links: {
        git?: string,
        deploy?: string,
    }
}

function WorkItem(props: IProps) {
    const { name, src, links } = props;
    const url = `${process.env.PUBLIC_URL}/img/${src}`
    return (
        <div className="card_item_container">
            <div className="card_item_title">
                <div className="title">
                    {name}
                </div>
                <div className="btn-container">
                    {
                        links.deploy ?
                            <a className="btn" href={links.deploy}>view</a> :
                            null
                    }
                    {
                        links.git ?
                            <a className="btn" href={links.git}>github</a> :
                            null
                    }
                </div>
            </div>
            <img src={url} alt=""/>
        </div>
    );
}

export default WorkItem;
