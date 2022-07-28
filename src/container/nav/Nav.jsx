import React from "react";
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineExperiment } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { useState } from "react";
const Nav = () => {
    const [activeNav, setActiveNav] = useState("#")
    return (
        <nav>
            <li><a href="#" onClick={() => setActiveNav("#")}
                className={activeNav === "#" ? "active" : ""}>
                <AiOutlineHome />
            </a>
            </li>
            <li>
                <a href="#about" onClick={() => setActiveNav("#about")}
                    className={activeNav === "#about" ? "active" : ""}>
                    <BiUserCircle />
                </a>
            </li>
            <li>
                <a href="#projects" onClick={() => setActiveNav("#projects")}
                    className={activeNav === "#projects" ? "active" : ""}>
                    <AiOutlineExperiment />
                </a>
            </li >
            <li>
                <a href="#contact" onClick={() => setActiveNav("#contact")}
                    className={activeNav === "#contact" ? "active" : ""}>
                    <AiOutlineMail />
                </a>
            </li >
        </nav >
    )
}
export default Nav;
