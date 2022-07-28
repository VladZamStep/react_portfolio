import './projects.css';
import { projectData } from '../../data/data';

const Portfolio = () => {
    return (
        <section id="projects">
            <h5 className="ff-sans-normal fs-400 uppercase">My Recent Work</h5>
            <span className="behindText ff-anton fs-700 letter-spacing-2 uppercase" >Projects</span>
            <h2 className="ff-anton fs-700 letter-spacing-2 uppercase" >Projects</h2>
            <div className="main__container projects__container">
                {projectData.map(item => {
                    return (
                        <article key={item.id} className="project__wrapper">
                            <div className="project_img_container">
                                <img src={item.image1} />
                                <img src={item.image2} />
                                <img src={item.image3} />
                            </div>
                            <div className="project__title letter-spacing-4 fs-400">{item.title}</div>
                            <div className="project__btn uppercase">
                                <a href={item.github_link} target="_blank" className="btn btn-dark">Github</a>
                            </div>
                        </article>
                    )
                })
                }
            </div>
        </section >
    )
}
export default Portfolio;