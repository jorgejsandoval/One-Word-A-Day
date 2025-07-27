import React from "react";
import { useNavigate } from "react-router-dom";

type NavButtonProps = {
    to: string,
    children: React.ReactNode
}

function NavButton({ to, children }: NavButtonProps){
    const navigate = useNavigate();
    
    return(
        <button onClick={() => navigate(to)}>{children}</button>
    );
}

export default NavButton;