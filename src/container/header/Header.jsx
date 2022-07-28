import './header.css';
import HeaderBTN from "./HeaderBTN";
import me from "../../assets/me.jpg";
import HeaderSocials from "./Header-socials";
const Header = () => {
    return (
        <div id="header">
            <div className="main__container header__container">
                <div className="me">
                    <img src={me} alt="me" />
                </div>
                <div className="header__wrapper">
                    <h1>I'm Vlad Stepochkin</h1>
                    <h5 className="text-clr">Front-end Web Developer</h5>
                    <HeaderBTN />
                    <HeaderSocials />
                    {/* <a href="#contact" className="scroll__down">Scroll Down</a> */}
                </div>
            </div>
        </div>
    )
}
export default Header;







{/* <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <a href="#">
                            <i className="fa fa-facebook-square"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-google-plus-square"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-youtube"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-twitter"></i>
                        </a>
                    </div>
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "} Hello, I'm<span className="highlighted-text">Vlad</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>

                            </h1>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    ) */}