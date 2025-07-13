import React from 'react';
import { useTranslation } from 'react-i18next'

function LanguageSwitcher() {
    const { t, i18n } = useTranslation("global");
    
        function handleLanguage( lang ){
            i18n.changeLanguage(lang);
        }
    function handleChange(event){
        const selectedLang = event.target.value;
        i18n.changeLanguage(selectedLang);
    }

    return(
        <>
        <nav>
            <select onChange={handleChange} defaultValue={i18n.language}>
                <option value="en">{t("languages.en")}</option>
                <option value="es">{t("languages.es")}</option>
            </select>
        </nav>
        </>
    );
}

export default LanguageSwitcher