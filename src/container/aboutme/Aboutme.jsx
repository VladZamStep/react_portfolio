import './aboutme.css';
import { personalData, experienceCardsData } from '../../data/data';

const About = () => {
    return (
        <section id="about">
            <h5 className="fs-400 uppercase">Get to know</h5>
            <div className="section__title">
                <h2 className="ff-anton fs-700 letter-spacing-2 uppercase" >About me</h2>
                <span className="behindText ff-anton fs-700 letter-spacing-2 uppercase" >About me</span>
            </div>
            <div className="main__container about__container">
                <div className="left__wrapper">
                    <h5 className="about__title fs-500 uppercase">Personal Info</h5>
                    <div className="about__info">
                        {personalData.map((item, index) => (
                            <p key={index}
                                className="ff-sans-normal fs-200 letter-spacing-4" >
                                {item}
                            </p>
                        ))}
                    </div>
                    <div className="about__btn">
                        <a href="#contact" className="fs-400 letter-spacing-4 btn btn-dark uppercase">More info</a>
                    </div>
                </div>
                <div className="right__wrapper">
                    <h5 className="about__title fs-500 uppercase">My Skills</h5>
                    <div className="experience__cards">
                        {experienceCardsData.map((item, index) => (
                            <article key={index}
                                className="experience__card">
                                <div>
                                    <h5 className="letter-spacing-4 fs-300 uppercase">{item}</h5>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;