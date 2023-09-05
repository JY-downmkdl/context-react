import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { DarkContext } from "../Context/DarkContext";
function Header() {
    const userName = useContext(UserContext);
    // props는 받아오는 거 없음
    const {isDark} = useContext(DarkContext);
    return (
        <header className="header" style={{
            backgroundColor: isDark? '#222': null,
            color: isDark? '#fff' : '#222'
            }}>
            <ul>
                <h1>{userName}</h1>
                <li>menu1</li>
                <li>menu2</li>
                <li>menu3</li>
            </ul>
        </header>
    );
};

export default Header;