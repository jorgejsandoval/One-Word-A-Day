import React from "react";
import NavButton from "../components/NavButton";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import es from "../translations/es/global.json"
import en from "../translations/en/global.json"

function LanguageSelector() {

    const { t, i18n } = useTranslation("global");

    const [Languages, setLanguages] = useState([]);

    // useEffect(() => {
    //     fetch(`./translations/${i18n.language}/global.json`).then((resp) => resp.json()).then((data) => setLanguages(data.LanguageSelector.languages)).catch((error) => console.error("Error loading JSON: ", error));
    // });

    useEffect(() => {
        const data = i18n.language === "es" ? es : en;
        setLanguages(data.LanguageSelector.languages);
    }, [i18n.language]);

    return (
        <div>
            <h1>{t("LanguageSelector.header")}</h1>
            <ul>
                {Languages.map((lang, index) => {
                    return (
                    <div>
                        <li>{lang.name} <img src={lang.flag} width="100vw" height="auto"/></li>
                    </div>
                );
                })}
            </ul>
            <NavButton to='/'>{t("backButton")}</NavButton>
        </div>
    );
}

export default LanguageSelector;