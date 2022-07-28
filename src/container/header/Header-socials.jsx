import { BsLinkedin } from 'react-icons/bs';
import { ImGithub } from 'react-icons/im';
import { BsWhatsapp } from 'react-icons/bs';

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/vladislav-stepochkin-357196230/" target="_blank"><BsLinkedin /></a>
                </li>
                <li>
                    <a href="https://github.com/VladZamStep" target="_blank"><ImGithub /></a>
                </li>
                <li>
                    <a href="https://web.whatsapp.com/" target="_blank"><BsWhatsapp /></a>
                </li>
            </ul>
        </div>
    )
}
export default HeaderSocials;

