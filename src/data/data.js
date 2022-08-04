import { AiOutlineExperiment, AiOutlineMail, AiOutlineHome, AiOutlineFileDone } from 'react-icons/ai';
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import { ImGithub } from 'react-icons/im';
import { MdOutlineEmail } from 'react-icons/md';
import certificate1 from '../assets/certificate1.png';
import certificate2 from '../assets/certificate2.png';
import certificate3 from '../assets/certificate3.png';

//Tic-Tac-Toe
import ttt1 from '../assets/tictactoe/ttt1.png';
import ttt2 from '../assets/tictactoe/ttt2.png';
import ttt3 from '../assets/tictactoe/ttt3.png';

//Portfolio
import p1 from '../assets/portfolio/p1.png';
import p2 from '../assets/portfolio/p2.png';
import p3 from '../assets/portfolio/p3.png';

//Blackjack
import bj1 from '../assets/blackjack/bj1.png';
import bj2 from '../assets/blackjack/bj2.png';
import bj3 from '../assets/blackjack/bj3.png';

//Calculator
import c1 from '../assets/calculator/c1.png';
import c2 from '../assets/calculator/c2.png';
import c3 from '../assets/calculator/c3.png';

//Chrome-Extention
import ce1 from '../assets/chrome-ext/ce1.png';
import ce2 from '../assets/chrome-ext/ce2.png';
import ce3 from '../assets/chrome-ext/ce3.png';

//Codepen-Clone
import cc1 from '../assets/codepen/cc1.png';
import cc2 from '../assets/codepen/cc2.png';
import cc3 from '../assets/codepen/cc3.png';

//Minesweeper
import ms1 from '../assets/minesweeper/ms1.png';
import ms2 from '../assets/minesweeper/ms2.png';
import ms3 from '../assets/minesweeper/ms3.png';

//Space-Website
import sw1 from '../assets/space-website/sw1.png';
import sw2 from '../assets/space-website/sw2.png';
import sw3 from '../assets/space-website/sw3.png';

//Booka.com
import b1 from '../assets/booka/b1.png';
import b2 from '../assets/booka/b2.png';
import b3 from '../assets/booka/b3.png';

//Admin-Booka
import ab1 from '../assets/admin-booka/ab1.png';
import ab2 from '../assets/admin-booka/ab2.png';
import ab3 from '../assets/admin-booka/ab3.png';

//More FCC
import fcc1 from '../assets/more-fcc/fcc1.png';
import fcc2 from '../assets/more-fcc/fcc2.png';
import fcc3 from '../assets/more-fcc/fcc3.png';




export const navbarData = [
    {
        icon: <AiOutlineHome />,
        specLink: "#",
        id: 1,
    },
    {
        icon: <BiUserCircle />,
        specLink: "#about",
        id: 2,
    },
    {
        icon: <AiOutlineFileDone />,
        specLink: "#certifications",
        id: 3,
    },
    {
        icon: <AiOutlineExperiment />,
        specLink: "#projects",
        id: 4,
    },
    {
        icon: <AiOutlineMail />,
        specLink: "#contact",
        id: 5,
    },
]


//Header & Footer Data

export const linksData = [
    {
        name: "LinkedIn",
        specLink: "https://www.linkedin.com/in/vladislav-stepochkin-357196230/",
        icon: <BsLinkedin />,
        id: 1
    },
    {
        name: "Github",
        specLink: "https://github.com/VladZamStep",
        icon: <ImGithub />,
        id: 2
    },
    {
        name: "Whatsaap",
        specLink: "https://web.whatsapp.com/",
        icon: <BsWhatsapp />,
        id: 3
    },
]

//About me Data

export const personalData = [
    'Born in Smolensk, Russia. Graduated from Bauman Moscow State Technical University in 2022.',
    '2021-present - Front-end Web Developer.',
    '2018-2021 - Design Engineer, Scientifico-educational center (SEC) BMSTU "Combined engines and alternative power plants".',
    '2016-2018 - Chassis Engineer, Bauman Racing Team (BRT), Formula SAE.',
]

export const experienceCardsData = [
    'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'JQuery', 'React', 'Redux', 'Node.js', 'SCSS', 'Express.js', 'MongoDB', 'Mongoose'
]

export const certificationsData = [
    {
        image1: certificate1,
        title: "Responsive Web Design",
        fcc_link: "https://www.freecodecamp.org/certification/ZamNoise/responsive-web-design",
        id: 1
    },
    {
        image1: certificate2,
        title: "JS Algorithms & DS",
        fcc_link: "https://www.freecodecamp.org/certification/ZamNoise/javascript-algorithms-and-data-structures",
        id: 2
    },
    {
        image1: certificate3,
        title: "Front End Dev Libraries",
        fcc_link: "https://www.freecodecamp.org/certification/ZamNoise/front-end-development-libraries",
        id: 3
    },
]

//Projects Data

export const projectData = [
    {
        image1: b3,
        image2: b2,
        image3: b1,
        title: "Booka.com",
        github_link: "https://github.com/VladZamStep/react_booka",
        id: 1,
        btn: "Github",
    },
    {
        image1: ab3,
        image2: ab2,
        image3: ab1,
        title: "Admin Booka App",
        github_link: "https://github.com/VladZamStep/react_booka",
        id: 2,
        btn: "Github",
    },
    {
        image1: p3,
        image2: p2,
        image3: p1,
        title: "My Portfolio",
        github_link: "https://github.com/VladZamStep/react_portfolio",
        id: 3,
        btn: "Github",
    },
    {
        image1: sw3,
        image2: sw2,
        image3: sw1,
        title: "Space Website",
        github_link: "https://github.com/VladZamStep/space-site-landing",
        id: 4,
        btn: "Github",
    },
    {
        image1: cc3,
        image2: cc2,
        image3: cc1,
        title: "Codepen-clone",
        github_link: "https://github.com/VladZamStep/codepen-clone",
        id: 5,
        btn: "Github",
    },
    {
        image1: ms3,
        image2: ms2,
        image3: ms1,
        title: "Minesweeper-clone",
        github_link: "https://github.com/VladZamStep/minesweeper-clone",
        id: 6,
        btn: "Github",
    },
    {
        image1: ttt3,
        image2: ttt2,
        image3: ttt1,
        title: "Tic Tac Toe Game",
        github_link: "https://github.com/VladZamStep/tic-tac-toe_game/tree/main",
        id: 7,
        btn: "Github",
    },
    {
        image1: c3,
        image2: c2,
        image3: c1,
        title: "JS Calculator",
        github_link: "https://github.com/VladZamStep/native-js-calculator",
        id: 8,
        btn: "Github",
    },
    {
        image1: bj3,
        image2: bj2,
        image3: bj1,
        title: "Blackjack Minigame",
        github_link: "https://github.com/VladZamStep/blackjack-minigame",
        id: 9,
        btn: "Github",
    },
    {
        image1: ce3,
        image2: ce2,
        image3: ce1,
        title: "Chrome Extention",
        github_link: "https://github.com/VladZamStep/chrome-extention",
        id: 10,
        btn: "Github",
    },
    {
        image1: fcc3,
        image2: fcc2,
        image3: fcc1,
        title: "More FCC Projects",
        github_link: "https://codepen.io/your-work",
        id: 11,
        btn: "Codepen",
    },
]

//Contact Data

export const contactData = [
    {
        icon: <MdOutlineEmail />,
        contact_type: "Email",
        contact_value: "vladstep98@yandex.ru",
        contact_link: "https://mail.yandex.ru",
        id: 1
    },
    {
        icon: <BsWhatsapp />,
        contact_type: "WhatsApp",
        contact_value: "+7 (920) 313 39 31",
        contact_link: "https://wa.me/89203133931",
        id: 2
    }
]