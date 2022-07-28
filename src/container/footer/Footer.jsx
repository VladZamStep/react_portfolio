import './footer.css';
import { linksData } from "../../data/data";

const Footer = () => {
    return (
        <section id="footer">
            <div className="main__container footer__container">
                <span className="copyright__info">Copyright © 2022. All rights reserved.
                </span>
                <div className="horizontal__line"></div>
                <div className="footer__socials">
                    {linksData.map(item => (
                        <div className="footer_social_item" key={item.id}>
                            <a
                                className="footer_a_item"
                                href={item.specLink}
                                target="_blank"
                            >
                                {item.icon}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Footer;