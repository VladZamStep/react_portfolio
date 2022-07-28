import './navbar.css';
import { useState } from "react";
import { navbarData } from '../../data/data';
const Navbar = () => {

    const [activeNav, setActiveNav] = useState("#")

    return (
        <nav>
            {navbarData.map(item => (
                <li>
                    <a href={item.specLink} onClick={() => setActiveNav(item.specLink)}
                        className={activeNav === item.specLink ? "active" : ""}>
                        {item.icon}
                    </a>
                </li>
            ))}
        </nav >
    )
}
export default Navbar;
