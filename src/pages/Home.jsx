import React from "react";
import NavButton from "../components/NavButton";

function Home() {
    return(
        <div>
            <h1>One Word A Day</h1>

            <NavButton to='/LanguageSelector'>Start</NavButton>
        </div>
    );
}

export default Home;