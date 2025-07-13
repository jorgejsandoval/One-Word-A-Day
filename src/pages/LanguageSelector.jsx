import React from "react";
import NavButton from "../components/NavButton";
import { useState, useEffect } from "react";

function LanguageSelector() {

    const [Languages, setLanguages] = useState([]);

    useEffect(() => {
        fetch('/Files/Languages.json').then((resp) => resp.json()).then((data) => setLanguages(data.languages)).catch((error) => console.error("Error loading JSON: ", error));
    });

    return (
        <div>
            <h1>Select a Language</h1>
            <ul>
                {Languages.map((lang, index) => {
                    return (
                    <div>
                        <li>{lang.name} <img src={lang.flag} width="100vw" height="auto"/></li>
                    </div>
                );
                })}
            </ul>
            <NavButton to='/'>Back</NavButton>
        </div>
    );
}

export default LanguageSelector;