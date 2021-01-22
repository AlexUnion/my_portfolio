import React from 'react';

function Layout(props) {
    const { children, className } = props;
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default Layout;