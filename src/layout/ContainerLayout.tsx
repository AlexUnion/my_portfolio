import React from "react";

interface IProps {
    children: any,
    className?: string,
    id?: string,
}

function ContainerLayout(props: IProps): React.ReactElement {
    const { children, className = '', id = '' } = props;
    return (
        <div className={`container ${className}`} id={id}>
            {
                children
            }
        </div>
    );
}

export default ContainerLayout;
