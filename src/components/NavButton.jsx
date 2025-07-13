import React from "react";
import { useNavigate } from "react-router-dom";

function NavButton({ to, children }){
    const navigate = useNavigate();
    
    return(
        <button onClick={() => navigate(to)}>{children}</button>
    );
}

export default NavButton;