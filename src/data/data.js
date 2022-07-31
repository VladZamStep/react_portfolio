import { AiOutlineExperiment, AiOutlineMail, AiOutlineHome, AiOutlineFileDone } from 'react-icons/ai';
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import { ImGithub } from 'react-icons/im';
import { MdOutlineEmail } from 'react-icons/md';
import img1 from '../assets/portfolio1.jpg';
import img2 from '../assets/portfolio2.jpg';
import img3 from '../assets/portfolio3.jpg';
import certificate1 from '../assets/certificate1.png';
import certificate2 from '../assets/certificate2.png';
import certificate3 from '../assets/certificate3.png';

export const navbarData = [
    {
        icon: <AiOutlineHome />,
        specLink: "#",
    },
    {
        icon: <BiUserCircle />,
        specLink: "#about",
    },
    {
        icon: <AiOutlineFileDone />,
        specLink: "#certifications",
    },
    {
        icon: <AiOutlineExperiment />,
        specLink: "#projects",
    },
    {
        icon: <AiOutlineMail />,
        specLink: "#contact",
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
    'HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'SCSS', 'Express.js', 'MongoDB'
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
        id: 1
    },
    {
        image1: certificate3,
        title: "Front End Dev Libraries",
        fcc_link: "https://www.freecodecamp.org/certification/ZamNoise/front-end-development-libraries",
        id: 1
    },
]

//Projects Data

export const projectData = [
    {
        image1: img1,
        image2: img2,
        image3: img3,
        title: "The project #1",
        github_link: "#1",
        id: 1
    },
    {
        image1: img1,
        image2: img2,
        image3: img3,
        title: "The project #2",
        github_link: "#2",
        id: 2
    },
    {
        image1: img1,
        image2: img2,
        image3: img3,
        title: "The project #3",
        github_link: "#3",
        id: 3
    },
    {
        image1: img1,
        image2: img2,
        image3: img3,
        title: "The project #4",
        github_link: "#4",
        id: 4
    },
    {
        image1: img1,
        image2: img2,
        image3: img3,
        title: "The project #5",
        github_link: "#5",
        id: 5
    }
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