import React from "react";
import './aboutme.css';

const About = () => {
    return (
        <section id="about">
            <h5 className="fs-400 uppercase">Get to know</h5>
            <span className="behindText ff-anton fs-700 letter-spacing-2 uppercase" >About me</span>
            <h2 className="ff-anton fs-700 letter-spacing-2 uppercase" >About me</h2>
            <div className="main__container about__container">
                <div className="left__title">
                    <h5 className="fs-500 uppercase">Personal Info</h5>
                </div>
                <div className="right__title">
                    <h5 className="fs-500 uppercase">My Skills</h5>
                </div>
                <div className="about__info">
                    <p className="ff-sans-normal fs-200 letter-spacing-4" >
                        Born in Smolensk, Russia. Graduated from Bauman Moscow State Technical University in 2022.
                    </p>
                    <p className="ff-sans-normal fs-200 letter-spacing-4">
                        2021-present - Front-end Web Developer.
                    </p>
                    <p className="ff-sans-normal fs-200 letter-spacing-4">
                        2018-2021 - Design Engineer, Scientifico-educational center (SEC) BMSTU "Combined engines and alternative power plants".
                    </p>
                    <p className="ff-sans-normal fs-200 letter-spacing-4">
                        2016-2018 - Chassis Engineer, Bauman Racing Team (BRT), Formula SAE.
                    </p>
                </div>
                <div className="experience__cards">
                    <article className="experience__card">
                        <div>
                            <h5 className="letter-spacing-4 fs-300 uppercase">HTML</h5>
                        </div>
                    </article>
                    <article className="experience__card">
                        <div>
                            <h5 className="letter-spacing-4 fs-300 uppercase">CSS</h5>
                        </div>
                    </article>
                    <article className="experience__card">
                        <div>
                            <h5 className="letter-spacing-4 fs-300 uppercase">JavaScript</h5>
                        </div>
                    </article>
                    <article className="experience__card">
                        <div>
                            <h5 className="letter-spacing-4 fs-300 uppercase">C++</h5>
                        </div>
                    </article>
                    <article className="experience__card">
                        <div>
                            <h5 className="letter-spacing-4 fs-300 uppercase">React JS</h5>
                        </div>
                    </article>
                    <article className="experience__card">
                        <div>
                            <h5 className="letter-spacing-4 fs-300 uppercase">Node JS</h5>
                        </div>
                    </article>
                </div>
                <div className="about__btn">
                    <a href="#contact" className="fs-400 letter-spacing-4 btn btn-dark uppercase">More info</a>
                </div>
            </div>
        </section>
    )
}
export default About;