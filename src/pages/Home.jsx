import React from "react";
import NavButton from "../components/NavButton";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useTranslation } from "react-i18next";


function Home() {

    const { t } = useTranslation("global");

    return(
        <div>
            <h1>{t("Home.title")}</h1>

            

            <NavButton to='/LanguageSelector'>{t("Home.startButton")}</NavButton>
        </div>
    );
}

export default Home;