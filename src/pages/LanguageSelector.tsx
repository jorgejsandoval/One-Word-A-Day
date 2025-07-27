import React from "react";
import NavButton from "../components/NavButton.js";
import { useState, useEffect } from "react";

import es from "../translations/es/global.json"
import en from "../translations/en/global.json"

import { useIntlayer } from "react-intlayer";

function LanguageSelector() {

    const content = useIntlayer('languageSelector');

    // const { t, i18n } = useTranslation("global");

    // const [Languages, setLanguages] = useState<{name: string, flag: string}[]>([]);

    // // useEffect(() => {
    // //     fetch(`./translations/${i18n.language}/global.json`).then((resp) => resp.json()).then((data) => setLanguages(data.LanguageSelector.languages)).catch((error) => console.error("Error loading JSON: ", error));
    // // });

    // useEffect(() => {
    //     const data = i18n.language === "es" ? es : en;
    //     setLanguages(data.LanguageSelector.languages);
    // }, [i18n.language]);

    return (
        <div>
            <h1>{content.header}</h1>
            <ul>
                {content.languages.map((lang: string, index: number) => {
                    return (
                    <div key={index}>
                        <li>
                            {lang}
                            <img
                             src={content.flags[index].key}
                             style={{
                                width:"100px",
                                height:"auto",
                                marginLeft: "10px",
                                }}/>
                        </li>
                    </div>
                );
                })}
            </ul>
            <NavButton to='/'>{content.backButton}</NavButton>
        </div>
    );
}

export default LanguageSelector;