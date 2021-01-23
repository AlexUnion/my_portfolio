import React from "react";

function ContainerLayout(props) {
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
