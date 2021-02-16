import React from "react";
import { useSelector } from "react-redux";
import { IStore } from "./redux/storage";
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import Main from "./pages/main";

export default function App(): React.ReactElement {
    const currentLang = useSelector(
        (state: IStore) => (state.lang.currentLang));
    return (
        <Main lang={currentLang}/>
    );
}
