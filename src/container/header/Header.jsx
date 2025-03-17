import './header.css';
import myPhoto from "../../assets/myPhoto.jpg";
import CV_ENG from '../../assets/cv-eng.pdf';
import { linksData } from '../../data/data';
import { IoMdDownload } from 'react-icons/io';

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
                        <div className="download__cv">
                          <a href={CV_ENG} download className="btn"><IoMdDownload className='icon' />Eng-CV</a>
                          {/* <a href={CV_RU} download className="btn"><IoMdDownload className='icon' />Ru-CV</a> */}
                          <a href="#contact" className="btn">Contact Me</a>
                        </div>
                        <div className="header__socials">
                            {linksData.map(item => (
                                <div className="header_social_item" key={item.id}>
                                    <a
                                        className="header_a_item"
                                        href={item.specLink}
                                        target="_blank" rel="noreferrer"
                                    >
                                        {item.icon}
                                    </a>
                                </div>
                            ))}
                        </div >
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;
