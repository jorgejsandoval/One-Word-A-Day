import { useState, type FC } from "react";
import NavButton from "../components/NavButton.js";
import LanguageSwitcher from "../components/LanguageSwitcher.jsx";
import { useIntlayer } from 'react-intlayer';

const Home: FC = () => {

    const content = useIntlayer('home');

    return(
        <div>
            <h1>{content.title}</h1>

            

            <NavButton to='/LanguageSelector'>{content.startButton}</NavButton>
        </div>
    );
}

export default Home;