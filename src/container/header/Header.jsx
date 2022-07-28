import './header.css';
import myPhoto from "../../assets/myPhoto.jpg";
import CV from '../../assets/cv.pdf';
import { linksData } from '../../data/data';

const Header = () => {
    return (
        <div id="header">
            <div className="main__container header__container">
                <div className="my__photo">
                    <img src={myPhoto} alt="me" />
                </div>
                <div className="header__wrapper">
                    <h5 className="hello__title letter-spacing-4 text-clr">Hello, My name is</h5>
                    <h1>Vlad Stepochkin</h1>
                    <h5 className="letter-spacing-4 text-clr">Front-end Web Developer</h5>
                    <div className="header__btn">
                        <a href={CV} download className="btn">Download CV</a>
                        <a href="#contact" className="btn">Contact Me</a>
                    </div>
                    <div className="header__socials">
                        {linksData.map(item => (
                            <div className="header_social_item" key={item.id}>
                                <a
                                    className="header_a_item"
                                    href={item.specLink}
                                    target="_blank"
                                >
                                    {item.icon}
                                </a>
                            </div>
                        ))}
                    </div >
                </div>
            </div>
        </div>
    )
}
export default Header;
