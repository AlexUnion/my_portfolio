import React, { useState } from "react";

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Main from "./pages/main";
import Loading from "./pages/loading/loading";

function App() {
    const [ isLoad, setLoad ] = useState(false);

    window.onload = function() {
        setTimeout(() => {
            setLoad(true);
        },3000);
    }

    return (
        <>
            {
                isLoad ?
                    <Main/> :
                    <Loading/>
            }
        </>
    );
}

export default App;
