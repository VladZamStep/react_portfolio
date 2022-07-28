import './projects.css';
import img1 from '../../assets/portfolio1.jpg';
import img2 from '../../assets/portfolio2.jpg';
import img3 from '../../assets/portfolio3.jpg';

const dataProjects = [
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
    }]

const Portfolio = () => {
    return (
        <section id="projects">
            <h5 className="ff-sans-normal fs-400 uppercase">My Recent Work</h5>
            <span className="behindText ff-anton fs-700 letter-spacing-2 uppercase" >Projects</span>
            <h2 className="ff-anton fs-700 letter-spacing-2 uppercase" >Projects</h2>
            <div className="main__container projects__container">
                {dataProjects.map(({ image1, image2, image3, title, github_link, id }) => {
                    return (
                        <article key={id} className="project__wrapper">
                            <div className="project__img">
                                <img src={image1} />
                                <img src={image2} />
                                <img src={image3} />
                            </div>
                            <div className="project__title letter-spacing-4 fs-400">{title}</div>
                            <div className="project__btn uppercase">
                                <a href={github_link} target="_blank" className="btn btn-dark">Github</a>
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